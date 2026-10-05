// ============================================================================
// storage.js — persistence layer (localStorage). Single static project:
// accounts, attempts and admin-added questions live in the browser. Question
// overrides are stored per language since the text differs, but the same
// numeric id maps to the "same" question across languages.
// ============================================================================

const DB_KEYS = {
  users: 'pmp_users',
  session: 'pmp_session',
  customQuestions: (lang) => `pmp_custom_questions_${lang}`,
  deletedIds: (lang) => `pmp_deleted_ids_${lang}`,
  attempts: 'pmp_attempts',
  documents: 'pmp_documents',
  books: 'pmp_books',
  vouchers: 'pmp_vouchers',
};

// ---------- Support des formats avancés ECO 2026 (multi_choice / matching / case_study) ----------
// Les questions "historiques" sont { options:{A..D}, answer:"B", domain:"People" }.
// Les nouvelles questions (banque pmp_question_bank.json) utilisent { options:[{id,texte}],
// correct_answers:[...], domaine:"D1", scenario+question }. On normalise tout vers un format
// unique que quiz.js / results.js savent afficher, quel que soit le type.
const DOMAINE_MAP = { D1: 'People', D2: 'Process', D3: 'Business' };

function normalizeQuestion(raw) {
  const q = { ...raw };
  if (!q.type) q.type = 'single_choice';
  if (Array.isArray(q.options)) {
    const dict = {};
    q.options.forEach(o => { dict[o.id] = o.texte; });
    q.options = dict;
  }
  if (!q.text && (q.scenario || q.question)) {
    q.text = [q.scenario, q.question].filter(Boolean).join(' ');
  }
  if (!q.domain && q.domaine) q.domain = DOMAINE_MAP[q.domaine] || q.domaine;
  if (!q.category) q.category = 'Exam';
  if (!q.justification && q.explication) q.justification = q.explication;
  if (q.type === 'single_choice' && !q.answer && Array.isArray(q.correct_answers)) {
    q.answer = q.correct_answers[0];
  }
  if (q.type === 'multi_choice' && !q.correct_answers && q.answer) {
    q.correct_answers = [q.answer];
  }
  return q;
}

// Une étude de cas (case_study) n'est pas répondue en un seul clic : elle est éclatée en
// plusieurs sous-questions "atomiques" qui héritent du contexte étendu, pour rester
// compatibles avec le moteur de quiz existant (une carte = une réponse = un score).
function expandQuestion(raw) {
  const q = normalizeQuestion(raw);
  if (q.type !== 'case_study' || !Array.isArray(q.sous_questions)) return [q];
  return q.sous_questions.map((sub, i) => {
    const child = normalizeQuestion({ ...sub, examen: q.examen, exam: q.exam, domaine: q.domaine, domain: q.domain, approche: q.approche, category: q.category, reference: q.reference });
    child.id = (typeof q.id === 'number' ? q.id : 9000 + i) * 1000 + (i + 1);
    child.contexte_etendu = q.contexte_etendu;
    child.case_group_id = q.id;
    child.case_group_label = `${i + 1}/${q.sous_questions.length}`;
    return child;
  });
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    console.error('storage read error', key, e);
    return fallback;
  }
}
function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Simple client-side hash — not real cryptographic security, just avoids
// storing the plain-text password in localStorage.
function simpleHash(str) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

function seedDefaults() {
  const users = readJSON(DB_KEYS.users, null);
  if (!users) {
    writeJSON(DB_KEYS.users, {
      admin: { username: 'admin', passwordHash: simpleHash('admin123'), recoveryHash: simpleHash('admin-secret'), role: 'admin', unlocked: true, blocked: false, accessMonths: null, accessExpiresAt: null, createdAt: new Date().toISOString() },
    });
  }
  ['fr', 'en'].forEach(lang => {
    if (readJSON(DB_KEYS.customQuestions(lang), null) === null) writeJSON(DB_KEYS.customQuestions(lang), {});
    if (readJSON(DB_KEYS.deletedIds(lang), null) === null) writeJSON(DB_KEYS.deletedIds(lang), []);
  });
  if (readJSON(DB_KEYS.attempts, null) === null) writeJSON(DB_KEYS.attempts, []);
  if (readJSON(DB_KEYS.documents, null) === null) writeJSON(DB_KEYS.documents, []);
  if (readJSON(DB_KEYS.books, null) === null) writeJSON(DB_KEYS.books, []);
  if (readJSON(DB_KEYS.vouchers, null) === null) writeJSON(DB_KEYS.vouchers, []);
}
seedDefaults();

