// ============================================================================
// chatbot.js — assistant PMP à réponses pré-programmées (pas d'IA générative).
// Matching par mots-clés (fr + en + ar) : on choisit l'entrée dont le plus de
// mots-clés apparaissent dans le message. Les mots-clés courts (≤ 3 lettres
// latines : "ev", "po", "hi"…) sont comparés comme des mots entiers pour éviter
// les fausses correspondances à l'intérieur d'autres mots.
// Contenu aligné sur le plan d'examen PMP de juillet 2026 (33 / 41 / 26 %).
// ============================================================================

const CHATBOT_KB = [
  {
    "keywords": [
      "cpi",
      "cost performance index",
      "indice de performance des couts",
      "indice de performance des coûts",
      "مؤشر أداء التكلفة",
      "أداء التكلفة"
    ],
    "fr": "Le CPI (Cost Performance Index) = EV / AC. CPI > 1 : le projet dépense moins que prévu (bon). CPI < 1 : dépassement de budget. CPI = 1 : conforme au budget.",
    "en": "CPI (Cost Performance Index) = EV / AC. CPI > 1: under budget (good). CPI < 1: over budget. CPI = 1: exactly on budget.",
    "ar": "مؤشر أداء التكلفة (CPI) = القيمة المكتسبة ÷ التكلفة الفعلية (EV / AC). إذا كان CPI أكبر من 1: المشروع ينفق أقل من المخطط (جيد). إذا كان أقل من 1: تجاوز في الميزانية. إذا كان يساوي 1: مطابق للميزانية."
  },
  {
    "keywords": [
      "spi",
      "schedule performance index",
      "indice de performance des delais",
      "indice de performance des délais",
      "مؤشر أداء الجدول",
      "أداء الجدول"
    ],
    "fr": "Le SPI (Schedule Performance Index) = EV / PV. SPI > 1 : en avance sur le planning. SPI < 1 : en retard. SPI = 1 : conforme au planning.",
    "en": "SPI (Schedule Performance Index) = EV / PV. SPI > 1: ahead of schedule. SPI < 1: behind schedule. SPI = 1: exactly on schedule.",
    "ar": "مؤشر أداء الجدول الزمني (SPI) = EV ÷ PV. إذا كان أكبر من 1: المشروع متقدم على الجدول. إذا كان أقل من 1: متأخر. إذا كان يساوي 1: مطابق للجدول."
  },
  {
    "keywords": [
      "evm",
      "earned value",
      "valeur acquise",
      "ev",
      "pv",
      "ac",
      "bac",
      "eac",
      "etc",
      "vac",
      "القيمة المكتسبة",
      "ادارة القيمة المكتسبة"
    ],
    "fr": "L'EVM (Earned Value Management) compare trois valeurs : PV (valeur planifiée), EV (valeur acquise), AC (coût réel). Formules clés : CV = EV−AC, SV = EV−PV, EAC = BAC/CPI, ETC = EAC−AC, VAC = BAC−EAC.",
    "en": "Earned Value Management compares three values: PV (planned value), EV (earned value), AC (actual cost). Key formulas: CV = EV−AC, SV = EV−PV, EAC = BAC/CPI, ETC = EAC−AC, VAC = BAC−EAC.",
    "ar": "تقارن إدارة القيمة المكتسبة (EVM) بين ثلاث قيم: PV (القيمة المخططة)، وEV (القيمة المكتسبة)، وAC (التكلفة الفعلية). أهم المعادلات: CV = EV − AC، وSV = EV − PV، وEAC = BAC ÷ CPI، وETC = EAC − AC، وVAC = BAC − EAC."
  },
  {
    "keywords": [
      "chemin critique",
      "critical path",
      "marge",
      "float",
      "slack",
      "المسار الحرج",
      "مسار حرج",
      "هامش"
    ],
    "fr": "Le chemin critique est la séquence d'activités la plus longue, avec une marge totale (float) de zéro. Tout retard sur une activité du chemin critique retarde le projet jour pour jour.",
    "en": "The critical path is the longest sequence of activities, with zero total float. Any delay on a critical-path activity delays the whole project day for day.",
    "ar": "المسار الحرج هو أطول تسلسل من الأنشطة، وهامشه الكلي (float) يساوي صفرًا. أي تأخير في نشاط على المسار الحرج يؤخر المشروع يومًا بيوم."
  },
  {
    "keywords": [
      "agile",
      "scrum",
      "sprint",
      "iteratif",
      "itératif",
      "اجايل",
      "مرن",
      "سكرم",
      "سبرنت",
      "رشيق"
    ],
    "fr": "L'approche Agile (ex : Scrum) est itérative : le travail est découpé en sprints courts, avec un backlog priorisé, des rétrospectives et une équipe auto-organisée. Elle convient aux projets à fort niveau d'incertitude.",
    "en": "Agile approaches (e.g. Scrum) are iterative: work is split into short sprints, with a prioritized backlog, retrospectives, and a self-organizing team. Best suited to projects with high uncertainty.",
    "ar": "النهج المرن (Agile)، مثل Scrum، تكراري: يُقسَّم العمل إلى دورات قصيرة (sprints) مع قائمة أعمال (backlog) مرتبة حسب الأولوية، واجتماعات تحسين (retrospectives)، وفريق ذاتي التنظيم. ويناسب المشاريع ذات مستوى عدم اليقين المرتفع."
  },
  {
    "keywords": [
      "predictif",
      "prédictif",
      "cascade",
      "waterfall",
      "gantt",
      "تنبؤي",
      "شلالي",
      "جانت"
    ],
    "fr": "L'approche prédictive (cascade) planifie le projet en détail en amont : périmètre figé, phases séquentielles, suivi via un diagramme de Gantt. Elle convient aux projets aux exigences stables et bien connues.",
    "en": "The predictive (waterfall) approach plans the project in detail upfront: fixed scope, sequential phases, tracked via a Gantt chart. Best suited to projects with stable, well-understood requirements.",
    "ar": "النهج التنبؤي (الشلالي) يخطط المشروع بالتفصيل مسبقًا: نطاق ثابت ومراحل متتابعة ومتابعة عبر مخطط جانت (Gantt). ويناسب المشاريع ذات المتطلبات المستقرة والمعروفة جيدًا."
  },
  {
    "keywords": [
      "hybride",
      "hybrid",
      "هجين"
    ],
    "fr": "Une approche hybride combine des éléments prédictifs et agiles selon les contraintes du projet — par exemple, développement logiciel en sprints mais déploiement d'infrastructure planifié en Gantt.",
    "en": "A hybrid approach combines predictive and agile elements depending on project constraints — for example, software developed in sprints while infrastructure rollout is planned on a Gantt chart.",
    "ar": "يجمع النهج الهجين بين عناصر تنبؤية وأخرى مرنة بحسب قيود المشروع، مثل تطوير البرمجيات في دورات sprints مع تخطيط نشر البنية التحتية على مخطط جانت."
  },
  {
    "keywords": [
      "product owner",
      "po",
      "scrum master",
      "sm",
      "مالك المنتج",
      "سكرم ماستر"
    ],
    "fr": "En Scrum, le Product Owner priorise le backlog et représente les besoins métier ; le Scrum Master facilite le processus et retire les obstacles pour l'équipe. Ni l'un ni l'autre ne \"manage\" l'équipe au sens classique.",
    "en": "In Scrum, the Product Owner prioritizes the backlog and represents business needs; the Scrum Master facilitates the process and removes impediments for the team. Neither \"manages\" the team in the traditional sense.",
    "ar": "في Scrum، يرتّب مالك المنتج (Product Owner) قائمة الأعمال ويمثّل احتياجات العمل، بينما يسهّل Scrum Master العملية ويزيل العوائق أمام الفريق. وليس أي منهما «مديرًا» للفريق بالمعنى التقليدي."
  },
  {
    "keywords": [
      "sponsor",
      "commanditaire",
      "الراعي",
      "راعي المشروع",
      "سبونسر"
    ],
    "fr": "Le sponsor est la personne (ou le groupe) qui finance le projet et défend sa légitimité au niveau stratégique. Le chef de projet gère l'exécution au quotidien ; le sponsor tranche les décisions majeures et débloque les ressources.",
    "en": "The sponsor is the person (or group) funding the project and championing it at a strategic level. The project manager runs day-to-day execution; the sponsor makes major decisions and unlocks resources.",
    "ar": "الراعي (Sponsor) هو الشخص أو المجموعة التي تموّل المشروع وتدافع عن مشروعيته على المستوى الاستراتيجي. يدير مدير المشروع التنفيذ اليومي، ويحسم الراعي القرارات الكبرى ويوفّر الموارد."
  },
  {
    "keywords": [
      "partie prenante",
      "parties prenantes",
      "stakeholder",
      "stakeholders",
      "اصحاب المصلحة",
      "الاطراف المعنية",
      "صاحب المصلحة"
    ],
    "fr": "Les parties prenantes sont toutes les personnes ou organisations affectées par le projet ou pouvant l'affecter. Le PM doit les identifier tôt, analyser leur pouvoir/intérêt et adapter la stratégie d'engagement.",
    "en": "Stakeholders are all people or organizations affected by, or able to affect, the project. The PM should identify them early, analyze their power/interest, and tailor an engagement strategy.",
    "ar": "أصحاب المصلحة هم جميع الأشخاص أو الجهات المتأثرة بالمشروع أو القادرة على التأثير فيه. على مدير المشروع تحديدهم مبكرًا، وتحليل سلطتهم واهتمامهم، وتكييف استراتيجية إشراكهم."
  },
  {
    "keywords": [
      "risque",
      "risques",
      "risk",
      "registre des risques",
      "risk register",
      "المخاطر",
      "مخاطر",
      "سجل المخاطر"
    ],
    "fr": "La gestion des risques suit un cycle : identifier, analyser (probabilité × impact), planifier une réponse (éviter, atténuer, transférer, accepter), puis surveiller. Le registre des risques centralise le suivi.",
    "en": "Risk management follows a cycle: identify, analyze (probability × impact), plan a response (avoid, mitigate, transfer, accept), then monitor. The risk register centralizes tracking.",
    "ar": "تتبع إدارة المخاطر دورة: تحديد المخاطر، ثم تحليلها (الاحتمال × الأثر)، ثم تخطيط الاستجابة (تجنّب، تخفيف، نقل، قبول)، ثم المتابعة. ويجمع سجل المخاطر المتابعة في مكان واحد."
  },
  {
    "keywords": [
      "domaine",
      "domaines pmi",
      "pmi domains",
      "people",
      "process",
      "business environment",
      "personnes",
      "processus",
      "environnement commercial",
      "المجالات",
      "مجالات",
      "الافراد",
      "العمليات",
      "بيئة الاعمال"
    ],
    "fr": "L'examen PMP couvre 3 domaines selon le plan d'examen 2026 : People (33 %), Process (41 %), Business Environment (26 %). Ils reflètent les compétences humaines, techniques et stratégiques attendues d'un chef de projet.",
    "en": "The PMP exam covers 3 domains under the 2026 exam content outline: People (33%), Process (41%), Business Environment (26%). They reflect the people, technical, and strategic skills expected of a project manager.",
    "ar": "يغطي امتحان PMP ثلاثة مجالات بحسب مخطط المحتوى لعام 2026: الأفراد (People) 33٪، والعمليات (Process) 41٪، وبيئة الأعمال (Business Environment) 26٪. وتعكس هذه المجالات المهارات البشرية والتقنية والاستراتيجية المطلوبة من مدير المشروع."
  },
  {
    "keywords": [
      "pdu",
      "pdus",
      "recertification",
      "renouvellement",
      "وحدات التطوير المهني",
      "تجديد الشهادة",
      "maintain pmp",
      "renew",
      "renouveler"
    ],
    "fr": "Pour maintenir la certification PMP, il faut cumuler 60 PDU (Professional Development Units) sur un cycle de 3 ans et les déclarer via le CCRS du PMI.",
    "en": "To maintain the PMP certification, you must earn 60 PDUs (Professional Development Units) over a 3-year cycle and report them through PMI's CCRS.",
    "ar": "للحفاظ على شهادة PMP يجب تجميع 60 وحدة تطوير مهني (PDU) خلال دورة مدتها 3 سنوات والإبلاغ عنها عبر نظام CCRS التابع لمعهد PMI."
  },
  {
    "keywords": [
      "format examen",
      "exam format",
      "nombre de questions",
      "duree examen",
      "durée examen",
      "combien de temps",
      "عدد الاسئلة",
      "مدة الامتحان",
      "شكل الامتحان",
      "كم مدة",
      "how long",
      "how many questions",
      "combien de questions",
      "duree",
      "exam length",
      "minutes",
      "كم سؤال",
      "كم عدد الاسئلة"
    ],
    "fr": "L'examen PMP officiel (depuis le 9 juillet 2026) comporte 180 questions (170 notées et 10 non notées) à traiter en 240 minutes, avec deux pauses de 10 minutes. Il inclut des études de cas et des questions fondées sur un graphique, en plus des formats classiques.",
    "en": "The official PMP exam (since July 9, 2026) has 180 questions (170 scored and 10 unscored) to complete in 240 minutes, with two 10-minute breaks. It includes case-based and graphic-based questions in addition to the classic formats.",
    "ar": "يضم امتحان PMP الرسمي (منذ 9 يوليو 2026) 180 سؤالًا (170 محتسبة و10 غير محتسبة) تُجاب خلال 240 دقيقة، مع استراحتين مدة كل منهما 10 دقائق. ويتضمن دراسات حالة وأسئلة قائمة على رسوم بيانية إلى جانب الأنواع التقليدية."
  },
  {
    "keywords": [
      "eco 2026",
      "nouvel examen",
      "new exam",
      "juillet 2026",
      "july 2026",
      "pmbok 8",
      "etude de cas",
      "case study",
      "question graphique",
      "graphic",
      "glisser",
      "drag and drop",
      "hotspot",
      "zone sensible",
      "نوع الاسئلة",
      "انواع الاسئلة",
      "امتحان 2026",
      "دراسة حالة",
      "pmbok 8"
    ],
    "fr": "Depuis le 9 juillet 2026, le PMP suit un nouveau plan d'examen (aligné sur le PMBOK 8) : People 33 %, Process 41 %, Business Environment 26 %. Les questions incluent des études de cas (un scénario suivi de plusieurs questions), des questions fondées sur un graphique et les formats classiques (choix unique ou multiple, glisser-déposer, zone sensible, liste déroulante). L'IA et la durabilité apparaissent dans les scénarios.",
    "en": "Since July 9, 2026, the PMP follows a new exam content outline (aligned with PMBOK 8): People 33%, Process 41%, Business Environment 26%. Questions include case sets (one scenario followed by several questions), graphic-based questions, and the classic formats (single or multiple choice, drag and drop, hotspot, drop-down). AI and sustainability appear within the scenarios.",
    "ar": "منذ 9 يوليو 2026 يتبع امتحان PMP مخطط محتوى جديدًا (متوافقًا مع PMBOK 8): الأفراد 33٪، والعمليات 41٪، وبيئة الأعمال 26٪. وتشمل الأسئلة دراسات حالة (سيناريو يليه عدة أسئلة)، وأسئلة قائمة على رسوم بيانية، إضافةً إلى الأنواع التقليدية (اختيار واحد أو متعدد، سحب وإفلات، منطقة تفاعلية، قائمة منسدلة). ويظهر الذكاء الاصطناعي والاستدامة داخل السيناريوهات."
  },
  {
    "keywords": [
      "controle des changements",
      "contrôle des changements",
      "change control",
      "ccb",
      "comite de pilotage",
      "التحكم في التغيير",
      "ادارة التغيير",
      "لجنة التغيير"
    ],
    "fr": "Le contrôle intégré des changements passe par le CCB (Change Control Board) : toute demande de changement est documentée, évaluée en impact (coût/délai/risque) puis approuvée ou rejetée avant mise en œuvre.",
    "en": "Integrated change control runs through the CCB (Change Control Board): every change request is documented, assessed for impact (cost/schedule/risk), then approved or rejected before implementation.",
    "ar": "تتم الرقابة المتكاملة على التغييرات عبر لجنة التحكم في التغيير (CCB): يُوثَّق كل طلب تغيير، ويُقيَّم أثره (التكلفة/الجدول/المخاطر)، ثم يُعتمد أو يُرفض قبل التنفيذ."
  },
  {
    "keywords": [
      "qualite",
      "qualité",
      "quality",
      "cout de la qualite",
      "coût de la qualité",
      "cost of quality",
      "الجودة",
      "تكلفة الجودة"
    ],
    "fr": "Le coût de la qualité inclut les coûts de conformité (prévention, contrôle) et de non-conformité (échecs internes/externes). Investir en prévention coûte généralement moins cher que corriger après coup.",
    "en": "Cost of quality includes conformance costs (prevention, appraisal) and non-conformance costs (internal/external failure). Investing in prevention is usually cheaper than fixing issues later.",
    "ar": "تشمل تكلفة الجودة تكاليف المطابقة (الوقاية والتقييم) وتكاليف عدم المطابقة (الإخفاقات الداخلية والخارجية). والاستثمار في الوقاية أقل كلفة عادةً من التصحيح لاحقًا."
  },
  {
    "keywords": [
      "approvisionnement",
      "procurement",
      "contrat",
      "contract",
      "appel d'offres",
      "المشتريات",
      "العقود",
      "عقد",
      "مناقصة"
    ],
    "fr": "En approvisionnement, les principaux types de contrats sont : prix fixe (FFP), coûts remboursables (CR), et temps et matériel (T&M) — chacun répartissant différemment le risque entre acheteur et vendeur.",
    "en": "In procurement, the main contract types are: fixed price (FFP), cost-reimbursable (CR), and time & materials (T&M) — each allocating risk differently between buyer and seller.",
    "ar": "في المشتريات، أنواع العقود الرئيسية هي: السعر الثابت (FFP)، والتكاليف القابلة للسداد (CR)، والوقت والمواد (T&M)، ويوزّع كل نوع المخاطر بشكل مختلف بين المشتري والبائع."
  },
  {
    "keywords": [
      "bonjour",
      "salut",
      "hello",
      "hi",
      "hey",
      "مرحبا",
      "اهلا",
      "السلام عليكم"
    ],
    "fr": "Bonjour ! Pose-moi une question sur le PMP (formules, Agile, domaines, examen…) et je fais de mon mieux pour t'aider.",
    "en": "Hello! Ask me a PMP question (formulas, Agile, domains, exam…) and I'll do my best to help.",
    "ar": "مرحبًا! اسألني عن PMP (المعادلات، Agile، المجالات، الامتحان…) وسأبذل جهدي لمساعدتك."
  },
  {
    "keywords": [
      "merci",
      "thanks",
      "thank you",
      "شكرا"
    ],
    "fr": "Avec plaisir ! Bon courage pour la préparation 💪",
    "en": "You're welcome! Good luck with your prep 💪",
    "ar": "على الرحب والسعة! بالتوفيق في التحضير 💪"
  }
]

