// ============================================================================
// dashboard.js
// ============================================================================
const user = Store.requireAuth('index.html');
if (user) {
  renderTopbar('dashboard');

  document.getElementById('welcome-eyebrow').textContent = `Welcome, ${user.username}`;
  document.getElementById('welcome-title').textContent = "Ready to train?";

  const allQuestions = Store.getAllQuestions();
  const attempts = Store.getAttemptsForUser(user.username).sort((a, b) => new Date(b.date) - new Date(a.date));

  // ---- overall stats (compass) ----
  const domainStats = { People: { correct: 0, total: 0 }, Process: { correct: 0, total: 0 }, Business: { correct: 0, total: 0 } };
  attempts.forEach(a => {
    a.answers.forEach(ans => {
      const d = ans.domain;
      if (!domainStats[d]) return;
      domainStats[d].total++;
      if (ans.correct) domainStats[d].correct++;
    });
  });
  const hasAnyAttempt = attempts.length > 0;
  renderCompass('compass-mount', hasAnyAttempt ? domainStats : null);

  document.getElementById('stat-attempts').textContent = attempts.length;
  const best = attempts.reduce((m, a) => Math.max(m, Math.round((a.score / a.total) * 100)), 0);
  document.getElementById('stat-best').textContent = attempts.length ? `${best}%` : '—';

  // ---- category sidebar ----
  const categoryOrder = ['Predictif', 'Agile', 'Hybride', 'Exam', 'Quiz', 'MiniExam'];
  let selectedCategory = categoryOrder[0];

  function countFor(cat) { return allQuestions.filter(q => q.category === cat).length; }

  function renderCategoryList() {
    const mount = document.getElementById('category-list');
    mount.innerHTML = categoryOrder.map(cat => {
      const meta = CATEGORY_META[cat];
      return `<button class="category-item ${cat === selectedCategory ? 'active' : ''}" data-cat="${cat}">
        <span class="dot" style="background:${meta.color}"></span>
        ${meta.label}
        <span class="count">${countFor(cat)}</span>
      </button>`;
    }).join('');
    mount.querySelectorAll('.category-item').forEach(el => {
      el.addEventListener('click', () => { selectedCategory = el.dataset.cat; renderCategoryList(); renderCategoryDetail(); });
    });
  }

  function renderCategoryDetail() {
    const meta = CATEGORY_META[selectedCategory];
    const count = countFor(selectedCategory);
    document.getElementById('category-title').textContent = meta.label;
    document.getElementById('category-detail-mount').innerHTML = `
      <div class="kicker"><span class="dot" style="background:${meta.color}"></span><span class="eyebrow" style="color:${meta.color}">${meta.label}</span></div>
      <p style="color:var(--ink-700); max-width:56ch">${meta.desc}</p>
      ${count > 0 ? `
        <div class="meta" style="margin-bottom:1.2rem">${count} question${count > 1 ? 's' : ''} available · ~${Math.max(1, Math.round(count * 1.5))} min estimated</div>
        <a href="quiz.html?cat=${selectedCategory}" class="btn btn-primary">Start this session</a>
      ` : `
        <div class="empty-state" style="padding:1.6rem 0">
          <div class="glyph">🗂️</div>
          No questions in this category yet.<br>
          ${user.role === 'admin' ? `<a href="admin.html" class="btn btn-brass" style="margin-top:1rem">Add questions</a>` : `Ask an administrator to add some from the Administration area.`}
        </div>
      `}`;
  }

  renderCategoryList();
  renderCategoryDetail();

  // ---- recent attempts ----
  const recentMount = document.getElementById('recent-table-mount');
  const recent = attempts.slice(0, 5);
  if (!recent.length) {
    recentMount.innerHTML = `<div class="empty-state"><div class="glyph">📋</div>No attempts yet. Pick a category above to get started.</div>`;
  } else {
    recentMount.innerHTML = `
      <table class="history">
        <thead><tr><th>Category</th><th>Date</th><th>Score</th><th>Duration</th><th></th></tr></thead>
        <tbody>
          ${recent.map(a => {
            const pct = Math.round((a.score / a.total) * 100);
            const meta = CATEGORY_META[a.category] || { label: a.category };
            return `<tr>
              <td>${meta.label}</td>
              <td>${formatDate(a.date)}</td>
              <td><span class="pill ${pct >= 61 ? 'good' : 'bad'}">${a.score}/${a.total} · ${pct}%</span></td>
              <td>${formatDuration(a.durationSeconds)}</td>
              <td><a href="results.html?id=${a.id}" class="btn btn-ghost btn-sm">Review</a></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`;
  }
}
