// ============================================================================
// chatbot.js — assistant PMP à réponses pré-programmées (pas d'IA générative).
// Matching par mots-clés : chaque entrée de la base de connaissances a une
// liste de mots-clés (fr + en) ; on choisit l'entrée dont le plus de
// mots-clés apparaissent dans le message de l'utilisateur.
// ============================================================================

const CHATBOT_KB = [
  {
    keywords: ['cpi', 'cost performance index', 'indice de performance des couts', 'indice de performance des coûts'],
    fr: "Le CPI (Cost Performance Index) = EV / AC. CPI > 1 : le projet dépense moins que prévu (bon). CPI < 1 : dépassement de budget. CPI = 1 : conforme au budget.",
    en: "CPI (Cost Performance Index) = EV / AC. CPI > 1: under budget (good). CPI < 1: over budget. CPI = 1: exactly on budget.",
  },
  {
    keywords: ['spi', 'schedule performance index', 'indice de performance des delais', 'indice de performance des délais'],
    fr: "Le SPI (Schedule Performance Index) = EV / PV. SPI > 1 : en avance sur le planning. SPI < 1 : en retard. SPI = 1 : conforme au planning.",
    en: "SPI (Schedule Performance Index) = EV / PV. SPI > 1: ahead of schedule. SPI < 1: behind schedule. SPI = 1: exactly on schedule.",
  },
  {
    keywords: ['evm', 'earned value', 'valeur acquise', 'ev', 'pv', 'ac', 'bac', 'eac', 'etc', 'vac'],
    fr: "L'EVM (Earned Value Management) compare trois valeurs : PV (valeur planifiée), EV (valeur acquise), AC (coût réel). Formules clés : CV = EV−AC, SV = EV−PV, EAC = BAC/CPI, ETC = EAC−AC, VAC = BAC−EAC.",
    en: "Earned Value Management compares three values: PV (planned value), EV (earned value), AC (actual cost). Key formulas: CV = EV−AC, SV = EV−PV, EAC = BAC/CPI, ETC = EAC−AC, VAC = BAC−EAC.",
  },
  {
    keywords: ['chemin critique', 'critical path', 'marge', 'float', 'slack'],
    fr: "Le chemin critique est la séquence d'activités la plus longue, avec une marge totale (float) de zéro. Tout retard sur une activité du chemin critique retarde le projet jour pour jour.",
    en: "The critical path is the longest sequence of activities, with zero total float. Any delay on a critical-path activity delays the whole project day for day.",
  },
  {
    keywords: ['agile', 'scrum', 'sprint', 'iteratif', 'itératif'],
    fr: "L'approche Agile (ex : Scrum) est itérative : le travail est découpé en sprints courts, avec un backlog priorisé, des rétrospectives et une équipe auto-organisée. Elle convient aux projets à fort niveau d'incertitude.",
    en: "Agile approaches (e.g. Scrum) are iterative: work is split into short sprints, with a prioritized backlog, retrospectives, and a self-organizing team. Best suited to projects with high uncertainty.",
  },
  {
    keywords: ['predictif', 'prédictif', 'cascade', 'waterfall', 'gantt'],
    fr: "L'approche prédictive (cascade) planifie le projet en détail en amont : périmètre figé, phases séquentielles, suivi via un diagramme de Gantt. Elle convient aux projets aux exigences stables et bien connues.",
    en: "The predictive (waterfall) approach plans the project in detail upfront: fixed scope, sequential phases, tracked via a Gantt chart. Best suited to projects with stable, well-understood requirements.",
  },
  {
    keywords: ['hybride', 'hybrid'],
    fr: "Une approche hybride combine des éléments prédictifs et agiles selon les contraintes du projet — par exemple, développement logiciel en sprints mais déploiement d'infrastructure planifié en Gantt.",
    en: "A hybrid approach combines predictive and agile elements depending on project constraints — for example, software developed in sprints while infrastructure rollout is planned on a Gantt chart.",
  },
  {
    keywords: ['product owner', 'po', 'scrum master', 'sm'],
    fr: "En Scrum, le Product Owner priorise le backlog et représente les besoins métier ; le Scrum Master facilite le processus et retire les obstacles pour l'équipe. Ni l'un ni l'autre ne \"manage\" l'équipe au sens classique.",
    en: "In Scrum, the Product Owner prioritizes the backlog and represents business needs; the Scrum Master facilitates the process and removes impediments for the team. Neither \"manages\" the team in the traditional sense.",
  },
  {
    keywords: ['sponsor', 'commanditaire'],
    fr: "Le sponsor est la personne (ou le groupe) qui finance le projet et défend sa légitimité au niveau stratégique. Le chef de projet gère l'exécution au quotidien ; le sponsor tranche les décisions majeures et débloque les ressources.",
    en: "The sponsor is the person (or group) funding the project and championing it at a strategic level. The project manager runs day-to-day execution; the sponsor makes major decisions and unlocks resources.",
  },
  {
    keywords: ['partie prenante', 'parties prenantes', 'stakeholder', 'stakeholders'],
    fr: "Les parties prenantes sont toutes les personnes ou organisations affectées par le projet ou pouvant l'affecter. Le PM doit les identifier tôt, analyser leur pouvoir/intérêt et adapter la stratégie d'engagement.",
    en: "Stakeholders are all people or organizations affected by, or able to affect, the project. The PM should identify them early, analyze their power/interest, and tailor an engagement strategy.",
  },
  {
    keywords: ['risque', 'risques', 'risk', 'registre des risques', 'risk register'],
    fr: "La gestion des risques suit un cycle : identifier, analyser (probabilité × impact), planifier une réponse (éviter, atténuer, transférer, accepter), puis surveiller. Le registre des risques centralise le suivi.",
    en: "Risk management follows a cycle: identify, analyze (probability × impact), plan a response (avoid, mitigate, transfer, accept), then monitor. The risk register centralizes tracking.",
  },
  {
    keywords: ['domaine', 'domaines pmi', 'pmi domains', 'people', 'process', 'business environment', 'personnes', 'processus', 'environnement commercial'],
    fr: "L'examen PMP couvre 3 domaines : Personnes (~42%), Processus (~50%), Environnement commercial (~8%). Ils reflètent les compétences humaines, techniques et stratégiques attendues d'un chef de projet.",
    en: "The PMP exam covers 3 domains: People (~42%), Process (~50%), Business Environment (~8%). They reflect the people, technical, and strategic skills expected of a project manager.",
  },
  {
    keywords: ['pdu', 'pdus', 'recertification', 'renouvellement'],
    fr: "Pour maintenir la certification PMP, il faut cumuler 60 PDU (Professional Development Units) sur un cycle de 3 ans et les déclarer via le CCRS du PMI.",
    en: "To maintain the PMP certification, you must earn 60 PDUs (Professional Development Units) over a 3-year cycle and report them through PMI's CCRS.",
  },
  {
    keywords: ['format examen', 'exam format', 'nombre de questions', 'duree examen', 'durée examen', 'combien de temps'],
    fr: "L'examen PMP officiel comporte 180 questions (dont certaines non notées) à traiter en 230 minutes, avec deux pauses de 10 minutes.",
    en: "The official PMP exam has 180 questions (some unscored) to complete in 230 minutes, with two 10-minute breaks.",
  },
  {
    keywords: ['controle des changements', 'contrôle des changements', 'change control', 'ccb', 'comite de pilotage'],
    fr: "Le contrôle intégré des changements passe par le CCB (Change Control Board) : toute demande de changement est documentée, évaluée en impact (coût/délai/risque) puis approuvée ou rejetée avant mise en œuvre.",
    en: "Integrated change control runs through the CCB (Change Control Board): every change request is documented, assessed for impact (cost/schedule/risk), then approved or rejected before implementation.",
  },
  {
    keywords: ['qualite', 'qualité', 'quality', 'cout de la qualite', 'coût de la qualité', 'cost of quality'],
    fr: "Le coût de la qualité inclut les coûts de conformité (prévention, contrôle) et de non-conformité (échecs internes/externes). Investir en prévention coûte généralement moins cher que corriger après coup.",
    en: "Cost of quality includes conformance costs (prevention, appraisal) and non-conformance costs (internal/external failure). Investing in prevention is usually cheaper than fixing issues later.",
  },
  {
    keywords: ['approvisionnement', 'procurement', 'contrat', 'contract', 'appel d\'offres'],
    fr: "En approvisionnement, les principaux types de contrats sont : prix fixe (FFP), coûts remboursables (CR), et temps et matériel (T&M) — chacun répartissant différemment le risque entre acheteur et vendeur.",
    en: "In procurement, the main contract types are: fixed price (FFP), cost-reimbursable (CR), and time & materials (T&M) — each allocating risk differently between buyer and seller.",
  },
  {
    keywords: ['bonjour', 'salut', 'hello', 'hi', 'hey'],
    fr: "Bonjour ! Pose-moi une question sur le PMP (formules, Agile, domaines, examen…) et je fais de mon mieux pour t'aider.",
    en: "Hello! Ask me a PMP question (formulas, Agile, domains, exam…) and I'll do my best to help.",
  },
  {
    keywords: ['merci', 'thanks', 'thank you'],
    fr: "Avec plaisir ! Bon courage pour la préparation 💪",
    en: "You're welcome! Good luck with your prep 💪",
  },
];

function chatbotAnswer(message) {
  const norm = message
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // enlève les accents pour un matching plus robuste
  let best = null;
  let bestScore = 0;
  CHATBOT_KB.forEach(entry => {
    let score = 0;
    entry.keywords.forEach(kw => {
      const kwNorm = kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (norm.includes(kwNorm)) score++;
    });
    if (score > bestScore) { bestScore = score; best = entry; }
  });

  // Recherche complémentaire dans les livres PMP uploadés par l'admin, s'il y en a.
  const bookMatches = (typeof searchBooks === 'function') ? searchBooks(message, 2) : [];

  const mainText = best ? (getLang() === 'en' ? best.en : best.fr) : (bookMatches.length ? null : t('chatbot_fallback'));

  return { text: mainText, sources: bookMatches };
}