// Normalisation commune (message et mots-clés) : minuscules, sans accents latins,
// sans voyelles brèves arabes, formes de l'alif et ta marbouta unifiées.
function chatbotNormalize(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/[\u0623\u0625\u0622]/g, '\u0627')
    .replace(/\u0649/g, '\u064A')
    .replace(/\u0629/g, '\u0647');
}

// Détecte la langue du message (fr / en / ar), indépendamment de la langue
// d'affichage du site : le chatbot répond dans la langue de la question posée.
function detectMessageLang(text) {
  const arChars = (String(text).match(/[\u0600-\u06FF]/g) || []).length;
  const latinChars = (String(text).match(/[A-Za-z\u00C0-\u017F]/g) || []).length;
  if (arChars > 0 && arChars >= latinChars) return 'ar';
  const norm = ' ' + chatbotNormalize(text) + ' ';
  const frSignals = [' le ', ' la ', ' les ', ' un ', ' une ', ' des ', ' est ', ' es ', ' ai ', ' quel ', ' quelle ',
    ' comment ', ' pourquoi ', ' avec ', ' dans ', ' pour ', ' qu ', ' cest ', ' etre ', ' avoir ', ' que ',
    ' qui ', ' tu ', ' je ', ' vous ', ' peux ', ' peut ', ' aide ', ' merci ', ' bonjour ', ' quest'];
  const enSignals = [' the ', ' is ', ' are ', ' what ', ' how ', ' why ', ' with ', ' in ', ' for ', ' does ',
    ' do ', ' you ', ' can ', ' help ', ' thanks ', ' hello ', ' hi ', ' please ', ' i ', ' my '];
  const hasAccents = /[éèêëàâçîïôûù]/.test(String(text).toLowerCase());
  let frScore = hasAccents ? 1 : 0;
  let enScore = 0;
  frSignals.forEach(s => { if (norm.includes(s)) frScore++; });
  enSignals.forEach(s => { if (norm.includes(s)) enScore++; });
  return enScore > frScore ? 'en' : 'fr'; // égalité ou signal insuffisant → français par défaut
}

