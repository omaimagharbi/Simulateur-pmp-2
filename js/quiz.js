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

  const allQuestions = Store.getAllQuestions();
  const categoryQuestions = category === 'KillMistakes' ? getMistakeQuestions(quizUser.username) : allQuestions.filter(q => q.category === category);
  // "Exam" (examen blanc complet) et "KillMistakes" restent une session unique et continue,
  // avec les pauses réglementaires PMI à 60/120 questions pour "Exam" — pas de découpage en parties de 10.
  const parts = (category === 'KillMistakes' || category === 'Exam') ? [categoryQuestions] : chunkQuestions(categoryQuestions, 10);
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

  function renderQuestion() {
    const q = questions[current];
    document.getElementById('quiz-position').textContent = `${t('quiz_question_label')} ${current + 1}/${questions.length}`;
    document.getElementById('progress-fill').style.width = `${((current + 1) / questions.length) * 100}%`;

    const selected = answers[q.id];
    document.getElementById('question-mount').innerHTML = `
      <div class="card q-card">
        <div class="q-text">${q.text}</div>
        <div class="options">
          ${['A', 'B', 'C', 'D'].filter(l => q.options[l]).map(letter => `
            <div class="option ${selected === letter ? 'selected' : ''}" data-letter="${letter}">
              <span class="letter">${letter}</span>
              <span class="option-text">${q.options[letter]}</span>
            </div>`).join('')}
        </div>
      </div>
      ${!selected ? `<div class="answer-hint">${t('quiz_hint_lock')}</div>` : ''}`;

    document.querySelectorAll('.option').forEach(el => {
      el.addEventListener('click', () => {
        answers[q.id] = el.dataset.letter;
        maxReached = Math.max(maxReached, current);
        renderQuestion();
        renderDots();
      });
    });

    const nextBtn = document.getElementById('btn-next');
    const submitBtn = document.getElementById('btn-submit');
    const isLast = current === questions.length - 1;
    nextBtn.style.display = isLast ? 'none' : 'inline-flex';
    submitBtn.style.display = isLast ? 'inline-flex' : 'none';
    nextBtn.disabled = !selected;
    submitBtn.disabled = !selected;
    document.getElementById('btn-prev').disabled = current === 0;
  }

  function renderDots() {
    document.getElementById('dots-mount').innerHTML = questions.map((q, i) => {
      const answered = !!answers[q.id];
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
    if (!answers[questions[current].id]) return;
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
    if (!answers[questions[current].id]) return;
    const unanswered = questions.length - Object.keys(answers).length;
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

    const detailedAnswers = questions.map(q => {
      const chosen = answers[q.id] || null;
      return { questionId: q.id, domain: q.domain, chosen, correctAnswer: q.answer, correct: chosen === q.answer };
    });
    const score = detailedAnswers.filter(a => a.correct).length;

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
