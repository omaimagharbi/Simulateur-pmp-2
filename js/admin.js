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

  // filtre catégorie de la table Questions, éventuellement pré-rempli depuis
  // le lien "Modifier" d'une carte d'examen sur category.html (?cat=...)
  const qFilterSelect = document.getElementById('q-filter-category');
  qFilterSelect.innerHTML += Object.keys(CATEGORY_META).map(c => `<option value="${c}">${CATEGORY_META[c].label}</option>`).join('');
  const urlParams = new URLSearchParams(window.location.search);
  const urlCat = urlParams.get('cat');
  if (urlCat && CATEGORY_META[urlCat]) qFilterSelect.value = urlCat;

  // ---------- Tabs ----------
  const tabButtons = document.querySelectorAll('.admin-tabs button');
  const panels = { questions: document.getElementById('tab-questions'), users: document.getElementById('tab-users'), vouchers: document.getElementById('tab-vouchers'), accounting: document.getElementById('tab-accounting'), settings: document.getElementById('tab-settings') };
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
    const catFilter = qFilterSelect.value;
    const questions = Store.getAllQuestions().filter(q => !catFilter || q.category === catFilter);
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
  qFilterSelect.addEventListener('change', renderQuestionsTable);

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
      <thead><tr><th>${t('col_user')}</th><th>${t('col_role')}</th><th>${t('voucher_col_access')}</th><th>${t('col_joined')}</th><th>${t('col_exams')}</th><th>${t('col_avg_score')}</th><th>${t('col_best_score')}</th></tr></thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td>${r.u.username}</td>
            <td>${r.u.role === 'admin' ? `<span class="pill good">${t('role_admin')}</span>` : t('role_user')}</td>
            <td>${r.u.role === 'admin' || r.u.unlocked ? `<span class="pill good">${t('voucher_status_active')}</span>` : `<span class="pill bad">${t('voucher_locked')}</span>`}</td>
            <td>${formatDate(r.u.createdAt)}</td>
            <td>${r.count}</td>
            <td>${r.avg === null ? '—' : `<span class="pill ${r.avg>=65?'good':'bad'}">${r.avg}%</span>`}</td>
            <td>${r.best === null ? '—' : `${r.best}%`}</td>
          </tr>`).join('')}
      </tbody>`;
  }
  renderUsersTable();
  document.querySelector('[data-tab="users"]').addEventListener('click', renderUsersTable);

  // ---------- Vouchers tab ----------
  function renderVouchersTable() {
    const vouchers = Store.getVouchers().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const methodFilter = document.getElementById('voucher-filter-method').value;
    const statusFilter = document.getElementById('voucher-filter-status').value;
    const filtered = vouchers.filter(v => (!methodFilter || v.method === methodFilter) && (!statusFilter || v.status === statusFilter));

    const activeCount = vouchers.filter(v => v.status === 'active').length;
    document.getElementById('voucher-stat-boxes').innerHTML = `
      <div class="card stat-box"><div class="n">${vouchers.length}</div><div class="l">${t('voucher_stat_total')}</div></div>
      <div class="card stat-box"><div class="n">${activeCount}</div><div class="l">${t('voucher_stat_activated')}</div></div>
      <div class="card stat-box"><div class="n">${vouchers.length - activeCount}</div><div class="l">${t('voucher_stat_pending')}</div></div>`;

    document.getElementById('vouchers-table').innerHTML = `
      <thead><tr><th>${t('voucher_col_code')}</th><th>${t('voucher_col_method')}</th><th>${t('voucher_col_amount')}</th><th>${t('voucher_col_status')}</th><th>${t('voucher_col_user')}</th><th>${t('voucher_col_created')}</th><th>${t('voucher_col_note')}</th><th></th></tr></thead>
      <tbody>
        ${filtered.map(v => `
          <tr>
            <td style="font-family:var(--font-mono)">${v.code}</td>
            <td>${v.method}</td>
            <td>${(v.amount || 0).toFixed(2)} TND</td>
            <td>${v.status === 'active' ? `<span class="pill good">${t('voucher_status_active')}</span>` : `<span class="pill">${t('voucher_status_inactive')}</span>`}</td>
            <td>${v.redeemedBy || '—'}</td>
            <td>${formatDate(v.createdAt)}</td>
            <td style="max-width:200px">${escapeHTML(v.note || '')}</td>
            <td>${v.status === 'inactive' ? `<button class="btn btn-danger btn-sm" data-cancel="${v.id}">${t('voucher_cancel')}</button>` : ''}</td>
          </tr>`).join('')}
      </tbody>`;

    document.getElementById('vouchers-table').querySelectorAll('[data-cancel]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!confirm(t('voucher_cancel_confirm'))) return;
        Store.cancelVoucher(btn.dataset.cancel);
        renderVouchersTable();
        showToast(t('voucher_cancelled'));
      });
    });
  }
  renderVouchersTable();
  document.querySelector('[data-tab="vouchers"]').addEventListener('click', renderVouchersTable);
  document.getElementById('voucher-filter-method').addEventListener('change', renderVouchersTable);
  document.getElementById('voucher-filter-status').addEventListener('change', renderVouchersTable);

  const voucherModal = document.getElementById('voucher-modal-overlay');
  const voucherResultModal = document.getElementById('voucher-result-overlay');
  document.getElementById('btn-generate-voucher').addEventListener('click', () => voucherModal.classList.add('show'));
  document.getElementById('voucher-modal-cancel').addEventListener('click', () => voucherModal.classList.remove('show'));
  voucherModal.addEventListener('click', (e) => { if (e.target === voucherModal) voucherModal.classList.remove('show'); });

  document.getElementById('voucher-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const method = document.getElementById('v-method').value;
    const amount = document.getElementById('v-amount').value;
    const validUntil = document.getElementById('v-validity').value || null;
    const note = document.getElementById('v-note').value;
    const voucher = Store.createVoucher({ method, validUntil, note, amount });
    document.getElementById('voucher-form').reset();
    voucherModal.classList.remove('show');
    document.getElementById('voucher-generated-code').textContent = voucher.code;
    voucherResultModal.classList.add('show');
    renderVouchersTable();
  });

  document.getElementById('voucher-copy-btn').addEventListener('click', () => {
    const code = document.getElementById('voucher-generated-code').textContent;
    navigator.clipboard.writeText(code).then(() => showToast(t('voucher_copied')));
  });
  document.getElementById('voucher-result-close').addEventListener('click', () => voucherResultModal.classList.remove('show'));
  voucherResultModal.addEventListener('click', (e) => { if (e.target === voucherResultModal) voucherResultModal.classList.remove('show'); });

  function getFilteredVouchers() {
    const methodFilter = document.getElementById('voucher-filter-method').value;
    const statusFilter = document.getElementById('voucher-filter-status').value;
    return Store.getVouchers()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .filter(v => (!methodFilter || v.method === methodFilter) && (!statusFilter || v.status === statusFilter));
  }

  // Export Excel : un simple CSV s'ouvre nativement dans Excel/Google Sheets,
  // sans dépendre d'une librairie externe.
  document.getElementById('btn-export-csv').addEventListener('click', () => {
    const rows = getFilteredVouchers();
    const header = [t('voucher_col_code'), t('voucher_col_method'), t('voucher_col_amount'), t('voucher_col_status'), t('voucher_col_user'), t('voucher_col_created'), t('voucher_col_note')];
    const csvRows = [header, ...rows.map(v => [
      v.code, v.method, (v.amount || 0).toFixed(2),
      v.status === 'active' ? t('voucher_status_active') : t('voucher_status_inactive'),
      v.redeemedBy || '', new Date(v.createdAt).toISOString().slice(0, 10), (v.note || '').replace(/[\r\n]+/g, ' '),
    ])];
    const csv = '\uFEFF' + csvRows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(';')).join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `vouchers_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
  });

  // Export PDF : ouvre la boîte d'impression du navigateur sur une page
  // simplifiée ; le participant choisit "Enregistrer en PDF" comme
  // destination — pas de librairie PDF externe nécessaire.
  document.getElementById('btn-export-pdf').addEventListener('click', () => {
    const rows = getFilteredVouchers();
    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html><html><head><meta charset="UTF-8"><title>Vouchers — ${t('brand')}</title>
      <style>
        body{ font-family:Arial, sans-serif; padding:2rem; color:#1a1a1a; }
        h1{ font-size:1.3rem; margin-bottom:1rem; }
        table{ width:100%; border-collapse:collapse; font-size:.82rem; }
        th, td{ border:1px solid #ccc; padding:.4rem .6rem; text-align:left; }
        th{ background:#f0f0f0; }
      </style></head><body>
      <h1>${t('voucher_export_pdf_title')} — ${new Date().toLocaleDateString()}</h1>
      <table>
        <thead><tr><th>${t('voucher_col_code')}</th><th>${t('voucher_col_method')}</th><th>${t('voucher_col_amount')}</th><th>${t('voucher_col_status')}</th><th>${t('voucher_col_user')}</th><th>${t('voucher_col_created')}</th><th>${t('voucher_col_note')}</th></tr></thead>
        <tbody>
          ${rows.map(v => `<tr>
            <td>${v.code}</td><td>${v.method}</td><td>${(v.amount || 0).toFixed(2)} TND</td>
            <td>${v.status === 'active' ? t('voucher_status_active') : t('voucher_status_inactive')}</td>
            <td>${v.redeemedBy || '—'}</td><td>${formatDate(v.createdAt)}</td><td>${escapeHTML(v.note || '')}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      </body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 300);
  });

  // ---------- Accounting (comptabilité) tab ----------
  function renderAccounting() {
    // La recette est comptée à la création du voucher (l'admin encaisse
    // avant de générer le code) ; un voucher annulé ne compte plus.
    const vouchers = Store.getVouchers();
    const total = vouchers.reduce((s, v) => s + (v.amount || 0), 0);

    const byMethod = {};
    vouchers.forEach(v => { byMethod[v.method] = (byMethod[v.method] || 0) + (v.amount || 0); });

    const byMonth = {};
    vouchers.forEach(v => {
      const key = v.createdAt.slice(0, 7); // YYYY-MM
      byMonth[key] = (byMonth[key] || 0) + (v.amount || 0);
    });
    const months = Object.keys(byMonth).sort().reverse();

    document.getElementById('accounting-stat-boxes').innerHTML = `
      <div class="card stat-box"><div class="n">${total.toFixed(2)} TND</div><div class="l">${t('accounting_total')}</div></div>
      <div class="card stat-box"><div class="n">${vouchers.length}</div><div class="l">${t('accounting_transactions')}</div></div>
      <div class="card stat-box"><div class="n">${vouchers.length ? (total / vouchers.length).toFixed(2) : '0.00'} TND</div><div class="l">${t('accounting_average')}</div></div>`;

    document.getElementById('accounting-method-table').innerHTML = `
      <thead><tr><th>${t('voucher_col_method')}</th><th>${t('accounting_col_amount')}</th></tr></thead>
      <tbody>${Object.keys(byMethod).sort((a, b) => byMethod[b] - byMethod[a]).map(m => `
        <tr><td>${m}</td><td>${byMethod[m].toFixed(2)} TND</td></tr>`).join('')}
      </tbody>`;

    document.getElementById('accounting-month-table').innerHTML = `
      <thead><tr><th>${t('accounting_col_month')}</th><th>${t('accounting_col_amount')}</th></tr></thead>
      <tbody>${months.map(m => `<tr><td>${m}</td><td>${byMonth[m].toFixed(2)} TND</td></tr>`).join('')}</tbody>`;
  }
  renderAccounting();
  document.querySelector('[data-tab="accounting"]').addEventListener('click', renderAccounting);

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
