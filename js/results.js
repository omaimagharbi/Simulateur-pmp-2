// ============================================================================
// results.js
// ============================================================================
applyI18n();
const resultsUser = Store.requireUnlocked('activate-voucher.html');

if (resultsUser) {
  renderTopbar(null);
  const CATEGORY_META = categoryMeta();
  const DOMAIN_META = domainMeta();

  const params = new URLSearchParams(window.location.search);
  const attemptId = params.get('id');
  const attempt = Store.getAttempt(attemptId);

  if (!attempt || attempt.username !== resultsUser.username) {
    document.querySelector('.page').innerHTML = `<div class="empty-state"><div class="glyph">🔍</div>${t('not_found_attempt')}<br><a href="dashboard.html" class="btn btn-primary" style="margin-top:1rem">${t('back_dashboard')}</a></div>`;
  } else {
    const allQuestions = Store.getAllQuestions();
    const byId = Object.fromEntries(allQuestions.map(q => [q.id, q]));
    const pct = Math.round((attempt.score / attempt.total) * 100);
    const passed = pct >= 65;
    const catMeta = CATEGORY_META[attempt.category] || { label: attempt.category };

    document.getElementById('result-eyebrow').textContent = catMeta.label;
    document.getElementById('result-title').textContent = passed ? t('result_passed') : t('result_retry');
    document.getElementById('result-summary').innerHTML = `
      <b>${attempt.score} / ${attempt.total}</b> ${t('result_correct_of')} ${formatDuration(attempt.durationSeconds)}.<br>
      ${t('result_taken_on')} ${formatDate(attempt.date)}.<br><br>
      <span style="font-size:.85rem;color:var(--ink-600)">${t('result_threshold_note')}</span>`;
    document.getElementById('retry-link').href = `quiz.html?cat=${attempt.category}&part=${attempt.part || 1}`;

    drawRing('ring-svg', pct);
    document.querySelector('#ring-num').innerHTML = `<span>${t('score_label')}</span>${pct}%`;

    // Rendu de la correction, spécifique à chaque type de question.
    function reviewOptionsSingle(q, a) {
      const letters = Object.keys(q.options).filter(l => l === a.correctAnswer || l === a.chosen);
      return `<div class="options">
        ${letters.map(letter => {
          let cls = '';
          if (letter === a.correctAnswer) cls = 'correct';
          else if (letter === a.chosen && letter !== a.correctAnswer) cls = 'incorrect';
          return `<div class="option ${cls}"><span class="letter">${letter}</span><span class="option-text">${q.options[letter]}</span></div>`;
        }).join('')}
      </div>`;
    }
    function reviewOptionsMulti(q, a) {
      const chosen = Array.isArray(a.chosen) ? a.chosen : [];
      const correct = (q.correct_answers || []);
      return `<div class="options">
        ${Object.keys(q.options).map(letter => {
          const isCorrect = correct.includes(letter);
          const isChosen = chosen.includes(letter);
          let cls = '';
          if (isCorrect) cls = 'correct';
          else if (isChosen) cls = 'incorrect';
          if (!isCorrect && !isChosen) return '';
          return `<div class="option ${cls}"><span class="letter">${letter}</span><span class="option-text">${q.options[letter]}</span></div>`;
        }).join('')}
      </div>`;
    }
    function reviewMatching(q, a) {
      const chosen = a.chosen && typeof a.chosen === 'object' ? a.chosen : {};
      return `<div class="options matching">
        ${q.colonne_gauche.map(l => {
          const yourId = chosen[l.id];
          const correctId = q.correct_matching[l.id];
          const yourTxt = q.colonne_droite.find(r => r.id === yourId)?.texte || t('not_answered');
          const cls = yourId === correctId ? 'correct' : 'incorrect';
          return `<div class="option ${cls}"><span class="option-text"><b>${l.texte}</b> → ${yourTxt}${yourId !== correctId ? ` (${t('correctAnswer') || 'correct'}: ${q.colonne_droite.find(r => r.id === correctId)?.texte})` : ''}</span></div>`;
        }).join('')}
      </div>`;
    }

    function reviewHotspot(q, a) {
      const chosen = typeof a.chosen === 'string' ? a.chosen : '';
      const ok = chosen === q.correct_zone;
      return `${figureBlock(q.figure, { zones: q.zones, selected: chosen, correct: q.correct_zone, review: true })}
        <div class="options">
          <div class="option ${ok ? 'correct' : 'incorrect'}"><span class="option-text"><b>${t('review_your_answer')} :</b> ${chosen ? (q.zone_labels[chosen] || chosen) : t('not_answered')}</span></div>
          ${ok ? '' : `<div class="option correct"><span class="option-text"><b>${t('review_correct_answer')} :</b> ${q.zone_labels[q.correct_zone]}</span></div>`}
        </div>`;
    }
    function reviewDropdown(q, a) {
      const chosen = a.chosen && typeof a.chosen === 'object' ? a.chosen : {};
      const filled = q.text.replace(/\{(\d+)\}/g, (m, n) => {
        const b = q.blanks.find(x => x.id === n); if (!b) return m;
        return `<b>${b.options[b.answer]}</b>`;
      });
      return `<div class="dropdown-text" style="margin-bottom:.6rem">${filled}</div>
        ${q.blanks.map(b => {
          const mine = chosen[b.id];
          const ok = mine === b.answer;
          return `<div class="dropdown-review-row"><span class="${ok ? 'ok' : 'ko'}">${ok ? '✓' : '✗'}</span> ${t('review_your_answer')} (${b.id}) : ${mine !== undefined ? b.options[mine] : t('not_answered')}${ok ? '' : ` — ${t('review_correct_answer')} : <b>${b.options[b.answer]}</b>`}</div>`;
        }).join('')}`;
    }

    const reviewMount = document.getElementById('review-mount');
    reviewMount.innerHTML = attempt.answers.map((a, idx) => {
      const q = byId[a.questionId];
      if (!q) return '';
      let optionsHtml;
      if (q.type === 'multi_choice') optionsHtml = reviewOptionsMulti(q, a);
      else if (q.type === 'matching') optionsHtml = reviewMatching(q, a);
      else if (q.type === 'hotspot') optionsHtml = reviewHotspot(q, a);
      else if (q.type === 'dropdown') optionsHtml = reviewDropdown(q, a);
      else optionsHtml = reviewOptionsSingle(q, a);
      const isEmpty = !a.chosen || (Array.isArray(a.chosen) && !a.chosen.length) || (typeof a.chosen === 'object' && !Array.isArray(a.chosen) && !Object.keys(a.chosen).length);
      return `
        <div class="review-item card">
          <span class="q-domain ${a.domain}">${DOMAIN_META[a.domain]?.label || a.domain}</span>
          ${q.contexte_etendu ? `<div class="banner" style="margin-bottom:.75rem"><b>${t('case_study_label') || 'Étude de cas'} ${q.case_group_label || ''}</b><br>${q.contexte_etendu}</div>` : ''}
          ${q.figure && q.type !== 'hotspot' ? figureBlock(q.figure, {}) : ''}
          <div class="q-text">${idx + 1}. ${q.type === 'dropdown' ? q.text.replace(/\{(\d+)\}/g, '____') : q.text}</div>
          ${optionsHtml}
          ${isEmpty ? `<div class="banner warn" style="margin-top:1rem">${t('not_answered')}</div>` : ''}
          ${q.justification ? `<div class="justification show"><b>${t('justification_label')}</b> ${q.justification}</div>` : ''}
        </div>`;
    }).join('');

    document.getElementById('btn-download-pdf').addEventListener('click', () => downloadResultsPdf(attempt, byId, pct, catMeta));
  }
}

