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

    const reviewMount = document.getElementById('review-mount');
    reviewMount.innerHTML = attempt.answers.map((a, idx) => {
      const q = byId[a.questionId];
      if (!q) return '';
      let optionsHtml;
      if (q.type === 'multi_choice') optionsHtml = reviewOptionsMulti(q, a);
      else if (q.type === 'matching') optionsHtml = reviewMatching(q, a);
      else optionsHtml = reviewOptionsSingle(q, a);
      return `
        <div class="review-item card">
          <span class="q-domain ${a.domain}">${DOMAIN_META[a.domain]?.label || a.domain}</span>
          ${q.contexte_etendu ? `<div class="banner" style="margin-bottom:.75rem"><b>${t('case_study_label') || 'Étude de cas'} ${q.case_group_label || ''}</b><br>${q.contexte_etendu}</div>` : ''}
          <div class="q-text">${idx + 1}. ${q.text}</div>
          ${optionsHtml}
          ${!a.chosen || (Array.isArray(a.chosen) && !a.chosen.length) ? `<div class="banner warn" style="margin-top:1rem">${t('not_answered')}</div>` : ''}
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

function downloadResultsPdf(attempt, byId, pct, catMeta) {
  const lang = getLang();
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
    const qLines = wrapText(`${idx + 1}. ${q.text}`, pageWidth - margin * 2, 11);
    doc.text(qLines, margin, y); y += qLines.length * 14 + 4;

    doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
    let chosenTxt = a.chosen;
    let correctTxt = a.correctAnswer;
    let hasAnswer = !!a.chosen;
    if (q.type === 'multi_choice') { chosenTxt = Array.isArray(a.chosen) ? a.chosen.join(', ') : ''; hasAnswer = Array.isArray(a.chosen) && a.chosen.length > 0; }
    if (q.type === 'matching') {
      const val = a.chosen && typeof a.chosen === 'object' ? a.chosen : {};
      chosenTxt = q.colonne_gauche.map(l => `${l.texte}→${q.colonne_droite.find(r => r.id === val[l.id])?.texte || '?'}`).join(' | ');
      correctTxt = q.colonne_gauche.map(l => `${l.texte}→${q.colonne_droite.find(r => r.id === q.correct_matching[l.id])?.texte}`).join(' | ');
      hasAnswer = Object.keys(val).length > 0;
    }
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
