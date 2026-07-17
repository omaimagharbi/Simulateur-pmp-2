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
      admin: { username: 'admin', passwordHash: simpleHash('admin123'), recoveryHash: simpleHash('admin-secret'), role: 'admin', unlocked: true, createdAt: new Date().toISOString() },
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
      createdAt: new Date().toISOString(),
    };
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
    if (u.role !== 'admin' && !u.unlocked) { window.location.href = redirectTo || 'activate-voucher.html'; return null; }
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
    return merged.sort((a, b) => a.id - b.id);
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

  createVoucher({ method, validUntil, note }) {
    const vouchers = this.getVouchers();
    const voucher = {
      id: 'v_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      code: this.generateVoucherCode(),
      method: method || 'Autre',
      note: (note || '').trim(),
      status: 'inactive',
      createdAt: new Date().toISOString(),
      validUntil: validUntil || null,
      redeemedBy: null,
      redeemedAt: null,
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
      users[key].voucherCode = code;
      writeJSON(DB_KEYS.users, users);
    }
    return { ok: true };
  },
};
