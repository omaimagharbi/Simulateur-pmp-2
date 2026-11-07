// ============================================================================
// figures.js — figures d'examen générées en SVG (aucune image externe) pour les
// questions graphiques (interprétation) et les zones sensibles (hotspot).
//
// renderFigure(spec, opts) renvoie une chaîne HTML <svg>…</svg>.
//   spec.kind : 'linechart' | 'barchart' | 'grid' | 'network'
//   opts.zones : liste d'identifiants de zones cliquables (hotspot) — optionnel
//   opts.selected / opts.correct : ids pour colorer la sélection / la correction
//   opts.review : true → zones non interactives, colorées correct/incorrect
//
// Les libellés viennent de la spec (donc de la langue de la question) ; les
// coordonnées ne dépendent pas de la langue.
// ============================================================================

const FIG_W = 640, FIG_H = 340;
const FIG_X0 = 64, FIG_X1 = 610, FIG_Y0 = 34, FIG_Y1 = 280; // zone de tracé des graphiques
let figUid = 0;

const FIG_COLORS = { blue: '#2f6fed', green: '#2c7a6d', red: '#a3392b', amber: '#c98a1a', gray: '#8a93a8', ink: '#1b2a4a', purple: '#5b4fa8' };
const FIG_FILLS = { g: '#cfe8d8', a: '#f7e2b5', r: '#f2c4bd', n: '#eef0f5', b: '#d5e3fb' };

function figEsc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function figText(x, y, txt, o) {
  o = o || {};
  return `<text class="fig-text" x="${x}" y="${y}" font-size="${o.size || 11}" text-anchor="${o.anchor || 'middle'}"${o.bold ? ' font-weight="700"' : ''}${o.fill ? ` fill="${o.fill}"` : ''}${o.rot ? ` transform="rotate(${o.rot} ${x} ${y})"` : ''}>${figEsc(txt)}</text>`;
}
function zoneClass(id, opts) {
  const cls = ['hotspot-zone'];
  if (opts.review) {
    if (id === opts.correct) cls.push('correct');
    else if (id === opts.selected) cls.push('incorrect');
  } else if (id === opts.selected) cls.push('selected');
  return cls.join(' ');
}
function zoneAttrs(id, opts, label) {
  return `data-zone="${figEsc(id)}" ${opts.review ? '' : 'tabindex="0" role="button"'} aria-label="${figEsc(label || id)}"`;
}