const Store = {
  // ---------- Users ----------
  getUsers() { return readJSON(DB_KEYS.users, {}); },

  createUser(username, password, recoverySecret) {
    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    if (!key) return { ok: false, error: t('field_username') };
    if (users[key]) return { ok: false, error: getLang() === 'en' ? 'This username already exists.' : "Ce nom d'utilisateur existe déjà." };
    if (password.length < 4) return { ok: false, error: t('field_password_hint') };
    if (!recoverySecret || recoverySecret.trim().length < 3) return { ok: false, error: t('field_recovery_secret_hint') };
    users[key] = {
      username: key,
      passwordHash: simpleHash(password),
      recoveryHash: simpleHash(recoverySecret.trim().toLowerCase()),
      role: 'user',
      unlocked: false,
      blocked: false,
      accessMonths: null,
      accessExpiresAt: null,
      createdAt: new Date().toISOString(),
    };
    writeJSON(DB_KEYS.users, users);
    return { ok: true };
  },

  // Création manuelle d'un compte par l'admin (pas de mot secret nécessaire :
  // l'admin peut toujours réinitialiser le mot de passe lui-même).
  createUserByAdmin(username, password, { role, unlocked, accessMonths, accessScope } = {}) {
    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    if (!key) return { ok: false, error: t('field_username') };
    if (users[key]) return { ok: false, error: getLang() === 'en' ? 'This username already exists.' : "Ce nom d'utilisateur existe déjà." };
    if (password.length < 4) return { ok: false, error: t('field_password_hint') };
    const months = Number(accessMonths) || null;
    const cleanScope = Array.isArray(accessScope) ? accessScope.filter(c => this.VOUCHER_SCOPE_CATEGORIES.includes(c)) : [];
    users[key] = {
      username: key,
      passwordHash: simpleHash(password),
      recoveryHash: simpleHash(Math.random().toString(36).slice(2, 10)),
      role: role === 'admin' ? 'admin' : 'user',
      unlocked: !!unlocked,
      blocked: false,
      accessMonths: months,
      accessExpiresAt: (unlocked && months) ? this._addMonths(new Date(), months).toISOString() : null,
      // [] = accès complet (comportement historique) ; sinon périmètre restreint explicite.
      accessScope: cleanScope,
      createdAt: new Date().toISOString(),
    };
    writeJSON(DB_KEYS.users, users);
    return { ok: true };
  },

  // Permet à l'admin de modifier le périmètre d'accès d'un utilisateur existant
  // (ex. après avoir vendu un accès complémentaire), sans devoir régénérer un voucher.
  setUserAccessScope(username, accessScope) {
    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    if (!users[key]) return { ok: false };
    users[key].accessScope = Array.isArray(accessScope) ? accessScope.filter(c => this.VOUCHER_SCOPE_CATEGORIES.includes(c)) : [];
    writeJSON(DB_KEYS.users, users);
    return { ok: true };
  },

  _addMonths(date, months) {
    const d = new Date(date);
    d.setMonth(d.getMonth() + Number(months));
    return d;
  },

  // Blocage/déblocage manuel par l'admin, indépendant de la durée d'accès —
  // coupe (ou restaure) l'accès aux examens immédiatement.
  setUserBlocked(username, blocked) {
    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    if (!users[key]) return { ok: false };
    users[key].blocked = !!blocked;
    writeJSON(DB_KEYS.users, users);
    return { ok: true };
  },

  // Annule l'accès (reverrouille le compte) sans le bloquer explicitement —
  // l'utilisateur pourra ressaisir un nouveau voucher.
  revokeUserAccess(username) {
    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    if (!users[key]) return { ok: false };
    users[key].unlocked = false;
    users[key].accessExpiresAt = null;
    writeJSON(DB_KEYS.users, users);
    return { ok: true };
  },

  // Prolonge/redéfinit manuellement la durée d'accès d'un utilisateur (mois).
  setUserAccessMonths(username, months) {
    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    if (!users[key]) return { ok: false };
    const n = Number(months) || null;
    users[key].unlocked = true;
    users[key].blocked = false;
    users[key].accessMonths = n;
    users[key].accessExpiresAt = n ? this._addMonths(new Date(), n).toISOString() : null;
    writeJSON(DB_KEYS.users, users);
    return { ok: true };
  },

  authenticate(username, password) {
    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    const user = users[key];
    if (!user) return { ok: false, error: getLang() === 'en' ? 'Account not found.' : 'Compte introuvable.' };
    if (user.passwordHash !== simpleHash(password)) return { ok: false, error: getLang() === 'en' ? 'Incorrect password.' : 'Mot de passe incorrect.' };
    return { ok: true, user };
  },

  changePassword(username, newPassword) {
    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    if (!users[key]) return { ok: false, error: 'not found' };
    users[key].passwordHash = simpleHash(newPassword);
    writeJSON(DB_KEYS.users, users);
    return { ok: true };
  },

  // Changement de mot de passe depuis un compte connecté : vérifie l'ancien
  // mot de passe avant d'appliquer le nouveau.
  changePasswordVerified(username, oldPassword, newPassword) {
    const auth = this.authenticate(username, oldPassword);
    if (!auth.ok) return { ok: false, error: getLang() === 'en' ? 'Current password is incorrect.' : 'Le mot de passe actuel est incorrect.' };
    if (!newPassword || newPassword.length < 4) return { ok: false, error: t('field_password_hint') };
    return this.changePassword(username, newPassword);
  },

  // Mot de passe oublié : le mot secret défini à l'inscription tient lieu de
  // preuve d'identité (pas d'email/serveur disponible sur ce site statique).
  resetPassword(username, recoverySecret, newPassword) {
    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    const user = users[key];
    if (!user) return { ok: false, error: getLang() === 'en' ? 'Account not found.' : 'Compte introuvable.' };
    if (!user.recoveryHash || user.recoveryHash !== simpleHash((recoverySecret || '').trim().toLowerCase())) {
      return { ok: false, error: getLang() === 'en' ? 'Incorrect secret word.' : 'Mot secret incorrect.' };
    }
    if (!newPassword || newPassword.length < 4) return { ok: false, error: t('field_password_hint') };
    return this.changePassword(username, newPassword);
  },

  // ---------- Session ----------
  login(username) { writeJSON(DB_KEYS.session, { username: username.trim().toLowerCase(), at: new Date().toISOString() }); },
  logout() { localStorage.removeItem(DB_KEYS.session); },
  currentSession() { return readJSON(DB_KEYS.session, null); },
  currentUser() {
    const s = this.currentSession();
    if (!s) return null;
    const users = this.getUsers();
    return users[s.username] || null;
  },
  requireAuth(redirectTo) {
    const u = this.currentUser();
    if (!u) { window.location.href = redirectTo || 'index.html'; return null; }
    return u;
  },
  requireAdmin(redirectTo) {
    const u = this.requireAuth(redirectTo);
    if (!u) return null;
    if (u.role !== 'admin') { window.location.href = 'dashboard.html'; return null; }
    return u;
  },
  // Comme requireAuth, mais redirige en plus vers la page d'activation de
  // voucher si le compte (non-admin) n'a pas encore débloqué l'accès.
  requireUnlocked(redirectTo) {
    const u = this.requireAuth('index.html');
    if (!u) return null;
    if (u.role !== 'admin' && (u.blocked || !u.unlocked)) { window.location.href = redirectTo || 'activate-voucher.html'; return null; }
    return u;
  },

  // ---------- Questions (base + per-language overrides) ----------
  getCustomQuestions() { return readJSON(DB_KEYS.customQuestions(getLang()), {}); },
  getDeletedIds() { return readJSON(DB_KEYS.deletedIds(getLang()), []); },

  getAllQuestions() {
    const base = getQuestionBank(getLang());
    const overrides = this.getCustomQuestions();
    const deleted = new Set(this.getDeletedIds());
    const merged = base
      .filter(q => !deleted.has(q.id))
      .map(q => overrides[q.id] ? { ...q, ...overrides[q.id] } : q);
    Object.values(overrides).forEach(q => {
      if (!base.some(b => b.id === q.id) && !deleted.has(q.id)) merged.push(q);
    });
    // expandQuestion normalise chaque question et éclate les case_study en sous-questions ;
    // le résultat (un seul niveau, pas de tableaux imbriqués) est ce que le reste de l'app consomme.
    const expanded = merged.flatMap(expandQuestion);
    return expanded.sort((a, b) => a.id - b.id);
  },

  upsertQuestion(question) {
    const overrides = this.getCustomQuestions();
    overrides[question.id] = question;
    writeJSON(DB_KEYS.customQuestions(getLang()), overrides);
  },

  nextCustomId() {
    const all = [...getQuestionBank(getLang()), ...Object.values(this.getCustomQuestions())];
    return Math.max(0, ...all.map(q => q.id)) + 1;
  },

  deleteQuestion(id) {
    const deleted = this.getDeletedIds();
    if (!deleted.includes(id)) deleted.push(id);
    writeJSON(DB_KEYS.deletedIds(getLang()), deleted);
    const overrides = this.getCustomQuestions();
    delete overrides[id];
    writeJSON(DB_KEYS.customQuestions(getLang()), overrides);
  },

  // ---------- Attempts (language-independent: same numeric ids everywhere) ----------
  getAttempts() { return readJSON(DB_KEYS.attempts, []); },
  getAttemptsForUser(username) { return this.getAttempts().filter(a => a.username === username.trim().toLowerCase()); },
  saveAttempt(attempt) {
    const attempts = this.getAttempts();
    attempts.push(attempt);
    writeJSON(DB_KEYS.attempts, attempts);
  },
  getAttempt(id) { return this.getAttempts().find(a => a.id === id) || null; },

  // ---------- Documents (bibliothèque de révision, partagée — gérée par l'admin) ----------
  getDocuments() { return readJSON(DB_KEYS.documents, []); },
  addDocument(doc) {
    const docs = readJSON(DB_KEYS.documents, []);
    docs.push(doc);
    writeJSON(DB_KEYS.documents, docs);
  },
  deleteDocument(id) {
    const docs = readJSON(DB_KEYS.documents, []).filter(d => d.id !== id);
    writeJSON(DB_KEYS.documents, docs);
  },

  // ---------- Livres PMP (base partagée pour le chatbot, gérée par l'admin) ----------
  // On ne stocke QUE le texte extrait (par chunks), pas le PDF brut, pour rester
  // dans les limites de stockage du navigateur (~5-10 Mo).
  getBooks() { return readJSON(DB_KEYS.books, []); },
  addBook(book) {
    const books = readJSON(DB_KEYS.books, []);
    books.push(book);
    try {
      writeJSON(DB_KEYS.books, books);
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e };
    }
  },
  deleteBook(id) {
    const books = readJSON(DB_KEYS.books, []).filter(b => b.id !== id);
    writeJSON(DB_KEYS.books, books);
  },
  getAllBookChunks() {
    const books = this.getBooks();
    const chunks = [];
    books.forEach(b => b.chunks.forEach(c => chunks.push({ bookId: b.id, bookTitle: b.title, page: c.page, text: c.text })));
    return chunks;
  },

  // ---------- Vouchers (accès payant, gestion manuelle admin) ----------
  // Pas de vrai paiement en ligne ici (site statique, sans serveur ni webhook) :
  // l'admin encaisse en dehors du site (espèces, virement…) puis génère un
  // code qu'il transmet au participant, qui l'active à sa première connexion.
  generateVoucherCode() {
    const year = new Date().getFullYear();
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sans caractères ambigus (0/O, 1/I)
    const existing = new Set(this.getVouchers().map(v => v.code));
    let code;
    do {
      let suffix = '';
      for (let i = 0; i < 4; i++) suffix += chars[Math.floor(Math.random() * chars.length)];
      code = `PMP-${year}-${suffix}`;
    } while (existing.has(code));
    return code;
  },

  getVouchers() { return readJSON(DB_KEYS.vouchers, []); },

  // Catégories concernées par le contrôle d'accès par voucher. "KillMistakes"
  // n'y figure pas : c'est une révision des erreurs passées de l'utilisateur,
  // toujours accessible quel que soit son périmètre (elle reste de toute façon
  // vide si l'utilisateur n'a jamais pu tenter les catégories hors périmètre).
  VOUCHER_SCOPE_CATEGORIES: ['Predictif', 'Agile', 'Hybride', 'Exam', 'Quiz', 'MiniExam'],

  // scope: tableau de catégories autorisées (ex. ['MiniExam','Quiz']), ou
  // null/[] pour un accès complet à toutes les catégories (comportement par
  // défaut, inchangé pour les vouchers déjà émis).
  createVoucher({ method, validUntil, note, amount, accessMonths, scope }) {
    const vouchers = this.getVouchers();
    const cleanScope = Array.isArray(scope) ? scope.filter(c => this.VOUCHER_SCOPE_CATEGORIES.includes(c)) : [];
    const voucher = {
      id: 'v_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      code: this.generateVoucherCode(),
      method: method || 'Autre',
      amount: Number(amount) || 0,
      accessMonths: Number(accessMonths) || null,
      note: (note || '').trim(),
      status: 'inactive',
      createdAt: new Date().toISOString(),
      validUntil: validUntil || null,
      redeemedBy: null,
      redeemedAt: null,
      // [] = accès complet à toutes les catégories ; sinon liste blanche explicite.
      scope: cleanScope,
    };
    vouchers.push(voucher);
    writeJSON(DB_KEYS.vouchers, vouchers);
    return voucher;
  },

  // N'annule que les vouchers encore inactifs, pour ne jamais casser
  // l'historique d'un voucher déjà utilisé par un participant.
  cancelVoucher(id) {
    const vouchers = this.getVouchers();
    const idx = vouchers.findIndex(v => v.id === id);
    if (idx === -1 || vouchers[idx].status !== 'inactive') return { ok: false };
    vouchers.splice(idx, 1);
    writeJSON(DB_KEYS.vouchers, vouchers);
    return { ok: true };
  },

  redeemVoucher(username, codeRaw) {
    const code = (codeRaw || '').trim().toUpperCase();
    const vouchers = this.getVouchers();
    const voucher = vouchers.find(v => v.code === code);
    if (!voucher) return { ok: false, error: getLang() === 'en' ? 'Invalid code.' : 'Code invalide.' };
    if (voucher.status === 'active') return { ok: false, error: getLang() === 'en' ? 'This code has already been used.' : 'Ce code a déjà été utilisé.' };
    if (voucher.validUntil && new Date(voucher.validUntil) < new Date()) {
      return { ok: false, error: getLang() === 'en' ? 'This code has expired.' : 'Ce code a expiré.' };
    }
    voucher.status = 'active';
    voucher.redeemedBy = username.trim().toLowerCase();
    voucher.redeemedAt = new Date().toISOString();
    writeJSON(DB_KEYS.vouchers, vouchers);

    const users = this.getUsers();
    const key = username.trim().toLowerCase();
    if (users[key]) {
      users[key].unlocked = true;
      users[key].blocked = false;
      users[key].voucherCode = code;
      users[key].accessMonths = voucher.accessMonths || null;
      users[key].accessExpiresAt = voucher.accessMonths ? this._addMonths(new Date(), voucher.accessMonths).toISOString() : null;
      users[key].accessScope = Array.isArray(voucher.scope) ? voucher.scope.slice() : [];
      writeJSON(DB_KEYS.users, users);
    }
    return { ok: true };
  },

  // true si l'utilisateur peut accéder à cette catégorie. Admin et périmètre
  // vide (= accès complet, y compris tous les comptes créés avant cette
  // fonctionnalité) ont toujours accès à tout. "KillMistakes" est toujours
  // autorisé (voir VOUCHER_SCOPE_CATEGORIES).
  canAccessCategory(user, category) {
    if (!user) return false;
    if (user.role === 'admin') return true;
    if (!this.VOUCHER_SCOPE_CATEGORIES.includes(category)) return true;
    const scope = Array.isArray(user.accessScope) ? user.accessScope : [];
    if (scope.length === 0) return true;
    return scope.includes(category);
  },
};
