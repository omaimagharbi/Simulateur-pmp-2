// ============================================================================
// admin.js
// ============================================================================
applyI18n();
const adminUser = Store.requireAdmin('index.html');
if (adminUser) {
  renderTopbar('admin');
  const CATEGORY_META = categoryMeta();
  const DOMAIN_META = domainMeta();

  // populate domain <select> options with translated labels
  const domainSelect = document.getElementById('f-domain');
  domainSelect.innerHTML = Object.keys(DOMAIN_META).map(d => `<option value="${d}">${DOMAIN_META[d].label}</option>`).join('');
  // populate category <select> options with translated labels
  const categorySelect = document.getElementById('f-category');
  categorySelect.innerHTML = Object.keys(CATEGORY_META).filter(c => c !== 'KillMistakes').map(c => `<option value="${c}">${CATEGORY_META[c].label}</option>`).join('');

  // ---------- Tabs ----------
  const tabButtons = document.querySelectorAll('.admin-tabs button');
  const panels = { questions: document.getElementById('tab-questions'), users: document.getElementById('tab-users'), settings: document.getElementById('tab-settings') };
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      Object.values(panels).forEach(p => p.style.display = 'none');
      panels[btn.dataset.tab].style.display = 'block';
    });
  });

  // ---------- Questions tab ----------
  function renderQuestionsTable() {
    const questions = Store.getAllQuestions();
    document.getElementById('q-count').textContent = `${questions.length} questions`;
    const table = document.getElementById('questions-table');
    table.innerHTML = `
      <thead><tr><th>${t('col_id')}</th><th>${t('label_category')}</th><th>${t('col_domain')}</th><th>${t('col_question')}</th><th>${t('col_answer')}</th><th></th></tr></thead>
      <tbody>
        ${questions.map(q => `
          <tr>
            <td>${q.id}</td>
            <td>${(CATEGORY_META[q.category] || { label: q.category }).label}</td>
            <td>${(DOMAIN_META[q.domain] || { label: q.domain }).label}</td>
            <td style="max-width:360px">${escapeHTML(q.text).slice(0, 140)}${q.text.length > 140 ? '…' : ''}</td>
            <td><b>${q.answer}</b></td>
            <td style="white-space:nowrap">
              <button class="btn btn-ghost btn-sm" data-edit="${q.id}">${t('edit')}</button>
              <button class="btn btn-danger btn-sm" data-delete="${q.id}">${t('delete')}</button>
            </td>
          </tr>`).join('')}
      </tbody>`;

    table.querySelectorAll('[data-edit]').forEach(el => {
      el.addEventListener('click', () => openModal(questions.find(q => q.id === parseInt(el.dataset.edit, 10))));
    });
    table.querySelectorAll('[data-delete]').forEach(el => {
      el.addEventListener('click', () => {
        if (confirm(t('confirm_delete_question'))) {
          Store.deleteQuestion(parseInt(el.dataset.delete, 10));
          renderQuestionsTable();
          showToast(t('question_deleted'));
        }
      });
    });
  }
  renderQuestionsTable();

  // ---------- Modal (add/edit) ----------
  const overlay = document.getElementById('modal-overlay');
  const form = document.getElementById('question-form');

  function openModal(question) {
    document.getElementById('modal-title').textContent = question ? t('modal_edit_title', { id: question.id }) : t('modal_add_title');
    document.getElementById('f-id').value = question ? question.id : '';
    document.getElementById('f-category').value = question ? question.category : 'Exam';
    document.getElementById('f-domain').value = question ? question.domain : 'People';
    document.getElementById('f-text').value = question ? question.text : '';
    document.getElementById('f-optA').value = question ? (question.options.A || '') : '';
    document.getElementById('f-optB').value = question ? (question.options.B || '') : '';
    document.getElementById('f-optC').value = question ? (question.options.C || '') : '';
    document.getElementById('f-optD').value = question ? (question.options.D || '') : '';
    document.getElementById('f-answer').value = question ? question.answer : 'A';
    document.getElementById('f-justification').value = question ? (question.justification || '') : '';
    overlay.classList.add('show');
  }
  function closeModal() { overlay.classList.remove('show'); }

  document.getElementById('btn-add-question').addEventListener('click', () => openModal(null));
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const idField = document.getElementById('f-id').value;
    const id = idField ? parseInt(idField, 10) : Store.nextCustomId();
    const question = {
      id,
      category: document.getElementById('f-category').value,
      domain: document.getElementById('f-domain').value,
      text: document.getElementById('f-text').value.trim(),
      options: {
        A: document.getElementById('f-optA').value.trim(),
        B: document.getElementById('f-optB').value.trim(),
        C: document.getElementById('f-optC').value.trim(),
        D: document.getElementById('f-optD').value.trim(),
      },
      answer: document.getElementById('f-answer').value,
      justification: document.getElementById('f-justification').value.trim(),
    };
    Store.upsertQuestion(question);
    closeModal();
    renderQuestionsTable();
    showToast(t('question_saved'));
  });

  // ---------- Users tab ----------
  function renderUsersTable() {
    const users = Store.getUsers();
    const attempts = Store.getAttempts();
    const rows = Object.values(users).map(u => {
      const userAttempts = attempts.filter(a => a.username === u.username);
      const avg = userAttempts.length ? Math.round(userAttempts.reduce((s, a) => s + (a.score / a.total) * 100, 0) / userAttempts.length) : null;
      const best = userAttempts.length ? Math.max(...userAttempts.map(a => Math.round((a.score / a.total) * 100))) : null;
      return { u, count: userAttempts.length, avg, best };
    }).sort((a, b) => b.count - a.count);

    document.getElementById('user-stat-boxes').innerHTML = `
      <div class="card stat-box"><div class="n">${Object.keys(users).length}</div><div class="l">${t('registered_accounts')}</div></div>
      <div class="card stat-box"><div class="n">${attempts.length}</div><div class="l">${t('exams_all_accounts')}</div></div>
      <div class="card stat-box"><div class="n">${attempts.length ? Math.round(attempts.reduce((s,a)=>s+(a.score/a.total)*100,0)/attempts.length) : 0}%</div><div class="l">${t('global_avg_score')}</div></div>`;

    document.getElementById('users-table').innerHTML = `
      <thead><tr><th>${t('col_user')}</th><th>${t('col_role')}</th><th>${t('col_joined')}</th><th>${t('col_exams')}</th><th>${t('col_avg_score')}</th><th>${t('col_best_score')}</th></tr></thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td>${r.u.username}</td>
            <td>${r.u.role === 'admin' ? `<span class="pill good">${t('role_admin')}</span>` : t('role_user')}</td>
            <td>${formatDate(r.u.createdAt)}</td>
            <td>${r.count}</td>
            <td>${r.avg === null ? '—' : `<span class="pill ${r.avg>=65?'good':'bad'}">${r.avg}%</span>`}</td>
            <td>${r.best === null ? '—' : `${r.best}%`}</td>
          </tr>`).join('')}
      </tbody>`;
  }
  renderUsersTable();
  document.querySelector('[data-tab="users"]').addEventListener('click', renderUsersTable);

  // ---------- Settings tab ----------
  document.getElementById('pw-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pw1 = document.getElementById('new-pw').value;
    const pw2 = document.getElementById('confirm-pw').value;
    const errEl = document.getElementById('pw-error');
    if (pw1 !== pw2) { errEl.textContent = t('password_mismatch'); return; }
    Store.changePassword(adminUser.username, pw1);
    errEl.textContent = '';
    document.getElementById('pw-form').reset();
    showToast(t('password_updated'));
  });
}