// ---------------------------------------------------------------- linechart
function drawLineChart(spec, opts) {
  const n = spec.xLabels.length;
  const xAt = i => FIG_X0 + (i * (FIG_X1 - FIG_X0)) / Math.max(n - 1, 1);
  const yAt = v => FIG_Y1 - (v / spec.yMax) * (FIG_Y1 - FIG_Y0);
  let s = '';
  // grille + axe Y
  (spec.yTicks || [0, spec.yMax / 2, spec.yMax]).forEach(v => {
    s += `<line class="fig-grid" x1="${FIG_X0}" y1="${yAt(v)}" x2="${FIG_X1}" y2="${yAt(v)}"/>` + figText(FIG_X0 - 8, yAt(v) + 4, v, { anchor: 'end', size: 10 });
  });
  s += `<polyline class="fig-axis" points="${FIG_X0},${FIG_Y0 - 6} ${FIG_X0},${FIG_Y1} ${FIG_X1 + 6},${FIG_Y1}"/>`;
  spec.xLabels.forEach((l, i) => { s += figText(xAt(i), FIG_Y1 + 16, l, { size: 10 }); });
  if (spec.xTitle) s += figText((FIG_X0 + FIG_X1) / 2, FIG_Y1 + 34, spec.xTitle, { size: 11, bold: true });
  if (spec.yTitle) s += figText(16, (FIG_Y0 + FIG_Y1) / 2, spec.yTitle, { size: 11, bold: true, rot: -90 });
  // lignes horizontales de référence (UCL, LCL, moyenne…)
  (spec.hlines || []).forEach(h => {
    const col = h.color || FIG_COLORS.gray;
    s += `<line x1="${FIG_X0}" y1="${yAt(h.y)}" x2="${FIG_X1}" y2="${yAt(h.y)}" stroke="${col}" stroke-width="1.5" stroke-dasharray="${h.dash || '6 4'}"/>` + figText(FIG_X1 - 2, yAt(h.y) - 4, h.label, { anchor: 'end', size: 10, fill: col, bold: true });
  });
  // marqueur vertical (date du jour…)
  (spec.markers || []).forEach(m => {
    s += `<line x1="${xAt(m.x)}" y1="${FIG_Y0 - 4}" x2="${xAt(m.x)}" y2="${FIG_Y1}" stroke="${FIG_COLORS.ink}" stroke-width="1.2" stroke-dasharray="3 3"/>` + figText(xAt(m.x), FIG_Y0 - 10, m.label, { size: 10, bold: true });
  });
  // séries
  const polyPoints = ser => ser.pts.map((v, i) => v == null ? null : `${xAt(i).toFixed(1)},${yAt(v).toFixed(1)}`).filter(Boolean).join(' ');
  (spec.series || []).forEach(ser => {
    const col = ser.color || FIG_COLORS.blue;
    s += `<polyline fill="none" stroke="${col}" stroke-width="${ser.width || 2.6}"${ser.dash ? ` stroke-dasharray="${ser.dash}"` : ''} stroke-linejoin="round" points="${polyPoints(ser)}"/>`;
    if (ser.dots) ser.pts.forEach((v, i) => { if (v != null) s += `<circle cx="${xAt(i).toFixed(1)}" cy="${yAt(v).toFixed(1)}" r="3.4" fill="${col}"/>`; });
    if (ser.label) {
      let last = ser.pts.length - 1; while (last > 0 && ser.pts[last] == null) last--;
      const li = ser.labelAt != null ? ser.labelAt : last;
      s += figText(xAt(li) + (ser.labelDx || 6), yAt(ser.pts[li]) + (ser.labelDy != null ? ser.labelDy : -8), ser.label, { anchor: ser.labelAnchor || 'start', size: 11, bold: true, fill: col });
    }
  });
  // points mis en évidence (hors contrôle…)
  (spec.points || []).forEach(p => {
    const ser = spec.series.find(x => x.id === p.series);
    s += `<circle cx="${xAt(p.x).toFixed(1)}" cy="${yAt(ser.pts[p.x]).toFixed(1)}" r="5.5" fill="${p.color || FIG_COLORS.red}" stroke="#fff" stroke-width="1.5"/>`;
    if (p.label) s += figText(xAt(p.x), yAt(ser.pts[p.x]) - 11, p.label, { size: 10, bold: true, fill: p.color || FIG_COLORS.red });
  });
  // zones cliquables
  (opts.zones || []).forEach(id => {
    const ser = (spec.series || []).find(x => x.id === id);
    if (ser) {
      s += `<polyline class="${zoneClass(id, opts)} hotspot-line" ${zoneAttrs(id, opts, ser.label)} fill="none" stroke-width="16" stroke-linecap="round" points="${polyPoints(ser)}"/>`;
      return;
    }
    const m = /^pt(\d+)$/.exec(id); // zone point : pt<index> sur la 1re série
    if (m) {
      const i = parseInt(m[1], 10), first = spec.series[0];
      s += `<circle class="${zoneClass(id, opts)}" ${zoneAttrs(id, opts, 'point ' + (i + 1))} cx="${xAt(i).toFixed(1)}" cy="${yAt(first.pts[i]).toFixed(1)}" r="15"/>`;
    }
  });
  return s;
}