function chatbotKeywordMatches(normMessage, kwNorm) {
  if (!kwNorm) return false;
  // mots-clés latins très courts : correspondance sur mot entier uniquement
  if (/^[a-z0-9]{1,3}$/.test(kwNorm)) {
    return new RegExp('(^|[^a-z0-9])' + kwNorm + '([^a-z0-9]|$)').test(normMessage);
  }
  return normMessage.includes(kwNorm);
}

const CHATBOT_FALLBACK = {
  fr: "Je n'ai pas de réponse pré-programmée pour cette question. Essaie avec des mots-clés comme : EVM, CPI, SPI, Agile, Scrum, Sprint, chemin critique, parties prenantes, risque, domaines PMI, PDU.",
  en: "I don't have a pre-programmed answer for that yet. Try keywords like: EVM, CPI, SPI, Agile, Scrum, Sprint, critical path, stakeholders, risk, PMI domains, PDU.",
  ar: "ليست لدي إجابة جاهزة عن هذا السؤال. جرّب كلمات مفتاحية مثل: EVM، CPI، SPI، Agile، Scrum، المسار الحرج، أصحاب المصلحة، المخاطر، مجالات PMI، PDU.",
};

function chatbotAnswer(message) {
  const lang = detectMessageLang(message);
  const norm = chatbotNormalize(message);
  let best = null;
  let bestScore = 0;
  CHATBOT_KB.forEach(entry => {
    let score = 0;
    entry.keywords.forEach(kw => {
      if (chatbotKeywordMatches(norm, chatbotNormalize(kw))) score++;
    });
    if (score > bestScore) { bestScore = score; best = entry; }
  });

  // Recherche complémentaire dans les livres PMP uploadés par l'admin, s'il y en a.
  const bookMatches = (typeof searchBooks === 'function') ? searchBooks(message, 2) : [];

  const mainText = best
    ? (best[lang] || best.fr)
    : (bookMatches.length ? null : (CHATBOT_FALLBACK[lang] || CHATBOT_FALLBACK.fr));

  return { text: mainText, sources: bookMatches };
}
