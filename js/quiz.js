// ============================================================================
// quiz.js — exam engine: loading, navigation, timer, scoring.
// Rule: can't move to the next question without answering.
// ============================================================================
applyI18n();
const quizUser = Store.requireUnlocked('activate-voucher.html');
if (quizUser) {
  renderTopbar(null);

  const params = new URLSearchParams(window.location.search);
  const category = params.get('cat') || 'Exam';
  const part = parseInt(params.get('part') || '1', 10);

  // Compositions FIXES par catégorie (même contenu à chaque visite, seul
  // l'ordre est mélangé à chaque lancement) — doit rester identique à la
  // logique de category.html :
  //  - "Exam"     : 5 examens de 180 (champ "examen" 1-5, ?exam=1..5)
  //  - "Quiz"     : 3 quiz de domaine de 60 (People/Process/Business, ?part=1..3)
  //  - "MiniExam" : 5 mini-examens de 60 (champ "miniExamen" 1-5, ?part=1..5)
  const examNumber = category === 'Exam' ? (parseInt(params.get('exam'), 10) || 1) : null;
  const QUIZ_DOMAIN_ORDER = ['People', 'Process', 'Business'];

  const allQuestions = Store.getAllQuestions();
  const categoryQuestions = category === 'KillMistakes'
    ? getMistakeQuestions(quizUser.username)
    : allQuestions.filter(q => q.category === category);
  // "Exam" et "KillMistakes" restent une session unique et continue, avec les
  // pauses réglementaires PMI à 60/120 questions pour "Exam" — pas de
  // découpage en parties de 10. "Quiz" et "MiniExam" sont découpés en
  // compositions fixes (domaine / numéro de mini-examen), jamais par lots de
  // 10 génériques, pour rester cohérents avec category.html.
  const parts = category === 'Exam'
    ? [categoryQuestions.filter(q => q.examen === examNumber)]
    : category === 'KillMistakes'
      ? [categoryQuestions]
      : category === 'Quiz'
        ? QUIZ_DOMAIN_ORDER.map(d => categoryQuestions.filter(q => q.domain === d)).filter(p => p.length)
        : category === 'MiniExam'
          ? [1, 2, 3, 4, 5].map(n => categoryQuestions.filter(q => q.miniExamen === n)).filter(p => p.length)
          : chunkQuestions(categoryQuestions, 10);
  const chosenPart = parts[part - 1] || parts[0] || categoryQuestions;
  let questions = shuffle(chosenPart.length ? chosenPart : categoryQuestions);
  if (!questions.length) questions = shuffle([...allQuestions]);

  let current = 0;
  let maxReached = 0;
  const answers = {};
  let seconds = 0; // temps écoulé (utilisé tel quel pour les catégories courtes)
  let timerHandle = null;
  let submitted = false;

  // Horloge d'examen complet : décompte depuis 240 minutes, comme un vrai
  // examen chronométré — uniquement pour la catégorie "Exam".
  const isFullExam = category === 'Exam';
  const EXAM_SECONDS_TOTAL = 240 * 60;
  let secondsRemaining = EXAM_SECONDS_TOTAL;

  // Minuteur par question : redémarre à zéro à chaque changement de question
  // (utile pour repérer les questions sur lesquelles on traîne trop).
  let questionSeconds = 0;
  let questionTimerHandle = null;

  // Pauses réglementaires (façon examen PMP réel) : uniquement sur "Exam",
  // proposées après la 60e et la 120e question — jamais forcées.
  const BREAK_CHECKPOINTS = category === 'Exam' ? [60, 120] : [];
  const breaksOffered = new Set();
  let breakCountdownHandle = null;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function formatClock(totalSeconds) {
    const t = Math.max(totalSeconds, 0);
    const h = Math.floor(t / 3600);
    const m = Math.floor((t % 3600) / 60);
    const s = t % 60;
    return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
  }

  function startTimer() {
    if (isFullExam) document.getElementById('quiz-timer').textContent = formatClock(secondsRemaining);
    timerHandle = setInterval(() => {
      if (isFullExam) {
        secondsRemaining--;
        const clockEl = document.getElementById('quiz-timer');
        clockEl.textContent = formatClock(secondsRemaining);
        clockEl.classList.toggle('low', secondsRemaining <= 300); // dernières 5 minutes en rouge
        if (secondsRemaining <= 0) {
          clearInterval(timerHandle);
          alert(t('exam_time_up'));
          finishExam();
        }
      } else {
        seconds++;
        document.getElementById('quiz-timer').textContent = formatDuration(seconds);
      }
    }, 1000);
  }
  startTimer();

  function startQuestionTimer() {
    clearInterval(questionTimerHandle);
    questionSeconds = 0;
    const el = document.getElementById('question-timer');
    if (el) el.textContent = formatDuration(questionSeconds);
    questionTimerHandle = setInterval(() => {
      questionSeconds++;
      if (el) el.textContent = formatDuration(questionSeconds);
    }, 1000);
  }
  if (isFullExam) document.getElementById('question-timer-wrap').style.display = 'inline';

  // Une réponse est "complète" selon le type : une lettre (single_choice), un tableau non
  // vide (multi_choice), ou toutes les paires renseignées (matching).
  function isAnswerComplete(q, val) {
    if (!val) return false;
    if (q.type === 'multi_choice') return Array.isArray(val) && val.length > 0;
    if (q.type === 'matching') return q.colonne_gauche.every(l => val[l.id]);
    return !!val;
  }

  function caseHeader(q) {
    if (!q.contexte_etendu) return '';
    return `<div class="banner" style="margin-bottom:1rem"><b>${t('case_study_label') || 'Étude de cas'} ${q.case_group_label || ''}</b><br>${q.contexte_etendu}</div>`;
  }

  function renderOptionsSingle(q, selected) {
    const letters = Object.keys(q.options);
    return `<div class="options">
      ${letters.map(letter => `
        <div class="option ${selected === letter ? 'selected' : ''}" data-letter="${letter}">
          <span class="letter">${letter}</span>
          <span class="option-text">${q.options[letter]}</span>
        </div>`).join('')}
    </div>`;
  }

  function renderOptionsMulti(q, selected) {
    const chosen = Array.isArray(selected) ? selected : [];
    const letters = Object.keys(q.options);
    const need = q.nombre_reponses_attendues || 1;
    return `
      <div class="answer-hint" style="margin-bottom:.5rem">${t('quiz_multi_hint', { n: need }) || `Sélectionnez ${need} réponse(s).`}</div>
      <div class="options">
        ${letters.map(letter => `
          <div class="option ${chosen.includes(letter) ? 'selected' : ''}" data-letter="${letter}">
            <span class="letter">${letter}</span>
            <span class="option-text">${q.options[letter]}</span>
          </div>`).join('')}
      </div>`;
  }

  function renderMatching(q, selected) {
    const val = selected && typeof selected === 'object' ? selected : {};
    return `<div class="options matching">
      ${q.colonne_gauche.map(l => `
        <div class="option matching-row" data-left="${l.id}">
          <span class="option-text">${l.texte}</span>
          <select class="matching-select" data-left="${l.id}">
            <option value="">—</option>
            ${q.colonne_droite.map(r => `<option value="${r.id}" ${val[l.id] === r.id ? 'selected' : ''}>${r.texte}</option>`).join('')}
          </select>
        </div>`).join('')}
    </div>`;
  }

  function renderQuestion() {
    const q = questions[current];
    document.getElementById('quiz-position').textContent = `${t('quiz_question_label')} ${current + 1}/${questions.length}`;
    document.getElementById('progress-fill').style.width = `${((current + 1) / questions.length) * 100}%`;

    const selected = answers[q.id];
    let optionsHtml;
    if (q.type === 'multi_choice') optionsHtml = renderOptionsMulti(q, selected);
    else if (q.type === 'matching') optionsHtml = renderMatching(q, selected);
    else optionsHtml = renderOptionsSingle(q, selected);

    const complete = isAnswerComplete(q, selected);
    document.getElementById('question-mount').innerHTML = `
      <div class="card q-card">
        ${caseHeader(q)}
        <div class="q-text">${q.text}</div>
        ${optionsHtml}
      </div>
      ${!complete ? `<div class="answer-hint">${t('quiz_hint_lock')}</div>` : ''}`;

    if (q.type === 'matching') {
      document.querySelectorAll('.matching-select').forEach(sel => {
        sel.addEventListener('change', () => {
          const current_val = (answers[q.id] && typeof answers[q.id] === 'object') ? { ...answers[q.id] } : {};
          current_val[sel.dataset.left] = sel.value;
          answers[q.id] = current_val;
          maxReached = Math.max(maxReached, current);
          renderDots();
          const nowComplete = isAnswerComplete(q, answers[q.id]);
          document.getElementById('btn-next').disabled = !nowComplete;
          document.getElementById('btn-submit').disabled = !nowComplete;
          document.querySelector('.answer-hint') && (document.querySelector('.answer-hint').style.display = nowComplete ? 'none' : '');
        });
      });
    } else if (q.type === 'multi_choice') {
      document.querySelectorAll('.option').forEach(el => {
        el.addEventListener('click', () => {
          const letter = el.dataset.letter;
          const need = q.nombre_reponses_attendues || 1;
          let chosen = Array.isArray(answers[q.id]) ? [...answers[q.id]] : [];
          if (chosen.includes(letter)) chosen = chosen.filter(l => l !== letter);
          else if (chosen.length < need) chosen.push(letter);
          answers[q.id] = chosen;
          maxReached = Math.max(maxReached, current);
          renderQuestion();
          renderDots();
        });
      });
    } else {
      document.querySelectorAll('.option').forEach(el => {
        el.addEventListener('click', () => {
          answers[q.id] = el.dataset.letter;
          maxReached = Math.max(maxReached, current);
          renderQuestion();
          renderDots();
        });
      });
    }

    const nextBtn = document.getElementById('btn-next');
    const submitBtn = document.getElementById('btn-submit');
    const isLast = current === questions.length - 1;
    nextBtn.style.display = isLast ? 'none' : 'inline-flex';
    submitBtn.style.display = isLast ? 'inline-flex' : 'none';
    nextBtn.disabled = !complete;
    submitBtn.disabled = !complete;
    document.getElementById('btn-prev').disabled = current === 0;
  }

  function renderDots() {
    document.getElementById('dots-mount').innerHTML = questions.map((q, i) => {
      const answered = isAnswerComplete(q, answers[q.id]);
      const locked = i > maxReached + 1 && !answered;
      return `<div class="q-dot ${answered ? 'answered' : ''} ${i === current ? 'current' : ''} ${locked ? 'locked' : ''}" data-idx="${i}">${i + 1}</div>`;
    }).join('');
    document.querySelectorAll('.q-dot:not(.locked)').forEach(el => {
      el.addEventListener('click', () => { current = parseInt(el.dataset.idx, 10); renderQuestion(); renderDots(); startQuestionTimer(); });
    });
  }

  document.getElementById('btn-prev').addEventListener('click', () => { if (current > 0) { current--; renderQuestion(); renderDots(); startQuestionTimer(); } });

  function advance() {
    current++;
    maxReached = Math.max(maxReached, current);
    renderQuestion();
    renderDots();
    startQuestionTimer();
  }

  function offerBreak(afterQuestionNumber) {
    const overlay = document.getElementById('break-overlay');
    document.getElementById('break-desc').textContent = t('break_desc', { n: afterQuestionNumber });
    document.getElementById('break-timer-wrap').style.display = 'none';
    document.getElementById('break-choice-actions').style.display = 'flex';
    document.getElementById('break-resume-actions').style.display = 'none';
    overlay.classList.add('show');
    clearInterval(timerHandle); // le temps de pause ne compte pas dans le chrono de l'examen
    clearInterval(questionTimerHandle);

    const skipBtn = document.getElementById('break-skip-btn');
    const startBtn = document.getElementById('break-start-btn');
    const resumeBtn = document.getElementById('break-resume-btn');

    function closeAndResume() {
      overlay.classList.remove('show');
      clearInterval(breakCountdownHandle);
      startTimer();
      advance();
    }

    skipBtn.onclick = closeAndResume;
    resumeBtn.onclick = closeAndResume;
    startBtn.onclick = () => {
      document.getElementById('break-choice-actions').style.display = 'none';
      document.getElementById('break-timer-wrap').style.display = 'block';
      document.getElementById('break-resume-actions').style.display = 'flex';
      let remaining = 10 * 60;
      const countdownEl = document.getElementById('break-countdown');
      countdownEl.textContent = formatDuration(remaining);
      breakCountdownHandle = setInterval(() => {
        remaining--;
        countdownEl.textContent = formatDuration(Math.max(remaining, 0));
        if (remaining <= 0) closeAndResume();
      }, 1000);
    };
  }

  document.getElementById('btn-next').addEventListener('click', () => {
    if (!isAnswerComplete(questions[current], answers[questions[current].id])) return;
    if (current >= questions.length - 1) return;
    const justAnsweredNumber = current + 1; // numéro (1-indexé) de la question qu'on vient de valider
    if (BREAK_CHECKPOINTS.includes(justAnsweredNumber) && !breaksOffered.has(justAnsweredNumber)) {
      breaksOffered.add(justAnsweredNumber);
      offerBreak(justAnsweredNumber);
      return;
    }
    advance();
  });

  document.getElementById('btn-submit').addEventListener('click', () => {
    if (!isAnswerComplete(questions[current], answers[questions[current].id])) return;
    const unanswered = questions.filter(q => !isAnswerComplete(q, answers[q.id])).length;
    if (unanswered > 0) {
      const proceed = confirm(t('quiz_confirm_unanswered', { n: unanswered }));
      if (!proceed) return;
    }
    finishExam();
  });

  function finishExam() {
    if (submitted) return;
    submitted = true;
    clearInterval(timerHandle);
    clearInterval(breakCountdownHandle);
    clearInterval(questionTimerHandle);

    // Notation façon PMI : un choix unique ou multi-choix doit être exactement juste
    // (aucun crédit partiel) ; un appariement donne un crédit proportionnel aux paires
    // correctes, car c'est une évaluation plus granulaire par nature.
    function scoreOne(q) {
      const chosen = answers[q.id] || null;
      if (q.type === 'multi_choice') {
        const chosenArr = Array.isArray(chosen) ? [...chosen].sort() : [];
        const correctArr = [...(q.correct_answers || [])].sort();
        const correct = chosen && chosenArr.length === correctArr.length && chosenArr.every((v, i) => v === correctArr[i]);
        return { questionId: q.id, domain: q.domain, chosen, correctAnswer: correctArr.join(', '), correct: !!correct };
      }
      if (q.type === 'matching') {
        const val = chosen && typeof chosen === 'object' ? chosen : {};
        const pairs = q.colonne_gauche.map(l => l.id);
        const correctCount = pairs.filter(id => val[id] === q.correct_matching[id]).length;
        return { questionId: q.id, domain: q.domain, chosen: val, correctAnswer: q.correct_matching, correct: correctCount === pairs.length, partialCredit: pairs.length ? correctCount / pairs.length : 0 };
      }
      return { questionId: q.id, domain: q.domain, chosen, correctAnswer: q.answer, correct: chosen === q.answer };
    }

    const detailedAnswers = questions.map(scoreOne);
    // Le score global compte 1 point par bonne réponse simple/multi-choix, et un crédit
    // proportionnel pour les appariements (ex: 3/4 paires correctes = 0.75 point).
    const rawScore = detailedAnswers.reduce((sum, a) => sum + (a.partialCredit !== undefined ? a.partialCredit : (a.correct ? 1 : 0)), 0);
    const score = Math.round(rawScore * 100) / 100;

    const attempt = {
      id: 'a_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      username: quizUser.username,
      category,
      part,
      date: new Date().toISOString(),
      durationSeconds: isFullExam ? (EXAM_SECONDS_TOTAL - Math.max(secondsRemaining, 0)) : seconds,
      score,
      total: questions.length,
      answers: detailedAnswers,
    };
    Store.saveAttempt(attempt);
    window.location.href = `results.html?id=${attempt.id}`;
  }

  window.addEventListener('beforeunload', (e) => {
    if (!submitted && Object.keys(answers).length > 0) { e.preventDefault(); e.returnValue = ''; }
  });

  renderQuestion();
  renderDots();
  startQuestionTimer();
}
