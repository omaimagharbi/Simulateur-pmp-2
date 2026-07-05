// ============================================================================
// results.js
// ============================================================================
const resultsUser = Store.requireAuth('index.html');

if (resultsUser) {
  renderTopbar(null);

  const params = new URLSearchParams(window.location.search);
  const attemptId = params.get('id');
  const attempt = Store.getAttempt(attemptId);

  if (!attempt || attempt.username !== resultsUser.username) {
    document.querySelector('.page').innerHTML = `<div class="empty-state"><div class="glyph">🔍</div>Attempt not found.<br><a href="dashboard.html" class="btn btn-primary" style="margin-top:1rem">Back to dashboard</a></div>`;
  } else {
    const allQuestions = Store.getAllQuestions();
    const byId = Object.fromEntries(allQuestions.map(q => [q.id, q]));
    const pct = Math.round((attempt.score / attempt.total) * 100);
    const passed = pct >= 61; // indicative threshold (PMI does not publish an official passing score)
    const catMeta = CATEGORY_META[attempt.category] || { label: attempt.category };

    document.getElementById('result-eyebrow').textContent = catMeta.label;
    document.getElementById('result-title').textContent = passed ? 'Well done — solid level' : 'Keep practicing';
    document.getElementById('result-summary').innerHTML = `
      <b>${attempt.score} / ${attempt.total}</b> correct answers in ${formatDuration(attempt.durationSeconds)}.<br>
      Taken on ${formatDate(attempt.date)}.<br><br>
      <span style="font-size:.85rem;color:var(--ink-600)">Indicative passing threshold: 61%. PMI does not publish an official bar — aim for consistency across the three domains rather than a single score.</span>`;
    document.getElementById('retry-link').href = `quiz.html?cat=${attempt.category}`;

    drawRing('ring-svg', pct);
    document.querySelector('#ring-num').innerHTML = `<span>Score</span>${pct}%`;

    const domainStats = { People: { correct: 0, total: 0 }, Process: { correct: 0, total: 0 }, Business: { correct: 0, total: 0 } };
    attempt.answers.forEach(a => {
      if (!domainStats[a.domain]) return;
      domainStats[a.domain].total++;
      if (a.correct) domainStats[a.domain].correct++;
    });
    renderCompass('compass-mount', domainStats);

    const reviewMount = document.getElementById('review-mount');
    reviewMount.innerHTML = attempt.answers.map((a, idx) => {
      const q = byId[a.questionId];
      if (!q) return '';
      return `
        <div class="review-item card">
          <span class="q-domain ${a.domain}">${DOMAIN_META[a.domain]?.label || a.domain}</span>
          <div class="q-text">${idx + 1}. ${q.text}</div>
          <div class="options">
            ${['A', 'B', 'C', 'D'].filter(l => q.options[l]).map(letter => {
              let cls = '';
              if (letter === a.correctAnswer) cls = 'correct';
              else if (letter === a.chosen && letter !== a.correctAnswer) cls = 'incorrect';
              return `<div class="option ${cls}">
                <span class="letter">${letter}</span>
                <span class="option-text">${q.options[letter]}</span>
              </div>`;
            }).join('')}
          </div>
          ${!a.chosen ? `<div class="banner warn" style="margin-top:1rem">Not answered.</div>` : ''}
          ${q.justification ? `<div class="justification show"><b>Explanation —</b> ${q.justification}</div>` : ''}
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
  const color = pct >= 61 ? 'var(--good)' : (pct >= 40 ? 'var(--brass)' : 'var(--bad)');
  svg.innerHTML = `
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="var(--paper-dim)" stroke-width="${stroke}"/>
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-dasharray="${len} ${circumference - len}" stroke-linecap="round"
      transform="rotate(-90 ${c} ${c})"/>`;
}

// ---------- PDF export (jsPDF) ----------
function downloadResultsPdf(attempt, byId, pct, catMeta) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = margin;

  function ensureSpace(h) {
    if (y + h > 780) { doc.addPage(); y = margin; }
  }
  function wrapText(text, maxWidth, fontSize) {
    doc.setFontSize(fontSize);
    return doc.splitTextToSize(text, maxWidth);
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(20, 27, 46);
  doc.text('PMP Simulator — Exam Result', margin, y);
  y += 22;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  doc.text(`Category: ${catMeta.label}`, margin, y); y += 16;
  doc.text(`Candidate: ${attempt.username}`, margin, y); y += 16;
  doc.text(`Date: ${formatDate(attempt.date)}`, margin, y); y += 16;
  doc.text(`Duration: ${formatDuration(attempt.durationSeconds)}`, margin, y); y += 20;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(20, 27, 46);
  doc.text(`Score: ${attempt.score} / ${attempt.total} (${pct}%)`, margin, y);
  y += 26;

  doc.setDrawColor(216, 211, 192);
  doc.line(margin, y, pageWidth - margin, y);
  y += 20;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('Detailed review', margin, y);
  y += 18;

  attempt.answers.forEach((a, idx) => {
    const q = byId[a.questionId];
    if (!q) return;
    ensureSpace(90);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(20, 27, 46);
    const qLines = wrapText(`${idx + 1}. ${q.text}`, pageWidth - margin * 2, 11);
    doc.text(qLines, margin, y);
    y += qLines.length * 14 + 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    const statusText = a.chosen
      ? (a.correct ? `✓ Correct answer: ${a.chosen}` : `✗ Your answer: ${a.chosen}  |  Correct answer: ${a.correctAnswer}`)
      : `Not answered  |  Correct answer: ${a.correctAnswer}`;
    doc.setTextColor(a.correct ? 47 : 163, a.correct ? 122 : 57, a.correct ? 79 : 43);
    ensureSpace(14);
    doc.text(statusText, margin, y);
    y += 16;

    if (q.justification) {
      doc.setTextColor(90, 90, 90);
      doc.setFont('helvetica', 'italic');
      const justLines = wrapText(`Explanation: ${q.justification}`, pageWidth - margin * 2, 9.5);
      ensureSpace(justLines.length * 12 + 10);
      doc.text(justLines, margin, y);
      y += justLines.length * 12 + 14;
    } else {
      y += 8;
    }
  });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('PMP Simulator — training tool, not affiliated with PMI®.', margin, 800);

  doc.save(`pmp-result-${catMeta.label.replace(/\s+/g, '_')}-${attempt.id}.pdf`);
}