// ----------------------------------------------------------------- barchart
function drawBarChart(spec, opts) {
  const n = spec.bars.length, slot = (FIG_X1 - FIG_X0) / n, bw = slot * 0.56;
  const yAt = v => FIG_Y1 - (v / spec.yMax) * (FIG_Y1 - FIG_Y0);
  let s = '';
  (spec.yTicks || [0, spec.yMax / 2, spec.yMax]).forEach(v => {
    s += `<line class="fig-grid" x1="${FIG_X0}" y1="${yAt(v)}" x2="${FIG_X1}" y2="${yAt(v)}"/>` + figText(FIG_X0 - 8, yAt(v) + 4, v, { anchor: 'end', size: 10 });
  });
  s += `<polyline class="fig-axis" points="${FIG_X0},${FIG_Y0 - 6} ${FIG_X0},${FIG_Y1} ${FIG_X1 + 6},${FIG_Y1}"/>`;
  if (spec.yTitle) s += figText(16, (FIG_Y0 + FIG_Y1) / 2, spec.yTitle, { size: 11, bold: true, rot: -90 });
  if (spec.xTitle) s += figText((FIG_X0 + FIG_X1) / 2, FIG_Y1 + 40, spec.xTitle, { size: 11, bold: true });
  spec.bars.forEach((v, i) => {
    const cx = FIG_X0 + slot * i + slot / 2, y = yAt(v);
    const col = (spec.barColors && spec.barColors[i]) || FIG_COLORS.blue;
    s += `<rect x="${(cx - bw / 2).toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${(FIG_Y1 - y).toFixed(1)}" fill="${col}" rx="2"/>`;
    s += figText(cx, y - 5, v, { size: 10, bold: true });
    s += figText(cx, FIG_Y1 + 16, spec.xLabels[i], { size: 10 });
  });
  if (spec.line) { // courbe cumulée (Pareto) sur un axe 0–100 %
    const yP = p => FIG_Y1 - (p / 100) * (FIG_Y1 - FIG_Y0);
    const pts = spec.line.map((p, i) => `${(FIG_X0 + slot * i + slot / 2).toFixed(1)},${yP(p).toFixed(1)}`).join(' ');
    s += `<polyline fill="none" stroke="${FIG_COLORS.red}" stroke-width="2.4" points="${pts}"/>`;
    spec.line.forEach((p, i) => { s += `<circle cx="${(FIG_X0 + slot * i + slot / 2).toFixed(1)}" cy="${yP(p).toFixed(1)}" r="3.2" fill="${FIG_COLORS.red}"/>`; });
    [0, 50, 100].forEach(p => { s += figText(FIG_X1 + 4, yP(p) + 4, p + '%', { anchor: 'start', size: 9, fill: FIG_COLORS.red }); });
    if (spec.lineLabel) s += figText(FIG_X1 - 4, FIG_Y0 + 2, spec.lineLabel, { anchor: 'end', size: 10, bold: true, fill: FIG_COLORS.red });
  }
  (spec.hlines || []).forEach(h => {
    const col = h.color || FIG_COLORS.gray;
    s += `<line x1="${FIG_X0}" y1="${yAt(h.y)}" x2="${FIG_X1}" y2="${yAt(h.y)}" stroke="${col}" stroke-width="1.5" stroke-dasharray="6 4"/>` + figText(FIG_X1 - 2, yAt(h.y) - 4, h.label, { anchor: 'end', size: 10, fill: col, bold: true });
  });
  (opts.zones || []).forEach(id => {
    const m = /^b(\d+)$/.exec(id); if (!m) return;
    const i = parseInt(m[1], 10), cx = FIG_X0 + slot * i + slot / 2;
    s += `<rect class="${zoneClass(id, opts)}" ${zoneAttrs(id, opts, spec.xLabels[i])} x="${(cx - slot / 2 + 2).toFixed(1)}" y="${FIG_Y0}" width="${(slot - 4).toFixed(1)}" height="${FIG_Y1 - FIG_Y0}" rx="6"/>`;
  });
  return s;
}

// --------------------------------------------------------------------- grid
function drawGrid(spec, opts) {
  const rows = spec.rows.length, cols = spec.cols.length;
  const gx = 120, gy = 44, gw = 470, gh = 230;
  const cw = gw / cols, ch = gh / rows;
  let s = '';
  if (spec.xTitle) s += figText(gx + gw / 2, gy + gh + 34, spec.xTitle, { size: 11, bold: true });
  if (spec.yTitle) s += figText(18, gy + gh / 2, spec.yTitle, { size: 11, bold: true, rot: -90 });
  spec.cols.forEach((c, j) => { s += figText(gx + cw * j + cw / 2, gy + gh + 16, c, { size: 10.5 }); });
  spec.rows.forEach((r, i) => { s += figText(gx - 8, gy + ch * i + ch / 2 + 4, r, { anchor: 'end', size: 10.5 }); });
  spec.cells.forEach((row, i) => row.forEach((cell, j) => {
    const fill = FIG_FILLS[cell.fill] || cell.fill || FIG_FILLS.n;
    s += `<rect x="${gx + cw * j}" y="${gy + ch * i}" width="${cw}" height="${ch}" fill="${fill}" stroke="#ffffff" stroke-width="2"/>`;
    const lines = String(cell.text == null ? '' : cell.text).split('\n');
    lines.forEach((ln, k) => {
      s += figText(gx + cw * j + cw / 2, gy + ch * i + ch / 2 + 4 + (k - (lines.length - 1) / 2) * 14, ln, { size: cell.size || 11, bold: !!cell.bold });
    });
  }));
  (opts.zones || []).forEach(id => {
    const m = /^r(\d+)c(\d+)$/.exec(id); if (!m) return;
    const i = parseInt(m[1], 10), j = parseInt(m[2], 10);
    s += `<rect class="${zoneClass(id, opts)}" ${zoneAttrs(id, opts, spec.rows[i] + ' / ' + spec.cols[j])} x="${gx + cw * j + 2}" y="${gy + ch * i + 2}" width="${cw - 4}" height="${ch - 4}" rx="6"/>`;
  });
  return s;
}

