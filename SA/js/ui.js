// ============================================================================
// ui.js — small UI utilities shared across pages.
// ============================================================================

const CATEGORY_META = {
  Predictif: { label: 'Predictive',    color: '#2f5c8f', desc: "Traditional waterfall approach: fixed scope, detailed upfront planning, critical path, EVM (CPI/SPI)." },
  Agile:     { label: 'Agile',          color: '#2c7a6d', desc: "Iterative approach: Scrum, sprints, Product Owner, retrospectives, team self-organization." },
  Hybride:   { label: 'Hybrid',         color: '#a2552b', desc: "Combines predictive and agile elements depending on project constraints (e.g., software in sprints, infrastructure on a Gantt chart)." },
  Exam:      { label: 'Exam',           color: '#a9782f', desc: "Full mock exam, in conditions close to the real test." },
  Quiz:      { label: 'Quiz',           color: '#7a5310', desc: "Short questions for a quick training session between tasks." },
  MiniExam:  { label: 'Mini exam',      color: '#5c6bc0', desc: "Intermediate format, a focused subset of situational questions." },
};

const DOMAIN_META = {
  People:   { label: 'People',              color: 'var(--dom-people)',   weight: 42 },
  Process:  { label: 'Process',              color: 'var(--dom-process)',  weight: 50 },
  Business: { label: 'Business Environment', color: 'var(--dom-business)', weight: 8 },
};

function renderTopbar(activePage) {
  const user = Store.currentUser();
  const mount = document.getElementById('topbar-mount');
  if (!mount) return;
  const links = [
    { href: 'dashboard.html', label: 'Dashboard', key: 'dashboard' },
    { href: 'history.html', label: 'History', key: 'history' },
  ];
  if (user && user.role === 'admin') {
    links.push({ href: 'admin.html', label: 'Administration', key: 'admin' });
  }
  const currentPage = (window.location.pathname.split('/').pop() || 'index.html');
  mount.innerHTML = `
    <div class="topbar">
      <a class="brand" href="dashboard.html">${sealSVG(26)}<span>PMP Simulator</span></a>
      <nav>
        ${links.map(l => `<a href="${l.href}" class="${activePage === l.key ? 'active' : ''}">${l.label}</a>`).join('')}
        ${user ? `<span class="user-chip">● ${user.username}${user.role === 'admin' ? ' (admin)' : ''}</span><a href="#" id="logout-link">Log out</a>` : ''}
        <span class="lang-switch">
          <a class="lang-other" href="../Sfr/${currentPage}">FR</a>
          <span class="lang-sep">/</span>
          <span class="lang-current">EN</span>
        </span>
      </nav>
    </div>`;
  const logoutLink = document.getElementById('logout-link');
  if (logoutLink) {
    logoutLink.addEventListener('click', (e) => {
      e.preventDefault();
      Store.logout();
      window.location.href = 'index.html';
    });
  }
}

function sealSVG(size) {
  return `<svg class="seal" width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14.5" stroke="#c99a4a" stroke-width="1.4"/>
    <circle cx="16" cy="16" r="10.5" stroke="#c99a4a" stroke-width="1"/>
    <path d="M16 8 L18.2 13.6 L24 14.2 L19.6 18 L21 23.6 L16 20.4 L11 23.6 L12.4 18 L8 14.2 L13.8 13.6 Z" fill="#c99a4a"/>
  </svg>`;
}

// Domain compass: ring divided by People/Process/Business.
// `stats` = { People:{correct,total}, Process:{...}, Business:{...} } (optional)
// If `stats` is omitted, simply shows the official PMI weighting.
function renderCompass(mountId, stats) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
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

  let centerLabel = `<span style="font-family:var(--font-mono);font-size:.68rem;color:var(--ink-600)">Weighting</span><b style="font-family:var(--font-display);font-size:1.05rem">Official PMI</b>`;
  if (stats) {
    const totalCorrect = domains.reduce((s, d) => s + (stats[d]?.correct || 0), 0);
    const totalQ = domains.reduce((s, d) => s + (stats[d]?.total || 0), 0);
    const pct = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0;
    centerLabel = `<span style="font-family:var(--font-mono);font-size:.68rem;color:var(--ink-600)">Score</span><b style="font-family:var(--font-display);font-size:1.6rem">${pct}%</b>`;
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

function showToast(msg) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2600);
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' · ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}