function drawRing(svgId, pct) {
  const svg = document.getElementById(svgId);
  const size = 150, stroke = 12, r = (size - stroke) / 2, c = size / 2;
  const circumference = 2 * Math.PI * r;
  const len = (pct / 100) * circumference;
  const color = pct >= 65 ? 'var(--good)' : (pct >= 40 ? 'var(--brass)' : 'var(--bad)');
  svg.innerHTML = `
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="var(--paper-dim)" stroke-width="${stroke}"/>
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-dasharray="${len} ${circumference - len}" stroke-linecap="round" transform="rotate(-90 ${c} ${c})"/>`;
}

// Texte lisible de la réponse choisie / attendue, quel que soit le type de question.
function answerSummary(q, a) {
  const hasAnswer = (v) => v && (typeof v !== 'object' || Array.isArray(v) ? (Array.isArray(v) ? v.length > 0 : true) : Object.keys(v).length > 0);
  let chosenTxt = a.chosen, correctTxt = a.correctAnswer, answered = hasAnswer(a.chosen);
  if (q.type === 'multi_choice') { chosenTxt = Array.isArray(a.chosen) ? a.chosen.join(', ') : ''; }
  if (q.type === 'matching') {
    const val = a.chosen && typeof a.chosen === 'object' ? a.chosen : {};
    chosenTxt = q.colonne_gauche.map(l => `${l.texte}→${q.colonne_droite.find(r => r.id === val[l.id])?.texte || '?'}`).join(' | ');
    correctTxt = q.colonne_gauche.map(l => `${l.texte}→${q.colonne_droite.find(r => r.id === q.correct_matching[l.id])?.texte}`).join(' | ');
  }
  if (q.type === 'hotspot') {
    chosenTxt = q.zone_labels[a.chosen] || a.chosen;
    correctTxt = q.zone_labels[q.correct_zone];
  }
  if (q.type === 'dropdown') {
    const val = a.chosen && typeof a.chosen === 'object' ? a.chosen : {};
    chosenTxt = q.blanks.map(b => `${b.id}: ${val[b.id] !== undefined ? b.options[val[b.id]] : '?'}`).join(' | ');
    correctTxt = q.blanks.map(b => `${b.id}: ${b.options[b.answer]}`).join(' | ');
  }
  return { chosenTxt, correctTxt, answered };
}

