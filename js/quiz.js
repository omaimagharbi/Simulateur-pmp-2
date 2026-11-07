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
  //  - "MiniExam" : 5 mini-examens de 60 (champ "miniExamen" 1-5, ?part=1..5)
  //  - "Predictif", "Agile" (Agile/Hybride), "Domaine1/2/3", "KillMistakes" :
  //    un seul bloc continu (pas de découpage en parties de 10).
  const examNumber = category === 'Exam' ? (parseInt(params.get('exam'), 10) || 1) : null;
  const SINGLE_BLOCK_CATEGORIES = ['KillMistakes', 'Predictif', 'Agile', 'Domaine1', 'Domaine2', 'Domaine3'];

  const allQuestions = Store.getAllQuestions();
  const categoryQuestions = category === 'KillMistakes'
    ? getMistakeQuestions(quizUser.username)
    : allQuestions.filter(q => q.category === category);
  const parts = category === 'Exam'
    ? [categoryQuestions.filter(q => q.examen === examNumber)]
    : category === 'MiniExam'
      ? [1, 2, 3, 4, 5].map(n => categoryQuestions.filter(q => q.miniExamen === n)).filter(p => p.length)
      : SINGLE_BLOCK_CATEGORIES.includes(category)
        ? [categoryQuestions]
        : chunkQuestions(categoryQuestions, 10);
  const chosenPart = parts[part - 1] || parts[0] || categoryQuestions;
  let questions = groupAwareShuffle(chosenPart.length ? chosenPart : categoryQuestions);
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

  // Mélange qui garde groupées les sous-questions d'une même étude de cas
  // (même "case_group_id", posé par expandQuestion dans storage.js) : elles
  // se suivent toujours dans l'examen, jamais dispersées parmi d'autres
  // questions — seul l'ORDRE des études de cas entre elles, et des questions
  // isolées, est mélangé.
  function groupAwareShuffle(arr) {
    const groups = {};
    const standalone = [];
    arr.forEach(q => {
      if (q.case_group_id) {
        (groups[q.case_group_id] = groups[q.case_group_id] || []).push(q);
      } else {
        standalone.push(q);
      }
    });
    Object.values(groups).forEach(g => g.sort((a, b) => a.id - b.id));
    const blocks = standalone.map(q => [q]).concat(Object.values(groups));
    return shuffle(blocks).flat();
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
    if (q.type === 'dropdown') return typeof val === 'object' && q.blanks.every(b => val[b.id] !== undefined && val[b.id] !== '');
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

  // Glisser-déposer comme au vrai examen PMP : les éléments de droite sont des
  // "jetons" qu'on fait glisser vers la bonne case de gauche (HTML5 drag-and-
  // drop sur ordinateur). Sur tactile, où le drag-and-drop HTML5 est peu
  // fiable, un repli "toucher pour saisir, toucher pour déposer" prend le relais.
  function renderMatching(q, selected) {
    const val = selected && typeof selected === 'object' ? selected : {};
    const placedRightIds = new Set(Object.values(val).filter(Boolean));
    const poolItems = q.colonne_droite.filter(r => !placedRightIds.has(r.id));
    return `<div class="options matching matching-dnd">
      <div class="matching-left-col">
        ${q.colonne_gauche.map(l => {
          const placedId = val[l.id];
          const placedItem = placedId ? q.colonne_droite.find(r => r.id === placedId) : null;
          return `
          <div class="matching-row">
            <span class="option-text matching-prompt">${l.texte}</span>
            <div class="matching-drop ${placedItem ? 'filled' : ''}" data-left="${l.id}">
              ${placedItem
                ? `<span class="matching-chip" draggable="true" data-right="${placedItem.id}" data-from-left="${l.id}">${placedItem.texte}</span>`
                : `<span class="matching-drop-hint">${t('quiz_matching_drop_hint')}</span>`}
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="matching-pool" id="matching-pool" data-pool="1">
        ${poolItems.map(r => `<span class="matching-chip" draggable="true" data-right="${r.id}">${r.texte}</span>`).join('')}
      </div>
    </div>`;
  }

  // Branche le glisser-déposer + le repli tactile pour une question matching donnée.
  function wireMatching(q) {
    let pickedChip = null; // repli tactile : jeton actuellement "en main"

    function getVal() {
      return (answers[q.id] && typeof answers[q.id] === 'object') ? { ...answers[q.id] } : {};
    }
    function commit(val) {
      answers[q.id] = val;
      maxReached = Math.max(maxReached, current);
      renderQuestion();
      renderDots();
    }
    function placeInto(leftId, rightId) {
      const val = getVal();
      Object.keys(val).forEach(l => { if (val[l] === rightId) delete val[l]; });
      val[leftId] = rightId;
      commit(val);
    }
    function removeFrom(leftId) {
      const val = getVal();
      delete val[leftId];
      commit(val);
    }

    document.querySelectorAll('.matching-chip').forEach(chip => {
      chip.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', chip.dataset.right);
        e.dataTransfer.effectAllowed = 'move';
      });
      chip.addEventListener('click', () => {
        document.querySelectorAll('.matching-chip.picked').forEach(c => c.classList.remove('picked'));
        if (pickedChip === chip.dataset.right) { pickedChip = null; return; }
        pickedChip = chip.dataset.right;
        chip.classList.add('picked');
      });
    });

    document.querySelectorAll('.matching-drop').forEach(zone => {
      zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
      zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const rightId = e.dataTransfer.getData('text/plain');
        if (rightId) placeInto(zone.dataset.left, rightId);
      });
      zone.addEventListener('click', () => {
        if (zone.classList.contains('filled')) { removeFrom(zone.dataset.left); return; }
        if (pickedChip) { placeInto(zone.dataset.left, pickedChip); pickedChip = null; }
      });
    });

    const pool = document.getElementById('matching-pool');
    if (pool) {
      pool.addEventListener('dragover', (e) => e.preventDefault());
      pool.addEventListener('drop', (e) => {
        e.preventDefault();
        const rightId = e.dataTransfer.getData('text/plain');
        if (!rightId) return;
        const val = getVal();
        Object.keys(val).forEach(l => { if (val[l] === rightId) delete val[l]; });
        commit(val);
      });
    }
  }

  // Zone sensible (hotspot) : on clique directement sur la figure (courbe,
  // cellule, point, activité…). Une seule zone peut être sélectionnée.
  function renderHotspot(q, selected) {
    const label = selected && q.zone_labels ? q.zone_labels[selected] : '';
    return `${figureBlock(q.figure, { zones: q.zones, selected })}
      <div class="answer-hint" style="margin-bottom:.3rem">${t('quiz_hotspot_hint')}</div>
      <div class="hotspot-readout">${label ? `${t('quiz_hotspot_selected')} : <b>${label}</b>` : ''}</div>`;
  }
  function wireHotspot(q) {
    document.querySelectorAll('[data-zone]').forEach(el => {
      const pick = () => {
        answers[q.id] = el.dataset.zone;
        maxReached = Math.max(maxReached, current);
        renderQuestion();
        renderDots();
      };
      el.addEventListener('click', pick);
      el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
    });
  }

  // Liste déroulante / texte à trous : chaque {n} du texte devient un <select>.
  function renderDropdownText(q, selected) {
    const val = selected && typeof selected === 'object' ? selected : {};
    return q.text.replace(/\{(\d+)\}/g, (m, n) => {
      const blank = q.blanks.find(b => b.id === n);
      if (!blank) return m;
      const cur = val[n];
      return `<select class="dropdown-select ${cur !== undefined && cur !== '' ? 'filled' : ''}" data-blank="${n}">
        <option value="">${t('quiz_dropdown_choose')}</option>
        ${blank.options.map((o, i) => `<option value="${i}" ${String(cur) === String(i) ? 'selected' : ''}>${o}</option>`).join('')}
      </select>`;
    });
  }
  function wireDropdown(q) {
    document.querySelectorAll('.dropdown-select').forEach(sel => {
      sel.addEventListener('change', () => {
        const val = (answers[q.id] && typeof answers[q.id] === 'object') ? { ...answers[q.id] } : {};
        if (sel.value === '') delete val[sel.dataset.blank]; else val[sel.dataset.blank] = parseInt(sel.value, 10);
        answers[q.id] = val;
        maxReached = Math.max(maxReached, current);
        renderQuestion();
        renderDots();
      });
    });
  }

  function figureFor(q) {
    return q.figure && q.type !== 'hotspot' ? figureBlock(q.figure, {}) : '';
  }

  function renderQuestion() {
    const q = questions[current];
    document.getElementById('quiz-position').textContent = `${t('quiz_question_label')} ${current + 1}/${questions.length}`;
    document.getElementById('progress-fill').style.width = `${((current + 1) / questions.length) * 100}%`;

    const selected = answers[q.id];
    let optionsHtml;
    if (q.type === 'multi_choice') optionsHtml = renderOptionsMulti(q, selected);
    else if (q.type === 'matching') optionsHtml = renderMatching(q, selected);
    else if (q.type === 'hotspot') optionsHtml = renderHotspot(q, selected);
    else if (q.type === 'dropdown') optionsHtml = `<div class="answer-hint" style="margin-bottom:.5rem">${t('quiz_dropdown_hint')}</div>`;
    else optionsHtml = renderOptionsSingle(q, selected);

    const complete = isAnswerComplete(q, selected);
    const questionTextHtml = q.type === 'dropdown'
      ? `<div class="q-text dropdown-text">${renderDropdownText(q, selected)}</div>`
      : `<div class="q-text">${q.text}</div>`;
    document.getElementById('question-mount').innerHTML = `
      <div class="card q-card">
        <div class="q-number">${t('quiz_question_label')} ${current + 1}</div>
        ${caseHeader(q)}
        ${figureFor(q)}
        ${questionTextHtml}
        ${optionsHtml}
      </div>
      ${!complete ? `<div class="answer-hint">${t('quiz_hint_lock')}</div>` : ''}`;

    if (q.type === 'matching') {
      wireMatching(q);
    } else if (q.type === 'hotspot') {
      wireHotspot(q);
    } else if (q.type === 'dropdown') {
      wireDropdown(q);
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
      el.addEventListener('click', () => {
        current = parseInt(el.dataset.idx, 10);
        maxReached = Math.max(maxReached, current);
        renderQuestion();
        renderDots();
        startQuestionTimer();
        maybeOfferBreak();
      });
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

  // Déclenche la pause réglementaire dès que le nombre de questions atteintes
  // franchit un palier (60, 120), quelle que soit la façon d'y arriver —
  // bouton "Suivante" ou clic direct sur un point de navigation.
  function maybeOfferBreak() {
    const reached = maxReached + 1; // nombre de questions atteintes (1-indexé)
    const checkpoint = BREAK_CHECKPOINTS.find(n => n < reached && !breaksOffered.has(n)); // palier dépassé = question 60/120 validée
    if (checkpoint) {
      breaksOffered.add(checkpoint);
      offerBreak(checkpoint, false); // on reste sur la question choisie
    }
  }

  function offerBreak(afterQuestionNumber, advanceOnResume) {
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
      startQuestionTimer();
      if (advanceOnResume) advance();
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
      offerBreak(justAnsweredNumber, true);
      return;
    }
    advance();
    maybeOfferBreak();
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

  // Bouton flottant : permet de soumettre à tout moment, depuis n'importe
  // quelle question, sans devoir naviguer jusqu'à la dernière (contrairement
  // au bouton "Terminer" de la barre de navigation, qui n'apparaît que là).
  document.getElementById('btn-submit-floating').addEventListener('click', () => {
    const unanswered = questions.filter(q => !isAnswerComplete(q, answers[q.id])).length;
    const proceed = unanswered > 0 ? confirm(t('quiz_confirm_unanswered', { n: unanswered })) : confirm(t('quiz_confirm_submit_now'));
    if (!proceed) return;
    finishExam();
  });

  function finishExam() {
    if (submitted) return;
    submitted = true;
    clearInterval(timerHandle);
    clearInterval(breakCountdownHandle);
    clearInterval(questionTimerHandle);

    // Notation façon PMI : un choix unique, multi-choix ou une zone sensible doit être
    // exactement juste (aucun crédit partiel) ; un appariement ou une liste déroulante à
    // plusieurs trous donne un crédit proportionnel aux éléments corrects.
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
      if (q.type === 'hotspot') {
        return { questionId: q.id, domain: q.domain, chosen, correctAnswer: q.correct_zone, correct: chosen === q.correct_zone };
      }
      if (q.type === 'dropdown') {
        const val = chosen && typeof chosen === 'object' ? chosen : {};
        const good = q.blanks.filter(b => val[b.id] === b.answer).length;
        const correctMap = Object.fromEntries(q.blanks.map(b => [b.id, b.answer]));
        return { questionId: q.id, domain: q.domain, chosen: val, correctAnswer: correctMap, correct: good === q.blanks.length, partialCredit: q.blanks.length ? good / q.blanks.length : 0 };
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
