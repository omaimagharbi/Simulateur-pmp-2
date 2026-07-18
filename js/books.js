// ============================================================================
// books.js — extraction de texte des PDF (bibliothèque de livres PMP partagée)
// et recherche de passages pertinents pour enrichir les réponses du chatbot.
// On ne stocke QUE le texte extrait par morceaux ("chunks"), jamais le PDF
// brut, pour rester dans les limites de stockage du navigateur.
// ============================================================================

const CHUNK_SIZE = 700;

async function extractPdfChunks(file, onProgress) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const chunks = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map(it => it.str).join(' ').replace(/\s+/g, ' ').trim();
    let start = 0;
    while (start < text.length) {
      let end = Math.min(start + CHUNK_SIZE, text.length);
      if (end < text.length) {
        const nextPeriod = text.indexOf('.', end);
        if (nextPeriod !== -1 && nextPeriod - end < 150) end = nextPeriod + 1;
      }
      const slice = text.slice(start, end).trim();
      if (slice.length > 40) chunks.push({ page: i, text: slice });
      start = end;
    }
    if (onProgress) onProgress(i, pdf.numPages);
  }
  return chunks;
}

function normalizeForSearch(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ');
}

const SEARCH_STOPWORDS = new Set([
  'le', 'la', 'les', 'de', 'des', 'du', 'un', 'une', 'et', 'en', 'au', 'aux', 'est',
  'pour', 'que', 'qui', 'dans', 'sur', 'avec', 'ce', 'ces', 'se', 'sa', 'son', 'ses',
  'par', 'plus', 'ou', 'est-ce', 'comment', 'quoi', 'quel', 'quelle', 'quels', 'quelles',
  'the', 'of', 'in', 'on', 'for', 'is', 'are', 'to', 'and', 'what', 'how', 'does', 'do',
  'a', 'an', 'it', 'this', 'that',
]);

// Retourne les meilleurs passages de livres correspondant à la question (0 à maxResults).
function searchBooks(query, maxResults = 2) {
  const chunks = Store.getAllBookChunks();
  if (!chunks.length) return [];
  const qTokens = normalizeForSearch(query).split(/\s+/).filter(w => w.length > 2 && !SEARCH_STOPWORDS.has(w));
  if (!qTokens.length) return [];
  const scored = chunks.map(c => {
    const cn = normalizeForSearch(c.text);
    let score = 0;
    qTokens.forEach(tok => { if (cn.includes(tok)) score++; });
    return { ...c, score };
  }).filter(c => c.score > 0);
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, maxResults);
}

function estimateStorageKB(str) {
  return Math.round((str.length * 2) / 1024); // approx UTF-16 bytes en localStorage
}