// L'arabe ne peut pas être écrit par jsPDF (police Helvetica sans glyphes arabes) :
// on ouvre une page imprimable en RTL, que le navigateur enregistre en PDF.
function printResultsArabic(attempt, byId, pct, catMeta) {
  const esc = (x) => String(x == null ? '' : x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const items = attempt.answers.map((a, idx) => {
    const q = byId[a.questionId]; if (!q) return '';
    const { chosenTxt, correctTxt, answered } = answerSummary(q, a);
    const textHtml = q.type === 'dropdown' ? esc(q.text.replace(/\{(\d+)\}/g, '____')) : esc(q.text);
    return `<div class="it ${a.correct ? 'ok' : 'ko'}">
      ${q.figure && q.type !== 'hotspot' ? figureBlock(q.figure, {}) : ''}
      ${q.type === 'hotspot' ? figureBlock(q.figure, { zones: q.zones, selected: typeof a.chosen === 'string' ? a.chosen : '', correct: q.correct_zone, review: true }) : ''}
      <p class="q"><b>${idx + 1}.</b> ${textHtml}</p>
      <p>${a.correct ? '✓' : '✗'} ${answered ? t('review_your_answer') + ': ' + esc(chosenTxt) : t('not_answered')}${a.correct ? '' : ' — ' + t('review_correct_answer') + ': ' + esc(correctTxt)}</p>
      ${q.justification ? `<p class="j">${t('justification_label')} ${esc(q.justification)}</p>` : ''}</div>`;
  }).join('');
  const w = window.open('', '_blank');
  if (!w) { alert(t('download_pdf')); return; }
  w.document.write(`<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"><title>${esc(t('brand'))} — ${esc(catMeta.label)}</title>
    <style>
      body{font-family:'IBM Plex Sans Arabic','Noto Sans Arabic',Tahoma,sans-serif;margin:24px;color:#141b2e;line-height:1.7}
      h1{font-size:20px;margin:0 0 6px} .meta{color:#555;font-size:13px;margin-bottom:14px}
      .it{border:1px solid #d8d3c0;border-radius:8px;padding:10px 14px;margin:10px 0;page-break-inside:avoid}
      .it.ok{border-inline-start:5px solid #2f7a4f} .it.ko{border-inline-start:5px solid #a3392b}
      .q{font-weight:600} .j{color:#555;font-size:13px}
      .q-figure{border:1px solid #e3dfd0;border-radius:6px;padding:6px;margin-bottom:8px} .q-figure svg{max-width:520px;width:100%;height:auto;direction:ltr}
      .q-figure-caption{font-size:11px;color:#666}
      .fig-text{fill:#1b2a4a;font-family:inherit} .fig-axis{stroke:#3a4a70;fill:none} .fig-grid{stroke:#d8d3c0}
      .hotspot-zone{fill:transparent;stroke:transparent} .hotspot-zone.correct{fill:rgba(47,122,79,.3);stroke:#2f7a4f;stroke-width:3} .hotspot-zone.incorrect{fill:rgba(163,57,43,.25);stroke:#a3392b;stroke-width:3}
      .hotspot-line{fill:none}
    </style></head><body>
    <h1>${esc(t('brand'))} — ${esc(catMeta.label)}</h1>
    <div class="meta">${esc(attempt.username)} · ${esc(formatDate(attempt.date))} · ${esc(formatDuration(attempt.durationSeconds))}</div>
    <h1>${esc(t('score_label'))}: ${attempt.score} / ${attempt.total} (${pct}%)</h1>
    ${items}
    <script>window.onload=function(){setTimeout(function(){window.print();},400);};<\/script></body></html>`);
  w.document.close();
}

function downloadResultsPdf(attempt, byId, pct, catMeta) {
  const lang = getLang();
  if (lang === 'ar') { printResultsArabic(attempt, byId, pct, catMeta); return; }
  const L = lang === 'en'
    ? { title: 'PMP Simulator — Exam Result', category: 'Category', candidate: 'Candidate', date: 'Date', duration: 'Duration', score: 'Score', review: 'Detailed review', correct: 'Correct answer', yourAnswer: 'Your answer', correctAnswer: 'Correct answer', notAnswered: 'Not answered', explanation: 'Explanation', footer: 'PMP Simulator — training tool, not affiliated with PMI®.' }
    : { title: 'PMP Simulateur — Résultat d\'examen', category: 'Catégorie', candidate: 'Candidat', date: 'Date', duration: 'Durée', score: 'Score', review: 'Correction détaillée', correct: 'Bonne réponse', yourAnswer: 'Ta réponse', correctAnswer: 'Bonne réponse', notAnswered: 'Non répondue', explanation: 'Justification', footer: 'PMP Simulateur — outil d\'entraînement non affilié au PMI®.' };

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = margin;

  function ensureSpace(h) { if (y + h > 780) { doc.addPage(); y = margin; } }
  function wrapText(text, maxWidth, fontSize) { doc.setFontSize(fontSize); return doc.splitTextToSize(text, maxWidth); }

  doc.setFont('helvetica', 'bold'); doc.setFontSize(18); doc.setTextColor(20, 27, 46);
  doc.text(L.title, margin, y); y += 22;

  doc.setFont('helvetica', 'normal'); doc.setFontSize(11); doc.setTextColor(80, 80, 80);
  doc.text(`${L.category}: ${catMeta.label}`, margin, y); y += 16;
  doc.text(`${L.candidate}: ${attempt.username}`, margin, y); y += 16;
  doc.text(`${L.date}: ${formatDate(attempt.date)}`, margin, y); y += 16;
  doc.text(`${L.duration}: ${formatDuration(attempt.durationSeconds)}`, margin, y); y += 20;

  doc.setFont('helvetica', 'bold'); doc.setFontSize(14); doc.setTextColor(20, 27, 46);
  doc.text(`${L.score}: ${attempt.score} / ${attempt.total} (${pct}%)`, margin, y); y += 26;

  doc.setDrawColor(216, 211, 192); doc.line(margin, y, pageWidth - margin, y); y += 20;

  doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
  doc.text(L.review, margin, y); y += 18;

  attempt.answers.forEach((a, idx) => {
    const q = byId[a.questionId];
    if (!q) return;
    ensureSpace(90);

    doc.setFont('helvetica', 'bold'); doc.setFontSize(11); doc.setTextColor(20, 27, 46);
    const qLines = wrapText(`${idx + 1}. ${q.type === 'dropdown' ? q.text.replace(/\{(\d+)\}/g, '____') : q.text}`, pageWidth - margin * 2, 11);
    doc.text(qLines, margin, y); y += qLines.length * 14 + 4;

    doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
    const summary = answerSummary(q, a);
    const chosenTxt = summary.chosenTxt, correctTxt = summary.correctTxt, hasAnswer = summary.answered;
    const statusText = hasAnswer
      ? (a.correct ? `✓ ${L.correct}: ${chosenTxt}` : `✗ ${L.yourAnswer}: ${chosenTxt}  |  ${L.correctAnswer}: ${correctTxt}`)
      : `${L.notAnswered}  |  ${L.correctAnswer}: ${correctTxt}`;
    doc.setTextColor(a.correct ? 47 : 163, a.correct ? 122 : 57, a.correct ? 79 : 43);
    ensureSpace(14);
    doc.text(statusText, margin, y); y += 16;

    if (q.justification) {
      doc.setTextColor(90, 90, 90); doc.setFont('helvetica', 'italic');
      const justLines = wrapText(`${L.explanation}: ${q.justification}`, pageWidth - margin * 2, 9.5);
      ensureSpace(justLines.length * 12 + 10);
      doc.text(justLines, margin, y); y += justLines.length * 12 + 14;
    } else { y += 8; }
  });

  doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(150, 150, 150);
  doc.text(L.footer, margin, 800);

  doc.save(`pmp-${lang}-${catMeta.label.replace(/\s+/g, '_')}-${attempt.id}.pdf`);
}
