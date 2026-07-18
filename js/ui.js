// ============================================================================
// ui.js — small UI utilities shared across pages, language-aware.
// ============================================================================

function categoryMeta() {
  const colors = {
    Predictif: '#2f5c8f', Agile: '#2c7a6d', Hybride: '#5b93f5',
    Exam: '#1b3a6b', Quiz: '#3fa7a0', MiniExam: '#5c6bc0', KillMistakes: '#a3392b',
  };
  const out = {};
  Object.keys(colors).forEach(cat => {
    out[cat] = { label: t(`cat_${cat}_label`), desc: t(`cat_${cat}_desc`), color: colors[cat] };
  });
  return out;
}

// Questions déjà ratées par l'utilisateur, toutes tentatives confondues (une seule
// fois par id, la plus récente rencontre suffit à la qualifier d'"erreur").
function getMistakeQuestions(username) {
  const attempts = Store.getAttemptsForUser(username);
  const wrongIds = new Set();
  attempts.forEach(a => a.answers.forEach(ans => { if (!ans.correct) wrongIds.add(ans.questionId); }));
  const all = Store.getAllQuestions();
  return all.filter(q => wrongIds.has(q.id));
}

function domainMeta() {
  return {
    People:   { label: t('dom_People'),   color: 'var(--dom-people)',   weight: 42 },
    Process:  { label: t('dom_Process'),  color: 'var(--dom-process)',  weight: 50 },
    Business: { label: t('dom_Business'), color: 'var(--dom-business)', weight: 8 },
  };
}

function renderTopbar(activePage) {
  const user = Store.currentUser();
  const mount = document.getElementById('topbar-mount');
  if (!mount) return;
  const links = [
    { href: 'dashboard.html', label: t('nav_dashboard'), key: 'dashboard' },
    { href: 'history.html', label: t('nav_history'), key: 'history' },
    { href: 'library.html', label: t('nav_library'), key: 'library' },
    { href: 'chatbot.html', label: t('nav_chatbot'), key: 'chatbot' },
  ];
  if (user && user.role === 'admin') {
    links.push({ href: 'admin.html', label: t('nav_admin'), key: 'admin' });
    links.push({ href: 'books.html', label: t('nav_books'), key: 'books' });
  }

  const lang = getLang();
  mount.innerHTML = `
    <div class="topbar">
      <a class="brand" href="dashboard.html">${sealSVG(26)}<span>${t('brand')}</span></a>
      <nav>
        ${links.map(l => `<a href="${l.href}" class="${activePage === l.key ? 'active' : ''}">${l.label}</a>`).join('')}
        ${user ? `<a href="account.html" class="user-chip">● ${user.username}${user.role === 'admin' ? ' (admin)' : ''}</a><a href="#" id="logout-link">${t('nav_logout')}</a>` : ''}
        <span class="lang-switch">
          <button class="lang-btn ${lang === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
          <span class="lang-sep">/</span>
          <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
        </span>
      </nav>
    </div>`;
  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) logoutLink.addEventListener('click', (e) => { e.preventDefault(); Store.logout(); window.location.href = 'index.html'; });
  mount.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => { setLang(btn.dataset.lang); window.location.reload(); });
  });
}

function renderLangSwitchStandalone(mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const lang = getLang();
  mount.innerHTML = `
    <span class="lang-switch">
      <button class="lang-btn ${lang === 'fr' ? 'active' : ''}" data-lang="fr">FR</button>
      <span class="lang-sep">/</span>
      <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
    </span>`;
  mount.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => { setLang(btn.dataset.lang); window.location.reload(); });
  });
}

// Découpe une liste de questions en sous-examens numérotés (Exam 1, Exam 2...)
// de `size` questions maximum chacun, dans l'ordre stable des id.
function chunkQuestions(questions, size) {
  size = size || 10;
  const chunks = [];
  for (let i = 0; i < questions.length; i += size) chunks.push(questions.slice(i, i + size));
  return chunks;
}

function sealSVG(size) {
  return `<svg class="seal" width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14.5" stroke="#c99a4a" stroke-width="1.4"/>
    <circle cx="16" cy="16" r="10.5" stroke="#c99a4a" stroke-width="1"/>
    <path d="M16 8 L18.2 13.6 L24 14.2 L19.6 18 L21 23.6 L16 20.4 L11 23.6 L12.4 18 L8 14.2 L13.8 13.6 Z" fill="#c99a4a"/>
  </svg>`;
}

