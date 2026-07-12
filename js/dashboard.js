// ============================================================================
// dashboard.js
// ============================================================================
applyI18n();
const user = Store.requireAuth('index.html');
if (user) {
  renderTopbar('dashboard');

  document.getElementById('welcome-eyebrow').textContent = `${t('welcome')}, ${user.username}`;

  const allQuestions = Store.getAllQuestions();
  const attempts = Store.getAttemptsForUser(user.username).sort((a, b) => new Date(b.date) - new Date(a.date));
  const CATEGORY_META = categoryMeta();

  // ---- compas fixe (33/41/26, ne dépend jamais des tentatives) ----
  renderFixedCompass('compass-mount');

  document.getElementById('stat-attempts').textContent = attempts.length;
  const examAttempts = attempts.filter(a => a.category === 'Exam');
  const best = examAttempts.reduce((m, a) => Math.max(m, Math.round((a.score / a.total) * 100)), 0);
  document.getElementById('stat-best').textContent = examAttempts.length ? `${best}%` : '—';
  const minPassEl = document.getElementById('stat-min-pass');
  if (minPassEl) minPassEl.textContent = '65%';

  // ---- category sidebar (navigue vers une page dédiée, comme un dossier) ----
  const categoryOrder = ['Predictif', 'Agile', 'Hybride', 'Exam', 'Quiz', 'MiniExam', 'KillMistakes'];

  function renderCategoryList() {
    const mount = document.getElementById('category-list');
    mount.innerHTML = categoryOrder.map(cat => {
      const meta = CATEGORY_META[cat];
      return `<a class="category-item" href="category.html?cat=${cat}">
        <span class="dot" style="background:${meta.color}"></span>
        ${meta.label}
      </a>`;
    }).join('') + `
      <div class="nav-sep"></div>
      <a class="category-item" href="library.html">
        <span class="dot" style="background:#c99a4a"></span>
        ${t('nav_library')}
      </a>
      <a class="category-item" href="chatbot.html">
        <span class="dot" style="background:#7a5cc9"></span>
        ${t('nav_chatbot')}
      </a>`;
  }
  renderCategoryList();

  // ---- recent attempts ----
  const recentMount = document.getElementById('recent-table-mount');
  const recent = attempts.slice(0, 5);
  if (!recent.length) {
    recentMount.innerHTML = `<div class="empty-state"><div class="glyph">📋</div>${t('empty_no_attempts')}</div>`;
  } else {
    recentMount.innerHTML = `
      <table class="history">
        <thead><tr><th>${t('col_category')}</th><th>${t('col_date')}</th><th>${t('col_score')}</th><th>${t('col_duration')}</th><th></th></tr></thead>
        <tbody>
          ${recent.map(a => {
            const pct = Math.round((a.score / a.total) * 100);
            const meta = CATEGORY_META[a.category] || { label: a.category };
            return `<tr>
              <td>${meta.label}</td>
              <td>${formatDate(a.date)}</td>
              <td><span class="pill ${pct >= 65 ? 'good' : 'bad'}">${a.score}/${a.total} · ${pct}%</span></td>
              <td>${formatDuration(a.durationSeconds)}</td>
              <td><a href="results.html?id=${a.id}" class="btn btn-ghost btn-sm">${t('review')}</a></td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`;
  }
}