// ------------------------------------------------------------------ network
function drawNetwork(spec, opts) {
  const uid = 'arr' + (++figUid);
  const NW = 112, NH = 62;
  const byId = Object.fromEntries(spec.nodes.map(nd => [nd.id, nd]));
  const crit = new Set(spec.critical || []);
  let s = `<defs><marker id="${uid}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#5a6786"/></marker><marker id="${uid}c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${FIG_COLORS.red}"/></marker></defs>`;
  spec.edges.forEach(([a, b]) => {
    const A = byId[a], B = byId[b], isCrit = crit.has(a) && crit.has(b);
    const x1 = A.x + NW, y1 = A.y + NH / 2, x2 = B.x, y2 = B.y + NH / 2;
    s += `<line x1="${x1}" y1="${y1}" x2="${x2 - 2}" y2="${y2}" stroke="${isCrit ? FIG_COLORS.red : '#5a6786'}" stroke-width="${isCrit ? 2.6 : 1.6}" marker-end="url(#${uid}${isCrit ? 'c' : ''})"/>`;
  });
  spec.nodes.forEach(nd => {
    const isCrit = crit.has(nd.id);
    s += `<rect x="${nd.x}" y="${nd.y}" width="${NW}" height="${NH}" rx="6" fill="${FIG_FILLS.n}" stroke="${isCrit ? FIG_COLORS.red : '#5a6786'}" stroke-width="${isCrit ? 2.4 : 1.4}"/>`;
    s += `<line x1="${nd.x}" y1="${nd.y + 22}" x2="${nd.x + NW}" y2="${nd.y + 22}" stroke="#9aa3b8" stroke-width="1"/>`;
    s += figText(nd.x + NW / 2, nd.y + 16, nd.label, { size: 12, bold: true });
    s += figText(nd.x + NW / 2, nd.y + 40, `${spec.durLabel || 'D'} = ${nd.dur}`, { size: 11 });
    if (nd.es != null) {
      s += figText(nd.x + 6, nd.y + 56, `${nd.es}`, { anchor: 'start', size: 10, fill: FIG_COLORS.ink });
      s += figText(nd.x + NW - 6, nd.y + 56, `${nd.ef}`, { anchor: 'end', size: 10, fill: FIG_COLORS.ink });
    }
  });
  if (spec.note) s += figText(FIG_W / 2, FIG_H - 10, spec.note, { size: 10.5, fill: '#5a6786' });
  (opts.zones || []).forEach(id => {
    const nd = byId[id]; if (!nd) return;
    s += `<rect class="${zoneClass(id, opts)}" ${zoneAttrs(id, opts, nd.label)} x="${nd.x - 3}" y="${nd.y - 3}" width="${NW + 6}" height="${NH + 6}" rx="8"/>`;
  });
  return s;
}

function renderFigure(spec, opts) {
  opts = opts || {};
  let body = '';
  if (spec.kind === 'linechart') body = drawLineChart(spec, opts);
  else if (spec.kind === 'barchart') body = drawBarChart(spec, opts);
  else if (spec.kind === 'grid') body = drawGrid(spec, opts);
  else if (spec.kind === 'network') body = drawNetwork(spec, opts);
  const title = spec.title ? figText(FIG_W / 2, 18, spec.title, { size: 13, bold: true }) : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${FIG_W} ${FIG_H}" role="img" aria-label="${figEsc(spec.title || '')}">${title}${body}</svg>`;
}

// Cadre complet (légende + figure) réutilisé par le quiz et la correction.
function figureBlock(spec, opts) {
  return `<div class="q-figure"><div class="q-figure-caption">${figEsc(t('quiz_figure_label'))}${spec.title ? ' — ' + figEsc(spec.title) : ''}</div>${renderFigure({ ...spec, title: '' }, opts)}</div>`;
}