function renderCompass(mountId, stats) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const DOMAIN_META = domainMeta();
  const domains = Object.keys(DOMAIN_META);
  const size = 130, stroke = 16, r = (size - stroke) / 2, c = size / 2;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const segments = domains.map(d => {
    const weight = DOMAIN_META[d].weight;
    const len = (weight / 100) * circumference;
    const seg = `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${DOMAIN_META[d].color}"
      stroke-width="${stroke}" stroke-dasharray="${len} ${circumference - len}"
      stroke-dashoffset="${-offset}" transform="rotate(-90 ${c} ${c})" stroke-linecap="butt"/>`;
    offset += len;
    return seg;
  }).join('');

  let centerLabel = `<span style="font-family:var(--font-mono);font-size:.68rem;color:var(--ink-600)">${t('weighting_label')}</span><b style="font-family:var(--font-display);font-size:1.05rem">${t('weighting_official')}</b>`;
  if (stats) {
    const totalCorrect = domains.reduce((s, d) => s + (stats[d]?.correct || 0), 0);
    const totalQ = domains.reduce((s, d) => s + (stats[d]?.total || 0), 0);
    const pct = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0;
    centerLabel = `<span style="font-family:var(--font-mono);font-size:.68rem;color:var(--ink-600)">${t('score_label')}</span><b style="font-family:var(--font-display);font-size:1.6rem">${pct}%</b>`;
  }

  mount.innerHTML = `
    <div class="compass">
      <div style="position:relative;width:${size}px;height:${size}px">
        <svg width="${size}" height="${size}">${segments}</svg>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">${centerLabel}</div>
      </div>
      <div class="compass-legend">
        ${domains.map(d => {
          const s = stats && stats[d];
          const val = s ? `${s.correct}/${s.total}` : `${DOMAIN_META[d].weight}%`;
          return `<div class="row"><span class="swatch" style="background:${DOMAIN_META[d].color}"></span>${DOMAIN_META[d].label}<span class="val">${val}</span></div>`;
        }).join('')}
      </div>
    </div>`;
}

// Compas à pourcentages fixes (33/41/26), toujours identique, jamais lié aux
// tentatives réelles de la personne — utilisé sur le tableau de bord.
const FIXED_DOMAIN_SPLIT = { People: 33, Process: 41, Business: 26 };

function renderFixedCompass(mountId) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const DOMAIN_META = domainMeta();
  const domains = Object.keys(DOMAIN_META);
  const size = 130, stroke = 16, r = (size - stroke) / 2, c = size / 2;
  const circumference = 2 * Math.PI * r;
  let offset = 0;
  const segments = domains.map(d => {
    const weight = FIXED_DOMAIN_SPLIT[d];
    const len = (weight / 100) * circumference;
    const seg = `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${DOMAIN_META[d].color}"
      stroke-width="${stroke}" stroke-dasharray="${len} ${circumference - len}"
      stroke-dashoffset="${-offset}" transform="rotate(-90 ${c} ${c})" stroke-linecap="butt"/>`;
    offset += len;
    return seg;
  }).join('');

  const centerLabel = `<span style="font-family:var(--font-mono);font-size:.68rem;color:var(--ink-600)">${t('weighting_label')}</span><b style="font-family:var(--font-display);font-size:1.05rem">${t('weighting_official')}</b>`;

  mount.innerHTML = `
    <div class="compass">
      <div style="position:relative;width:${size}px;height:${size}px">
        <svg width="${size}" height="${size}">${segments}</svg>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">${centerLabel}</div>
      </div>
      <div class="compass-legend">
        ${domains.map(d => `<div class="row"><span class="swatch" style="background:${DOMAIN_META[d].color}"></span>${DOMAIN_META[d].label}<span class="val">${FIXED_DOMAIN_SPLIT[d]}%</span></div>`).join('')}
      </div>
    </div>`;
}

function showToast(msg) {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2600);
}

function formatDate(iso) {
  const d = new Date(iso);
  const locale = getLang() === 'en' ? 'en-US' : 'fr-FR';
  return d.toLocaleDateString(locale, { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' · ' + d.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
}

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}
