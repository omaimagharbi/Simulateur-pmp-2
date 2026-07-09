// ============================================================================
// quiz.js — exam engine: loading, navigation, timer, scoring.
// Rule: can't move to the next question without answering.
// ============================================================================
applyI18n();
const quizUser = Store.requireAuth('index.html');
if (quizUser) {
  renderTopbar(null);

  const params = new URLSearchParams(window.location.search);
  const category = params.get('cat') || 'Exam';
  const part = parseInt(params.get('part') || '1', 10);

  const allQuestions = Store.getAllQuestions();
  const categoryQuestions = allQuestions.filter(q => q.category === category);
  const parts = chunkQuestions(categoryQuestions, 10);
  const chosenPart = parts[part - 1] || parts[0] || categoryQuestions;
  let questions = shuffle(chosenPart.length ? chosenPart : categoryQuestions);
  if (!questions.length) questions = shuffle([...allQuestions]);

  let current = 0;
  let maxReached = 0;
  const answers = {};
  let seconds = 0;
  let timerHandle = null;
  let submitted = false;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startTimer() {
    timerHandle = setInterval(() => {
      seconds++;
      document.getElementById('quiz-timer').textContent = formatDuration(seconds);
    }, 1000);
  }
  startTimer();

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
      el.addEventListener('click', () => { current = parseInt(el.dataset.idx, 10); renderQuestion(); renderDots(); });
    });
  }

  document.getElementById('btn-prev').addEventListener('click', () => { if (current > 0) { current--; renderQuestion(); renderDots(); } });
  document.getElementById('btn-next').addEventListener('click', () => {
    if (!answers[questions[current].id]) return;
    if (current < questions.length - 1) { current++; maxReached = Math.max(maxReached, current); renderQuestion(); renderDots(); }
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
      durationSeconds: seconds,
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
}
