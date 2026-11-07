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
  // Résumé de la bonne réponse selon le type de question (le champ `answer` n'existe que pour le choix unique).
  function answerSummary(q) {
    if (q.type === 'multi_choice') return (q.correct_answers || []).join(', ');
    if (q.type === 'matching') return (q.correct_answers || []).join(' · ');
    if (q.type === 'dropdown') return (q.blanks || []).map(b => `${b.id}→${b.options[b.answer]}`).join(' · ');
    if (q.type === 'hotspot') return q.correct_zone || '';
    return q.answer || '';
  }

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
            <td style="max-width:360px">${q.type && q.type !== 'single_choice' ? `<span class="pill">${t('type_' + q.type)}</span> ` : ''}${escapeHTML(q.text).slice(0, 140)}${q.text.length > 140 ? '…' : ''}</td>
            <td><b>${answerSummary(q)}</b></td>
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

  const TYPE_SECTIONS = {
    single_choice: ['sec-choice', 'sec-single-answer'],
    multi_choice: ['sec-choice', 'sec-multi-extra', 'sec-multi-answers'],
    matching: ['sec-matching'],
    dropdown: ['sec-dropdown'],
    hotspot: ['sec-hotspot'],
  };
  const ALL_SECTIONS = ['sec-choice', 'sec-single-answer', 'sec-multi-extra', 'sec-multi-answers', 'sec-matching', 'sec-dropdown', 'sec-hotspot'];
  const typeSelect = document.getElementById('f-type');
  let editingCaseChild = null; // { parentId, index } quand on modifie une sous-question d'étude de cas

  function showSections(type) {
    ALL_SECTIONS.forEach(id => { document.getElementById(id).style.display = 'none'; });
    (TYPE_SECTIONS[type] || []).forEach(id => { document.getElementById(id).style.display = ''; });
  }
  typeSelect.addEventListener('change', () => showSections(typeSelect.value));

  function setMultiChecks(letters) {
    document.querySelectorAll('#f-multi-checks input').forEach(cb => { cb.checked = letters.includes(cb.value); });
  }

  function openModal(question) {
    editingCaseChild = null;
    document.getElementById('modal-title').textContent = question ? t('modal_edit_title', { id: question.id }) : t('modal_add_title');
    document.getElementById('f-id').value = question ? question.id : '';
    document.getElementById('f-category').value = question ? question.category : 'Exam';
    document.getElementById('f-domain').value = question ? question.domain : 'People';
    const type = question ? (question.type || 'single_choice') : 'single_choice';
    typeSelect.value = TYPE_SECTIONS[type] ? type : 'single_choice';
    typeSelect.disabled = !!question; // le type d'une question existante ne change pas
    document.getElementById('f-text').value = question ? (question.type === 'dropdown' ? question.text : question.text) : '';
    const opts = (question && question.options) || {};
    ['A', 'B', 'C', 'D', 'E', 'F'].forEach(L => { document.getElementById('f-opt' + L).value = opts[L] || ''; });
    document.getElementById('f-answer').value = question && question.answer ? question.answer : 'A';
    setMultiChecks(question && Array.isArray(question.correct_answers) ? question.correct_answers : []);
    document.getElementById('f-justification').value = question ? (question.justification || '') : '';
    // matching
    document.getElementById('f-left').value = (question && question.colonne_gauche ? question.colonne_gauche : []).map(x => `${x.id}|${x.texte}`).join('\n');
    document.getElementById('f-right').value = (question && question.colonne_droite ? question.colonne_droite : []).map(x => `${x.id}|${x.texte}`).join('\n');
    document.getElementById('f-pairs').value = question && question.type === 'matching'
      ? (question.correct_matching ? Object.entries(question.correct_matching).map(([l, r]) => `${l}-${r}`) : (question.correct_answers || [])).join('\n') : '';
    // dropdown
    document.getElementById('f-blanks').value = (question && question.blanks ? question.blanks : []).map(b => `${b.id}|${b.options.join(';')}|${b.answer + 1}`).join('\n');
    // hotspot
    document.getElementById('f-figure').value = question && question.figure ? JSON.stringify(question.figure, null, 1) : '';
    document.getElementById('f-zones').value = question && question.zones ? question.zones.join(', ') : '';
    document.getElementById('f-correct-zone').value = question && question.correct_zone ? question.correct_zone : '';
    document.getElementById('f-zone-labels').value = question && question.zone_labels ? JSON.stringify(question.zone_labels) : '';
    // étude de cas : on édite la sous-question dans son étude d'origine
    const caseBox = document.getElementById('sec-case');
    if (question && question.case_group_id) {
      const parent = Store.getRawQuestion(question.case_group_id);
      const idx = (parent && parent.sous_questions || []).findIndex(sq => {
        const n = (parent.sous_questions.indexOf(sq)) + 1;
        return question.id === (typeof parent.id === 'number' ? parent.id : 9000) * 1000 + n;
      });
      editingCaseChild = { parentId: question.case_group_id, index: idx };
      caseBox.style.display = '';
      document.getElementById('f-case-context').value = question.contexte_etendu || '';
      typeSelect.value = 'single_choice';
    } else {
      caseBox.style.display = 'none';
    }
    showSections(typeSelect.value);
    overlay.classList.add('show');
  }
  function closeModal() { overlay.classList.remove('show'); }

  document.getElementById('btn-add-question').addEventListener('click', () => openModal(null));
  document.getElementById('modal-cancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

  function parseIdLines(text) {
    return text.split('\n').map(l => l.trim()).filter(Boolean).map(l => {
      const i = l.indexOf('|');
      return i < 0 ? null : { id: l.slice(0, i).trim(), texte: l.slice(i + 1).trim() };
    });
  }

  // Construit la question à partir du formulaire ; renvoie { question } ou { error: 'clé i18n' }.
  function buildQuestionFromForm() {
    const idField = document.getElementById('f-id').value;
    const id = idField ? parseInt(idField, 10) : Store.nextCustomId();
    const type = editingCaseChild ? 'single_choice' : typeSelect.value;
    const existing = idField ? (Store.getRawQuestion(id) || {}) : {};
    const text = document.getElementById('f-text').value.trim();
    const justification = document.getElementById('f-justification').value.trim();
    const q = {
      ...existing, id, type,
      category: document.getElementById('f-category').value,
      domain: document.getElementById('f-domain').value,
      text, justification, explication: justification,
    };
    if (!text) return { error: 'err_form_invalid' };

    if (type === 'single_choice' || type === 'multi_choice') {
      const letters = type === 'multi_choice' ? ['A', 'B', 'C', 'D', 'E', 'F'] : ['A', 'B', 'C', 'D'];
      const options = {};
      letters.forEach(L => { const v = document.getElementById('f-opt' + L).value.trim(); if (v) options[L] = v; });
      if (type === 'single_choice') {
        if (Object.keys(options).length < 4) return { error: 'err_form_invalid' };
        q.options = options;
        q.answer = document.getElementById('f-answer').value;
        q.correct_answers = [q.answer];
      } else {
        const checked = [...document.querySelectorAll('#f-multi-checks input:checked')].map(cb => cb.value);
        if (Object.keys(options).length < 3 || checked.length < 2 || checked.some(L => !options[L])) return { error: 'err_multi' };
        q.options = options;
        q.correct_answers = checked;
        q.nombre_reponses_attendues = checked.length;
        delete q.answer;
      }
    } else if (type === 'matching') {
      const left = parseIdLines(document.getElementById('f-left').value);
      const right = parseIdLines(document.getElementById('f-right').value);
      const pairs = document.getElementById('f-pairs').value.split('\n').map(l => l.trim()).filter(Boolean);
      if (left.includes(null) || right.includes(null) || left.length < 2 || right.length < 2) return { error: 'err_pairs' };
      const leftIds = left.map(x => x.id), rightIds = right.map(x => x.id);
      const ok = pairs.length === left.length && pairs.every(p => { const [l, r] = p.split('-'); return leftIds.includes(l) && rightIds.includes(r); })
        && new Set(pairs.map(p => p.split('-')[0])).size === left.length;
      if (!ok) return { error: 'err_pairs' };
      q.colonne_gauche = left; q.colonne_droite = right; q.correct_answers = pairs;
      q.correct_matching = Object.fromEntries(pairs.map(p => p.split('-'))); // source de vérité de la correction
      q.options = Object.fromEntries(left.map(x => [x.id, x.texte]));
      q.matching_pairs = pairs.map(p => { const [l, r] = p.split('-'); return { left: l, right: right.find(x => x.id === r).texte }; });
    } else if (type === 'dropdown') {
      const lines = document.getElementById('f-blanks').value.split('\n').map(l => l.trim()).filter(Boolean);
      const blanks = [];
      for (const l of lines) {
        const parts = l.split('|');
        if (parts.length !== 3) return { error: 'err_blanks' };
        const options = parts[1].split(';').map(x => x.trim()).filter(Boolean);
        const answer = parseInt(parts[2], 10) - 1;
        if (options.length < 2 || !(answer >= 0 && answer < options.length)) return { error: 'err_blanks' };
        blanks.push({ id: parts[0].trim(), options, answer });
      }
      const placeholders = [...text.matchAll(/\{(\d+)\}/g)].map(m => m[1]);
      if (!blanks.length || !placeholders.length || placeholders.some(n => !blanks.find(b => b.id === n))) return { error: 'err_blanks' };
      q.blanks = blanks;
    } else if (type === 'hotspot') {
      let figure, zoneLabels = {};
      try { figure = JSON.parse(document.getElementById('f-figure').value); } catch (e) { return { error: 'err_json' }; }
      const labelsRaw = document.getElementById('f-zone-labels').value.trim();
      if (labelsRaw) { try { zoneLabels = JSON.parse(labelsRaw); } catch (e) { return { error: 'err_json' }; } }
      const zones = document.getElementById('f-zones').value.split(',').map(z => z.trim()).filter(Boolean);
      const correct = document.getElementById('f-correct-zone').value.trim();
      if (!figure || !figure.kind || zones.length < 2 || !zones.includes(correct)) return { error: 'err_zone' };
      q.figure = figure; q.zones = zones; q.correct_zone = correct; q.zone_labels = zoneLabels;
    }
    return { question: q };
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const built = buildQuestionFromForm();
    if (built.error) { showToast(t(built.error)); return; }
    const question = built.question;
    if (editingCaseChild && editingCaseChild.index >= 0) {
      // On écrit la modification dans l'étude de cas parente (sous-question + contexte).
      const parent = JSON.parse(JSON.stringify(Store.getRawQuestion(editingCaseChild.parentId)));
      const sq = parent.sous_questions[editingCaseChild.index];
      sq.question = question.text;
      sq.options = Object.entries(question.options).map(([id, texte]) => ({ id, texte }));
      sq.correct_answers = [question.answer];
      sq.explication = question.justification;
      parent.contexte_etendu = document.getElementById('f-case-context').value.trim() || parent.contexte_etendu;
      Store.upsertQuestion(parent);
    } else {
      Store.upsertQuestion(question);
    }
    closeModal();
    renderQuestionsTable();
    showToast(t('question_saved'));
  });

  // ---------- Users tab ----------
  function accessStatusPill(u) {
    if (u.role === 'admin') return `<span class="pill good">${t('voucher_status_active')}</span>`;
    if (u.blocked) return `<span class="pill bad">${t('user_status_blocked')}</span>`;
    if (!u.unlocked) return `<span class="pill bad">${t('voucher_locked')}</span>`;
    if (!u.accessExpiresAt) return `<span class="pill good">${t('user_status_unlimited')}</span>`;
    const daysLeft = Math.ceil((new Date(u.accessExpiresAt) - new Date()) / 86400000);
    if (daysLeft < 0) return `<span class="pill bad">${t('user_status_expired')}</span>`;
    if (daysLeft <= 14) return `<span class="pill warn">${t('user_status_expiring', { n: daysLeft })}</span>`;
    return `<span class="pill good">${t('user_status_active_until', { date: formatDate(u.accessExpiresAt) })}</span>`;
  }

  function renderUsersTable() {
    const users = Store.getUsers();
    const attempts = Store.getAttempts();
    const rows = Object.values(users).map(u => {
      const userAttempts = attempts.filter(a => a.username === u.username);
      const avg = userAttempts.length ? Math.round(userAttempts.reduce((s, a) => s + (a.score / a.total) * 100, 0) / userAttempts.length) : null;
      const best = userAttempts.length ? Math.max(...userAttempts.map(a => Math.round((a.score / a.total) * 100))) : null;
      return { u, count: userAttempts.length, avg, best };
    }).sort((a, b) => b.count - a.count);

    const toReview = rows.filter(r => r.u.role !== 'admin' && r.u.unlocked && !r.u.blocked && r.u.accessExpiresAt && new Date(r.u.accessExpiresAt) < new Date()).length;

    document.getElementById('user-stat-boxes').innerHTML = `
      <div class="card stat-box"><div class="n">${Object.keys(users).length}</div><div class="l">${t('registered_accounts')}</div></div>
      <div class="card stat-box"><div class="n">${attempts.length}</div><div class="l">${t('exams_all_accounts')}</div></div>
      <div class="card stat-box"><div class="n" style="${toReview ? 'color:var(--bad)' : ''}">${toReview}</div><div class="l">${t('user_stat_to_review')}</div></div>`;

    document.getElementById('users-table').innerHTML = `
      <thead><tr><th>${t('col_user')}</th><th>${t('col_role')}</th><th>${t('voucher_col_access')}</th><th>${t('col_joined')}</th><th>${t('col_exams')}</th><th>${t('col_avg_score')}</th><th></th></tr></thead>
      <tbody>
        ${rows.map(r => `
          <tr>
            <td>${r.u.username}</td>
            <td>${r.u.role === 'admin' ? `<span class="pill good">${t('role_admin')}</span>` : t('role_user')}</td>
            <td>${accessStatusPill(r.u)}</td>
            <td>${formatDate(r.u.createdAt)}</td>
            <td>${r.count}</td>
            <td>${r.avg === null ? '—' : `<span class="pill ${r.avg>=65?'good':'bad'}">${r.avg}%</span>`}</td>
            <td style="white-space:nowrap">
              ${r.u.role === 'admin' ? '' : `
                <button class="btn btn-ghost btn-sm" data-extend="${r.u.username}">${t('user_extend_btn')}</button>
                ${r.u.blocked
                  ? `<button class="btn btn-ghost btn-sm" data-unblock="${r.u.username}">${t('user_unblock_btn')}</button>`
                  : `<button class="btn btn-danger btn-sm" data-block="${r.u.username}">${t('user_block_btn')}</button>`}
              `}
            </td>
          </tr>`).join('')}
      </tbody>`;

    document.getElementById('users-table').querySelectorAll('[data-block]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!confirm(t('user_block_confirm', { username: btn.dataset.block }))) return;
        Store.setUserBlocked(btn.dataset.block, true);
        renderUsersTable();
        showToast(t('user_blocked'));
      });
    });
    document.getElementById('users-table').querySelectorAll('[data-unblock]').forEach(btn => {
      btn.addEventListener('click', () => {
        Store.setUserBlocked(btn.dataset.unblock, false);
        renderUsersTable();
        showToast(t('user_unblocked'));
      });
    });
    document.getElementById('users-table').querySelectorAll('[data-extend]').forEach(btn => {
      btn.addEventListener('click', () => {
        extendModal.dataset.username = btn.dataset.extend;
        extendModal.classList.add('show');
      });
    });
  }
  renderUsersTable();
  document.querySelector('[data-tab="users"]').addEventListener('click', renderUsersTable);

  // ---------- Add user modal ----------
  const userModal = document.getElementById('user-modal-overlay');
  document.getElementById('btn-add-user').addEventListener('click', () => {
    document.getElementById('user-form').reset();
    document.getElementById('user-form-error').textContent = '';
    userModal.classList.add('show');
  });
  document.getElementById('user-modal-cancel').addEventListener('click', () => userModal.classList.remove('show'));
  userModal.addEventListener('click', (e) => { if (e.target === userModal) userModal.classList.remove('show'); });

  document.getElementById('u-unlocked').addEventListener('change', (e) => {
    document.getElementById('u-months-field').style.display = e.target.checked ? 'block' : 'none';
  });

  document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('u-username').value;
    const password = document.getElementById('u-password').value;
    const role = document.getElementById('u-role').value;
    const unlocked = document.getElementById('u-unlocked').checked;
    const accessMonths = document.getElementById('u-access-months').value;
    const res = Store.createUserByAdmin(username, password, { role, unlocked, accessMonths });
    if (!res.ok) { document.getElementById('user-form-error').textContent = res.error; return; }
    userModal.classList.remove('show');
    renderUsersTable();
    showToast(t('user_created'));
  });

  // ---------- Extend access modal ----------
  const extendModal = document.getElementById('extend-modal-overlay');
  document.getElementById('extend-modal-cancel').addEventListener('click', () => extendModal.classList.remove('show'));
  extendModal.addEventListener('click', (e) => { if (e.target === extendModal) extendModal.classList.remove('show'); });

  document.getElementById('extend-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const months = document.getElementById('ext-months').value;
    Store.setUserAccessMonths(extendModal.dataset.username, months);
    extendModal.classList.remove('show');
    renderUsersTable();
    showToast(t('user_access_extended'));
  });

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
      <thead><tr><th>${t('voucher_col_code')}</th><th>${t('voucher_col_method')}</th><th>${t('voucher_col_amount')}</th><th>${t('voucher_col_scope')}</th><th>${t('voucher_col_status')}</th><th>${t('voucher_col_user')}</th><th>${t('voucher_col_created')}</th><th>${t('voucher_col_note')}</th><th></th></tr></thead>
      <tbody>
        ${filtered.map(v => {
          const scope = Array.isArray(v.scope) ? v.scope : [];
          const scopeLabel = scope.length === 0 ? t('voucher_scope_all') : scope.map(c => (categoryMeta()[c] || { label: c }).label).join(', ');
          return `
          <tr>
            <td style="font-family:var(--font-mono)">${v.code}</td>
            <td>${v.method}</td>
            <td>${(v.amount || 0).toFixed(2)} TND</td>
            <td>${scope.length === 0 ? `<span class="pill">${scopeLabel}</span>` : `<span class="pill good" title="${escapeHTML(scopeLabel)}">${escapeHTML(scopeLabel)}</span>`}</td>
            <td>${v.status === 'active' ? `<span class="pill good">${t('voucher_status_active')}</span>` : `<span class="pill">${t('voucher_status_inactive')}</span>`}</td>
            <td>${v.redeemedBy || '—'}</td>
            <td>${formatDate(v.createdAt)}</td>
            <td style="max-width:200px">${escapeHTML(v.note || '')}</td>
            <td>${v.status === 'inactive' ? `<button class="btn btn-danger btn-sm" data-cancel="${v.id}">${t('voucher_cancel')}</button>` : ''}</td>
          </tr>`;
        }).join('')}
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
    const accessMonths = document.getElementById('v-access-months').value;
    const validUntil = document.getElementById('v-validity').value || null;
    const note = document.getElementById('v-note').value;
    const scope = Array.from(document.querySelectorAll('.v-scope-cb:checked')).map(cb => cb.value);
    const voucher = Store.createVoucher({ method, validUntil, note, amount, accessMonths, scope });
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
