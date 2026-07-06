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
  const best = attempts.reduce((m, a) => Math.max(m, Math.round((a.score / a.total) * 100)), 0);
  document.getElementById('stat-best').textContent = attempts.length ? `${best}%` : '—';
  const minPassEl = document.getElementById('stat-min-pass');
  if (minPassEl) minPassEl.textContent = '65%';

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
        <div class="meta" style="margin-bottom:1.2rem">📝 ${count} ${t('questions_available')}</div>
        <a href="quiz.html?cat=${selectedCategory}" class="btn btn-primary">${t('start_session')}</a>
      ` : `
        <div class="empty-state" style="padding:1.6rem 0">
          <div class="glyph">🗂️</div>
          ${t('empty_no_category_admin')}<br>
          ${user.role === 'admin' ? `<a href="admin.html" class="btn btn-brass" style="margin-top:1rem">${t('empty_no_category_admin_cta')}</a>` : t('empty_no_category_user_cta')}
        </div>
      `}`;
  }

  renderCategoryList();
  renderCategoryDetail();

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
