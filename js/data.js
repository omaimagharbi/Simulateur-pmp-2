// Banque de questions PMP — FR et EN, même numérotation d'id dans les deux langues.
const QUESTIONS_FR = [
  {
    "id": 1,
    "exam": 1,
    "num_in_exam": 1,
    "domain": "People",
    "text": "Deux membres clés de l'équipe projet sont en désaccord constant sur l'architecture technique d'un nouveau produit. Ce conflit retarde les livrables de l'itération actuelle. Que doit faire le chef de projet en PREMIER ?",
    "options": {
      "A": "Choisir la solution technique qui présente le moins de risques financiers pour le projet.",
      "B": "Demander aux deux membres de l'équipe de se réunir en privé pour résoudre leur différend.",
      "C": "Organiser une réunion avec les deux membres pour écouter leurs points de vue et faciliter un consensus.",
      "D": "Escalader la situation au directeur des ressources humaines pour un arbitrage officiel."
    },
    "answer": "C",
    "justification": "Le PMI privilégie la collaboration et la résolution des conflits de manière constructive. Organiser une réunion pour faciliter un consensus (méthode de confrontation/résolution de problèmes) s'attaque à la racine du problème tout en respectant l'équipe. L'option B reporte la responsabilité, l'option A ignore le côté humain, l'option D est une escalade prématurée.",
    "category": "Exam"
  },
  {
    "id": 2,
    "exam": 1,
    "num_in_exam": 2,
    "domain": "People",
    "text": "Un projet de transformation numérique utilise une approche agile. Lors de la revue de sprint, un client majeur exprime sa profonde frustration car une fonctionnalité clé n'a pas été développée comme il l'imaginait. Quelle est la meilleure action pour le chef de projet (Scrum Master) ?",
    "options": {
      "A": "Rappeler au client que les spécifications ont été validées lors de la planification du sprint.",
      "B": "Collaborer avec le Product Owner et le client pour affiner les critères d'acceptation dans le Product Backlog.",
      "C": "Demander à l'équipe de développement de modifier immédiatement la fonctionnalité durant la réunion.",
      "D": "Soumettre une demande de changement formelle au comité de contrôle des modifications (CCB)."
    },
    "answer": "B",
    "justification": "En mode Agile, la revue de sprint sert à collecter les feedbacks. Face à une insatisfaction, le Scrum Master doit orienter l'action vers la collaboration entre le Product Owner (responsable du contenu) et le client pour ajuster le backlog. Les options A et D adoptent une approche contractuelle rigide non adaptée à l'esprit agile.",
    "category": "Agile"
  },
  {
    "id": 3,
    "exam": 1,
    "num_in_exam": 3,
    "domain": "People",
    "text": "Un chef de projet remarque qu'un membre très performant de l'équipe semble démotivé depuis deux semaines, ce qui commence à impacter la qualité de son travail. Quelle démarche le chef de projet doit-il adopter ?",
    "options": {
      "A": "Attendre la prochaine évaluation annuelle pour aborder le sujet formellement.",
      "B": "Planifier un entretien individuel informel pour comprendre les raisons de cette baisse de motivation.",
      "C": "Assigner les tâches critiques de cette personne à un autre membre de l'équipe par sécurité.",
      "D": "Émettre un avertissement écrit concernant la baisse de qualité de ses livrables."
    },
    "answer": "B",
    "justification": "Un bon leader (Servant Leader) fait preuve d'empathie et d'intelligence émotionnelle. Comprendre la cause sous-jacente en privé est la première démarche avant de prendre des mesures disciplinaires ou organisationnelles.",
    "category": "Exam"
  },
  {
    "id": 4,
    "exam": 1,
    "num_in_exam": 4,
    "domain": "People",
    "text": "Une équipe agile est géographiquement dispersée sur trois fuseaux horaires différents. Les membres de l'équipe se plaignent que les réunions de coordination quotidiennes (Daily Standup) sont trop tardives ou trop matinales pour certains d'entre eux. Comment le chef de projet doit-il réagir ?",
    "options": {
      "A": "Maintenir l'horaire actuel basé sur le fuseau horaire du siège social de l'entreprise.",
      "B": "Faciliter une session de travail avec l'équipe pour convenir ensemble d'une solution de communication (ex: standups asynchrones ou horaires tournants).",
      "C": "Annuler la réunion quotidienne et la remplacer par un rapport d'avancement hebdomadaire par e-mail.",
      "D": "Demander aux membres de l'équipe les moins bien lotis de faire un effort pour le bien du projet."
    },
    "answer": "B",
    "justification": "L'agilité repose sur des équipes auto-organisées. Le chef de projet ne doit pas imposer une solution unilatérale, mais faciliter un atelier pour que l'équipe trouve le meilleur compromis de communication.",
    "category": "Agile"
  },
  {
    "id": 5,
    "exam": 1,
    "num_in_exam": 5,
    "domain": "People",
    "text": "Le Product Owner d'un projet agile ajoute constamment de nouveaux éléments prioritaires au milieu d'un sprint en cours, ce qui perturbe l'équipe de développement et l'empêche d'atteindre son objectif de sprint (Sprint Goal). Que doit faire le Scrum Master / Chef de projet ?",
    "options": {
      "A": "Accepter les demandes du Product Owner car le client est roi en agilité.",
      "B": "Expliquer au Product Owner l'impact de ces perturbations et l'aider à prioriser ces éléments pour le prochain sprint.",
      "C": "Demander à l'équipe de faire des heures supplémentaires pour absorber la charge de travail additionnelle.",
      "D": "Porter plainte auprès du Sponsor du projet concernant le comportement du Product Owner."
    },
    "answer": "B",
    "justification": "Le périmètre d'un sprint en cours est protégé pour garantir la concentration de l'équipe. Le Scrum Master doit coacher le Product Owner sur les règles de Scrum afin de préserver l'efficacité globale du projet.",
    "category": "Agile"
  },
  {
    "id": 6,
    "exam": 1,
    "num_in_exam": 6,
    "domain": "People",
    "text": "Lors de la constitution d'une nouvelle équipe de projet transversale, les membres affichent des comportements défensifs, se disputent l'attribution des rôles et testent les limites de l'autorité du chef de projet. À quelle étape du modèle de Tuckman cette équipe se trouve-t-elle ?",
    "options": {
      "A": "Forming (Constitution)",
      "B": "Storming (Tension)",
      "C": "Norming (Normalisation)",
      "D": "Performing (Production)"
    },
    "answer": "B",
    "justification": "L'étape de \"Storming\" (Tension) se caractérise par des conflits, des luttes de pouvoir et des désaccords sur l'organisation de l'équipe avant qu'elle ne commence à se normaliser.",
    "category": "Exam"
  },
  {
    "id": 7,
    "exam": 1,
    "num_in_exam": 7,
    "domain": "People",
    "text": "Un projet complexe implique une partie prenante influente qui est historiquement opposée aux objectifs du projet et qui pourrait bloquer son adoption finale. Quelle est la meilleure stratégie pour gérer cette partie prenante ?",
    "options": {
      "A": "Ignorer cette partie prenante et se concentrer sur les soutiens du projet.",
      "B": "L'impliquer activement et tôt dans les discussions pour comprendre ses préoccupations et chercher des compromis.",
      "C": "Demander au Sponsor d'exclure cette personne du comité de pilotage.",
      "D": "Lui envoyer uniquement des rapports de statut mensuels minimalistes pour éviter les conflits."
    },
    "answer": "B",
    "justification": "Gérer les parties prenantes résistantes ou négatives nécessite une stratégie d'engagement actif. Comprendre leurs objections en amont permet souvent de transformer un opposant en allié ou d'atténuer un risque politique majeur.",
    "category": "Exam"
  },
  {
    "id": 8,
    "exam": 1,
    "num_in_exam": 8,
    "domain": "People",
    "text": "Un membre de votre équipe projet commet une erreur technique majeure qui entraîne le retard d'un jalon important. Le Sponsor du projet exige publiquement de savoir qui est le responsable de cette erreur. Que doit faire le chef de projet ?",
    "options": {
      "A": "Donner le nom du membre de l'équipe au Sponsor pour préserver sa propre crédibilité.",
      "B": "Assumer la responsabilité globale de l'échec face au Sponsor, puis traiter le problème en privé avec l'équipe.",
      "C": "Blâmer le manque de clarté des exigences du client pour justifier l'erreur.",
      "D": "Ignorer la demande du Sponsor et continuer le travail comme si de rien n'était."
    },
    "answer": "B",
    "justification": "Le chef de projet est ultimement responsable des résultats de son projet devant le Sponsor (\"Accountable\"). Blâmer publiquement un membre détruit la sécurité psychologique de l'équipe. L'erreur se traite en interne pour en tirer des leçons.",
    "category": "Exam"
  },
  {
    "id": 9,
    "exam": 1,
    "num_in_exam": 9,
    "domain": "People",
    "text": "Une équipe projet travaille sous une forte pression. Le chef de projet souhaite développer l'intelligence émotionnelle collective de l'équipe pour améliorer la collaboration. Quelle action favorise le plus cet objectif ?",
    "options": {
      "A": "Mettre en place un tableau de classement des performances individuelles des employés.",
      "B": "Encourager l'expression ouverte des sentiments et des frustrations lors des rétrospectives dans un cadre sécurisant.",
      "C": "Remplacer les réunions en présentiel par des communications strictes par tickets (Jira).",
      "D": "Imposer des sessions de consolidation d'équipe (*team building*) obligatoires le week-end."
    },
    "answer": "B",
    "justification": "Créer un espace sécurisé où l'équipe peut exprimer ses frustrations (comme lors d'une rétrospective) développe la confiance mutuelle et la conscience de soi collective, piliers de l'intelligence émotionnelle.",
    "category": "Exam"
  },
  {
    "id": 10,
    "exam": 1,
    "num_in_exam": 10,
    "domain": "People",
    "text": "Un chef de projet dirige une équipe hautement qualifiée et autonome. Les membres de l'équipe sont capables de prendre des décisions techniques par eux-mêmes et gèrent efficacement leur charge de travail quotidienne. Quel style de leadership le chef de projet doit-il privilégier ici ?",
    "options": {
      "A": "Directif (Autocratique)",
      "B": "Délégatif (Laissez-faire / Serviteur)",
      "C": "Transactionnel",
      "D": "Bureaucratique"
    },
    "answer": "B",
    "justification": "Face à une équipe d'experts très matures et autonomes, le style de leadership serviteur ou délégatif est le plus efficace. Un style directif serait contre-productif et démotivant.",
    "category": "Exam"
  },
  {
    "id": 11,
    "exam": 1,
    "num_in_exam": 11,
    "domain": "People",
    "text": "Pendant une réunion de projet, un expert technique utilise un jargon très complexe qui sème la confusion chez le représentant du département marketing, une partie prenante clé. Quelle compétence le chef de projet doit-il utiliser immédiatement pour résoudre cette situation ?",
    "options": {
      "A": "Écoute active et reformulation active pour traduire les concepts techniques en termes business.",
      "B": "Gestion du temps pour interrompre la réunion et passer au point suivant.",
      "C": "Pouvoir formel pour ordonner à l'expert technique de se taire.",
      "D": "Négociation de contrats pour modifier les obligations de communication."
    },
    "answer": "A",
    "justification": "Le chef de projet agit comme un pont de communication entre les experts techniques et le business. Traduire le jargon permet de maintenir l'alignement de toutes les parties prenantes.",
    "category": "Exam"
  },
  {
    "id": 12,
    "exam": 1,
    "num_in_exam": 12,
    "domain": "People",
    "text": "Un projet international implique des équipes basées en Europe et en Asie. Le chef de projet constate des malentendus répétés concernant le respect des délais, dus à des différences de perception culturelle de l'urgence. Quelle est la meilleure approche pour corriger cela ?",
    "options": {
      "A": "Imposer les normes de travail européennes à l'ensemble de l'équipe internationale.",
      "B": "Organiser un atelier de sensibilisation culturelle et co-créer une charte d'équipe définissant des attentes claires pour tous.",
      "C": "Remplacer les membres de l'équipe asiatique par des consultants locaux.",
      "D": "Réduire les interactions directes entre les deux équipes pour limiter les frictions."
    },
    "answer": "B",
    "justification": "Les projets multiculturels nécessitent l'établissement d'une compréhension commune. Co-créer des règles du jeu via une charte d'équipe respecte la diversité tout en fixant un cadre professionnel commun.",
    "category": "Exam"
  },
  {
    "id": 13,
    "exam": 1,
    "num_in_exam": 13,
    "domain": "People",
    "text": "Un membre junior de l'équipe exprime le souhait de développer ses compétences en gestion des risques, bien que cela ne fasse pas partie de ses tâches actuelles. Comment le chef de projet doit-il réagir ?",
    "options": {
      "A": "Refuser, car le projet n'a pas de budget pour des formations annexes.",
      "B": "Lui proposer de travailler en binôme (*shadowing*) avec un gestionnaire de risques senior lors des prochaines sessions d'identification.",
      "C": "Lui dire d'attendre la fin du projet en cours pour explorer de nouveaux domaines.",
      "D": "Modifier immédiatement sa fiche de poste pour en faire le responsable officiel des risques du projet."
    },
    "answer": "B",
    "justification": "Encourager le développement professionnel continu des membres de l'équipe (par le biais du compagnonnage ou *shadowing*) augmente la polyvalence globale de l'équipe et la motivation, sans impacter lourdement le budget.",
    "category": "Exam"
  },
  {
    "id": 14,
    "exam": 1,
    "num_in_exam": 14,
    "domain": "Process",
    "text": "Un projet prédictif (Cycle en V) est en cours d'exécution. Le client demande une modification majeure du périmètre qui ajoutera de nouvelles fonctionnalités au logiciel en développement. Quelle est la PREMIÈRE action que le chef de projet doit entreprendre ?",
    "options": {
      "A": "Refuser la demande car le périmètre initial a déjà été validé par écrit.",
      "B": "Analyser l'impact de ce changement sur le coût, le calendrier et la qualité du projet.",
      "C": "Demander à l'équipe technique de commencer immédiatement à coder les modifications.",
      "D": "Présenter directement la demande au comité de contrôle des modifications (CCB) pour approbation."
    },
    "answer": "B",
    "justification": "Règle d'or du PMI en cycle prédictif : Face à une demande de changement, il faut toujours analyser l'impact en premier lieu sur le triangle d'or (Coût, Délais, Périmètre) avant de soumettre au CCB ou de refuser.",
    "category": "Predictif"
  },
  {
    "id": 15,
    "exam": 1,
    "num_in_exam": 15,
    "domain": "Process",
    "text": "Le calcul de la performance d'un projet indique un indice de performance des coûts (CPI) de 0,85 et un indice de performance des délais (SPI) de 1,15. Comment interprétez-vous la situation de ce projet ?",
    "options": {
      "A": "Le projet est en avance sur le calendrier et en dessous du budget.",
      "B": "Le projet est en retard sur le calendrier et au-dessus du budget.",
      "C": "Le projet est en avance sur le calendrier et au-dessus du budget.",
      "D": "Le projet est en retard sur le calendrier et en dessous du budget."
    },
    "answer": "C",
    "justification": "Un SPI \\ 1 signifie que le projet est en avance sur le calendrier (1,15). Un CPI \\< 1 signifie que le projet dépense plus que prévu, il est donc au-dessus du budget (0,85).",
    "category": "Predictif"
  },
  {
    "id": 16,
    "exam": 1,
    "num_in_exam": 16,
    "domain": "Process",
    "text": "Lors de la phase de planification d'un projet de construction, l'équipe identifie un risque : une pénurie potentielle de ciment en raison de tensions sur le marché mondial. L'équipe décide de signer un contrat d'approvisionnement à prix fixe avec un fournisseur local pour garantir les livraisons. Quelle stratégie de réponse aux risques a été utilisée ?",
    "options": {
      "A": "Éviter (Avoid)",
      "B": "Transférer (Transfer)",
      "C": "Atténuer (Mitigate)",
      "D": "Accepter (Accept)"
    },
    "answer": "C",
    "justification": "Signer un contrat à prix fixe pour sécuriser les volumes réduit la probabilité et l'impact de la pénurie. Il s'agit d'une stratégie d'atténuation (Mitigate). Si le risque avait été entièrement transféré à une assurance ou une tierce partie pour les coûts financiers, cela aurait été un transfert. Ici, l'action réduit activement l'impact sur le chantier.",
    "category": "Exam"
  },
  {
    "id": 17,
    "exam": 1,
    "num_in_exam": 17,
    "domain": "Process",
    "text": "Un chef de projet gère un projet informatique hybride. Le développement logiciel suit une approche agile (Scrum), tandis que le déploiement des serveurs physiques suit une approche prédictive. L'équipe d'infrastructure réseau accuse un retard critique. Où le chef de projet doit-il chercher l'impact de ce retard sur la date de fin du projet global ?",
    "options": {
      "A": "Dans le Product Backlog mis à jour par le Product Owner.",
      "B": "Sur le chemin critique du diagramme de réseau du projet.",
      "C": "Dans le graphique de vélocité de l'équipe de développement.",
      "D": "Dans le registre des enseignements tirés (*Lessons Learned Register*)."
    },
    "answer": "B",
    "justification": "Dans une approche hybride, la partie prédictive (physique) est modélisée dans un diagramme de réseau. Le chemin critique détermine la durée totale du projet. Un retard sur le chemin critique impactera directement la date de fin.",
    "category": "Hybride"
  },
  {
    "id": 18,
    "exam": 1,
    "num_in_exam": 18,
    "domain": "Process",
    "text": "Un projet de développement de produit médical doit se conformer à des réglementations de sécurité extrêmement strictes. Des audits de qualité réguliers sont programmés tout au long du cycle de vie du projet. À quel processus de gestion de la qualité ces audits appartiennent-ils ?",
    "options": {
      "A": "Planifier la gestion de la qualité",
      "B": "Gérer la qualité (Assurance Qualité)",
      "C": "Contrôler la qualité",
      "D": "Valider le périmètre"
    },
    "answer": "B",
    "justification": "Les audits de qualité font partie du processus \"Gérer la qualité\" (Assurance Qualité), qui vérifie que les processus et standards de l'organisation sont correctement appliqués sur le projet. (Le contrôle qualité, lui, inspecte les livrables finis).",
    "category": "Exam"
  },
  {
    "id": 19,
    "exam": 1,
    "num_in_exam": 19,
    "domain": "Process",
    "text": "Au cours de la clôture d'un projet, le client refuse de signer la réception finale des livrables car il estime qu'une fonctionnalité mineure ne répond pas exactement à ses critères opérationnels. Que doit faire le chef de projet en PREMIER ?",
    "options": {
      "A": "Menacer le client de poursuites judiciaires pour non-respect des termes contractuels.",
      "B": "Consulter le dictionnaire de la Structure de Découpage du Projet (WBS) et les critères d'acceptation validés pour vérifier la conformité.",
      "C": "Demander à l'équipe de refaire entièrement le livrable pour satisfaire le client.",
      "D": "Transférer le dossier directement à l'équipe de support opérationnel en clôturant le projet unilatéralement."
    },
    "answer": "B",
    "justification": "Avant de prendre une décision ou d'engager des travaux supplémentaires, le chef de projet doit s'appuyer sur la base de référence du périmètre (WBS, critères d'acceptation) pour déterminer objectivement si le livrable est conforme ou non au contrat.",
    "category": "Exam"
  },
  {
    "id": 20,
    "exam": 1,
    "num_in_exam": 20,
    "domain": "Process",
    "text": "Une équipe de projet agile constate que de nombreux tickets de développement s'accumulent dans la colonne \"En cours de test\" de leur tableau Kanban, créant un goulot d'étranglement qui ralentit toute la chaîne de production. Quelle action l'équipe doit-elle entreprendre pour résoudre ce problème de processus ?",
    "options": {
      "A": "Augmenter la limite du travail en cours (WIP - Work in Progress) pour la colonne des tests.",
      "B": "Demander aux développeurs d'arrêter temporairement d'écrire du nouveau code et d'aider à tester les tickets bloqués.",
      "C": "Ignorer le tableau Kanban et basculer sur un diagramme de Gantt.",
      "D": "Recruter immédiatement trois testeurs externes à temps plein."
    },
    "answer": "B",
    "justification": "En approche Kanban, pour résoudre un goulot d'étranglement, l'équipe doit appliquer le principe \"Arrêter de commencer, commencer à terminer\". Les membres de l'équipe s'entraident pour vider la colonne saturée avant de prendre de nouvelles tâches.",
    "category": "Agile"
  },
  {
    "id": 21,
    "exam": 1,
    "num_in_exam": 21,
    "domain": "Process",
    "text": "Lors de la planification de la gestion des communications, un chef de projet doit déterminer les besoins en information de 150 parties prenantes différentes. Quel est l'outil ou la technique la plus appropriée pour optimiser ce travail ?",
    "options": {
      "A": "L'envoi d'e-mails individuels personnalisés à chaque partie prenante chaque semaine.",
      "B": "L'analyse des technologies de communication et des modèles de communication (Push/Pull/Interactive).",
      "C": "La réduction arbitraire du nombre de parties prenantes à informer.",
      "D": "L'utilisation exclusive de réunions de groupe quotidiennes de grande envergure."
    },
    "answer": "B",
    "justification": "Analyser les types de communication (par exemple, privilégier la communication \"Pull\" via un portail web pour les 150 personnes plutôt que des e-mails individuels \"Push\") permet de gérer efficacement un grand volume de parties prenantes.",
    "category": "Exam"
  },
  {
    "id": 22,
    "exam": 1,
    "num_in_exam": 22,
    "domain": "Process",
    "text": "Un chef de projet prépare l'estimation des coûts d'un nouveau projet de logiciel. Il utilise le coût réel d'un projet similaire réalisé par l'entreprise l'année dernière comme base pour estimer le coût du projet actuel. Quelle technique d'estimation est utilisée ici ?",
    "options": {
      "A": "Estimation analogue",
      "B": "Estimation paramétrique",
      "C": "Estimation ascendante (*Bottom-up*)",
      "D": "Estimation par trois points"
    },
    "answer": "A",
    "justification": "L'estimation analogue utilise les données historiques d'un projet similaire antérieur. C'est une technique rapide mais parfois moins précise que l'estimation ascendante ou paramétrique.",
    "category": "Exam"
  },
  {
    "id": 23,
    "exam": 1,
    "num_in_exam": 23,
    "domain": "Process",
    "text": "Un projet fait face à un problème inattendu : l'un des serveurs de test principaux est tombé en panne, ce qui n'était pas anticipé dans le registre des risques. L'équipe doit dépenser 5 000 $ non budgétisés pour le remplacer d'urgence afin de ne pas bloquer le projet. D'où doivent provenir ces fonds ?",
    "options": {
      "A": "Des réserves pour aléas (*Contingency Reserves*)",
      "B": "Des réserves de gestion (*Management Reserves*)",
      "C": "Du budget personnel du chef de projet",
      "D": "D'une réduction des salaires de l'équipe"
    },
    "answer": "B",
    "justification": "Les risques imprévus (les \"inconnus-inconnus\") ne disposent pas de plan d'action dans le registre des risques. Leur financement provient donc des réserves de gestion. Les réserves pour aléas sont dédiées aux risques identifiés à l'avance.",
    "category": "Exam"
  },
  {
    "id": 24,
    "exam": 1,
    "num_in_exam": 24,
    "domain": "Process",
    "text": "Une entreprise externalise une partie du développement de son application mobile. Le périmètre du travail n'est pas entièrement défini et est susceptible de changer fréquemment au fur et à mesure des retours utilisateurs. Quel type de contrat est le plus adapté à cette situation ?",
    "options": {
      "A": "Contrat à prix fixe ferme (FFP)",
      "B": "Contrat à coûts remboursables (CR) ou Temps et Matériaux (T&M)",
      "C": "Contrat à prix fixe avec intéressement (FPIF)",
      "D": "Contrat d'achat standard de commodités"
    },
    "answer": "B",
    "justification": "Lorsque le périmètre est flou et évolutif, un contrat à coûts remboursables ou Temps et Matériaux protège le fournisseur tout en offrant la flexibilité nécessaire à l'acheteur pour faire évoluer la demande. Un prix fixe (FFP) serait trop risqué ou bloquant.",
    "category": "Exam"
  },
  {
    "id": 25,
    "exam": 1,
    "num_in_exam": 25,
    "domain": "Process",
    "text": "Le chef de projet organise une réunion de clôture de projet. Il souhaite s'assurer que les connaissances acquises tout au long du projet soient capitalisées pour les projets futurs de l'organisation. Quel document doit être finalisé et indexé dans la base de connaissances organisationnelle ?",
    "options": {
      "A": "La charte du projet (*Project Charter*)",
      "B": "Le registre des enseignements tirés (*Lessons Learned Register*)",
      "C": "Le plan de gestion des coûts",
      "D": "La matrice de traçabilité des exigences"
    },
    "answer": "B",
    "justification": "Le registre des enseignements tirés est le document central pour formaliser le retour d'expérience et enrichir les actifs organisationnels à la clôture du projet.",
    "category": "Exam"
  },
  {
    "id": 26,
    "exam": 1,
    "num_in_exam": 26,
    "domain": "Process",
    "text": "Au cours d'un projet, un fournisseur externe informe le chef de projet qu'un composant clé sera livré avec trois semaines de retard. Le chef de projet consulte immédiatement le plan de gestion des risques pour appliquer la solution de secours déjà planifiée. Quel processus du PMI le chef de projet est-il en train d'exécuter ?",
    "options": {
      "A": "Identifier les risques",
      "B": "Planifier la réponse aux risques",
      "C": "Maîtriser les risques (Monitor Risks)",
      "D": "Mettre en œuvre la réponse aux risques (Implement Risk Responses)"
    },
    "answer": "D",
    "justification": "Le risque s'étant réalisé (le retard est avéré), exécuter l'action corrective ou la solution de secours prévue correspond au processus de mise en œuvre des réponses aux risques.",
    "category": "Exam"
  },
  {
    "id": 27,
    "exam": 1,
    "num_in_exam": 27,
    "domain": "Business",
    "text": "Une nouvelle loi sur la protection des données privées (type RGPD) doit entrer en vigueur dans six mois. Elle impacte directement le module de stockage des données clients du projet que vous dirigez actuellement. Que doit faire le chef de projet en PREMIER ?",
    "options": {
      "A": "Continuer le projet selon le plan initial et attendre que le département juridique intervienne.",
      "B": "Évaluer l'impact des nouvelles exigences réglementaires sur le périmètre et la conformité du projet.",
      "C": "Arrêter immédiatement toutes les activités du projet jusqu'à nouvel ordre.",
      "D": "Demander au client de signer une décharge de responsabilité légale."
    },
    "answer": "B",
    "justification": "Un chef de projet doit faire preuve de proactivité face aux changements réglementaires. La première action est d'analyser l'impact de la nouvelle loi sur la conformité du produit afin de planifier les ajustements requis.",
    "category": "Exam"
  },
  {
    "id": 28,
    "exam": 1,
    "num_in_exam": 28,
    "domain": "Business",
    "text": "Une organisation décide de passer d'une structure organisationnelle fonctionnelle classique à une structure de type \"Matricielle Forte\". Quel est l'impact principal de ce changement pour les chefs de projet de l'entreprise ?",
    "options": {
      "A": "Le chef de projet aura moins d'autorité sur le budget du projet.",
      "B": "Le chef de projet aura une autorité allant de modérée à forte et gérera le budget du projet.",
      "C": "Le personnel du projet sera géré exclusivement par les directeurs fonctionnels.",
      "D": "Le rôle de chef de projet disparaîtra au profit de coordinateurs de projet."
    },
    "answer": "B",
    "justification": "Dans une organisation matricielle forte, le chef de projet possède un pouvoir important, gère l'équipe projet à temps plein et détient le contrôle du budget, contrairement à une structure fonctionnelle ou matricielle faible.",
    "category": "Exam"
  },
  {
    "id": 29,
    "exam": 1,
    "num_in_exam": 29,
    "domain": "Business",
    "text": "Un projet de développement d'une application de livraison est à mi-parcours. Un concurrent majeur vient de lancer une application similaire dotée d'une fonctionnalité révolutionnaire basée sur l'intelligence artificielle, modifiant la valeur commerciale attendue de votre projet. Quelle est la meilleure action pour le chef de projet en collaboration avec le Product Owner ?",
    "options": {
      "A": "Ignorer le concurrent et finir le projet exactement comme prévu à l'origine.",
      "B": "Revoir le cas d'affaires (*Business Case*) et réaligner le Product Backlog pour maximiser la valeur business du produit face au marché.",
      "C": "Annuler immédiatement le projet car il a perdu tout son intérêt concurrentiel.",
      "D": "Accuser l'équipe de développement de ne pas avoir anticipé l'intelligence artificielle."
    },
    "answer": "B",
    "justification": "Un projet doit constamment délivrer de la valeur. Si l'environnement concurrentiel change, le chef de projet et le Product Owner doivent réévaluer le Business Case pour s'assurer que le projet reste viable et pivoter si nécessaire en modifiant le backlog.",
    "category": "Agile"
  },
  {
    "id": 30,
    "exam": 1,
    "num_in_exam": 30,
    "domain": "Business",
    "text": "Un projet d'infrastructure énergétique traverse une région écologiquement protégée. Des groupes environnementaux locaux commencent à protester publiquement contre le projet. Dans quel document le chef de projet doit-il consigner et analyser l'impact de ces facteurs environnementaux de l'entreprise (EEF) externes ?",
    "options": {
      "A": "Le registre des risques et le registre des parties prenantes.",
      "B": "Le plan de gestion des ressources humaines uniquement.",
      "C": "La structure de découpage du projet (WBS).",
      "D": "Les actifs des processus organisationnels (OPA)."
    },
    "answer": "A",
    "justification": "Les réactions de la communauté locale et l'environnement écologique sont des Facteurs Environnementaux de l'Entreprise (EEF) externes. Les contestations représentent un risque (Registre des risques) et les manifestants sont des acteurs externes impactant le projet (Registre des parties prenantes).",
    "category": "Exam"
  },
  {
    "id": 31,
    "exam": 2,
    "num_in_exam": 1,
    "domain": "People",
    "text": "Au cours d'une itération, deux développeurs seniors se disputent sur la meilleure façon d'implémenter une API. Le ton monte et la tension commence à impacter le moral du reste de l'équipe durant les réunions quotidiennes (*Daily Standups*). Que doit faire le Scrum Master / Chef de projet en PREMIER ?",
    "options": {
      "A": "Prendre la décision technique finale lui-même pour clore le débat et respecter le planning.",
      "B": "Encourager les deux développeurs à exprimer leurs arguments techniques en privé et les guider vers un compromis.",
      "C": "Demander au Product Owner de trancher puisque cela impacte le produit final.",
      "D": "Exclure temporairement les deux développeurs des réunions d'équipe pour protéger l'ambiance de travail."
    },
    "answer": "B",
    "justification": "Le leader serviteur privilégie la résolution constructive des conflits par l'équipe elle-même (méthode de confrontation / collaboration). Trancher soi-même (A) nuit à l'autonomie de l'équipe, et exclure les membres (D) masque le problème sans le résoudre.",
    "category": "Agile"
  },
  {
    "id": 32,
    "exam": 2,
    "num_in_exam": 2,
    "domain": "Process",
    "text": "Un projet de construction de réseau de fibre optique est en phase d'exécution. Le client envoie un e-mail officiel pour demander l'ajout de trois nouveaux quartiers de la ville dans le plan de déploiement actuel. Quelle est la PREMIÈRE action que le chef de projet doit entreprendre ?",
    "options": {
      "A": "Demander à l'équipe technique de commencer immédiatement les études de terrain dans ces nouveaux quartiers.",
      "B": "Soumettre directement une demande de modification budgétaire au comité de contrôle des modifications (CCB).",
      "C": "Évaluer l'impact de cette demande sur le budget, le calendrier, les risques et les ressources du projet.",
      "D": "Refuser la demande car le plan de référence du périmètre (*Scope Baseline*) a déjà été signé et validé."
    },
    "answer": "C",
    "justification": "C'est la règle d'or absolue du PMI en gestion de projet prédictive : face à n'importe quelle demande de changement, le chef de projet doit toujours en analyser l'impact global en premier avant d'agir (A), de soumettre au CCB (B) ou de refuser (D).",
    "category": "Quiz"
  },
  {
    "id": 33,
    "exam": 2,
    "num_in_exam": 3,
    "domain": "Process",
    "text": "Vous analysez la performance financière et opérationnelle de votre projet à mi-parcours. Vos calculs de gestion de la valeur acquise (EVM) affichent les résultats suivants : CPI = 1,12 et SPI = 0,81. Comment devez-vous rapporter l'état de santé du projet au Sponsor ?",
    "options": {
      "A": "Le projet dépense moins d'argent que prévu et il est en avance sur le calendrier.",
      "B": "Le projet dépense plus d'argent que prévu et il est en retard sur le calendrier.",
      "C": "Le projet dépense plus d'argent que prévu et il est en avance sur le calendrier.",
      "D": "Le projet dépense moins d'argent que prévu et il est en retard sur le calendrier."
    },
    "answer": "D",
    "justification": "Un CPI supérieur à 1 (1,12) signifie que vous dépensez efficacement votre budget, vous êtes donc *en dessous du budget* (vous dépensez moins que prévu pour le travail accompli). Un SPI inférieur à 1 (0,81) signifie que vous avancez moins vite que prévu, vous êtes donc *en retard sur le calendrier*.",
    "category": "Predictif"
  },
  {
    "id": 34,
    "exam": 2,
    "num_in_exam": 4,
    "domain": "Business",
    "text": "Un projet de développement d'un dispositif médical connecté est en cours. Le département juridique de l'entreprise informe le chef de projet qu'une nouvelle norme internationale de sécurité des données de santé publique entrera en vigueur dans quatre mois, avant le lancement du produit. Que doit faire le chef de projet en PREMIER ?",
    "options": {
      "A": "Transférer la responsabilité de la conformité au client final en ajustant les termes du contrat.",
      "B": "Analyser l'écart entre le produit actuel et les exigences de la nouvelle norme afin de mesurer l'impact sur le projet.",
      "C": "Ignorer l'information car le projet a démarré sous l'ancienne réglementation et bénéficie d'une antériorité.",
      "D": "Demander au Sponsor d'interrompre immédiatement le projet en attendant que la loi soit officiellement publiée."
    },
    "answer": "B",
    "justification": "Un chef de projet doit être proactif concernant l'environnement commercial et réglementaire. Face à un changement légal ou de conformité, la première action consiste à analyser l'impact (analyse d'écart / *gap analysis*) pour savoir précisément ce qui doit être modifié dans le périmètre du projet.",
    "category": "Quiz"
  },
  {
    "id": 35,
    "exam": 2,
    "num_in_exam": 5,
    "domain": "Process",
    "text": "Dans un projet hybride, l'équipe logicielle travaille en sprints (Agile) tandis que l'équipe d'installation des serveurs physiques utilise des diagrammes de Gantt (Prédictif). L'équipe matérielle annonce un retard de trois semaines sur la livraison d'un serveur critique nécessaire aux tests finaux du logiciel. Où le chef de projet doit-il analyser la criticité de ce retard sur la livraison globale du projet ?",
    "options": {
      "A": "En vérifiant l'impact du retard sur le chemin critique du diagramme de réseau global.",
      "B": "En demandant au Product Owner de recalculer la vélocité de l'équipe logicielle.",
      "C": "En ajoutant simplement une nouvelle fonctionnalité au Product Backlog pour occuper les développeurs.",
      "D": "En consultant le registre des enseignements tirés de l'année précédente."
    },
    "answer": "A",
    "justification": "Dans un projet hybride, les dépendances entre la partie agile et la partie prédictive sont intégrées dans le calendrier global du projet. Les éléments physiques (les serveurs) et leurs jalons dictent le chemin critique. Si un élément sur ce chemin prend du retard, c'est toute la date de fin du projet qui est compromise.",
    "category": "Hybride"
  },
  {
    "id": 36,
    "exam": 3,
    "num_in_exam": 1,
    "domain": "People",
    "text": "Deux de vos experts techniques ne parviennent pas à s'entendre sur le choix d'un fournisseur de services Cloud. Leur dispute commence à bloquer l'avancement de l'architecture. Que devez-vous faire en PREMIER ?",
    "options": {
      "A": "Choisir le fournisseur vous-même pour éviter de perdre du temps.",
      "B": "Demander aux deux experts de se réunir pour confronter objectivement leurs données techniques et trouver un consensus.",
      "C": "Escalader le problème au Sponsor pour obtenir une décision managériale.",
      "D": "Remplacer l'un des experts par un consultant externe plus flexible."
    },
    "answer": "B",
    "justification": "Le PMI favorise la méthode de confrontation/résolution de problèmes par les faits et la collaboration. Le chef de projet doit guider ses experts pour trouver un consensus technique objectif.",
    "category": "MiniExam"
  },
  {
    "id": 37,
    "exam": 3,
    "num_in_exam": 2,
    "domain": "People",
    "text": "Un membre clé de votre équipe projet vient vous voir en privé pour vous confier qu'il se sent submergé par la charge de travail et qu'il craint de faire un burn-out. Quelle est la meilleure réaction pour le chef de projet ?",
    "options": {
      "A": "Lui dire que le projet traverse une phase critique et que tout le monde doit faire des efforts.",
      "B": "Réduire immédiatement ses objectifs sans en parler au reste de l'équipe.",
      "C": "Écouter ses préoccupations avec empathie, examiner sa charge de travail et explorer ensemble des solutions (priorisation, délégation).",
      "D": "Le réaffecter immédiatement à un autre projet moins stressant pour protéger sa santé."
    },
    "answer": "C",
    "justification": "Un leader serviteur fait preuve d'intelligence émotionnelle et d'empathie. Il écoute et co-construit une solution viable pour protéger la santé de son collaborateur.",
    "category": "MiniExam"
  },
  {
    "id": 38,
    "exam": 3,
    "num_in_exam": 3,
    "domain": "People",
    "text": "Dans un projet agile, le Product Owner tente d'imposer des tâches quotidiennes directement aux développeurs lors du Daily Standup, contournant le principe d'auto-organisation. Quelle action le Scrum Master doit-il entreprendre ?",
    "options": {
      "A": "Ne rien faire, car le Product Owner est responsable du succès du produit.",
      "B": "Interrompre immédiatement la réunion et exclure le Product Owner des prochains Daily Standups.",
      "C": "Rencontrer le Product Owner en privé pour le coacher sur les rôles Scrum et l'importance de l'autonomie de l'équipe.",
      "D": "Demander à l'équipe de développement de suivre les directives du Product Owner pour éviter les conflits."
    },
    "answer": "C",
    "justification": "Le Scrum Master est un coach pour l'organisation et le Product Owner. Il doit corriger les dérives méthodologiques en privé pour préserver l'autonomie de l'équipe de développement.",
    "category": "Agile"
  },
  {
    "id": 39,
    "exam": 3,
    "num_in_exam": 4,
    "domain": "People",
    "text": "Une équipe projet internationale comprend des membres basés à Paris, New York et Tokyo. Le chef de projet constate des frictions croissantes liées à des malentendus sur les horaires de réunion et les styles de communication. Quelle est la meilleure solution à long terme ?",
    "options": {
      "A": "Organiser un atelier pour co-créer une charte d'équipe définissant les règles de communication et les plages horaires communes.",
      "B": "Imposer l'horaire de Paris à tous les membres de l'équipe car c'est là que se trouve le siège.",
      "C": "Communiquer exclusivement par e-mail pour éviter les réunions en direct.",
      "D": "Demander aux RH d'évaluer les compétences interculturelles des membres de l'équipe."
    },
    "answer": "A",
    "justification": "Les équipes virtuelles et multiculturelles ont besoin de règles du jeu claires et partagées. Co-créer une charte d'équipe développe l'engagement et limite les conflits.",
    "category": "MiniExam"
  },
  {
    "id": 40,
    "exam": 3,
    "num_in_exam": 5,
    "domain": "People",
    "text": "Le Sponsor du projet est connu pour être très direct et s'énerve souvent publiquement contre l'équipe lors des revues de projet lorsque les résultats ne sont pas parfaits. L'équipe commence à se démobiliser. Comment le chef de projet doit-il gérer cette situation ?",
    "options": {
      "A": "Demander à l'équipe de ne plus assister aux revues et présenter les résultats seul.",
      "B": "Discuter en privé avec le Sponsor pour lui expliquer l'impact de son style de communication sur la motivation de l'équipe et convenir d'une approche plus constructive.",
      "C": "Signaler le comportement du Sponsor au département de conformité éthique de l'entreprise.",
      "D": "Ignorer la situation et dire à l'équipe de ne pas prendre ces remarques personnellement."
    },
    "answer": "B",
    "justification": "Le chef de projet doit gérer les relations avec toutes les parties prenantes, y compris le Sponsor. Une discussion constructive en privé permet d'aborder l'impact de son comportement sans créer de confrontation publique.",
    "category": "MiniExam"
  },
  {
    "id": 41,
    "exam": 3,
    "num_in_exam": 6,
    "domain": "People",
    "text": "Une équipe de projet vient d'accueillir trois nouveaux membres juniors. Le chef de projet souhaite s'assurer que ces derniers développent rapidement les compétences nécessaires sans ralentir la production. Quelle stratégie managériale est la plus efficace ?",
    "options": {
      "A": "Leur assigner uniquement des tâches administratives simples pendant les premiers mois.",
      "B": "Mettre en place un système de binômage (*pairing / shadowing*) avec des membres seniors de l'équipe.",
      "C": "Financer une formation théorique externe de 3 semaines avant qu'ils ne touchent au projet.",
      "D": "Les laisser en autonomie totale pour tester leur capacité d'adaptation sous pression."
    },
    "answer": "B",
    "justification": "Le compagnonnage ou binômage est une excellente technique agile/hybride pour monter en compétences (*Up-skilling*) rapidement sans bloquer la chaîne de valeur.",
    "category": "MiniExam"
  },
  {
    "id": 42,
    "exam": 3,
    "num_in_exam": 7,
    "domain": "People",
    "text": "Lors de la planification d'un projet, une partie prenante clé refuse de valider la stratégie globale car elle estime que ses besoins n'ont pas été pris en compte. Quelle est la meilleure approche pour obtenir son adhésion ?",
    "options": {
      "A": "Demander au Sponsor d'utiliser son autorité pour forcer la validation.",
      "B": "Organiser une réunion dédiée avec cette partie prenante pour écouter ses exigences, analyser ses craintes et trouver un compromis.",
      "C": "Procéder à la validation en ignorant cette partie prenante car la majorité de l'équipe est d'accord.",
      "D": "Modifier l'intégralité de la stratégie projet pour satisfaire uniquement cette personne."
    },
    "answer": "B",
    "justification": "Une partie prenante bloquante doit être engagée activement. Ignorer l'opposition ou forcer le passage crée des risques politiques majeurs pour la suite du projet.",
    "category": "MiniExam"
  },
  {
    "id": 43,
    "exam": 3,
    "num_in_exam": 8,
    "domain": "People",
    "text": "Une équipe projet performante commence à perdre de sa cohésion car deux membres seniors se disputent l'attribution d'une tâche prestigieuse. Quel outil ou technique de gestion d'équipe le chef de projet doit-il utiliser ?",
    "options": {
      "A": "La matrice de traçabilité des exigences.",
      "B": "La charte d'équipe (*Team Charter*) et la matrice RACI.",
      "C": "Le diagramme de cause à effet (Ishikawa).",
      "D": "Le plan de gestion des ressources humaines de l'entreprise."
    },
    "answer": "B",
    "justification": "La charte d'équipe fixe les comportements acceptables et la matrice RACI clarifie de manière transparente \"qui fait quoi\", éliminant ainsi les conflits d'attribution de tâches.",
    "category": "MiniExam"
  },
  {
    "id": 44,
    "exam": 3,
    "num_in_exam": 9,
    "domain": "People",
    "text": "Un chef de projet remarque qu'un fournisseur externe livre systématiquement ses composants en retard, ce qui agace profondément l'équipe de développement interne qui dépend de ces livrables. Que doit faire le chef de projet en PREMIER ?",
    "options": {
      "A": "Résilier le contrat avec le fournisseur pour faute lourde.",
      "B": "Organiser une réunion avec le responsable du fournisseur pour analyser les causes fondamentales des retards et définir un plan de redressement.",
      "C": "Blâmer publiquement le fournisseur lors de la prochaine réunion avec le client.",
      "D": "Demander à l'équipe interne de travailler le week-end pour compenser les retards du fournisseur."
    },
    "answer": "B",
    "justification": "Face à un problème avec un tiers, la première étape est de chercher à comprendre la cause fondamentale (*Root Cause Analysis*) de manière collaborative avant de prendre des mesures punitives.",
    "category": "MiniExam"
  },
  {
    "id": 45,
    "exam": 3,
    "num_in_exam": 10,
    "domain": "People",
    "text": "Vous dirigez une équipe agile expérimentée. Au cours de la rétrospective, l'équipe exprime le besoin de changer un outil de suivi de projet car l'actuel est trop lourd administrativement. Comment devez-vous réagir en tant que leader serviteur ?",
    "options": {
      "A": "Refuser le changement car l'outil actuel est standardisé dans toute l'entreprise.",
      "B": "Soutenir l'équipe en facilitant l'évaluation et l'adoption du nouvel outil s'il améliore leur efficacité.",
      "C": "Demander à l'équipe de rédiger un rapport d'analyse de rentabilité (*Business Case*) de 20 pages avant de décider.",
      "D": "Prendre la décision finale vous-même après avoir consulté le département informatique."
    },
    "answer": "B",
    "justification": "Le leader serviteur élimine les obstacles administratifs et soutient les décisions de l'équipe si celles-ci améliorent leur productivité et leur bien-être.",
    "category": "Agile"
  },
  {
    "id": 46,
    "exam": 3,
    "num_in_exam": 11,
    "domain": "Process",
    "text": "Au milieu d'un projet géré selon une approche prédictive, le directeur marketing demande l'ajout d'une nouvelle fonctionnalité de paiement mobile. Quelle est la PREMIÈRE action du chef de projet ?",
    "options": {
      "A": "Soumettre immédiatement la demande au Comité de Contrôle des Modifications (CCB).",
      "B": "Analyser l'impact de ce changement sur le périmètre, les coûts, les délais et les risques du projet.",
      "C": "Demander à l'équipe de développement de concevoir un prototype pour le marketing.",
      "D": "Rejeter la demande car le plan de référence du périmètre (*Scope Baseline*) est verrouillé."
    },
    "answer": "B",
    "justification": "Règle absolue du PMI en prédictif : Analyser l'impact d'abord, décider ensuite. On ne soumet rien au CCB sans avoir chiffré l'impact sur le triptyque Coût/Délai/Qualité.",
    "category": "MiniExam"
  },
  {
    "id": 47,
    "exam": 3,
    "num_in_exam": 12,
    "domain": "Process",
    "text": "Un chef de projet calcule les indicateurs de performance de son projet de développement logiciel. Il obtient un CPI de 0,78 et un SPI de 1,05. Quelle est la situation réelle du projet ?",
    "options": {
      "A": "Le projet est en avance sur le calendrier et dépense moins que prévu.",
      "B": "Le projet est en retard sur le calendrier et dépense plus que prévu.",
      "C": "Le projet est en avance sur le calendrier et dépense plus que prévu.",
      "D": "Le projet est en retard sur le calendrier et dépense moins que prévu."
    },
    "answer": "C",
    "justification": "SPI = 1,05 (\\ 1), donc le projet est en avance sur son calendrier. CPI = 0,78 (\\< 1), donc le projet dépense plus de budget que prévu pour le travail réalisé.",
    "category": "Predictif"
  },
  {
    "id": 48,
    "exam": 3,
    "num_in_exam": 13,
    "domain": "Process",
    "text": "Lors de la phase de planification d'un projet événementiel, l'équipe identifie un risque élevé de pluie pour le jour du festival en plein air. Ils décident de louer des chapiteaux géants amovibles pour couvrir les scènes si nécessaire. Quelle stratégie de réponse aux risques a été mise en œuvre ?",
    "options": {
      "A": "Éviter (Avoid)",
      "B": "Transférer (Transfer)",
      "C": "Atténuer (Mitigate)",
      "D": "Accepter (Accept)"
    },
    "answer": "C",
    "justification": "Louer des chapiteaux ne supprime pas le risque de pluie (ce n'est pas de l'évitement), mais réduit l'impact financier et opérationnel de la pluie sur le festival. C'est de l'atténuation.",
    "category": "MiniExam"
  },
  {
    "id": 49,
    "exam": 3,
    "num_in_exam": 14,
    "domain": "Process",
    "text": "Une équipe agile constate que sa vélocité a chuté de 30 % au cours des trois derniers sprints. Les développeurs expliquent qu'ils passent trop de temps à corriger des bugs issus du code précédent. Quelle est la meilleure action pour remédier à ce problème de processus ?",
    "options": {
      "A": "Augmenter la durée du sprint pour donner plus de temps à l'équipe.",
      "B": "Utiliser la prochaine rétrospective pour analyser les causes de ces défauts et intégrer des pratiques de qualité (ex: revues de code, tests automatisés) dans la \"Définition de Terminé\" (DoD).",
      "C": "Demander au Product Owner de supprimer l'étape de test pour accélérer les livraisons.",
      "D": "Fixer un quota de lignes de code minimum par développeur et par jour."
    },
    "answer": "B",
    "justification": "En Agile, les problèmes de processus se résolvent lors de la rétrospective. Renforcer la \"Definition of Done\" (DoD) avec des critères de qualité évite que la dette technique ne ralentisse l'équipe.",
    "category": "Agile"
  },
  {
    "id": 50,
    "exam": 3,
    "num_in_exam": 15,
    "domain": "Process",
    "text": "Le client refuse de signer le procès-verbal de réception finale d'un projet d'usine clé en main, affirmant qu'une des machines ne produit pas le rendement horaire spécifié dans le contrat. Que doit faire le chef de projet en PREMIER ?",
    "options": {
      "A": "Clôturer le projet de force en s'appuyant sur l'accord du Sponsor.",
      "B": "Consulter les documents de contrôle qualité et la matrice de traçabilité des exigences pour vérifier les résultats des tests de performance de la machine.",
      "C": "Demander à l'équipe de remplacer immédiatement la machine par un modèle supérieur aux frais de l'entreprise.",
      "D": "Engager une procédure d'arbitrage juridique pour non-paiement."
    },
    "answer": "B",
    "justification": "Face à un litige sur un livrable, le chef de projet doit s'appuyer sur des données factuelles (tests qualité, critères d'acceptation initiaux) pour vérifier le bien-fondé de la réclamation du client.",
    "category": "MiniExam"
  },
  {
    "id": 51,
    "exam": 3,
    "num_in_exam": 16,
    "domain": "Process",
    "text": "Un projet de construction utilise un diagramme de réseau. L'activité D a une durée de 5 jours et se trouve sur le chemin critique. Elle subit un retard d'approvisionnement de 4 jours. Quel est l'impact de ce retard sur la date de fin du projet ?",
    "options": {
      "A": "Aucun impact car le retard est inférieur à 5 jours.",
      "B": "Le projet global sera retardé de 4 jours.",
      "C": "Le projet global sera retardé de 9 jours.",
      "D": "Le chemin critique va changer automatiquement sans impacter la date de fin."
    },
    "answer": "B",
    "justification": "Le chemin critique a une marge totale de zéro. Tout retard sur une activité du chemin critique se répercute jour pour jour sur la date de fin du projet global.",
    "category": "Predictif"
  },
  {
    "id": 52,
    "exam": 3,
    "num_in_exam": 17,
    "domain": "Process",
    "text": "Un chef de projet prépare le budget d'un nouveau projet de construction. Il ne dispose que de très peu d'informations détaillées car le concept est encore préliminaire, mais la direction exige une estimation rapide. Quelle méthode d'estimation doit-il utiliser ?",
    "options": {
      "A": "L'estimation ascendante (*Bottom-Up Estimation*).",
      "B": "L'estimation analogue (*Analogous Estimation*).",
      "C": "L'estimation par les points de fonction (*Function Point Estimation*).",
      "D": "L'estimation paramétrique."
    },
    "answer": "B",
    "justification": "L'estimation analogue utilise le coût de projets passés similaires comme base. Elle est rapide et idéale lorsque les détails du projet actuel sont très limités (phases initiales).",
    "category": "MiniExam"
  },
  {
    "id": 53,
    "exam": 3,
    "num_in_exam": 18,
    "domain": "Process",
    "text": "Au cours d'un projet, une grève imprévue des transports paralyse la livraison d'un serveur informatique indispensable. Cet événement n'avait pas été identifié dans le registre des risques. Le chef de projet doit utiliser 3 000 $ pour payer un transporteur privé héliporté. D'où doit provenir ce budget ?",
    "options": {
      "A": "Des réserves pour aléas (*Contingency Reserves*).",
      "B": "Des réserves de gestion (*Management Reserves*).",
      "C": "De la marge bénéficiaire du projet.",
      "D": "Du budget de formation de l'équipe."
    },
    "answer": "B",
    "justification": "Les risques imprévus (les \"inconnus-inconnus\") ne sont pas couverts par les réserves pour aléas. Leur financement nécessite l'approbation et l'utilisation des réserves de gestion.",
    "category": "MiniExam"
  },
  {
    "id": 54,
    "exam": 3,
    "num_in_exam": 19,
    "domain": "Process",
    "text": "Une entreprise externalise le développement d'une application de réalité virtuelle. Les technologies évoluent chaque mois et le périmètre exact est impossible à figer à l'avance. Quel type de contrat l'acheteur doit-il privilégier ?",
    "options": {
      "A": "Contrat à Prix Fixe Ferme (FFP).",
      "B": "Contrat Temps et Matériaux (T&M) ou Coûts Remboursables.",
      "C": "Contrat à Prix Fixe avec Ajustement Économique de Prix (FP-EPA).",
      "D": "Lettre d'intention d'achat standard."
    },
    "answer": "B",
    "justification": "Lorsque le périmètre est flou et sujet à de fortes variations technologiques, les contrats basés sur le temps passé et les matériaux (T&M) ou les coûts remboursables offrent la flexibilité nécessaire sans étouffer le fournisseur.",
    "category": "MiniExam"
  },
  {
    "id": 55,
    "exam": 3,
    "num_in_exam": 20,
    "domain": "Process",
    "text": "Le chef de projet est en train de formaliser la clôture d'un projet qui a duré 18 mois. L'ensemble des livrables a été accepté par le client. Quelle activité est obligatoire pour finaliser le processus de clôture selon le PMI ?",
    "options": {
      "A": "Supprimer toutes les versions intermédiaires des plans du projet.",
      "B": "Mettre à jour et transférer le registre des enseignements tirés (*Lessons Learned*) dans la base de connaissances organisationnelle de l'entreprise.",
      "C": "Organiser une fête de fin de projet avec le budget restant des réserves de gestion.",
      "D": "Prolonger la validité de la charte du projet (*Project Charter*)."
    },
    "answer": "B",
    "justification": "La capitalisation des connaissances via l'archivage du registre des enseignements tirés est une étape administrative obligatoire pour clore formellement un projet selon le PMI.",
    "category": "MiniExam"
  },
  {
    "id": 56,
    "exam": 3,
    "num_in_exam": 21,
    "domain": "Business",
    "text": "Une nouvelle loi stricte sur l'utilisation de l'intelligence artificielle générative est votée et s'appliquera dans 3 mois. Votre projet de développement d'un outil d'aide à la décision utilise fortement cette technologie. Que devez-vous faire en PREMIER ?",
    "options": {
      "A": "Ignorer la loi jusqu'à ce qu'elle soit officiellement promulguée par le décret d'application.",
      "B": "Évaluer la conformité des algorithmes actuels du projet vis-à-vis des critères de la nouvelle loi.",
      "C": "Modifier immédiatement l'architecture pour supprimer toute trace d'intelligence artificielle.",
      "D": "Demander au Sponsor d'annuler le projet pour éviter des sanctions juridiques."
    },
    "answer": "B",
    "justification": "Un chef de projet doit garantir la conformité de ses livrables. La première action est d'analyser l'écart (*Gap Analysis*) entre l'état actuel du produit et la future réglementation.",
    "category": "MiniExam"
  },
  {
    "id": 57,
    "exam": 3,
    "num_in_exam": 22,
    "domain": "Business",
    "text": "Un projet d'ouverture d'une filiale commerciale à l'étranger est en cours. Une crise monétaire majeure éclate dans le pays cible, dévaluant la monnaie locale de 40 % et modifiant la rentabilité prévue. Quelle est la meilleure action pour le chef de projet ?",
    "options": {
      "A": "Continuer l'exécution comme si de rien n'était car le plan a été approuvé.",
      "B": "Collaborer avec le Sponsor et les analystes financiers pour réévaluer le Cas d'Affaires (*Business Case*) et déterminer si le projet reste viable.",
      "C": "Stopper définitivement toutes les dépenses sans consulter la direction.",
      "D": "Demander à l'équipe de doubler la cadence pour ouvrir avant la fin de la crise."
    },
    "answer": "B",
    "justification": "Si l'environnement macroéconomique détruit la rentabilité théorique du projet, il faut immédiatement réévaluer le *Business Case* avec le Sponsor pour valider la pertinence de continuer le projet.",
    "category": "MiniExam"
  },
  {
    "id": 58,
    "exam": 3,
    "num_in_exam": 23,
    "domain": "Business",
    "text": "Votre organisation passe d'une structure organisationnelle \"Fonctionnelle\" (silots) à une structure \"Matricielle Forte\". Quel changement majeur allez-vous observer dans votre rôle de chef de projet ?",
    "options": {
      "A": "Vous perdrez le contrôle sur le budget du projet.",
      "B": "Votre autorité augmentera considérablement et vous gérerez le budget du projet de manière autonome.",
      "C": "Votre rôle se limitera à celui d'un simple coordinateur ou facilitateur sans pouvoir.",
      "D": "Vous n'aurez plus besoin de négocier les ressources avec les directeurs fonctionnels."
    },
    "answer": "B",
    "justification": "Dans une organisation matricielle forte, le chef de projet possède une autorité forte, travaille sur le projet à temps plein et détient le pouvoir budgétaire, contrairement aux structures faibles ou fonctionnelles.",
    "category": "MiniExam"
  },
  {
    "id": 59,
    "exam": 3,
    "num_in_exam": 24,
    "domain": "Business",
    "text": "Au cours d'un projet industriel, le chef de projet s'aperçoit que la stratégie RSE (Responsabilité Sociétale des Entreprises) globale de la compagnie vient d'être mise à jour pour interdire l'usage de certains plastiques non recyclables. Le projet utilise précisément ces composants. Comment le chef de projet doit-il réagir ?",
    "options": {
      "A": "Ignorer la nouvelle stratégie RSE car le projet a commencé avant sa publication.",
      "B": "Documenter la situation dans le registre des risques et analyser les options de substitution pour aligner le projet sur la nouvelle politique de l'entreprise.",
      "C": "Dissimuler l'usage de ces plastiques dans les rapports d'avancement.",
      "D": "Demander une dérogation permanente au PDG de l'entreprise."
    },
    "answer": "B",
    "justification": "Le projet doit rester aligné avec la gouvernance et la stratégie d'entreprise (RSE). Modifier les composants pour respecter la nouvelle politique est la démarche professionnelle attendue.",
    "category": "MiniExam"
  },
  {
    "id": 60,
    "exam": 3,
    "num_in_exam": 25,
    "domain": "Business",
    "text": "Le Product Owner d'un projet e-commerce réalise qu'un concurrent direct vient de lancer une fonctionnalité de recherche visuelle par photo très populaire. La valeur commerciale de l'application en cours de développement risque de chuter si cette fonctionnalité n'est pas intégrée. Quelle est l'action appropriée ?",
    "options": {
      "A": "Continuer le développement initial et livrer le produit prévu sans modification.",
      "B": "Travailler avec le Product Owner pour réévaluer les priorités du Product Backlog et y intégrer une fonctionnalité similaire lors de la prochaine planification de sprint.",
      "C": "Accuser l'équipe de développement de ne pas avoir eu cette idée plus tôt.",
      "D": "Recommencer le projet de zéro en changeant toute l'équipe."
    },
    "answer": "B",
    "justification": "En environnement changeant, le projet doit s'adapter pour continuer à délivrer de la valeur business. Collaborer pour réordonner le backlog est la réponse agile par excellence.",
    "category": "Agile"
  },
  {
    "id": 61,
    "exam": 3,
    "num_in_exam": 26,
    "domain": "Business",
    "text": "Lors du déploiement d'un progiciel de gestion (ERP) dans une multinationale, le chef de projet constate une forte résistance au changement de la part des utilisateurs finaux dans les usines locales, mettant en péril l'adoption du système. Quel plan aurait dû être mieux élaboré et exécuté pour éviter cela ?",
    "options": {
      "A": "Le plan de gestion de la configuration.",
      "B": "Le plan de conduite du changement organisationnel (*Change Management Plan*).",
      "C": "Le plan de gestion des coûts du projet.",
      "D": "Le dictionnaire de la WBS."
    },
    "answer": "B",
    "justification": "L'adoption d'un nouvel outil dépend directement du plan de conduite du changement (formation, communication, accompagnement des utilisateurs). Sans lui, la résistance au changement fait échouer les projets.",
    "category": "MiniExam"
  },
  {
    "id": 62,
    "exam": 3,
    "num_in_exam": 27,
    "domain": "Business",
    "text": "Une entreprise de télécommunications lance un projet de déploiement de la 5G. Le chef de projet étudie les réglementations environnementales locales concernant l'exposition aux ondes magnétiques. Ces éléments réglementaires externes sont classés par le PMI comme :",
    "options": {
      "A": "Des Actifs des Processus Organisationnels (OPA).",
      "B": "Des Facteurs Environnementaux de l'Entreprise (EEF).",
      "C": "Des bases de référence du périmètre (*Scope Baseline*).",
      "D": "Des demandes de changement formelles."
    },
    "answer": "B",
    "justification": "Les lois, les réglementations gouvernementales et les standards industriels externes s'imposent au projet et constituent des Facteurs Environnementaux de l'Entreprise (EEF) externes.",
    "category": "MiniExam"
  },
  {
    "id": 63,
    "exam": 3,
    "num_in_exam": 28,
    "domain": "Business",
    "text": "Un projet d'infrastructure de transport public à long terme est financé par l'État. Un changement de gouvernement intervient et les nouvelles orientations politiques privilégient le vélo plutôt que le tramway (votre projet). Dans quel processus du domaine Business Environment le chef de projet doit-il s'investir ?",
    "options": {
      "A": "Évaluer et gérer les risques politiques dans le registre des risques et évaluer la viabilité continue des bénéfices attendus du projet.",
      "B": "Ignorer la politique car les contrats étatiques sont immuables.",
      "C": "Réduire immédiatement le salaire des ingénieurs pour économiser du budget.",
      "D": "Changer le tramway en piste cyclable sans l'accord du Sponsor."
    },
    "answer": "A",
    "justification": "Le chef de projet doit surveiller les changements stratégiques externes (politiques) pour s'assurer que les bénéfices attendus du projet restent viables et utiles pour le client/financeur.",
    "category": "MiniExam"
  },
  {
    "id": 64,
    "exam": 3,
    "num_in_exam": 29,
    "domain": "Business",
    "text": "Le comité de gouvernance de votre entreprise demande une mise à jour sur la manière dont votre projet informatique contribue à l'objectif stratégique numéro 1 de l'organisation : \"Réduire l'empreinte carbone de l'infrastructure de 15%\". Où le chef de projet doit-il chercher l'alignement initial du projet avec les objectifs stratégiques ?",
    "options": {
      "A": "Dans les rapports de performance hebdomadaires de l'équipe de développement.",
      "B": "Dans la Charte du Projet (*Project Charter*) et le Cas d'Affaires (*Business Case*).",
      "C": "Dans le plan de gestion du calendrier.",
      "D": "Dans les fiches de poste des membres de l'équipe."
    },
    "answer": "B",
    "justification": "C'est dans le *Business Case* et la *Project Charter* que sont consignés la justification stratégique du projet et ses objectifs macroéconomiques / environnementaux initiaux.",
    "category": "MiniExam"
  },
  {
    "id": 65,
    "exam": 3,
    "num_in_exam": 30,
    "domain": "Business",
    "text": "Un chef de projet est affecté à un nouveau projet de développement d'un véhicule électrique. Pour s'assurer que le projet délivre de la valeur tout au long de son cycle de vie, quelle approche de livraison doit-il privilégier si le marché évolue très rapidement ?",
    "options": {
      "A": "Une approche prédictive pure (Cascade) avec validation unique en fin de projet.",
      "B": "Une approche incrémentale ou hybride permettant de valider et de livrer de la valeur par étapes fréquentes.",
      "C": "Une approche sans aucune planification ni documentation.",
      "D": "Une externalisation totale sans aucun contrôle interne."
    },
    "answer": "B",
    "justification": "Un marché à évolution rapide nécessite des cycles de livraison courts et itératifs (approche incrémentale/hybride) pour intégrer les retours du marché et délivrer de la valeur de manière continue.",
    "category": "MiniExam"
  },
  {
    "id": 9000,
    "exam": 99,
    "num_in_exam": 1,
    "domain": "People",
    "text": "[TEST #1] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 1)",
      "B": "Option de test B (question 1)",
      "C": "Option de test C (question 1)",
      "D": "Option de test D (question 1)"
    },
    "answer": "A",
    "justification": "Question de test #1 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9001,
    "exam": 99,
    "num_in_exam": 2,
    "domain": "People",
    "text": "[TEST #2] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 2)",
      "B": "Option de test B (question 2)",
      "C": "Option de test C (question 2)",
      "D": "Option de test D (question 2)"
    },
    "answer": "B",
    "justification": "Question de test #2 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9002,
    "exam": 99,
    "num_in_exam": 3,
    "domain": "Process",
    "text": "[TEST #3] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 3)",
      "B": "Option de test B (question 3)",
      "C": "Option de test C (question 3)",
      "D": "Option de test D (question 3)"
    },
    "answer": "C",
    "justification": "Question de test #3 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9003,
    "exam": 99,
    "num_in_exam": 4,
    "domain": "People",
    "text": "[TEST #4] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 4)",
      "B": "Option de test B (question 4)",
      "C": "Option de test C (question 4)",
      "D": "Option de test D (question 4)"
    },
    "answer": "D",
    "justification": "Question de test #4 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9004,
    "exam": 99,
    "num_in_exam": 5,
    "domain": "People",
    "text": "[TEST #5] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 5)",
      "B": "Option de test B (question 5)",
      "C": "Option de test C (question 5)",
      "D": "Option de test D (question 5)"
    },
    "answer": "A",
    "justification": "Question de test #5 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9005,
    "exam": 99,
    "num_in_exam": 6,
    "domain": "Process",
    "text": "[TEST #6] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 6)",
      "B": "Option de test B (question 6)",
      "C": "Option de test C (question 6)",
      "D": "Option de test D (question 6)"
    },
    "answer": "B",
    "justification": "Question de test #6 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9006,
    "exam": 99,
    "num_in_exam": 7,
    "domain": "People",
    "text": "[TEST #7] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 7)",
      "B": "Option de test B (question 7)",
      "C": "Option de test C (question 7)",
      "D": "Option de test D (question 7)"
    },
    "answer": "C",
    "justification": "Question de test #7 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9007,
    "exam": 99,
    "num_in_exam": 8,
    "domain": "Process",
    "text": "[TEST #8] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 8)",
      "B": "Option de test B (question 8)",
      "C": "Option de test C (question 8)",
      "D": "Option de test D (question 8)"
    },
    "answer": "D",
    "justification": "Question de test #8 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9008,
    "exam": 99,
    "num_in_exam": 9,
    "domain": "Process",
    "text": "[TEST #9] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 9)",
      "B": "Option de test B (question 9)",
      "C": "Option de test C (question 9)",
      "D": "Option de test D (question 9)"
    },
    "answer": "A",
    "justification": "Question de test #9 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9009,
    "exam": 99,
    "num_in_exam": 10,
    "domain": "People",
    "text": "[TEST #10] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 10)",
      "B": "Option de test B (question 10)",
      "C": "Option de test C (question 10)",
      "D": "Option de test D (question 10)"
    },
    "answer": "B",
    "justification": "Question de test #10 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9010,
    "exam": 99,
    "num_in_exam": 11,
    "domain": "People",
    "text": "[TEST #11] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 11)",
      "B": "Option de test B (question 11)",
      "C": "Option de test C (question 11)",
      "D": "Option de test D (question 11)"
    },
    "answer": "C",
    "justification": "Question de test #11 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9011,
    "exam": 99,
    "num_in_exam": 12,
    "domain": "Process",
    "text": "[TEST #12] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 12)",
      "B": "Option de test B (question 12)",
      "C": "Option de test C (question 12)",
      "D": "Option de test D (question 12)"
    },
    "answer": "D",
    "justification": "Question de test #12 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9012,
    "exam": 99,
    "num_in_exam": 13,
    "domain": "Process",
    "text": "[TEST #13] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 13)",
      "B": "Option de test B (question 13)",
      "C": "Option de test C (question 13)",
      "D": "Option de test D (question 13)"
    },
    "answer": "A",
    "justification": "Question de test #13 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9013,
    "exam": 99,
    "num_in_exam": 14,
    "domain": "Process",
    "text": "[TEST #14] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 14)",
      "B": "Option de test B (question 14)",
      "C": "Option de test C (question 14)",
      "D": "Option de test D (question 14)"
    },
    "answer": "B",
    "justification": "Question de test #14 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9014,
    "exam": 99,
    "num_in_exam": 15,
    "domain": "People",
    "text": "[TEST #15] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 15)",
      "B": "Option de test B (question 15)",
      "C": "Option de test C (question 15)",
      "D": "Option de test D (question 15)"
    },
    "answer": "C",
    "justification": "Question de test #15 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9015,
    "exam": 99,
    "num_in_exam": 16,
    "domain": "Process",
    "text": "[TEST #16] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 16)",
      "B": "Option de test B (question 16)",
      "C": "Option de test C (question 16)",
      "D": "Option de test D (question 16)"
    },
    "answer": "D",
    "justification": "Question de test #16 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9016,
    "exam": 99,
    "num_in_exam": 17,
    "domain": "People",
    "text": "[TEST #17] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 17)",
      "B": "Option de test B (question 17)",
      "C": "Option de test C (question 17)",
      "D": "Option de test D (question 17)"
    },
    "answer": "A",
    "justification": "Question de test #17 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9017,
    "exam": 99,
    "num_in_exam": 18,
    "domain": "People",
    "text": "[TEST #18] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 18)",
      "B": "Option de test B (question 18)",
      "C": "Option de test C (question 18)",
      "D": "Option de test D (question 18)"
    },
    "answer": "B",
    "justification": "Question de test #18 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9018,
    "exam": 99,
    "num_in_exam": 19,
    "domain": "Process",
    "text": "[TEST #19] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 19)",
      "B": "Option de test B (question 19)",
      "C": "Option de test C (question 19)",
      "D": "Option de test D (question 19)"
    },
    "answer": "C",
    "justification": "Question de test #19 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9019,
    "exam": 99,
    "num_in_exam": 20,
    "domain": "People",
    "text": "[TEST #20] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 20)",
      "B": "Option de test B (question 20)",
      "C": "Option de test C (question 20)",
      "D": "Option de test D (question 20)"
    },
    "answer": "D",
    "justification": "Question de test #20 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9020,
    "exam": 99,
    "num_in_exam": 21,
    "domain": "People",
    "text": "[TEST #21] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 21)",
      "B": "Option de test B (question 21)",
      "C": "Option de test C (question 21)",
      "D": "Option de test D (question 21)"
    },
    "answer": "A",
    "justification": "Question de test #21 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9021,
    "exam": 99,
    "num_in_exam": 22,
    "domain": "Business",
    "text": "[TEST #22] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 22)",
      "B": "Option de test B (question 22)",
      "C": "Option de test C (question 22)",
      "D": "Option de test D (question 22)"
    },
    "answer": "B",
    "justification": "Question de test #22 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9022,
    "exam": 99,
    "num_in_exam": 23,
    "domain": "Process",
    "text": "[TEST #23] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 23)",
      "B": "Option de test B (question 23)",
      "C": "Option de test C (question 23)",
      "D": "Option de test D (question 23)"
    },
    "answer": "C",
    "justification": "Question de test #23 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9023,
    "exam": 99,
    "num_in_exam": 24,
    "domain": "Process",
    "text": "[TEST #24] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 24)",
      "B": "Option de test B (question 24)",
      "C": "Option de test C (question 24)",
      "D": "Option de test D (question 24)"
    },
    "answer": "D",
    "justification": "Question de test #24 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9024,
    "exam": 99,
    "num_in_exam": 25,
    "domain": "Process",
    "text": "[TEST #25] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 25)",
      "B": "Option de test B (question 25)",
      "C": "Option de test C (question 25)",
      "D": "Option de test D (question 25)"
    },
    "answer": "A",
    "justification": "Question de test #25 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9025,
    "exam": 99,
    "num_in_exam": 26,
    "domain": "Process",
    "text": "[TEST #26] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 26)",
      "B": "Option de test B (question 26)",
      "C": "Option de test C (question 26)",
      "D": "Option de test D (question 26)"
    },
    "answer": "B",
    "justification": "Question de test #26 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9026,
    "exam": 99,
    "num_in_exam": 27,
    "domain": "People",
    "text": "[TEST #27] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 27)",
      "B": "Option de test B (question 27)",
      "C": "Option de test C (question 27)",
      "D": "Option de test D (question 27)"
    },
    "answer": "C",
    "justification": "Question de test #27 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9027,
    "exam": 99,
    "num_in_exam": 28,
    "domain": "People",
    "text": "[TEST #28] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 28)",
      "B": "Option de test B (question 28)",
      "C": "Option de test C (question 28)",
      "D": "Option de test D (question 28)"
    },
    "answer": "D",
    "justification": "Question de test #28 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9028,
    "exam": 99,
    "num_in_exam": 29,
    "domain": "People",
    "text": "[TEST #29] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 29)",
      "B": "Option de test B (question 29)",
      "C": "Option de test C (question 29)",
      "D": "Option de test D (question 29)"
    },
    "answer": "A",
    "justification": "Question de test #29 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9029,
    "exam": 99,
    "num_in_exam": 30,
    "domain": "People",
    "text": "[TEST #30] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 30)",
      "B": "Option de test B (question 30)",
      "C": "Option de test C (question 30)",
      "D": "Option de test D (question 30)"
    },
    "answer": "B",
    "justification": "Question de test #30 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9030,
    "exam": 99,
    "num_in_exam": 31,
    "domain": "Process",
    "text": "[TEST #31] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 31)",
      "B": "Option de test B (question 31)",
      "C": "Option de test C (question 31)",
      "D": "Option de test D (question 31)"
    },
    "answer": "C",
    "justification": "Question de test #31 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9031,
    "exam": 99,
    "num_in_exam": 32,
    "domain": "People",
    "text": "[TEST #32] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 32)",
      "B": "Option de test B (question 32)",
      "C": "Option de test C (question 32)",
      "D": "Option de test D (question 32)"
    },
    "answer": "D",
    "justification": "Question de test #32 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9032,
    "exam": 99,
    "num_in_exam": 33,
    "domain": "People",
    "text": "[TEST #33] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 33)",
      "B": "Option de test B (question 33)",
      "C": "Option de test C (question 33)",
      "D": "Option de test D (question 33)"
    },
    "answer": "A",
    "justification": "Question de test #33 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9033,
    "exam": 99,
    "num_in_exam": 34,
    "domain": "Process",
    "text": "[TEST #34] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 34)",
      "B": "Option de test B (question 34)",
      "C": "Option de test C (question 34)",
      "D": "Option de test D (question 34)"
    },
    "answer": "B",
    "justification": "Question de test #34 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9034,
    "exam": 99,
    "num_in_exam": 35,
    "domain": "People",
    "text": "[TEST #35] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 35)",
      "B": "Option de test B (question 35)",
      "C": "Option de test C (question 35)",
      "D": "Option de test D (question 35)"
    },
    "answer": "C",
    "justification": "Question de test #35 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9035,
    "exam": 99,
    "num_in_exam": 36,
    "domain": "Process",
    "text": "[TEST #36] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 36)",
      "B": "Option de test B (question 36)",
      "C": "Option de test C (question 36)",
      "D": "Option de test D (question 36)"
    },
    "answer": "D",
    "justification": "Question de test #36 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9036,
    "exam": 99,
    "num_in_exam": 37,
    "domain": "Process",
    "text": "[TEST #37] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 37)",
      "B": "Option de test B (question 37)",
      "C": "Option de test C (question 37)",
      "D": "Option de test D (question 37)"
    },
    "answer": "A",
    "justification": "Question de test #37 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9037,
    "exam": 99,
    "num_in_exam": 38,
    "domain": "Process",
    "text": "[TEST #38] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 38)",
      "B": "Option de test B (question 38)",
      "C": "Option de test C (question 38)",
      "D": "Option de test D (question 38)"
    },
    "answer": "B",
    "justification": "Question de test #38 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9038,
    "exam": 99,
    "num_in_exam": 39,
    "domain": "Process",
    "text": "[TEST #39] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 39)",
      "B": "Option de test B (question 39)",
      "C": "Option de test C (question 39)",
      "D": "Option de test D (question 39)"
    },
    "answer": "C",
    "justification": "Question de test #39 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9039,
    "exam": 99,
    "num_in_exam": 40,
    "domain": "Process",
    "text": "[TEST #40] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 40)",
      "B": "Option de test B (question 40)",
      "C": "Option de test C (question 40)",
      "D": "Option de test D (question 40)"
    },
    "answer": "D",
    "justification": "Question de test #40 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9040,
    "exam": 99,
    "num_in_exam": 41,
    "domain": "People",
    "text": "[TEST #41] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 41)",
      "B": "Option de test B (question 41)",
      "C": "Option de test C (question 41)",
      "D": "Option de test D (question 41)"
    },
    "answer": "A",
    "justification": "Question de test #41 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9041,
    "exam": 99,
    "num_in_exam": 42,
    "domain": "Process",
    "text": "[TEST #42] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 42)",
      "B": "Option de test B (question 42)",
      "C": "Option de test C (question 42)",
      "D": "Option de test D (question 42)"
    },
    "answer": "B",
    "justification": "Question de test #42 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9042,
    "exam": 99,
    "num_in_exam": 43,
    "domain": "People",
    "text": "[TEST #43] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 43)",
      "B": "Option de test B (question 43)",
      "C": "Option de test C (question 43)",
      "D": "Option de test D (question 43)"
    },
    "answer": "C",
    "justification": "Question de test #43 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9043,
    "exam": 99,
    "num_in_exam": 44,
    "domain": "People",
    "text": "[TEST #44] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 44)",
      "B": "Option de test B (question 44)",
      "C": "Option de test C (question 44)",
      "D": "Option de test D (question 44)"
    },
    "answer": "D",
    "justification": "Question de test #44 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9044,
    "exam": 99,
    "num_in_exam": 45,
    "domain": "Process",
    "text": "[TEST #45] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 45)",
      "B": "Option de test B (question 45)",
      "C": "Option de test C (question 45)",
      "D": "Option de test D (question 45)"
    },
    "answer": "A",
    "justification": "Question de test #45 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9045,
    "exam": 99,
    "num_in_exam": 46,
    "domain": "Process",
    "text": "[TEST #46] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 46)",
      "B": "Option de test B (question 46)",
      "C": "Option de test C (question 46)",
      "D": "Option de test D (question 46)"
    },
    "answer": "B",
    "justification": "Question de test #46 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9046,
    "exam": 99,
    "num_in_exam": 47,
    "domain": "Process",
    "text": "[TEST #47] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 47)",
      "B": "Option de test B (question 47)",
      "C": "Option de test C (question 47)",
      "D": "Option de test D (question 47)"
    },
    "answer": "C",
    "justification": "Question de test #47 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9047,
    "exam": 99,
    "num_in_exam": 48,
    "domain": "People",
    "text": "[TEST #48] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 48)",
      "B": "Option de test B (question 48)",
      "C": "Option de test C (question 48)",
      "D": "Option de test D (question 48)"
    },
    "answer": "D",
    "justification": "Question de test #48 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9048,
    "exam": 99,
    "num_in_exam": 49,
    "domain": "People",
    "text": "[TEST #49] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 49)",
      "B": "Option de test B (question 49)",
      "C": "Option de test C (question 49)",
      "D": "Option de test D (question 49)"
    },
    "answer": "A",
    "justification": "Question de test #49 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9049,
    "exam": 99,
    "num_in_exam": 50,
    "domain": "People",
    "text": "[TEST #50] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 50)",
      "B": "Option de test B (question 50)",
      "C": "Option de test C (question 50)",
      "D": "Option de test D (question 50)"
    },
    "answer": "B",
    "justification": "Question de test #50 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9050,
    "exam": 99,
    "num_in_exam": 51,
    "domain": "Process",
    "text": "[TEST #51] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 51)",
      "B": "Option de test B (question 51)",
      "C": "Option de test C (question 51)",
      "D": "Option de test D (question 51)"
    },
    "answer": "C",
    "justification": "Question de test #51 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9051,
    "exam": 99,
    "num_in_exam": 52,
    "domain": "Business",
    "text": "[TEST #52] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 52)",
      "B": "Option de test B (question 52)",
      "C": "Option de test C (question 52)",
      "D": "Option de test D (question 52)"
    },
    "answer": "D",
    "justification": "Question de test #52 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9052,
    "exam": 99,
    "num_in_exam": 53,
    "domain": "Process",
    "text": "[TEST #53] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 53)",
      "B": "Option de test B (question 53)",
      "C": "Option de test C (question 53)",
      "D": "Option de test D (question 53)"
    },
    "answer": "A",
    "justification": "Question de test #53 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9053,
    "exam": 99,
    "num_in_exam": 54,
    "domain": "People",
    "text": "[TEST #54] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 54)",
      "B": "Option de test B (question 54)",
      "C": "Option de test C (question 54)",
      "D": "Option de test D (question 54)"
    },
    "answer": "B",
    "justification": "Question de test #54 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9054,
    "exam": 99,
    "num_in_exam": 55,
    "domain": "People",
    "text": "[TEST #55] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 55)",
      "B": "Option de test B (question 55)",
      "C": "Option de test C (question 55)",
      "D": "Option de test D (question 55)"
    },
    "answer": "C",
    "justification": "Question de test #55 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9055,
    "exam": 99,
    "num_in_exam": 56,
    "domain": "Process",
    "text": "[TEST #56] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 56)",
      "B": "Option de test B (question 56)",
      "C": "Option de test C (question 56)",
      "D": "Option de test D (question 56)"
    },
    "answer": "D",
    "justification": "Question de test #56 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9056,
    "exam": 99,
    "num_in_exam": 57,
    "domain": "Business",
    "text": "[TEST #57] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 57)",
      "B": "Option de test B (question 57)",
      "C": "Option de test C (question 57)",
      "D": "Option de test D (question 57)"
    },
    "answer": "A",
    "justification": "Question de test #57 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9057,
    "exam": 99,
    "num_in_exam": 58,
    "domain": "People",
    "text": "[TEST #58] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 58)",
      "B": "Option de test B (question 58)",
      "C": "Option de test C (question 58)",
      "D": "Option de test D (question 58)"
    },
    "answer": "B",
    "justification": "Question de test #58 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9058,
    "exam": 99,
    "num_in_exam": 59,
    "domain": "Process",
    "text": "[TEST #59] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 59)",
      "B": "Option de test B (question 59)",
      "C": "Option de test C (question 59)",
      "D": "Option de test D (question 59)"
    },
    "answer": "C",
    "justification": "Question de test #59 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9059,
    "exam": 99,
    "num_in_exam": 60,
    "domain": "Process",
    "text": "[TEST #60] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 60)",
      "B": "Option de test B (question 60)",
      "C": "Option de test C (question 60)",
      "D": "Option de test D (question 60)"
    },
    "answer": "D",
    "justification": "Question de test #60 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9060,
    "exam": 99,
    "num_in_exam": 61,
    "domain": "People",
    "text": "[TEST #61] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 61)",
      "B": "Option de test B (question 61)",
      "C": "Option de test C (question 61)",
      "D": "Option de test D (question 61)"
    },
    "answer": "A",
    "justification": "Question de test #61 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9061,
    "exam": 99,
    "num_in_exam": 62,
    "domain": "Process",
    "text": "[TEST #62] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 62)",
      "B": "Option de test B (question 62)",
      "C": "Option de test C (question 62)",
      "D": "Option de test D (question 62)"
    },
    "answer": "B",
    "justification": "Question de test #62 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9062,
    "exam": 99,
    "num_in_exam": 63,
    "domain": "People",
    "text": "[TEST #63] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 63)",
      "B": "Option de test B (question 63)",
      "C": "Option de test C (question 63)",
      "D": "Option de test D (question 63)"
    },
    "answer": "C",
    "justification": "Question de test #63 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9063,
    "exam": 99,
    "num_in_exam": 64,
    "domain": "Process",
    "text": "[TEST #64] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 64)",
      "B": "Option de test B (question 64)",
      "C": "Option de test C (question 64)",
      "D": "Option de test D (question 64)"
    },
    "answer": "D",
    "justification": "Question de test #64 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9064,
    "exam": 99,
    "num_in_exam": 65,
    "domain": "People",
    "text": "[TEST #65] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 65)",
      "B": "Option de test B (question 65)",
      "C": "Option de test C (question 65)",
      "D": "Option de test D (question 65)"
    },
    "answer": "A",
    "justification": "Question de test #65 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9065,
    "exam": 99,
    "num_in_exam": 66,
    "domain": "People",
    "text": "[TEST #66] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 66)",
      "B": "Option de test B (question 66)",
      "C": "Option de test C (question 66)",
      "D": "Option de test D (question 66)"
    },
    "answer": "B",
    "justification": "Question de test #66 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9066,
    "exam": 99,
    "num_in_exam": 67,
    "domain": "People",
    "text": "[TEST #67] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 67)",
      "B": "Option de test B (question 67)",
      "C": "Option de test C (question 67)",
      "D": "Option de test D (question 67)"
    },
    "answer": "C",
    "justification": "Question de test #67 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9067,
    "exam": 99,
    "num_in_exam": 68,
    "domain": "Process",
    "text": "[TEST #68] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 68)",
      "B": "Option de test B (question 68)",
      "C": "Option de test C (question 68)",
      "D": "Option de test D (question 68)"
    },
    "answer": "D",
    "justification": "Question de test #68 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9068,
    "exam": 99,
    "num_in_exam": 69,
    "domain": "People",
    "text": "[TEST #69] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 69)",
      "B": "Option de test B (question 69)",
      "C": "Option de test C (question 69)",
      "D": "Option de test D (question 69)"
    },
    "answer": "A",
    "justification": "Question de test #69 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9069,
    "exam": 99,
    "num_in_exam": 70,
    "domain": "Process",
    "text": "[TEST #70] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 70)",
      "B": "Option de test B (question 70)",
      "C": "Option de test C (question 70)",
      "D": "Option de test D (question 70)"
    },
    "answer": "B",
    "justification": "Question de test #70 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9070,
    "exam": 99,
    "num_in_exam": 71,
    "domain": "People",
    "text": "[TEST #71] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 71)",
      "B": "Option de test B (question 71)",
      "C": "Option de test C (question 71)",
      "D": "Option de test D (question 71)"
    },
    "answer": "C",
    "justification": "Question de test #71 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9071,
    "exam": 99,
    "num_in_exam": 72,
    "domain": "Business",
    "text": "[TEST #72] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 72)",
      "B": "Option de test B (question 72)",
      "C": "Option de test C (question 72)",
      "D": "Option de test D (question 72)"
    },
    "answer": "D",
    "justification": "Question de test #72 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9072,
    "exam": 99,
    "num_in_exam": 73,
    "domain": "Process",
    "text": "[TEST #73] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 73)",
      "B": "Option de test B (question 73)",
      "C": "Option de test C (question 73)",
      "D": "Option de test D (question 73)"
    },
    "answer": "A",
    "justification": "Question de test #73 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9073,
    "exam": 99,
    "num_in_exam": 74,
    "domain": "People",
    "text": "[TEST #74] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 74)",
      "B": "Option de test B (question 74)",
      "C": "Option de test C (question 74)",
      "D": "Option de test D (question 74)"
    },
    "answer": "B",
    "justification": "Question de test #74 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9074,
    "exam": 99,
    "num_in_exam": 75,
    "domain": "Process",
    "text": "[TEST #75] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 75)",
      "B": "Option de test B (question 75)",
      "C": "Option de test C (question 75)",
      "D": "Option de test D (question 75)"
    },
    "answer": "C",
    "justification": "Question de test #75 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9075,
    "exam": 99,
    "num_in_exam": 76,
    "domain": "Process",
    "text": "[TEST #76] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 76)",
      "B": "Option de test B (question 76)",
      "C": "Option de test C (question 76)",
      "D": "Option de test D (question 76)"
    },
    "answer": "D",
    "justification": "Question de test #76 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9076,
    "exam": 99,
    "num_in_exam": 77,
    "domain": "People",
    "text": "[TEST #77] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 77)",
      "B": "Option de test B (question 77)",
      "C": "Option de test C (question 77)",
      "D": "Option de test D (question 77)"
    },
    "answer": "A",
    "justification": "Question de test #77 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9077,
    "exam": 99,
    "num_in_exam": 78,
    "domain": "People",
    "text": "[TEST #78] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 78)",
      "B": "Option de test B (question 78)",
      "C": "Option de test C (question 78)",
      "D": "Option de test D (question 78)"
    },
    "answer": "B",
    "justification": "Question de test #78 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9078,
    "exam": 99,
    "num_in_exam": 79,
    "domain": "People",
    "text": "[TEST #79] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 79)",
      "B": "Option de test B (question 79)",
      "C": "Option de test C (question 79)",
      "D": "Option de test D (question 79)"
    },
    "answer": "C",
    "justification": "Question de test #79 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9079,
    "exam": 99,
    "num_in_exam": 80,
    "domain": "Process",
    "text": "[TEST #80] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 80)",
      "B": "Option de test B (question 80)",
      "C": "Option de test C (question 80)",
      "D": "Option de test D (question 80)"
    },
    "answer": "D",
    "justification": "Question de test #80 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9080,
    "exam": 99,
    "num_in_exam": 81,
    "domain": "People",
    "text": "[TEST #81] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 81)",
      "B": "Option de test B (question 81)",
      "C": "Option de test C (question 81)",
      "D": "Option de test D (question 81)"
    },
    "answer": "A",
    "justification": "Question de test #81 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9081,
    "exam": 99,
    "num_in_exam": 82,
    "domain": "Business",
    "text": "[TEST #82] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 82)",
      "B": "Option de test B (question 82)",
      "C": "Option de test C (question 82)",
      "D": "Option de test D (question 82)"
    },
    "answer": "B",
    "justification": "Question de test #82 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9082,
    "exam": 99,
    "num_in_exam": 83,
    "domain": "Process",
    "text": "[TEST #83] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 83)",
      "B": "Option de test B (question 83)",
      "C": "Option de test C (question 83)",
      "D": "Option de test D (question 83)"
    },
    "answer": "C",
    "justification": "Question de test #83 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9083,
    "exam": 99,
    "num_in_exam": 84,
    "domain": "People",
    "text": "[TEST #84] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 84)",
      "B": "Option de test B (question 84)",
      "C": "Option de test C (question 84)",
      "D": "Option de test D (question 84)"
    },
    "answer": "D",
    "justification": "Question de test #84 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9084,
    "exam": 99,
    "num_in_exam": 85,
    "domain": "Process",
    "text": "[TEST #85] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 85)",
      "B": "Option de test B (question 85)",
      "C": "Option de test C (question 85)",
      "D": "Option de test D (question 85)"
    },
    "answer": "A",
    "justification": "Question de test #85 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9085,
    "exam": 99,
    "num_in_exam": 86,
    "domain": "Process",
    "text": "[TEST #86] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 86)",
      "B": "Option de test B (question 86)",
      "C": "Option de test C (question 86)",
      "D": "Option de test D (question 86)"
    },
    "answer": "B",
    "justification": "Question de test #86 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9086,
    "exam": 99,
    "num_in_exam": 87,
    "domain": "Process",
    "text": "[TEST #87] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 87)",
      "B": "Option de test B (question 87)",
      "C": "Option de test C (question 87)",
      "D": "Option de test D (question 87)"
    },
    "answer": "C",
    "justification": "Question de test #87 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9087,
    "exam": 99,
    "num_in_exam": 88,
    "domain": "People",
    "text": "[TEST #88] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 88)",
      "B": "Option de test B (question 88)",
      "C": "Option de test C (question 88)",
      "D": "Option de test D (question 88)"
    },
    "answer": "D",
    "justification": "Question de test #88 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9088,
    "exam": 99,
    "num_in_exam": 89,
    "domain": "People",
    "text": "[TEST #89] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 89)",
      "B": "Option de test B (question 89)",
      "C": "Option de test C (question 89)",
      "D": "Option de test D (question 89)"
    },
    "answer": "A",
    "justification": "Question de test #89 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9089,
    "exam": 99,
    "num_in_exam": 90,
    "domain": "Process",
    "text": "[TEST #90] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 90)",
      "B": "Option de test B (question 90)",
      "C": "Option de test C (question 90)",
      "D": "Option de test D (question 90)"
    },
    "answer": "B",
    "justification": "Question de test #90 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9090,
    "exam": 99,
    "num_in_exam": 91,
    "domain": "Business",
    "text": "[TEST #91] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 91)",
      "B": "Option de test B (question 91)",
      "C": "Option de test C (question 91)",
      "D": "Option de test D (question 91)"
    },
    "answer": "C",
    "justification": "Question de test #91 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9091,
    "exam": 99,
    "num_in_exam": 92,
    "domain": "People",
    "text": "[TEST #92] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 92)",
      "B": "Option de test B (question 92)",
      "C": "Option de test C (question 92)",
      "D": "Option de test D (question 92)"
    },
    "answer": "D",
    "justification": "Question de test #92 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9092,
    "exam": 99,
    "num_in_exam": 93,
    "domain": "Process",
    "text": "[TEST #93] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 93)",
      "B": "Option de test B (question 93)",
      "C": "Option de test C (question 93)",
      "D": "Option de test D (question 93)"
    },
    "answer": "A",
    "justification": "Question de test #93 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9093,
    "exam": 99,
    "num_in_exam": 94,
    "domain": "Process",
    "text": "[TEST #94] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 94)",
      "B": "Option de test B (question 94)",
      "C": "Option de test C (question 94)",
      "D": "Option de test D (question 94)"
    },
    "answer": "B",
    "justification": "Question de test #94 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9094,
    "exam": 99,
    "num_in_exam": 95,
    "domain": "Business",
    "text": "[TEST #95] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 95)",
      "B": "Option de test B (question 95)",
      "C": "Option de test C (question 95)",
      "D": "Option de test D (question 95)"
    },
    "answer": "C",
    "justification": "Question de test #95 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9095,
    "exam": 99,
    "num_in_exam": 96,
    "domain": "People",
    "text": "[TEST #96] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 96)",
      "B": "Option de test B (question 96)",
      "C": "Option de test C (question 96)",
      "D": "Option de test D (question 96)"
    },
    "answer": "D",
    "justification": "Question de test #96 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9096,
    "exam": 99,
    "num_in_exam": 97,
    "domain": "People",
    "text": "[TEST #97] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 97)",
      "B": "Option de test B (question 97)",
      "C": "Option de test C (question 97)",
      "D": "Option de test D (question 97)"
    },
    "answer": "A",
    "justification": "Question de test #97 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9097,
    "exam": 99,
    "num_in_exam": 98,
    "domain": "Process",
    "text": "[TEST #98] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 98)",
      "B": "Option de test B (question 98)",
      "C": "Option de test C (question 98)",
      "D": "Option de test D (question 98)"
    },
    "answer": "B",
    "justification": "Question de test #98 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9098,
    "exam": 99,
    "num_in_exam": 99,
    "domain": "Process",
    "text": "[TEST #99] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 99)",
      "B": "Option de test B (question 99)",
      "C": "Option de test C (question 99)",
      "D": "Option de test D (question 99)"
    },
    "answer": "C",
    "justification": "Question de test #99 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9099,
    "exam": 99,
    "num_in_exam": 100,
    "domain": "People",
    "text": "[TEST #100] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 100)",
      "B": "Option de test B (question 100)",
      "C": "Option de test C (question 100)",
      "D": "Option de test D (question 100)"
    },
    "answer": "D",
    "justification": "Question de test #100 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9100,
    "exam": 99,
    "num_in_exam": 101,
    "domain": "People",
    "text": "[TEST #101] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 101)",
      "B": "Option de test B (question 101)",
      "C": "Option de test C (question 101)",
      "D": "Option de test D (question 101)"
    },
    "answer": "A",
    "justification": "Question de test #101 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9101,
    "exam": 99,
    "num_in_exam": 102,
    "domain": "Process",
    "text": "[TEST #102] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 102)",
      "B": "Option de test B (question 102)",
      "C": "Option de test C (question 102)",
      "D": "Option de test D (question 102)"
    },
    "answer": "B",
    "justification": "Question de test #102 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9102,
    "exam": 99,
    "num_in_exam": 103,
    "domain": "People",
    "text": "[TEST #103] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 103)",
      "B": "Option de test B (question 103)",
      "C": "Option de test C (question 103)",
      "D": "Option de test D (question 103)"
    },
    "answer": "C",
    "justification": "Question de test #103 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9103,
    "exam": 99,
    "num_in_exam": 104,
    "domain": "Process",
    "text": "[TEST #104] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 104)",
      "B": "Option de test B (question 104)",
      "C": "Option de test C (question 104)",
      "D": "Option de test D (question 104)"
    },
    "answer": "D",
    "justification": "Question de test #104 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9104,
    "exam": 99,
    "num_in_exam": 105,
    "domain": "Process",
    "text": "[TEST #105] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 105)",
      "B": "Option de test B (question 105)",
      "C": "Option de test C (question 105)",
      "D": "Option de test D (question 105)"
    },
    "answer": "A",
    "justification": "Question de test #105 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9105,
    "exam": 99,
    "num_in_exam": 106,
    "domain": "Process",
    "text": "[TEST #106] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 106)",
      "B": "Option de test B (question 106)",
      "C": "Option de test C (question 106)",
      "D": "Option de test D (question 106)"
    },
    "answer": "B",
    "justification": "Question de test #106 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9106,
    "exam": 99,
    "num_in_exam": 107,
    "domain": "Process",
    "text": "[TEST #107] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 107)",
      "B": "Option de test B (question 107)",
      "C": "Option de test C (question 107)",
      "D": "Option de test D (question 107)"
    },
    "answer": "C",
    "justification": "Question de test #107 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9107,
    "exam": 99,
    "num_in_exam": 108,
    "domain": "Process",
    "text": "[TEST #108] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 108)",
      "B": "Option de test B (question 108)",
      "C": "Option de test C (question 108)",
      "D": "Option de test D (question 108)"
    },
    "answer": "D",
    "justification": "Question de test #108 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9108,
    "exam": 99,
    "num_in_exam": 109,
    "domain": "Process",
    "text": "[TEST #109] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 109)",
      "B": "Option de test B (question 109)",
      "C": "Option de test C (question 109)",
      "D": "Option de test D (question 109)"
    },
    "answer": "A",
    "justification": "Question de test #109 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9109,
    "exam": 99,
    "num_in_exam": 110,
    "domain": "People",
    "text": "[TEST #110] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 110)",
      "B": "Option de test B (question 110)",
      "C": "Option de test C (question 110)",
      "D": "Option de test D (question 110)"
    },
    "answer": "B",
    "justification": "Question de test #110 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9110,
    "exam": 99,
    "num_in_exam": 111,
    "domain": "Process",
    "text": "[TEST #111] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 111)",
      "B": "Option de test B (question 111)",
      "C": "Option de test C (question 111)",
      "D": "Option de test D (question 111)"
    },
    "answer": "C",
    "justification": "Question de test #111 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9111,
    "exam": 99,
    "num_in_exam": 112,
    "domain": "People",
    "text": "[TEST #112] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 112)",
      "B": "Option de test B (question 112)",
      "C": "Option de test C (question 112)",
      "D": "Option de test D (question 112)"
    },
    "answer": "D",
    "justification": "Question de test #112 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9112,
    "exam": 99,
    "num_in_exam": 113,
    "domain": "People",
    "text": "[TEST #113] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 113)",
      "B": "Option de test B (question 113)",
      "C": "Option de test C (question 113)",
      "D": "Option de test D (question 113)"
    },
    "answer": "A",
    "justification": "Question de test #113 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9113,
    "exam": 99,
    "num_in_exam": 114,
    "domain": "Process",
    "text": "[TEST #114] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 114)",
      "B": "Option de test B (question 114)",
      "C": "Option de test C (question 114)",
      "D": "Option de test D (question 114)"
    },
    "answer": "B",
    "justification": "Question de test #114 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9114,
    "exam": 99,
    "num_in_exam": 115,
    "domain": "People",
    "text": "[TEST #115] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 115)",
      "B": "Option de test B (question 115)",
      "C": "Option de test C (question 115)",
      "D": "Option de test D (question 115)"
    },
    "answer": "C",
    "justification": "Question de test #115 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9115,
    "exam": 99,
    "num_in_exam": 116,
    "domain": "People",
    "text": "[TEST #116] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 116)",
      "B": "Option de test B (question 116)",
      "C": "Option de test C (question 116)",
      "D": "Option de test D (question 116)"
    },
    "answer": "D",
    "justification": "Question de test #116 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9116,
    "exam": 99,
    "num_in_exam": 117,
    "domain": "Business",
    "text": "[TEST #117] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 117)",
      "B": "Option de test B (question 117)",
      "C": "Option de test C (question 117)",
      "D": "Option de test D (question 117)"
    },
    "answer": "A",
    "justification": "Question de test #117 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9117,
    "exam": 99,
    "num_in_exam": 118,
    "domain": "Process",
    "text": "[TEST #118] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 118)",
      "B": "Option de test B (question 118)",
      "C": "Option de test C (question 118)",
      "D": "Option de test D (question 118)"
    },
    "answer": "B",
    "justification": "Question de test #118 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9118,
    "exam": 99,
    "num_in_exam": 119,
    "domain": "Process",
    "text": "[TEST #119] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 119)",
      "B": "Option de test B (question 119)",
      "C": "Option de test C (question 119)",
      "D": "Option de test D (question 119)"
    },
    "answer": "C",
    "justification": "Question de test #119 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9119,
    "exam": 99,
    "num_in_exam": 120,
    "domain": "Process",
    "text": "[TEST #120] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 120)",
      "B": "Option de test B (question 120)",
      "C": "Option de test C (question 120)",
      "D": "Option de test D (question 120)"
    },
    "answer": "D",
    "justification": "Question de test #120 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9120,
    "exam": 99,
    "num_in_exam": 121,
    "domain": "Process",
    "text": "[TEST #121] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 121)",
      "B": "Option de test B (question 121)",
      "C": "Option de test C (question 121)",
      "D": "Option de test D (question 121)"
    },
    "answer": "A",
    "justification": "Question de test #121 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9121,
    "exam": 99,
    "num_in_exam": 122,
    "domain": "People",
    "text": "[TEST #122] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 122)",
      "B": "Option de test B (question 122)",
      "C": "Option de test C (question 122)",
      "D": "Option de test D (question 122)"
    },
    "answer": "B",
    "justification": "Question de test #122 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9122,
    "exam": 99,
    "num_in_exam": 123,
    "domain": "Process",
    "text": "[TEST #123] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 123)",
      "B": "Option de test B (question 123)",
      "C": "Option de test C (question 123)",
      "D": "Option de test D (question 123)"
    },
    "answer": "C",
    "justification": "Question de test #123 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9123,
    "exam": 99,
    "num_in_exam": 124,
    "domain": "People",
    "text": "[TEST #124] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 124)",
      "B": "Option de test B (question 124)",
      "C": "Option de test C (question 124)",
      "D": "Option de test D (question 124)"
    },
    "answer": "D",
    "justification": "Question de test #124 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9124,
    "exam": 99,
    "num_in_exam": 125,
    "domain": "Process",
    "text": "[TEST #125] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 125)",
      "B": "Option de test B (question 125)",
      "C": "Option de test C (question 125)",
      "D": "Option de test D (question 125)"
    },
    "answer": "A",
    "justification": "Question de test #125 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9125,
    "exam": 99,
    "num_in_exam": 126,
    "domain": "Process",
    "text": "[TEST #126] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 126)",
      "B": "Option de test B (question 126)",
      "C": "Option de test C (question 126)",
      "D": "Option de test D (question 126)"
    },
    "answer": "B",
    "justification": "Question de test #126 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9126,
    "exam": 99,
    "num_in_exam": 127,
    "domain": "People",
    "text": "[TEST #127] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 127)",
      "B": "Option de test B (question 127)",
      "C": "Option de test C (question 127)",
      "D": "Option de test D (question 127)"
    },
    "answer": "C",
    "justification": "Question de test #127 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9127,
    "exam": 99,
    "num_in_exam": 128,
    "domain": "People",
    "text": "[TEST #128] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 128)",
      "B": "Option de test B (question 128)",
      "C": "Option de test C (question 128)",
      "D": "Option de test D (question 128)"
    },
    "answer": "D",
    "justification": "Question de test #128 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9128,
    "exam": 99,
    "num_in_exam": 129,
    "domain": "People",
    "text": "[TEST #129] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 129)",
      "B": "Option de test B (question 129)",
      "C": "Option de test C (question 129)",
      "D": "Option de test D (question 129)"
    },
    "answer": "A",
    "justification": "Question de test #129 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9129,
    "exam": 99,
    "num_in_exam": 130,
    "domain": "Process",
    "text": "[TEST #130] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 130)",
      "B": "Option de test B (question 130)",
      "C": "Option de test C (question 130)",
      "D": "Option de test D (question 130)"
    },
    "answer": "B",
    "justification": "Question de test #130 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9130,
    "exam": 99,
    "num_in_exam": 131,
    "domain": "Process",
    "text": "[TEST #131] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 131)",
      "B": "Option de test B (question 131)",
      "C": "Option de test C (question 131)",
      "D": "Option de test D (question 131)"
    },
    "answer": "C",
    "justification": "Question de test #131 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9131,
    "exam": 99,
    "num_in_exam": 132,
    "domain": "People",
    "text": "[TEST #132] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 132)",
      "B": "Option de test B (question 132)",
      "C": "Option de test C (question 132)",
      "D": "Option de test D (question 132)"
    },
    "answer": "D",
    "justification": "Question de test #132 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9132,
    "exam": 99,
    "num_in_exam": 133,
    "domain": "People",
    "text": "[TEST #133] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 133)",
      "B": "Option de test B (question 133)",
      "C": "Option de test C (question 133)",
      "D": "Option de test D (question 133)"
    },
    "answer": "A",
    "justification": "Question de test #133 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9133,
    "exam": 99,
    "num_in_exam": 134,
    "domain": "Business",
    "text": "[TEST #134] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 134)",
      "B": "Option de test B (question 134)",
      "C": "Option de test C (question 134)",
      "D": "Option de test D (question 134)"
    },
    "answer": "B",
    "justification": "Question de test #134 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9134,
    "exam": 99,
    "num_in_exam": 135,
    "domain": "Process",
    "text": "[TEST #135] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 135)",
      "B": "Option de test B (question 135)",
      "C": "Option de test C (question 135)",
      "D": "Option de test D (question 135)"
    },
    "answer": "C",
    "justification": "Question de test #135 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9135,
    "exam": 99,
    "num_in_exam": 136,
    "domain": "People",
    "text": "[TEST #136] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 136)",
      "B": "Option de test B (question 136)",
      "C": "Option de test C (question 136)",
      "D": "Option de test D (question 136)"
    },
    "answer": "D",
    "justification": "Question de test #136 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9136,
    "exam": 99,
    "num_in_exam": 137,
    "domain": "Process",
    "text": "[TEST #137] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 137)",
      "B": "Option de test B (question 137)",
      "C": "Option de test C (question 137)",
      "D": "Option de test D (question 137)"
    },
    "answer": "A",
    "justification": "Question de test #137 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9137,
    "exam": 99,
    "num_in_exam": 138,
    "domain": "Process",
    "text": "[TEST #138] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 138)",
      "B": "Option de test B (question 138)",
      "C": "Option de test C (question 138)",
      "D": "Option de test D (question 138)"
    },
    "answer": "B",
    "justification": "Question de test #138 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9138,
    "exam": 99,
    "num_in_exam": 139,
    "domain": "Business",
    "text": "[TEST #139] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 139)",
      "B": "Option de test B (question 139)",
      "C": "Option de test C (question 139)",
      "D": "Option de test D (question 139)"
    },
    "answer": "C",
    "justification": "Question de test #139 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9139,
    "exam": 99,
    "num_in_exam": 140,
    "domain": "Process",
    "text": "[TEST #140] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 140)",
      "B": "Option de test B (question 140)",
      "C": "Option de test C (question 140)",
      "D": "Option de test D (question 140)"
    },
    "answer": "D",
    "justification": "Question de test #140 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9140,
    "exam": 99,
    "num_in_exam": 141,
    "domain": "People",
    "text": "[TEST #141] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 141)",
      "B": "Option de test B (question 141)",
      "C": "Option de test C (question 141)",
      "D": "Option de test D (question 141)"
    },
    "answer": "A",
    "justification": "Question de test #141 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9141,
    "exam": 99,
    "num_in_exam": 142,
    "domain": "People",
    "text": "[TEST #142] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 142)",
      "B": "Option de test B (question 142)",
      "C": "Option de test C (question 142)",
      "D": "Option de test D (question 142)"
    },
    "answer": "B",
    "justification": "Question de test #142 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9142,
    "exam": 99,
    "num_in_exam": 143,
    "domain": "Process",
    "text": "[TEST #143] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 143)",
      "B": "Option de test B (question 143)",
      "C": "Option de test C (question 143)",
      "D": "Option de test D (question 143)"
    },
    "answer": "C",
    "justification": "Question de test #143 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9143,
    "exam": 99,
    "num_in_exam": 144,
    "domain": "Process",
    "text": "[TEST #144] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 144)",
      "B": "Option de test B (question 144)",
      "C": "Option de test C (question 144)",
      "D": "Option de test D (question 144)"
    },
    "answer": "D",
    "justification": "Question de test #144 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9144,
    "exam": 99,
    "num_in_exam": 145,
    "domain": "People",
    "text": "[TEST #145] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 145)",
      "B": "Option de test B (question 145)",
      "C": "Option de test C (question 145)",
      "D": "Option de test D (question 145)"
    },
    "answer": "A",
    "justification": "Question de test #145 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9145,
    "exam": 99,
    "num_in_exam": 146,
    "domain": "Process",
    "text": "[TEST #146] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 146)",
      "B": "Option de test B (question 146)",
      "C": "Option de test C (question 146)",
      "D": "Option de test D (question 146)"
    },
    "answer": "B",
    "justification": "Question de test #146 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9146,
    "exam": 99,
    "num_in_exam": 147,
    "domain": "People",
    "text": "[TEST #147] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 147)",
      "B": "Option de test B (question 147)",
      "C": "Option de test C (question 147)",
      "D": "Option de test D (question 147)"
    },
    "answer": "C",
    "justification": "Question de test #147 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9147,
    "exam": 99,
    "num_in_exam": 148,
    "domain": "Business",
    "text": "[TEST #148] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 148)",
      "B": "Option de test B (question 148)",
      "C": "Option de test C (question 148)",
      "D": "Option de test D (question 148)"
    },
    "answer": "D",
    "justification": "Question de test #148 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9148,
    "exam": 99,
    "num_in_exam": 149,
    "domain": "Process",
    "text": "[TEST #149] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 149)",
      "B": "Option de test B (question 149)",
      "C": "Option de test C (question 149)",
      "D": "Option de test D (question 149)"
    },
    "answer": "A",
    "justification": "Question de test #149 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9149,
    "exam": 99,
    "num_in_exam": 150,
    "domain": "People",
    "text": "[TEST #150] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 150)",
      "B": "Option de test B (question 150)",
      "C": "Option de test C (question 150)",
      "D": "Option de test D (question 150)"
    },
    "answer": "B",
    "justification": "Question de test #150 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9150,
    "exam": 99,
    "num_in_exam": 151,
    "domain": "Process",
    "text": "[TEST #151] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 151)",
      "B": "Option de test B (question 151)",
      "C": "Option de test C (question 151)",
      "D": "Option de test D (question 151)"
    },
    "answer": "C",
    "justification": "Question de test #151 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9151,
    "exam": 99,
    "num_in_exam": 152,
    "domain": "People",
    "text": "[TEST #152] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 152)",
      "B": "Option de test B (question 152)",
      "C": "Option de test C (question 152)",
      "D": "Option de test D (question 152)"
    },
    "answer": "D",
    "justification": "Question de test #152 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9152,
    "exam": 99,
    "num_in_exam": 153,
    "domain": "Process",
    "text": "[TEST #153] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 153)",
      "B": "Option de test B (question 153)",
      "C": "Option de test C (question 153)",
      "D": "Option de test D (question 153)"
    },
    "answer": "A",
    "justification": "Question de test #153 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9153,
    "exam": 99,
    "num_in_exam": 154,
    "domain": "Process",
    "text": "[TEST #154] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 154)",
      "B": "Option de test B (question 154)",
      "C": "Option de test C (question 154)",
      "D": "Option de test D (question 154)"
    },
    "answer": "B",
    "justification": "Question de test #154 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9154,
    "exam": 99,
    "num_in_exam": 155,
    "domain": "People",
    "text": "[TEST #155] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 155)",
      "B": "Option de test B (question 155)",
      "C": "Option de test C (question 155)",
      "D": "Option de test D (question 155)"
    },
    "answer": "C",
    "justification": "Question de test #155 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9155,
    "exam": 99,
    "num_in_exam": 156,
    "domain": "Process",
    "text": "[TEST #156] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 156)",
      "B": "Option de test B (question 156)",
      "C": "Option de test C (question 156)",
      "D": "Option de test D (question 156)"
    },
    "answer": "D",
    "justification": "Question de test #156 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9156,
    "exam": 99,
    "num_in_exam": 157,
    "domain": "Process",
    "text": "[TEST #157] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 157)",
      "B": "Option de test B (question 157)",
      "C": "Option de test C (question 157)",
      "D": "Option de test D (question 157)"
    },
    "answer": "A",
    "justification": "Question de test #157 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9157,
    "exam": 99,
    "num_in_exam": 158,
    "domain": "People",
    "text": "[TEST #158] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 158)",
      "B": "Option de test B (question 158)",
      "C": "Option de test C (question 158)",
      "D": "Option de test D (question 158)"
    },
    "answer": "B",
    "justification": "Question de test #158 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9158,
    "exam": 99,
    "num_in_exam": 159,
    "domain": "People",
    "text": "[TEST #159] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 159)",
      "B": "Option de test B (question 159)",
      "C": "Option de test C (question 159)",
      "D": "Option de test D (question 159)"
    },
    "answer": "C",
    "justification": "Question de test #159 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9159,
    "exam": 99,
    "num_in_exam": 160,
    "domain": "People",
    "text": "[TEST #160] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 160)",
      "B": "Option de test B (question 160)",
      "C": "Option de test C (question 160)",
      "D": "Option de test D (question 160)"
    },
    "answer": "D",
    "justification": "Question de test #160 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9160,
    "exam": 99,
    "num_in_exam": 161,
    "domain": "Business",
    "text": "[TEST #161] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 161)",
      "B": "Option de test B (question 161)",
      "C": "Option de test C (question 161)",
      "D": "Option de test D (question 161)"
    },
    "answer": "A",
    "justification": "Question de test #161 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9161,
    "exam": 99,
    "num_in_exam": 162,
    "domain": "Process",
    "text": "[TEST #162] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 162)",
      "B": "Option de test B (question 162)",
      "C": "Option de test C (question 162)",
      "D": "Option de test D (question 162)"
    },
    "answer": "B",
    "justification": "Question de test #162 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9162,
    "exam": 99,
    "num_in_exam": 163,
    "domain": "People",
    "text": "[TEST #163] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 163)",
      "B": "Option de test B (question 163)",
      "C": "Option de test C (question 163)",
      "D": "Option de test D (question 163)"
    },
    "answer": "C",
    "justification": "Question de test #163 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9163,
    "exam": 99,
    "num_in_exam": 164,
    "domain": "People",
    "text": "[TEST #164] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 164)",
      "B": "Option de test B (question 164)",
      "C": "Option de test C (question 164)",
      "D": "Option de test D (question 164)"
    },
    "answer": "D",
    "justification": "Question de test #164 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9164,
    "exam": 99,
    "num_in_exam": 165,
    "domain": "Process",
    "text": "[TEST #165] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 165)",
      "B": "Option de test B (question 165)",
      "C": "Option de test C (question 165)",
      "D": "Option de test D (question 165)"
    },
    "answer": "A",
    "justification": "Question de test #165 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9165,
    "exam": 99,
    "num_in_exam": 166,
    "domain": "Process",
    "text": "[TEST #166] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 166)",
      "B": "Option de test B (question 166)",
      "C": "Option de test C (question 166)",
      "D": "Option de test D (question 166)"
    },
    "answer": "B",
    "justification": "Question de test #166 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9166,
    "exam": 99,
    "num_in_exam": 167,
    "domain": "Process",
    "text": "[TEST #167] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 167)",
      "B": "Option de test B (question 167)",
      "C": "Option de test C (question 167)",
      "D": "Option de test D (question 167)"
    },
    "answer": "C",
    "justification": "Question de test #167 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9167,
    "exam": 99,
    "num_in_exam": 168,
    "domain": "Process",
    "text": "[TEST #168] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 168)",
      "B": "Option de test B (question 168)",
      "C": "Option de test C (question 168)",
      "D": "Option de test D (question 168)"
    },
    "answer": "D",
    "justification": "Question de test #168 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9168,
    "exam": 99,
    "num_in_exam": 169,
    "domain": "People",
    "text": "[TEST #169] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 169)",
      "B": "Option de test B (question 169)",
      "C": "Option de test C (question 169)",
      "D": "Option de test D (question 169)"
    },
    "answer": "A",
    "justification": "Question de test #169 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9169,
    "exam": 99,
    "num_in_exam": 170,
    "domain": "Business",
    "text": "[TEST #170] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 170)",
      "B": "Option de test B (question 170)",
      "C": "Option de test C (question 170)",
      "D": "Option de test D (question 170)"
    },
    "answer": "B",
    "justification": "Question de test #170 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9170,
    "exam": 99,
    "num_in_exam": 171,
    "domain": "Process",
    "text": "[TEST #171] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 171)",
      "B": "Option de test B (question 171)",
      "C": "Option de test C (question 171)",
      "D": "Option de test D (question 171)"
    },
    "answer": "C",
    "justification": "Question de test #171 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9171,
    "exam": 99,
    "num_in_exam": 172,
    "domain": "Process",
    "text": "[TEST #172] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 172)",
      "B": "Option de test B (question 172)",
      "C": "Option de test C (question 172)",
      "D": "Option de test D (question 172)"
    },
    "answer": "D",
    "justification": "Question de test #172 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9172,
    "exam": 99,
    "num_in_exam": 173,
    "domain": "People",
    "text": "[TEST #173] Question de test générée automatiquement (domaine People) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 173)",
      "B": "Option de test B (question 173)",
      "C": "Option de test C (question 173)",
      "D": "Option de test D (question 173)"
    },
    "answer": "A",
    "justification": "Question de test #173 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9173,
    "exam": 99,
    "num_in_exam": 174,
    "domain": "Process",
    "text": "[TEST #174] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 174)",
      "B": "Option de test B (question 174)",
      "C": "Option de test C (question 174)",
      "D": "Option de test D (question 174)"
    },
    "answer": "B",
    "justification": "Question de test #174 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9174,
    "exam": 99,
    "num_in_exam": 175,
    "domain": "Process",
    "text": "[TEST #175] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 175)",
      "B": "Option de test B (question 175)",
      "C": "Option de test C (question 175)",
      "D": "Option de test D (question 175)"
    },
    "answer": "C",
    "justification": "Question de test #175 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9175,
    "exam": 99,
    "num_in_exam": 176,
    "domain": "Process",
    "text": "[TEST #176] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 176)",
      "B": "Option de test B (question 176)",
      "C": "Option de test C (question 176)",
      "D": "Option de test D (question 176)"
    },
    "answer": "D",
    "justification": "Question de test #176 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9176,
    "exam": 99,
    "num_in_exam": 177,
    "domain": "Process",
    "text": "[TEST #177] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 177)",
      "B": "Option de test B (question 177)",
      "C": "Option de test C (question 177)",
      "D": "Option de test D (question 177)"
    },
    "answer": "A",
    "justification": "Question de test #177 — la bonne réponse est fixée arbitrairement à \"A\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9177,
    "exam": 99,
    "num_in_exam": 178,
    "domain": "Business",
    "text": "[TEST #178] Question de test générée automatiquement (domaine Business) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 178)",
      "B": "Option de test B (question 178)",
      "C": "Option de test C (question 178)",
      "D": "Option de test D (question 178)"
    },
    "answer": "B",
    "justification": "Question de test #178 — la bonne réponse est fixée arbitrairement à \"B\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9178,
    "exam": 99,
    "num_in_exam": 179,
    "domain": "Process",
    "text": "[TEST #179] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 179)",
      "B": "Option de test B (question 179)",
      "C": "Option de test C (question 179)",
      "D": "Option de test D (question 179)"
    },
    "answer": "C",
    "justification": "Question de test #179 — la bonne réponse est fixée arbitrairement à \"C\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  },
  {
    "id": 9179,
    "exam": 99,
    "num_in_exam": 180,
    "domain": "Process",
    "text": "[TEST #180] Question de test générée automatiquement (domaine Process) — sert uniquement à valider le mécanisme de pause après 60/120 questions et l'horloge de 240 minutes. À remplacer par une vraie question via l'administration.",
    "options": {
      "A": "Option de test A (question 180)",
      "B": "Option de test B (question 180)",
      "C": "Option de test C (question 180)",
      "D": "Option de test D (question 180)"
    },
    "answer": "D",
    "justification": "Question de test #180 — la bonne réponse est fixée arbitrairement à \"D\" pour permettre de vérifier le calcul du score. Ne pas utiliser telle quelle pour un vrai examen.",
    "category": "Exam"
  }
];

const QUESTIONS_EN = [
  {
    "id": 1,
    "exam": 1,
    "num_in_exam": 1,
    "domain": "People",
    "category": "Exam",
    "text": "Two key project team members are in constant disagreement over the technical architecture of a new product. This conflict is delaying the deliverables of the current iteration. What should the project manager do FIRST?",
    "options": {
      "A": "Choose the technical solution that presents the least financial risk to the project.",
      "B": "Ask the two team members to meet privately to resolve their disagreement.",
      "C": "Organize a meeting with both members to hear their viewpoints and facilitate consensus.",
      "D": "Escalate the situation to the HR director for formal arbitration."
    },
    "answer": "C",
    "justification": "PMI favors collaboration and constructive conflict resolution. Organizing a meeting to facilitate consensus (confrontation/problem-solving method) addresses the root cause while respecting the team. Option B shifts responsibility, option A ignores the human factor, option D is a premature escalation."
  },
  {
    "id": 2,
    "exam": 1,
    "num_in_exam": 2,
    "domain": "People",
    "category": "Agile",
    "text": "A digital transformation project uses an agile approach. During the sprint review, a major client expresses deep frustration because a key feature was not built as they imagined. What is the best action for the project manager (Scrum Master)?",
    "options": {
      "A": "Remind the client that the specifications were validated during sprint planning.",
      "B": "Collaborate with the Product Owner and the client to refine the acceptance criteria in the Product Backlog.",
      "C": "Ask the development team to immediately modify the feature during the meeting.",
      "D": "Submit a formal change request to the Change Control Board (CCB)."
    },
    "answer": "B",
    "justification": "In Agile, the sprint review is meant to gather feedback. Faced with dissatisfaction, the Scrum Master should direct the action toward collaboration between the Product Owner (responsible for content) and the client to adjust the backlog. Options A and D take a rigid contractual approach that doesn't fit the agile mindset."
  },
  {
    "id": 3,
    "exam": 1,
    "num_in_exam": 3,
    "domain": "People",
    "category": "Exam",
    "text": "A project manager notices that a highly effective team member has seemed demotivated for two weeks, which is starting to affect the quality of their work. What approach should the project manager take?",
    "options": {
      "A": "Wait for the next annual review to address the topic formally.",
      "B": "Schedule an informal one-on-one conversation to understand the reasons behind the drop in motivation.",
      "C": "Reassign this person's critical tasks to another team member as a precaution.",
      "D": "Issue a written warning about the decline in deliverable quality."
    },
    "answer": "B",
    "justification": "A good leader (servant leader) shows empathy and emotional intelligence. Understanding the underlying cause privately is the first step before taking disciplinary or organizational action."
  },
  {
    "id": 4,
    "exam": 1,
    "num_in_exam": 4,
    "domain": "People",
    "category": "Agile",
    "text": "An agile team is spread across three different time zones. Team members complain that the Daily Standup is either too late or too early for some of them. How should the project manager respond?",
    "options": {
      "A": "Keep the current schedule based on the company headquarters' time zone.",
      "B": "Facilitate a working session with the team to jointly agree on a communication solution (e.g., asynchronous standups or rotating schedules).",
      "C": "Cancel the daily meeting and replace it with a weekly progress email.",
      "D": "Ask the least conveniently located team members to make an effort for the good of the project."
    },
    "answer": "B",
    "justification": "Agility relies on self-organizing teams. The project manager should not impose a unilateral solution but should facilitate a workshop so the team can find the best communication compromise."
  },
  {
    "id": 5,
    "exam": 1,
    "num_in_exam": 5,
    "domain": "People",
    "category": "Agile",
    "text": "The Product Owner of an agile project keeps adding new priority items in the middle of an ongoing sprint, disrupting the development team and preventing it from reaching its Sprint Goal. What should the Scrum Master / project manager do?",
    "options": {
      "A": "Accept the Product Owner's requests, since the client is king in agile.",
      "B": "Explain the impact of these disruptions to the Product Owner and help them prioritize these items for the next sprint.",
      "C": "Ask the team to work overtime to absorb the extra workload.",
      "D": "Complain to the project Sponsor about the Product Owner's behavior."
    },
    "answer": "B",
    "justification": "The scope of an ongoing sprint is protected to keep the team focused. The Scrum Master should coach the Product Owner on Scrum rules to preserve the project's overall effectiveness."
  },
  {
    "id": 6,
    "exam": 1,
    "num_in_exam": 6,
    "domain": "People",
    "category": "Exam",
    "text": "While forming a new cross-functional project team, members display defensive behaviors, argue over role assignments, and test the limits of the project manager's authority. At which stage of Tuckman's model is this team?",
    "options": {
      "A": "Forming",
      "B": "Storming",
      "C": "Norming",
      "D": "Performing"
    },
    "answer": "B",
    "justification": "The Storming stage is characterized by conflict, power struggles, and disagreements over team organization before the team begins to normalize."
  },
  {
    "id": 7,
    "exam": 1,
    "num_in_exam": 7,
    "domain": "People",
    "category": "Exam",
    "text": "A complex project involves an influential stakeholder who has historically opposed the project's objectives and could block its final adoption. What is the best strategy for managing this stakeholder?",
    "options": {
      "A": "Ignore this stakeholder and focus on the project's supporters.",
      "B": "Actively engage them early in discussions to understand their concerns and seek compromises.",
      "C": "Ask the Sponsor to exclude this person from the steering committee.",
      "D": "Send them only minimal monthly status reports to avoid conflict."
    },
    "answer": "B",
    "justification": "Managing resistant or negative stakeholders requires an active engagement strategy. Understanding their objections early often turns an opponent into an ally or mitigates a major political risk."
  },
  {
    "id": 8,
    "exam": 1,
    "num_in_exam": 8,
    "domain": "People",
    "category": "Exam",
    "text": "A member of your project team makes a major technical error that delays an important milestone. The project Sponsor publicly demands to know who is responsible for the mistake. What should the project manager do?",
    "options": {
      "A": "Give the Sponsor the team member's name to preserve their own credibility.",
      "B": "Take overall accountability for the failure in front of the Sponsor, then address the issue privately with the team.",
      "C": "Blame unclear client requirements to justify the error.",
      "D": "Ignore the Sponsor's request and continue working as if nothing happened."
    },
    "answer": "B",
    "justification": "The project manager is ultimately accountable for project outcomes to the Sponsor. Publicly blaming a team member destroys the team's psychological safety. The mistake should be addressed internally to draw lessons from it."
  },
  {
    "id": 9,
    "exam": 1,
    "num_in_exam": 9,
    "domain": "People",
    "category": "Exam",
    "text": "A project team is working under heavy pressure. The project manager wants to develop the team's collective emotional intelligence to improve collaboration. Which action best supports this goal?",
    "options": {
      "A": "Set up a leaderboard ranking individual employee performance.",
      "B": "Encourage open expression of feelings and frustrations during retrospectives in a safe environment.",
      "C": "Replace in-person meetings with strict ticket-based communication (Jira).",
      "D": "Impose mandatory team-building sessions on weekends."
    },
    "answer": "B",
    "justification": "Creating a safe space where the team can express frustrations (such as during a retrospective) builds mutual trust and collective self-awareness — pillars of emotional intelligence."
  },
  {
    "id": 10,
    "exam": 1,
    "num_in_exam": 10,
    "domain": "People",
    "category": "Exam",
    "text": "A project manager leads a highly skilled and autonomous team. Team members are able to make technical decisions on their own and effectively manage their daily workload. Which leadership style should the project manager favor here?",
    "options": {
      "A": "Directive (Autocratic)",
      "B": "Delegating (Laissez-faire / Servant)",
      "C": "Transactional",
      "D": "Bureaucratic"
    },
    "answer": "B",
    "justification": "With a highly mature and autonomous team of experts, a servant or delegating leadership style is most effective. A directive style would be counterproductive and demotivating."
  },
  {
    "id": 11,
    "exam": 1,
    "num_in_exam": 11,
    "domain": "People",
    "category": "Exam",
    "text": "During a project meeting, a technical expert uses very complex jargon that confuses the representative from the marketing department, a key stakeholder. Which skill should the project manager use immediately to resolve this situation?",
    "options": {
      "A": "Active listening and paraphrasing to translate technical concepts into business terms.",
      "B": "Time management to interrupt the meeting and move to the next item.",
      "C": "Formal authority to order the technical expert to stop talking.",
      "D": "Contract negotiation to change communication obligations."
    },
    "answer": "A",
    "justification": "The project manager acts as a communication bridge between technical experts and the business side. Translating jargon keeps all stakeholders aligned."
  },
  {
    "id": 12,
    "exam": 1,
    "num_in_exam": 12,
    "domain": "People",
    "category": "Exam",
    "text": "An international project involves teams based in Europe and Asia. The project manager notices repeated misunderstandings about deadlines, caused by cultural differences in the perception of urgency. What is the best approach to correct this?",
    "options": {
      "A": "Impose European work standards on the entire international team.",
      "B": "Organize a cultural awareness workshop and co-create a team charter defining clear expectations for everyone.",
      "C": "Replace the Asian team members with local consultants.",
      "D": "Reduce direct interactions between the two teams to limit friction."
    },
    "answer": "B",
    "justification": "Multicultural projects require establishing a shared understanding. Co-creating ground rules through a team charter respects diversity while setting a common professional framework."
  },
  {
    "id": 13,
    "exam": 1,
    "num_in_exam": 13,
    "domain": "People",
    "category": "Exam",
    "text": "A junior team member expresses a wish to develop risk management skills, even though this isn't part of their current duties. How should the project manager respond?",
    "options": {
      "A": "Refuse, since the project has no budget for additional training.",
      "B": "Offer to have them shadow a senior risk manager during the next risk identification sessions.",
      "C": "Tell them to wait until the current project ends to explore new areas.",
      "D": "Immediately change their job description to make them the project's official risk owner."
    },
    "answer": "B",
    "justification": "Encouraging team members' continuous professional development (through shadowing or pairing) increases the team's overall versatility and motivation without heavily impacting the budget."
  },
  {
    "id": 14,
    "exam": 1,
    "num_in_exam": 14,
    "domain": "Process",
    "category": "Predictif",
    "text": "A predictive project (V-model) is underway. The client requests a major scope change that will add new features to the software being developed. What is the FIRST action the project manager should take?",
    "options": {
      "A": "Reject the request since the initial scope was already validated in writing.",
      "B": "Analyze the impact of this change on the project's cost, schedule, and quality.",
      "C": "Ask the technical team to immediately start coding the changes.",
      "D": "Present the request directly to the Change Control Board (CCB) for approval."
    },
    "answer": "B",
    "justification": "PMI's golden rule in a predictive cycle: faced with a change request, always analyze the impact on the golden triangle (Cost, Schedule, Scope) first, before submitting to the CCB or rejecting it."
  },
  {
    "id": 15,
    "exam": 1,
    "num_in_exam": 15,
    "domain": "Process",
    "category": "Predictif",
    "text": "A project's performance calculation shows a Cost Performance Index (CPI) of 0.85 and a Schedule Performance Index (SPI) of 1.15. How do you interpret this project's situation?",
    "options": {
      "A": "The project is ahead of schedule and under budget.",
      "B": "The project is behind schedule and over budget.",
      "C": "The project is ahead of schedule and over budget.",
      "D": "The project is behind schedule and under budget."
    },
    "answer": "C",
    "justification": "An SPI above 1 means the project is ahead of schedule (1.15). A CPI below 1 means the project is spending more than planned, so it is over budget (0.85)."
  },
  {
    "id": 16,
    "exam": 1,
    "num_in_exam": 16,
    "domain": "Process",
    "category": "Exam",
    "text": "During the planning phase of a construction project, the team identifies a risk: a potential cement shortage due to tensions in the global market. The team decides to sign a fixed-price supply contract with a local supplier to guarantee deliveries. Which risk response strategy was used?",
    "options": {
      "A": "Avoid",
      "B": "Transfer",
      "C": "Mitigate",
      "D": "Accept"
    },
    "answer": "C",
    "justification": "Signing a fixed-price contract to secure volumes reduces the probability and impact of the shortage. This is a mitigation strategy. If the risk had been fully transferred to insurance or a third party for financial costs, that would be a transfer. Here, the action actively reduces the impact on the job site."
  },
  {
    "id": 17,
    "exam": 1,
    "num_in_exam": 17,
    "domain": "Process",
    "category": "Hybride",
    "text": "A project manager is running a hybrid IT project. Software development follows an agile approach (Scrum), while physical server deployment follows a predictive approach. The network infrastructure team is critically behind schedule. Where should the project manager look to assess the impact of this delay on the overall project end date?",
    "options": {
      "A": "In the Product Backlog updated by the Product Owner.",
      "B": "On the critical path of the project's network diagram.",
      "C": "In the development team's velocity chart.",
      "D": "In the Lessons Learned Register."
    },
    "answer": "B",
    "justification": "In a hybrid approach, the predictive (physical) portion is modeled in a network diagram. The critical path determines the project's total duration. A delay on the critical path will directly impact the end date."
  },
  {
    "id": 18,
    "exam": 1,
    "num_in_exam": 18,
    "domain": "Process",
    "category": "Exam",
    "text": "A medical product development project must comply with extremely strict safety regulations. Regular quality audits are scheduled throughout the project life cycle. Which quality management process do these audits belong to?",
    "options": {
      "A": "Plan Quality Management",
      "B": "Manage Quality (Quality Assurance)",
      "C": "Control Quality",
      "D": "Validate Scope"
    },
    "answer": "B",
    "justification": "Quality audits are part of the 'Manage Quality' process (Quality Assurance), which verifies that the organization's processes and standards are properly applied to the project. (Quality control, on the other hand, inspects finished deliverables.)"
  },
  {
    "id": 19,
    "exam": 1,
    "num_in_exam": 19,
    "domain": "Process",
    "category": "Exam",
    "text": "During project closure, the client refuses to sign off on final acceptance of the deliverables because they believe a minor feature doesn't exactly meet their operational criteria. What should the project manager do FIRST?",
    "options": {
      "A": "Threaten the client with legal action for breach of contract terms.",
      "B": "Check the Work Breakdown Structure (WBS) dictionary and the validated acceptance criteria to verify compliance.",
      "C": "Ask the team to completely redo the deliverable to satisfy the client.",
      "D": "Transfer the file directly to the operational support team, unilaterally closing the project."
    },
    "answer": "B",
    "justification": "Before making a decision or committing to extra work, the project manager should rely on the scope baseline (WBS, acceptance criteria) to objectively determine whether the deliverable complies with the contract."
  },
  {
    "id": 20,
    "exam": 1,
    "num_in_exam": 20,
    "domain": "Process",
    "category": "Agile",
    "text": "An agile project team notices that many development tickets are piling up in the 'Testing' column of their Kanban board, creating a bottleneck that slows the entire production chain. What action should the team take to fix this process issue?",
    "options": {
      "A": "Increase the Work In Progress (WIP) limit for the testing column.",
      "B": "Ask developers to temporarily stop writing new code and help test the blocked tickets.",
      "C": "Ignore the Kanban board and switch to a Gantt chart.",
      "D": "Immediately hire three full-time external testers."
    },
    "answer": "B",
    "justification": "In a Kanban approach, to resolve a bottleneck, the team should apply the principle 'Stop starting, start finishing.' Team members help each other clear the saturated column before taking on new tasks."
  },
  {
    "id": 21,
    "exam": 1,
    "num_in_exam": 21,
    "domain": "Process",
    "category": "Exam",
    "text": "When planning communications management, a project manager must determine the information needs of 150 different stakeholders. What is the most appropriate tool or technique to streamline this work?",
    "options": {
      "A": "Sending personalized individual emails to each stakeholder every week.",
      "B": "Analyzing communication technologies and communication models (Push/Pull/Interactive).",
      "C": "Arbitrarily reducing the number of stakeholders to inform.",
      "D": "Exclusively using large daily group meetings."
    },
    "answer": "B",
    "justification": "Analyzing communication types (for example, favoring 'Pull' communication via a web portal for 150 people rather than individual 'Push' emails) makes it possible to efficiently manage a large volume of stakeholders."
  },
  {
    "id": 22,
    "exam": 1,
    "num_in_exam": 22,
    "domain": "Process",
    "category": "Exam",
    "text": "A project manager is preparing the cost estimate for a new software project. They use the actual cost of a similar project completed by the company last year as a basis for estimating the current project's cost. Which estimating technique is being used here?",
    "options": {
      "A": "Analogous estimating",
      "B": "Parametric estimating",
      "C": "Bottom-up estimating",
      "D": "Three-point estimating"
    },
    "answer": "A",
    "justification": "Analogous estimating uses historical data from a similar past project. It is a fast technique but sometimes less accurate than bottom-up or parametric estimating."
  },
  {
    "id": 23,
    "exam": 1,
    "num_in_exam": 23,
    "domain": "Process",
    "category": "Exam",
    "text": "A project faces an unexpected problem: one of the main test servers has failed, something that wasn't anticipated in the risk register. The team must spend an unbudgeted $5,000 to replace it urgently so the project isn't blocked. Where should these funds come from?",
    "options": {
      "A": "Contingency Reserves",
      "B": "Management Reserves",
      "C": "The project manager's personal budget",
      "D": "A reduction in team salaries"
    },
    "answer": "B",
    "justification": "Unforeseen risks (the 'unknown unknowns') have no response plan in the risk register. Their funding therefore comes from management reserves. Contingency reserves are dedicated to risks identified in advance."
  },
  {
    "id": 24,
    "exam": 1,
    "num_in_exam": 24,
    "domain": "Process",
    "category": "Exam",
    "text": "A company outsources part of its mobile application development. The scope of work is not fully defined and is likely to change frequently as user feedback comes in. Which type of contract is best suited to this situation?",
    "options": {
      "A": "Firm Fixed Price (FFP)",
      "B": "Cost Reimbursable (CR) or Time and Materials (T&M)",
      "C": "Fixed Price Incentive Fee (FPIF)",
      "D": "Standard commodity purchase contract"
    },
    "answer": "B",
    "justification": "When the scope is vague and evolving, a cost-reimbursable or time-and-materials contract protects the supplier while giving the buyer the flexibility needed to change requirements. A fixed price (FFP) would be too risky or restrictive."
  },
  {
    "id": 25,
    "exam": 1,
    "num_in_exam": 25,
    "domain": "Process",
    "category": "Exam",
    "text": "The project manager is holding a project closure meeting. They want to ensure that the knowledge gained throughout the project is captured for the organization's future projects. Which document must be finalized and indexed in the organizational knowledge base?",
    "options": {
      "A": "Project Charter",
      "B": "Lessons Learned Register",
      "C": "Cost Management Plan",
      "D": "Requirements Traceability Matrix"
    },
    "answer": "B",
    "justification": "The Lessons Learned Register is the central document for formalizing feedback and enriching organizational process assets at project closure."
  },
  {
    "id": 26,
    "exam": 1,
    "num_in_exam": 26,
    "domain": "Process",
    "category": "Exam",
    "text": "During a project, an external supplier informs the project manager that a key component will be delivered three weeks late. The project manager immediately consults the risk management plan to apply the fallback solution already planned. Which PMI process is the project manager executing?",
    "options": {
      "A": "Identify Risks",
      "B": "Plan Risk Responses",
      "C": "Monitor Risks",
      "D": "Implement Risk Responses"
    },
    "answer": "D",
    "justification": "Since the risk has materialized (the delay is confirmed), executing the planned corrective action or fallback solution corresponds to the Implement Risk Responses process."
  },
  {
    "id": 27,
    "exam": 1,
    "num_in_exam": 27,
    "domain": "Business",
    "category": "Exam",
    "text": "A new private data protection law (similar to GDPR) is set to take effect in six months. It directly impacts the customer data storage module of the project you currently manage. What should the project manager do FIRST?",
    "options": {
      "A": "Continue the project as originally planned and wait for the legal department to step in.",
      "B": "Assess the impact of the new regulatory requirements on the project's scope and compliance.",
      "C": "Immediately halt all project activities until further notice.",
      "D": "Ask the client to sign a legal liability waiver."
    },
    "answer": "B",
    "justification": "A project manager must be proactive regarding regulatory changes. The first action is to analyze the impact of the new law on product compliance in order to plan the required adjustments."
  },
  {
    "id": 28,
    "exam": 1,
    "num_in_exam": 28,
    "domain": "Business",
    "category": "Exam",
    "text": "An organization decides to move from a classic functional organizational structure to a 'Strong Matrix' structure. What is the main impact of this change for the company's project managers?",
    "options": {
      "A": "The project manager will have less authority over the project budget.",
      "B": "The project manager will have moderate to high authority and will manage the project budget.",
      "C": "Project staff will be managed exclusively by functional managers.",
      "D": "The project manager role will disappear in favor of project coordinators."
    },
    "answer": "B",
    "justification": "In a strong matrix organization, the project manager holds significant power, manages the project team full-time, and controls the budget, unlike in a functional or weak matrix structure."
  },
  {
    "id": 29,
    "exam": 1,
    "num_in_exam": 29,
    "domain": "Business",
    "category": "Agile",
    "text": "A delivery app development project is halfway complete. A major competitor has just launched a similar app with a groundbreaking AI-based feature, changing the expected business value of your project. What is the best action for the project manager in collaboration with the Product Owner?",
    "options": {
      "A": "Ignore the competitor and finish the project exactly as originally planned.",
      "B": "Review the Business Case and realign the Product Backlog to maximize the product's business value against the market.",
      "C": "Immediately cancel the project since it has lost all competitive relevance.",
      "D": "Blame the development team for not anticipating artificial intelligence."
    },
    "answer": "B",
    "justification": "A project must continuously deliver value. If the competitive environment changes, the project manager and Product Owner must reassess the Business Case to ensure the project remains viable and pivot if necessary by adjusting the backlog."
  },
  {
    "id": 30,
    "exam": 1,
    "num_in_exam": 30,
    "domain": "Business",
    "category": "Exam",
    "text": "An energy infrastructure project crosses an ecologically protected region. Local environmental groups are beginning to publicly protest the project. In which document should the project manager record and analyze the impact of these external Enterprise Environmental Factors (EEFs)?",
    "options": {
      "A": "The risk register and the stakeholder register.",
      "B": "The human resources management plan only.",
      "C": "The Work Breakdown Structure (WBS).",
      "D": "Organizational Process Assets (OPA)."
    },
    "answer": "A",
    "justification": "Local community reactions and the ecological environment are external Enterprise Environmental Factors (EEFs). The protests represent a risk (risk register), and the protesters are external actors impacting the project (stakeholder register)."
  },
  {
    "id": 31,
    "exam": 2,
    "num_in_exam": 1,
    "domain": "People",
    "category": "Agile",
    "text": "During an iteration, two senior developers argue over the best way to implement an API. Tensions rise and begin to affect the rest of the team's morale during Daily Standups. What should the Scrum Master / project manager do FIRST?",
    "options": {
      "A": "Make the final technical decision themselves to end the debate and keep the schedule on track.",
      "B": "Encourage the two developers to present their technical arguments privately and guide them toward a compromise.",
      "C": "Ask the Product Owner to decide since it affects the final product.",
      "D": "Temporarily exclude both developers from team meetings to protect the work atmosphere."
    },
    "answer": "B",
    "justification": "A servant leader favors constructive conflict resolution by the team itself (confrontation/collaboration method). Deciding unilaterally (A) undermines the team's autonomy, and excluding members (D) hides the problem without solving it."
  },
  {
    "id": 32,
    "exam": 2,
    "num_in_exam": 2,
    "domain": "Process",
    "category": "Quiz",
    "text": "A fiber optic network construction project is in the execution phase. The client sends an official email requesting the addition of three new city districts to the current deployment plan. What is the FIRST action the project manager should take?",
    "options": {
      "A": "Ask the technical team to immediately begin field surveys in these new districts.",
      "B": "Submit a budget change request directly to the Change Control Board (CCB).",
      "C": "Assess the impact of this request on the project's budget, schedule, risks, and resources.",
      "D": "Reject the request since the scope baseline has already been signed and validated."
    },
    "answer": "C",
    "justification": "This is PMI's absolute golden rule in predictive project management: faced with any change request, the project manager must always analyze the overall impact first before acting (A), submitting it to the CCB (B), or rejecting it (D)."
  },
  {
    "id": 33,
    "exam": 2,
    "num_in_exam": 3,
    "domain": "Process",
    "category": "Predictif",
    "text": "You are analyzing your project's financial and operational performance at the midpoint. Your Earned Value Management (EVM) calculations show the following results: CPI = 1.12 and SPI = 0.81. How should you report the project's health to the Sponsor?",
    "options": {
      "A": "The project is spending less money than planned and is ahead of schedule.",
      "B": "The project is spending more money than planned and is behind schedule.",
      "C": "The project is spending more money than planned and is ahead of schedule.",
      "D": "The project is spending less money than planned and is behind schedule."
    },
    "answer": "D",
    "justification": "A CPI above 1 (1.12) means you are spending your budget efficiently, so you are under budget (spending less than planned for the work completed). An SPI below 1 (0.81) means you are progressing more slowly than planned, so you are behind schedule."
  },
  {
    "id": 34,
    "exam": 2,
    "num_in_exam": 4,
    "domain": "Business",
    "category": "Quiz",
    "text": "A connected medical device development project is underway. The company's legal department informs the project manager that a new international health data security standard will take effect in four months, before the product launch. What should the project manager do FIRST?",
    "options": {
      "A": "Transfer compliance responsibility to the end client by adjusting the contract terms.",
      "B": "Analyze the gap between the current product and the new standard's requirements to measure the impact on the project.",
      "C": "Ignore the information since the project started under the old regulation and has grandfathered status.",
      "D": "Ask the Sponsor to immediately halt the project until the law is officially published."
    },
    "answer": "B",
    "justification": "A project manager must be proactive regarding the business and regulatory environment. Faced with a legal or compliance change, the first action is to analyze the impact (gap analysis) to know precisely what needs to change in the project's scope."
  },
  {
    "id": 35,
    "exam": 2,
    "num_in_exam": 5,
    "domain": "Process",
    "category": "Hybride",
    "text": "In a hybrid project, the software team works in sprints (Agile) while the physical server installation team uses Gantt charts (Predictive). The hardware team announces a three-week delay in delivering a critical server needed for final software testing. Where should the project manager analyze the criticality of this delay on the overall project delivery?",
    "options": {
      "A": "By checking the impact of the delay on the critical path of the overall network diagram.",
      "B": "By asking the Product Owner to recalculate the software team's velocity.",
      "C": "By simply adding a new feature to the Product Backlog to keep the developers busy.",
      "D": "By reviewing last year's Lessons Learned Register."
    },
    "answer": "A",
    "justification": "In a hybrid project, dependencies between the agile portion and the predictive portion are integrated into the project's overall schedule. Physical elements (the servers) and their milestones dictate the critical path. If an item on this path is delayed, the entire project end date is at risk."
  },
  {
    "id": 36,
    "exam": 3,
    "num_in_exam": 1,
    "domain": "People",
    "category": "MiniExam",
    "text": "Two of your technical experts cannot agree on the choice of a cloud service provider. Their dispute is starting to block progress on the architecture. What should you do FIRST?",
    "options": {
      "A": "Choose the provider yourself to avoid wasting time.",
      "B": "Ask the two experts to meet and objectively compare their technical data to reach a consensus.",
      "C": "Escalate the issue to the Sponsor for a management decision.",
      "D": "Replace one of the experts with a more flexible external consultant."
    },
    "answer": "B",
    "justification": "PMI favors the confrontation/problem-solving method based on facts and collaboration. The project manager should guide the experts toward an objective technical consensus."
  },
  {
    "id": 37,
    "exam": 3,
    "num_in_exam": 2,
    "domain": "People",
    "category": "MiniExam",
    "text": "A key member of your project team comes to you privately to confide that they feel overwhelmed by their workload and fear burning out. What is the best response for the project manager?",
    "options": {
      "A": "Tell them the project is going through a critical phase and everyone needs to make an effort.",
      "B": "Immediately reduce their objectives without discussing it with the rest of the team.",
      "C": "Listen to their concerns with empathy, review their workload, and explore solutions together (prioritization, delegation).",
      "D": "Immediately reassign them to another, less stressful project to protect their health."
    },
    "answer": "C",
    "justification": "A servant leader shows emotional intelligence and empathy. They listen and co-build a viable solution to protect their team member's health."
  },
  {
    "id": 38,
    "exam": 3,
    "num_in_exam": 3,
    "domain": "People",
    "category": "Agile",
    "text": "In an agile project, the Product Owner tries to directly assign daily tasks to developers during the Daily Standup, bypassing the principle of self-organization. What action should the Scrum Master take?",
    "options": {
      "A": "Do nothing, since the Product Owner is responsible for the product's success.",
      "B": "Immediately interrupt the meeting and exclude the Product Owner from future Daily Standups.",
      "C": "Meet privately with the Product Owner to coach them on Scrum roles and the importance of team autonomy.",
      "D": "Ask the development team to follow the Product Owner's instructions to avoid conflict."
    },
    "answer": "C",
    "justification": "The Scrum Master is a coach for the organization and the Product Owner. They should correct methodological deviations privately to preserve the development team's autonomy."
  },
  {
    "id": 39,
    "exam": 3,
    "num_in_exam": 4,
    "domain": "People",
    "category": "MiniExam",
    "text": "An international project team includes members based in Paris, New York, and Tokyo. The project manager notices growing friction due to misunderstandings about meeting times and communication styles. What is the best long-term solution?",
    "options": {
      "A": "Organize a workshop to co-create a team charter defining communication rules and shared time slots.",
      "B": "Impose Paris time on all team members since that's where headquarters is located.",
      "C": "Communicate exclusively by email to avoid live meetings.",
      "D": "Ask HR to assess team members' cross-cultural skills."
    },
    "answer": "A",
    "justification": "Virtual, multicultural teams need clear, shared ground rules. Co-creating a team charter builds engagement and reduces conflict."
  },
  {
    "id": 40,
    "exam": 3,
    "num_in_exam": 5,
    "domain": "People",
    "category": "MiniExam",
    "text": "The project Sponsor is known for being very direct and often gets publicly upset with the team during project reviews when results aren't perfect. The team is starting to lose motivation. How should the project manager handle this situation?",
    "options": {
      "A": "Ask the team to stop attending reviews and present the results alone.",
      "B": "Discuss privately with the Sponsor to explain the impact of their communication style on team motivation and agree on a more constructive approach.",
      "C": "Report the Sponsor's behavior to the company's ethics compliance department.",
      "D": "Ignore the situation and tell the team not to take these remarks personally."
    },
    "answer": "B",
    "justification": "The project manager must manage relationships with all stakeholders, including the Sponsor. A constructive private conversation addresses the impact of their behavior without creating public confrontation."
  },
  {
    "id": 41,
    "exam": 3,
    "num_in_exam": 6,
    "domain": "People",
    "category": "MiniExam",
    "text": "A project team has just welcomed three new junior members. The project manager wants to ensure they quickly develop the necessary skills without slowing down output. What management strategy is most effective?",
    "options": {
      "A": "Assign them only simple administrative tasks for the first few months.",
      "B": "Set up a pairing/shadowing system with senior team members.",
      "C": "Fund three weeks of external theoretical training before they touch the project.",
      "D": "Leave them fully autonomous to test their ability to adapt under pressure."
    },
    "answer": "B",
    "justification": "Pairing or shadowing is an excellent agile/hybrid technique for quickly upskilling team members without blocking the value chain."
  },
  {
    "id": 42,
    "exam": 3,
    "num_in_exam": 7,
    "domain": "People",
    "category": "MiniExam",
    "text": "During project planning, a key stakeholder refuses to approve the overall strategy because they feel their needs weren't considered. What is the best approach to gain their buy-in?",
    "options": {
      "A": "Ask the Sponsor to use their authority to force approval.",
      "B": "Organize a dedicated meeting with this stakeholder to listen to their requirements, analyze their concerns, and find a compromise.",
      "C": "Proceed with approval while ignoring this stakeholder since the majority of the team agrees.",
      "D": "Change the entire project strategy to satisfy only this person."
    },
    "answer": "B",
    "justification": "A blocking stakeholder must be actively engaged. Ignoring the opposition or forcing it through creates major political risks for the rest of the project."
  },
  {
    "id": 43,
    "exam": 3,
    "num_in_exam": 8,
    "domain": "People",
    "category": "MiniExam",
    "text": "A high-performing project team is starting to lose cohesion because two senior members are competing over a prestigious task assignment. Which team management tool or technique should the project manager use?",
    "options": {
      "A": "The requirements traceability matrix.",
      "B": "The team charter and the RACI matrix.",
      "C": "The cause-and-effect (Ishikawa) diagram.",
      "D": "The company's human resources management plan."
    },
    "answer": "B",
    "justification": "The team charter sets acceptable behaviors, and the RACI matrix transparently clarifies 'who does what,' eliminating task assignment conflicts."
  },
  {
    "id": 44,
    "exam": 3,
    "num_in_exam": 9,
    "domain": "People",
    "category": "MiniExam",
    "text": "A project manager notices that an external supplier consistently delivers components late, which deeply frustrates the internal development team that depends on these deliverables. What should the project manager do FIRST?",
    "options": {
      "A": "Terminate the contract with the supplier for gross misconduct.",
      "B": "Organize a meeting with the supplier's manager to analyze the root causes of the delays and define a recovery plan.",
      "C": "Publicly blame the supplier during the next client meeting.",
      "D": "Ask the internal team to work weekends to make up for the supplier's delays."
    },
    "answer": "B",
    "justification": "Faced with an issue with a third party, the first step is to collaboratively seek to understand the root cause before taking punitive action."
  },
  {
    "id": 45,
    "exam": 3,
    "num_in_exam": 10,
    "domain": "People",
    "category": "Agile",
    "text": "You lead an experienced agile team. During the retrospective, the team expresses a need to change a project tracking tool because the current one is too administratively burdensome. How should you respond as a servant leader?",
    "options": {
      "A": "Refuse the change since the current tool is standardized across the company.",
      "B": "Support the team by facilitating the evaluation and adoption of the new tool if it improves their efficiency.",
      "C": "Ask the team to write a 20-page business case before deciding.",
      "D": "Make the final decision yourself after consulting the IT department."
    },
    "answer": "B",
    "justification": "A servant leader removes administrative obstacles and supports the team's decisions if they improve productivity and well-being."
  },
  {
    "id": 46,
    "exam": 3,
    "num_in_exam": 11,
    "domain": "Process",
    "category": "MiniExam",
    "text": "In the middle of a predictively managed project, the marketing director requests the addition of a new mobile payment feature. What is the project manager's FIRST action?",
    "options": {
      "A": "Immediately submit the request to the Change Control Board (CCB).",
      "B": "Analyze the impact of this change on the project's scope, cost, schedule, and risks.",
      "C": "Ask the development team to build a prototype for marketing.",
      "D": "Reject the request since the scope baseline is locked."
    },
    "answer": "B",
    "justification": "PMI's absolute rule in predictive management: analyze the impact first, decide afterward. Nothing is submitted to the CCB without first quantifying the impact on the cost/schedule/quality triad."
  },
  {
    "id": 47,
    "exam": 3,
    "num_in_exam": 12,
    "domain": "Process",
    "category": "Predictif",
    "text": "A project manager calculates the performance indicators for their software development project. They get a CPI of 0.78 and an SPI of 1.05. What is the project's actual situation?",
    "options": {
      "A": "The project is ahead of schedule and spending less than planned.",
      "B": "The project is behind schedule and spending more than planned.",
      "C": "The project is ahead of schedule and spending more than planned.",
      "D": "The project is behind schedule and spending less than planned."
    },
    "answer": "C",
    "justification": "SPI = 1.05 (above 1), so the project is ahead of schedule. CPI = 0.78 (below 1), so the project is spending more of its budget than planned for the work completed."
  },
  {
    "id": 48,
    "exam": 3,
    "num_in_exam": 13,
    "domain": "Process",
    "category": "MiniExam",
    "text": "During the planning phase of an event project, the team identifies a high risk of rain on the day of the outdoor festival. They decide to rent large removable tents to cover the stages if needed. Which risk response strategy was implemented?",
    "options": {
      "A": "Avoid",
      "B": "Transfer",
      "C": "Mitigate",
      "D": "Accept"
    },
    "answer": "C",
    "justification": "Renting tents doesn't eliminate the risk of rain (this isn't avoidance), but it reduces the financial and operational impact of rain on the festival. This is mitigation."
  },
  {
    "id": 49,
    "exam": 3,
    "num_in_exam": 14,
    "domain": "Process",
    "category": "Agile",
    "text": "An agile team notices its velocity has dropped by 30% over the last three sprints. The developers explain that they spend too much time fixing bugs from previous code. What is the best action to fix this process issue?",
    "options": {
      "A": "Increase the sprint length to give the team more time.",
      "B": "Use the next retrospective to analyze the causes of these defects and incorporate quality practices (e.g., code reviews, automated testing) into the Definition of Done (DoD).",
      "C": "Ask the Product Owner to remove the testing step to speed up deliveries.",
      "D": "Set a minimum lines-of-code quota per developer per day."
    },
    "answer": "B",
    "justification": "In Agile, process issues are resolved during the retrospective. Strengthening the Definition of Done with quality criteria prevents technical debt from slowing the team down."
  },
  {
    "id": 50,
    "exam": 3,
    "num_in_exam": 15,
    "domain": "Process",
    "category": "MiniExam",
    "text": "The client refuses to sign the final acceptance report for a turnkey factory project, claiming that one of the machines doesn't produce the hourly output specified in the contract. What should the project manager do FIRST?",
    "options": {
      "A": "Force the project closure by relying on the Sponsor's agreement.",
      "B": "Review the quality control documents and the requirements traceability matrix to verify the machine's performance test results.",
      "C": "Ask the team to immediately replace the machine with a better model at the company's expense.",
      "D": "Initiate legal arbitration proceedings for non-payment."
    },
    "answer": "B",
    "justification": "Faced with a dispute over a deliverable, the project manager should rely on factual data (quality tests, initial acceptance criteria) to verify the validity of the client's claim."
  },
  {
    "id": 51,
    "exam": 3,
    "num_in_exam": 16,
    "domain": "Process",
    "category": "Predictif",
    "text": "A construction project uses a network diagram. Activity D has a duration of 5 days and is on the critical path. It experiences a 4-day supply delay. What is the impact of this delay on the project's end date?",
    "options": {
      "A": "No impact, since the delay is less than 5 days.",
      "B": "The overall project will be delayed by 4 days.",
      "C": "The overall project will be delayed by 9 days.",
      "D": "The critical path will automatically change without impacting the end date."
    },
    "answer": "B",
    "justification": "The critical path has zero total float. Any delay on a critical path activity translates day-for-day into a delay in the overall project end date."
  },
  {
    "id": 52,
    "exam": 3,
    "num_in_exam": 17,
    "domain": "Process",
    "category": "MiniExam",
    "text": "A project manager is preparing the budget for a new construction project. They have very little detailed information since the concept is still preliminary, but management demands a quick estimate. Which estimating method should they use?",
    "options": {
      "A": "Bottom-Up Estimation",
      "B": "Analogous Estimation",
      "C": "Function Point Estimation",
      "D": "Parametric Estimation"
    },
    "answer": "B",
    "justification": "Analogous estimating uses the cost of similar past projects as a basis. It is fast and ideal when details of the current project are very limited (early phases)."
  },
  {
    "id": 53,
    "exam": 3,
    "num_in_exam": 18,
    "domain": "Process",
    "category": "MiniExam",
    "text": "During a project, an unforeseen transportation strike paralyzes the delivery of an essential IT server. This event was not identified in the risk register. The project manager must spend $3,000 to pay for a private helicopter carrier. Where should this budget come from?",
    "options": {
      "A": "Contingency Reserves",
      "B": "Management Reserves",
      "C": "The project's profit margin",
      "D": "The team's training budget"
    },
    "answer": "B",
    "justification": "Unforeseen risks (the 'unknown unknowns') are not covered by contingency reserves. Funding them requires approval and use of management reserves."
  },
  {
    "id": 54,
    "exam": 3,
    "num_in_exam": 19,
    "domain": "Process",
    "category": "MiniExam",
    "text": "A company outsources the development of a virtual reality application. Technology evolves every month and the exact scope is impossible to lock in advance. Which type of contract should the buyer favor?",
    "options": {
      "A": "Firm Fixed Price (FFP)",
      "B": "Time and Materials (T&M) or Cost Reimbursable",
      "C": "Fixed Price with Economic Price Adjustment (FP-EPA)",
      "D": "Standard letter of intent to purchase"
    },
    "answer": "B",
    "justification": "When the scope is unclear and subject to major technological change, time-and-materials (T&M) or cost-reimbursable contracts offer the flexibility needed without overburdening the supplier."
  },
  {
    "id": 55,
    "exam": 3,
    "num_in_exam": 20,
    "domain": "Process",
    "category": "MiniExam",
    "text": "The project manager is formalizing the closure of a project that lasted 18 months. All deliverables have been accepted by the client. Which activity is mandatory to finalize the closure process according to PMI?",
    "options": {
      "A": "Delete all intermediate versions of the project plans.",
      "B": "Update and transfer the Lessons Learned Register to the company's organizational knowledge base.",
      "C": "Hold a project wrap-up party using the remaining management reserve budget.",
      "D": "Extend the validity of the Project Charter."
    },
    "answer": "B",
    "justification": "Capturing knowledge by archiving the Lessons Learned Register is a mandatory administrative step to formally close a project according to PMI."
  },
  {
    "id": 56,
    "exam": 3,
    "num_in_exam": 21,
    "domain": "Business",
    "category": "MiniExam",
    "text": "A strict new law on the use of generative artificial intelligence is passed and will apply in 3 months. Your project to develop a decision-support tool relies heavily on this technology. What should you do FIRST?",
    "options": {
      "A": "Ignore the law until it is officially enacted through its implementing decree.",
      "B": "Assess the current project algorithms' compliance against the new law's criteria.",
      "C": "Immediately redesign the architecture to remove any trace of artificial intelligence.",
      "D": "Ask the Sponsor to cancel the project to avoid legal penalties."
    },
    "answer": "B",
    "justification": "A project manager must ensure the compliance of their deliverables. The first action is to perform a gap analysis between the product's current state and the upcoming regulation."
  },
  {
    "id": 57,
    "exam": 3,
    "num_in_exam": 22,
    "domain": "Business",
    "category": "MiniExam",
    "text": "A project to open an overseas commercial subsidiary is underway. A major currency crisis breaks out in the target country, devaluing the local currency by 40% and changing the expected profitability. What is the best action for the project manager?",
    "options": {
      "A": "Continue execution as if nothing happened since the plan was approved.",
      "B": "Collaborate with the Sponsor and financial analysts to reassess the Business Case and determine whether the project remains viable.",
      "C": "Permanently stop all spending without consulting management.",
      "D": "Ask the team to double the pace to launch before the crisis ends."
    },
    "answer": "B",
    "justification": "If the macroeconomic environment undermines the project's theoretical profitability, the Business Case must be immediately reassessed with the Sponsor to confirm whether continuing the project still makes sense."
  },
  {
    "id": 58,
    "exam": 3,
    "num_in_exam": 23,
    "domain": "Business",
    "category": "MiniExam",
    "text": "Your organization is moving from a 'Functional' (siloed) structure to a 'Strong Matrix' structure. What major change will you observe in your role as project manager?",
    "options": {
      "A": "You will lose control over the project budget.",
      "B": "Your authority will increase significantly and you will manage the project budget independently.",
      "C": "Your role will be limited to that of a simple coordinator or facilitator with no power.",
      "D": "You will no longer need to negotiate resources with functional managers."
    },
    "answer": "B",
    "justification": "In a strong matrix organization, the project manager has strong authority, works on the project full-time, and holds budgetary power, unlike in weak or functional structures."
  },
  {
    "id": 59,
    "exam": 3,
    "num_in_exam": 24,
    "domain": "Business",
    "category": "MiniExam",
    "text": "During an industrial project, the project manager notices that the company's overall Corporate Social Responsibility (CSR) strategy has just been updated to ban the use of certain non-recyclable plastics. The project uses exactly these components. How should the project manager respond?",
    "options": {
      "A": "Ignore the new CSR strategy since the project started before it was published.",
      "B": "Document the situation in the risk register and analyze substitution options to align the project with the company's new policy.",
      "C": "Conceal the use of these plastics in progress reports.",
      "D": "Request a permanent exemption from the company's CEO."
    },
    "answer": "B",
    "justification": "The project must remain aligned with corporate governance and strategy (CSR). Changing components to comply with the new policy is the expected professional approach."
  },
  {
    "id": 60,
    "exam": 3,
    "num_in_exam": 25,
    "domain": "Business",
    "category": "Agile",
    "text": "The Product Owner of an e-commerce project realizes that a direct competitor has just launched a very popular photo-based visual search feature. The business value of the application under development risks dropping if this feature isn't integrated. What is the appropriate action?",
    "options": {
      "A": "Continue the original development and deliver the planned product without changes.",
      "B": "Work with the Product Owner to reprioritize the Product Backlog and include a similar feature in the next sprint planning.",
      "C": "Blame the development team for not having this idea sooner.",
      "D": "Restart the project from scratch with an entirely new team."
    },
    "answer": "B",
    "justification": "In a changing environment, the project must adapt to keep delivering business value. Collaborating to reorder the backlog is the quintessential agile response."
  },
  {
    "id": 61,
    "exam": 3,
    "num_in_exam": 26,
    "domain": "Business",
    "category": "MiniExam",
    "text": "During the rollout of an ERP system at a multinational company, the project manager observes strong resistance to change from end users at local plants, jeopardizing system adoption. Which plan should have been better developed and executed to prevent this?",
    "options": {
      "A": "The configuration management plan.",
      "B": "The organizational change management plan.",
      "C": "The project cost management plan.",
      "D": "The WBS dictionary."
    },
    "answer": "B",
    "justification": "Adoption of a new tool depends directly on the change management plan (training, communication, user support). Without it, resistance to change causes projects to fail."
  },
  {
    "id": 62,
    "exam": 3,
    "num_in_exam": 27,
    "domain": "Business",
    "category": "MiniExam",
    "text": "A telecommunications company launches a 5G rollout project. The project manager studies local environmental regulations regarding exposure to electromagnetic waves. PMI classifies these external regulatory factors as:",
    "options": {
      "A": "Organizational Process Assets (OPA)",
      "B": "Enterprise Environmental Factors (EEF)",
      "C": "Scope Baseline",
      "D": "Formal change requests"
    },
    "answer": "B",
    "justification": "Laws, government regulations, and external industry standards are imposed on the project and constitute external Enterprise Environmental Factors (EEFs)."
  },
  {
    "id": 63,
    "exam": 3,
    "num_in_exam": 28,
    "domain": "Business",
    "category": "MiniExam",
    "text": "A long-term public transportation infrastructure project is funded by the government. A change in government occurs, and the new political direction favors cycling over the tram (your project). In which Business Environment process area should the project manager get involved?",
    "options": {
      "A": "Assess and manage political risks in the risk register and evaluate the continued viability of the project's expected benefits.",
      "B": "Ignore the politics since government contracts are immutable.",
      "C": "Immediately cut engineers' salaries to save budget.",
      "D": "Change the tram project into a bike path without the Sponsor's approval."
    },
    "answer": "A",
    "justification": "The project manager must monitor external strategic (political) changes to ensure the project's expected benefits remain viable and useful to the client/funder."
  },
  {
    "id": 64,
    "exam": 3,
    "num_in_exam": 29,
    "domain": "Business",
    "category": "MiniExam",
    "text": "Your company's governance committee requests an update on how your IT project contributes to the organization's strategic objective #1: 'Reduce infrastructure carbon footprint by 15%.' Where should the project manager look for the project's initial alignment with strategic objectives?",
    "options": {
      "A": "In the development team's weekly performance reports.",
      "B": "In the Project Charter and the Business Case.",
      "C": "In the schedule management plan.",
      "D": "In team members' job descriptions."
    },
    "answer": "B",
    "justification": "The Business Case and Project Charter are where the project's strategic justification and initial macroeconomic/environmental objectives are recorded."
  },
  {
    "id": 65,
    "exam": 3,
    "num_in_exam": 30,
    "domain": "Business",
    "category": "MiniExam",
    "text": "A project manager is assigned to a new electric vehicle development project. To ensure the project delivers value throughout its life cycle, which delivery approach should they favor if the market is evolving very rapidly?",
    "options": {
      "A": "A purely predictive (waterfall) approach with a single validation at the end of the project.",
      "B": "An incremental or hybrid approach allowing frequent, staged validation and delivery of value.",
      "C": "An approach with no planning or documentation whatsoever.",
      "D": "Full outsourcing with no internal oversight."
    },
    "answer": "B",
    "justification": "A rapidly evolving market requires short, iterative delivery cycles (incremental/hybrid approach) to incorporate market feedback and continuously deliver value."
  },
  {
    "id": 10000,
    "exam": 99,
    "num_in_exam": 1,
    "domain": "People",
    "text": "[TEST #1] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 1)",
      "B": "Test option B (question 1)",
      "C": "Test option C (question 1)",
      "D": "Test option D (question 1)"
    },
    "answer": "A",
    "justification": "Test question #1 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10001,
    "exam": 99,
    "num_in_exam": 2,
    "domain": "People",
    "text": "[TEST #2] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 2)",
      "B": "Test option B (question 2)",
      "C": "Test option C (question 2)",
      "D": "Test option D (question 2)"
    },
    "answer": "B",
    "justification": "Test question #2 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10002,
    "exam": 99,
    "num_in_exam": 3,
    "domain": "Process",
    "text": "[TEST #3] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 3)",
      "B": "Test option B (question 3)",
      "C": "Test option C (question 3)",
      "D": "Test option D (question 3)"
    },
    "answer": "C",
    "justification": "Test question #3 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10003,
    "exam": 99,
    "num_in_exam": 4,
    "domain": "People",
    "text": "[TEST #4] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 4)",
      "B": "Test option B (question 4)",
      "C": "Test option C (question 4)",
      "D": "Test option D (question 4)"
    },
    "answer": "D",
    "justification": "Test question #4 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10004,
    "exam": 99,
    "num_in_exam": 5,
    "domain": "People",
    "text": "[TEST #5] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 5)",
      "B": "Test option B (question 5)",
      "C": "Test option C (question 5)",
      "D": "Test option D (question 5)"
    },
    "answer": "A",
    "justification": "Test question #5 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10005,
    "exam": 99,
    "num_in_exam": 6,
    "domain": "Process",
    "text": "[TEST #6] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 6)",
      "B": "Test option B (question 6)",
      "C": "Test option C (question 6)",
      "D": "Test option D (question 6)"
    },
    "answer": "B",
    "justification": "Test question #6 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10006,
    "exam": 99,
    "num_in_exam": 7,
    "domain": "People",
    "text": "[TEST #7] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 7)",
      "B": "Test option B (question 7)",
      "C": "Test option C (question 7)",
      "D": "Test option D (question 7)"
    },
    "answer": "C",
    "justification": "Test question #7 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10007,
    "exam": 99,
    "num_in_exam": 8,
    "domain": "Process",
    "text": "[TEST #8] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 8)",
      "B": "Test option B (question 8)",
      "C": "Test option C (question 8)",
      "D": "Test option D (question 8)"
    },
    "answer": "D",
    "justification": "Test question #8 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10008,
    "exam": 99,
    "num_in_exam": 9,
    "domain": "Process",
    "text": "[TEST #9] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 9)",
      "B": "Test option B (question 9)",
      "C": "Test option C (question 9)",
      "D": "Test option D (question 9)"
    },
    "answer": "A",
    "justification": "Test question #9 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10009,
    "exam": 99,
    "num_in_exam": 10,
    "domain": "People",
    "text": "[TEST #10] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 10)",
      "B": "Test option B (question 10)",
      "C": "Test option C (question 10)",
      "D": "Test option D (question 10)"
    },
    "answer": "B",
    "justification": "Test question #10 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10010,
    "exam": 99,
    "num_in_exam": 11,
    "domain": "People",
    "text": "[TEST #11] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 11)",
      "B": "Test option B (question 11)",
      "C": "Test option C (question 11)",
      "D": "Test option D (question 11)"
    },
    "answer": "C",
    "justification": "Test question #11 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10011,
    "exam": 99,
    "num_in_exam": 12,
    "domain": "Process",
    "text": "[TEST #12] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 12)",
      "B": "Test option B (question 12)",
      "C": "Test option C (question 12)",
      "D": "Test option D (question 12)"
    },
    "answer": "D",
    "justification": "Test question #12 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10012,
    "exam": 99,
    "num_in_exam": 13,
    "domain": "Process",
    "text": "[TEST #13] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 13)",
      "B": "Test option B (question 13)",
      "C": "Test option C (question 13)",
      "D": "Test option D (question 13)"
    },
    "answer": "A",
    "justification": "Test question #13 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10013,
    "exam": 99,
    "num_in_exam": 14,
    "domain": "Process",
    "text": "[TEST #14] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 14)",
      "B": "Test option B (question 14)",
      "C": "Test option C (question 14)",
      "D": "Test option D (question 14)"
    },
    "answer": "B",
    "justification": "Test question #14 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10014,
    "exam": 99,
    "num_in_exam": 15,
    "domain": "People",
    "text": "[TEST #15] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 15)",
      "B": "Test option B (question 15)",
      "C": "Test option C (question 15)",
      "D": "Test option D (question 15)"
    },
    "answer": "C",
    "justification": "Test question #15 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10015,
    "exam": 99,
    "num_in_exam": 16,
    "domain": "Process",
    "text": "[TEST #16] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 16)",
      "B": "Test option B (question 16)",
      "C": "Test option C (question 16)",
      "D": "Test option D (question 16)"
    },
    "answer": "D",
    "justification": "Test question #16 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10016,
    "exam": 99,
    "num_in_exam": 17,
    "domain": "People",
    "text": "[TEST #17] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 17)",
      "B": "Test option B (question 17)",
      "C": "Test option C (question 17)",
      "D": "Test option D (question 17)"
    },
    "answer": "A",
    "justification": "Test question #17 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10017,
    "exam": 99,
    "num_in_exam": 18,
    "domain": "People",
    "text": "[TEST #18] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 18)",
      "B": "Test option B (question 18)",
      "C": "Test option C (question 18)",
      "D": "Test option D (question 18)"
    },
    "answer": "B",
    "justification": "Test question #18 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10018,
    "exam": 99,
    "num_in_exam": 19,
    "domain": "Process",
    "text": "[TEST #19] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 19)",
      "B": "Test option B (question 19)",
      "C": "Test option C (question 19)",
      "D": "Test option D (question 19)"
    },
    "answer": "C",
    "justification": "Test question #19 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10019,
    "exam": 99,
    "num_in_exam": 20,
    "domain": "People",
    "text": "[TEST #20] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 20)",
      "B": "Test option B (question 20)",
      "C": "Test option C (question 20)",
      "D": "Test option D (question 20)"
    },
    "answer": "D",
    "justification": "Test question #20 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10020,
    "exam": 99,
    "num_in_exam": 21,
    "domain": "People",
    "text": "[TEST #21] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 21)",
      "B": "Test option B (question 21)",
      "C": "Test option C (question 21)",
      "D": "Test option D (question 21)"
    },
    "answer": "A",
    "justification": "Test question #21 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10021,
    "exam": 99,
    "num_in_exam": 22,
    "domain": "Business",
    "text": "[TEST #22] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 22)",
      "B": "Test option B (question 22)",
      "C": "Test option C (question 22)",
      "D": "Test option D (question 22)"
    },
    "answer": "B",
    "justification": "Test question #22 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10022,
    "exam": 99,
    "num_in_exam": 23,
    "domain": "Process",
    "text": "[TEST #23] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 23)",
      "B": "Test option B (question 23)",
      "C": "Test option C (question 23)",
      "D": "Test option D (question 23)"
    },
    "answer": "C",
    "justification": "Test question #23 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10023,
    "exam": 99,
    "num_in_exam": 24,
    "domain": "Process",
    "text": "[TEST #24] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 24)",
      "B": "Test option B (question 24)",
      "C": "Test option C (question 24)",
      "D": "Test option D (question 24)"
    },
    "answer": "D",
    "justification": "Test question #24 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10024,
    "exam": 99,
    "num_in_exam": 25,
    "domain": "Process",
    "text": "[TEST #25] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 25)",
      "B": "Test option B (question 25)",
      "C": "Test option C (question 25)",
      "D": "Test option D (question 25)"
    },
    "answer": "A",
    "justification": "Test question #25 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10025,
    "exam": 99,
    "num_in_exam": 26,
    "domain": "Process",
    "text": "[TEST #26] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 26)",
      "B": "Test option B (question 26)",
      "C": "Test option C (question 26)",
      "D": "Test option D (question 26)"
    },
    "answer": "B",
    "justification": "Test question #26 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10026,
    "exam": 99,
    "num_in_exam": 27,
    "domain": "People",
    "text": "[TEST #27] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 27)",
      "B": "Test option B (question 27)",
      "C": "Test option C (question 27)",
      "D": "Test option D (question 27)"
    },
    "answer": "C",
    "justification": "Test question #27 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10027,
    "exam": 99,
    "num_in_exam": 28,
    "domain": "People",
    "text": "[TEST #28] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 28)",
      "B": "Test option B (question 28)",
      "C": "Test option C (question 28)",
      "D": "Test option D (question 28)"
    },
    "answer": "D",
    "justification": "Test question #28 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10028,
    "exam": 99,
    "num_in_exam": 29,
    "domain": "People",
    "text": "[TEST #29] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 29)",
      "B": "Test option B (question 29)",
      "C": "Test option C (question 29)",
      "D": "Test option D (question 29)"
    },
    "answer": "A",
    "justification": "Test question #29 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10029,
    "exam": 99,
    "num_in_exam": 30,
    "domain": "People",
    "text": "[TEST #30] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 30)",
      "B": "Test option B (question 30)",
      "C": "Test option C (question 30)",
      "D": "Test option D (question 30)"
    },
    "answer": "B",
    "justification": "Test question #30 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10030,
    "exam": 99,
    "num_in_exam": 31,
    "domain": "Process",
    "text": "[TEST #31] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 31)",
      "B": "Test option B (question 31)",
      "C": "Test option C (question 31)",
      "D": "Test option D (question 31)"
    },
    "answer": "C",
    "justification": "Test question #31 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10031,
    "exam": 99,
    "num_in_exam": 32,
    "domain": "People",
    "text": "[TEST #32] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 32)",
      "B": "Test option B (question 32)",
      "C": "Test option C (question 32)",
      "D": "Test option D (question 32)"
    },
    "answer": "D",
    "justification": "Test question #32 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10032,
    "exam": 99,
    "num_in_exam": 33,
    "domain": "People",
    "text": "[TEST #33] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 33)",
      "B": "Test option B (question 33)",
      "C": "Test option C (question 33)",
      "D": "Test option D (question 33)"
    },
    "answer": "A",
    "justification": "Test question #33 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10033,
    "exam": 99,
    "num_in_exam": 34,
    "domain": "Process",
    "text": "[TEST #34] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 34)",
      "B": "Test option B (question 34)",
      "C": "Test option C (question 34)",
      "D": "Test option D (question 34)"
    },
    "answer": "B",
    "justification": "Test question #34 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10034,
    "exam": 99,
    "num_in_exam": 35,
    "domain": "People",
    "text": "[TEST #35] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 35)",
      "B": "Test option B (question 35)",
      "C": "Test option C (question 35)",
      "D": "Test option D (question 35)"
    },
    "answer": "C",
    "justification": "Test question #35 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10035,
    "exam": 99,
    "num_in_exam": 36,
    "domain": "Process",
    "text": "[TEST #36] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 36)",
      "B": "Test option B (question 36)",
      "C": "Test option C (question 36)",
      "D": "Test option D (question 36)"
    },
    "answer": "D",
    "justification": "Test question #36 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10036,
    "exam": 99,
    "num_in_exam": 37,
    "domain": "Process",
    "text": "[TEST #37] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 37)",
      "B": "Test option B (question 37)",
      "C": "Test option C (question 37)",
      "D": "Test option D (question 37)"
    },
    "answer": "A",
    "justification": "Test question #37 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10037,
    "exam": 99,
    "num_in_exam": 38,
    "domain": "Process",
    "text": "[TEST #38] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 38)",
      "B": "Test option B (question 38)",
      "C": "Test option C (question 38)",
      "D": "Test option D (question 38)"
    },
    "answer": "B",
    "justification": "Test question #38 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10038,
    "exam": 99,
    "num_in_exam": 39,
    "domain": "Process",
    "text": "[TEST #39] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 39)",
      "B": "Test option B (question 39)",
      "C": "Test option C (question 39)",
      "D": "Test option D (question 39)"
    },
    "answer": "C",
    "justification": "Test question #39 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10039,
    "exam": 99,
    "num_in_exam": 40,
    "domain": "Process",
    "text": "[TEST #40] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 40)",
      "B": "Test option B (question 40)",
      "C": "Test option C (question 40)",
      "D": "Test option D (question 40)"
    },
    "answer": "D",
    "justification": "Test question #40 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10040,
    "exam": 99,
    "num_in_exam": 41,
    "domain": "People",
    "text": "[TEST #41] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 41)",
      "B": "Test option B (question 41)",
      "C": "Test option C (question 41)",
      "D": "Test option D (question 41)"
    },
    "answer": "A",
    "justification": "Test question #41 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10041,
    "exam": 99,
    "num_in_exam": 42,
    "domain": "Process",
    "text": "[TEST #42] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 42)",
      "B": "Test option B (question 42)",
      "C": "Test option C (question 42)",
      "D": "Test option D (question 42)"
    },
    "answer": "B",
    "justification": "Test question #42 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10042,
    "exam": 99,
    "num_in_exam": 43,
    "domain": "People",
    "text": "[TEST #43] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 43)",
      "B": "Test option B (question 43)",
      "C": "Test option C (question 43)",
      "D": "Test option D (question 43)"
    },
    "answer": "C",
    "justification": "Test question #43 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10043,
    "exam": 99,
    "num_in_exam": 44,
    "domain": "People",
    "text": "[TEST #44] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 44)",
      "B": "Test option B (question 44)",
      "C": "Test option C (question 44)",
      "D": "Test option D (question 44)"
    },
    "answer": "D",
    "justification": "Test question #44 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10044,
    "exam": 99,
    "num_in_exam": 45,
    "domain": "Process",
    "text": "[TEST #45] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 45)",
      "B": "Test option B (question 45)",
      "C": "Test option C (question 45)",
      "D": "Test option D (question 45)"
    },
    "answer": "A",
    "justification": "Test question #45 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10045,
    "exam": 99,
    "num_in_exam": 46,
    "domain": "Process",
    "text": "[TEST #46] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 46)",
      "B": "Test option B (question 46)",
      "C": "Test option C (question 46)",
      "D": "Test option D (question 46)"
    },
    "answer": "B",
    "justification": "Test question #46 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10046,
    "exam": 99,
    "num_in_exam": 47,
    "domain": "Process",
    "text": "[TEST #47] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 47)",
      "B": "Test option B (question 47)",
      "C": "Test option C (question 47)",
      "D": "Test option D (question 47)"
    },
    "answer": "C",
    "justification": "Test question #47 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10047,
    "exam": 99,
    "num_in_exam": 48,
    "domain": "People",
    "text": "[TEST #48] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 48)",
      "B": "Test option B (question 48)",
      "C": "Test option C (question 48)",
      "D": "Test option D (question 48)"
    },
    "answer": "D",
    "justification": "Test question #48 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10048,
    "exam": 99,
    "num_in_exam": 49,
    "domain": "People",
    "text": "[TEST #49] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 49)",
      "B": "Test option B (question 49)",
      "C": "Test option C (question 49)",
      "D": "Test option D (question 49)"
    },
    "answer": "A",
    "justification": "Test question #49 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10049,
    "exam": 99,
    "num_in_exam": 50,
    "domain": "People",
    "text": "[TEST #50] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 50)",
      "B": "Test option B (question 50)",
      "C": "Test option C (question 50)",
      "D": "Test option D (question 50)"
    },
    "answer": "B",
    "justification": "Test question #50 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10050,
    "exam": 99,
    "num_in_exam": 51,
    "domain": "Process",
    "text": "[TEST #51] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 51)",
      "B": "Test option B (question 51)",
      "C": "Test option C (question 51)",
      "D": "Test option D (question 51)"
    },
    "answer": "C",
    "justification": "Test question #51 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10051,
    "exam": 99,
    "num_in_exam": 52,
    "domain": "Business",
    "text": "[TEST #52] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 52)",
      "B": "Test option B (question 52)",
      "C": "Test option C (question 52)",
      "D": "Test option D (question 52)"
    },
    "answer": "D",
    "justification": "Test question #52 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10052,
    "exam": 99,
    "num_in_exam": 53,
    "domain": "Process",
    "text": "[TEST #53] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 53)",
      "B": "Test option B (question 53)",
      "C": "Test option C (question 53)",
      "D": "Test option D (question 53)"
    },
    "answer": "A",
    "justification": "Test question #53 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10053,
    "exam": 99,
    "num_in_exam": 54,
    "domain": "People",
    "text": "[TEST #54] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 54)",
      "B": "Test option B (question 54)",
      "C": "Test option C (question 54)",
      "D": "Test option D (question 54)"
    },
    "answer": "B",
    "justification": "Test question #54 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10054,
    "exam": 99,
    "num_in_exam": 55,
    "domain": "People",
    "text": "[TEST #55] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 55)",
      "B": "Test option B (question 55)",
      "C": "Test option C (question 55)",
      "D": "Test option D (question 55)"
    },
    "answer": "C",
    "justification": "Test question #55 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10055,
    "exam": 99,
    "num_in_exam": 56,
    "domain": "Process",
    "text": "[TEST #56] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 56)",
      "B": "Test option B (question 56)",
      "C": "Test option C (question 56)",
      "D": "Test option D (question 56)"
    },
    "answer": "D",
    "justification": "Test question #56 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10056,
    "exam": 99,
    "num_in_exam": 57,
    "domain": "Business",
    "text": "[TEST #57] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 57)",
      "B": "Test option B (question 57)",
      "C": "Test option C (question 57)",
      "D": "Test option D (question 57)"
    },
    "answer": "A",
    "justification": "Test question #57 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10057,
    "exam": 99,
    "num_in_exam": 58,
    "domain": "People",
    "text": "[TEST #58] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 58)",
      "B": "Test option B (question 58)",
      "C": "Test option C (question 58)",
      "D": "Test option D (question 58)"
    },
    "answer": "B",
    "justification": "Test question #58 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10058,
    "exam": 99,
    "num_in_exam": 59,
    "domain": "Process",
    "text": "[TEST #59] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 59)",
      "B": "Test option B (question 59)",
      "C": "Test option C (question 59)",
      "D": "Test option D (question 59)"
    },
    "answer": "C",
    "justification": "Test question #59 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10059,
    "exam": 99,
    "num_in_exam": 60,
    "domain": "Process",
    "text": "[TEST #60] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 60)",
      "B": "Test option B (question 60)",
      "C": "Test option C (question 60)",
      "D": "Test option D (question 60)"
    },
    "answer": "D",
    "justification": "Test question #60 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10060,
    "exam": 99,
    "num_in_exam": 61,
    "domain": "People",
    "text": "[TEST #61] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 61)",
      "B": "Test option B (question 61)",
      "C": "Test option C (question 61)",
      "D": "Test option D (question 61)"
    },
    "answer": "A",
    "justification": "Test question #61 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10061,
    "exam": 99,
    "num_in_exam": 62,
    "domain": "Process",
    "text": "[TEST #62] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 62)",
      "B": "Test option B (question 62)",
      "C": "Test option C (question 62)",
      "D": "Test option D (question 62)"
    },
    "answer": "B",
    "justification": "Test question #62 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10062,
    "exam": 99,
    "num_in_exam": 63,
    "domain": "People",
    "text": "[TEST #63] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 63)",
      "B": "Test option B (question 63)",
      "C": "Test option C (question 63)",
      "D": "Test option D (question 63)"
    },
    "answer": "C",
    "justification": "Test question #63 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10063,
    "exam": 99,
    "num_in_exam": 64,
    "domain": "Process",
    "text": "[TEST #64] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 64)",
      "B": "Test option B (question 64)",
      "C": "Test option C (question 64)",
      "D": "Test option D (question 64)"
    },
    "answer": "D",
    "justification": "Test question #64 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10064,
    "exam": 99,
    "num_in_exam": 65,
    "domain": "People",
    "text": "[TEST #65] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 65)",
      "B": "Test option B (question 65)",
      "C": "Test option C (question 65)",
      "D": "Test option D (question 65)"
    },
    "answer": "A",
    "justification": "Test question #65 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10065,
    "exam": 99,
    "num_in_exam": 66,
    "domain": "People",
    "text": "[TEST #66] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 66)",
      "B": "Test option B (question 66)",
      "C": "Test option C (question 66)",
      "D": "Test option D (question 66)"
    },
    "answer": "B",
    "justification": "Test question #66 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10066,
    "exam": 99,
    "num_in_exam": 67,
    "domain": "People",
    "text": "[TEST #67] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 67)",
      "B": "Test option B (question 67)",
      "C": "Test option C (question 67)",
      "D": "Test option D (question 67)"
    },
    "answer": "C",
    "justification": "Test question #67 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10067,
    "exam": 99,
    "num_in_exam": 68,
    "domain": "Process",
    "text": "[TEST #68] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 68)",
      "B": "Test option B (question 68)",
      "C": "Test option C (question 68)",
      "D": "Test option D (question 68)"
    },
    "answer": "D",
    "justification": "Test question #68 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10068,
    "exam": 99,
    "num_in_exam": 69,
    "domain": "People",
    "text": "[TEST #69] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 69)",
      "B": "Test option B (question 69)",
      "C": "Test option C (question 69)",
      "D": "Test option D (question 69)"
    },
    "answer": "A",
    "justification": "Test question #69 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10069,
    "exam": 99,
    "num_in_exam": 70,
    "domain": "Process",
    "text": "[TEST #70] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 70)",
      "B": "Test option B (question 70)",
      "C": "Test option C (question 70)",
      "D": "Test option D (question 70)"
    },
    "answer": "B",
    "justification": "Test question #70 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10070,
    "exam": 99,
    "num_in_exam": 71,
    "domain": "People",
    "text": "[TEST #71] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 71)",
      "B": "Test option B (question 71)",
      "C": "Test option C (question 71)",
      "D": "Test option D (question 71)"
    },
    "answer": "C",
    "justification": "Test question #71 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10071,
    "exam": 99,
    "num_in_exam": 72,
    "domain": "Business",
    "text": "[TEST #72] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 72)",
      "B": "Test option B (question 72)",
      "C": "Test option C (question 72)",
      "D": "Test option D (question 72)"
    },
    "answer": "D",
    "justification": "Test question #72 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10072,
    "exam": 99,
    "num_in_exam": 73,
    "domain": "Process",
    "text": "[TEST #73] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 73)",
      "B": "Test option B (question 73)",
      "C": "Test option C (question 73)",
      "D": "Test option D (question 73)"
    },
    "answer": "A",
    "justification": "Test question #73 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10073,
    "exam": 99,
    "num_in_exam": 74,
    "domain": "People",
    "text": "[TEST #74] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 74)",
      "B": "Test option B (question 74)",
      "C": "Test option C (question 74)",
      "D": "Test option D (question 74)"
    },
    "answer": "B",
    "justification": "Test question #74 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10074,
    "exam": 99,
    "num_in_exam": 75,
    "domain": "Process",
    "text": "[TEST #75] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 75)",
      "B": "Test option B (question 75)",
      "C": "Test option C (question 75)",
      "D": "Test option D (question 75)"
    },
    "answer": "C",
    "justification": "Test question #75 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10075,
    "exam": 99,
    "num_in_exam": 76,
    "domain": "Process",
    "text": "[TEST #76] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 76)",
      "B": "Test option B (question 76)",
      "C": "Test option C (question 76)",
      "D": "Test option D (question 76)"
    },
    "answer": "D",
    "justification": "Test question #76 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10076,
    "exam": 99,
    "num_in_exam": 77,
    "domain": "People",
    "text": "[TEST #77] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 77)",
      "B": "Test option B (question 77)",
      "C": "Test option C (question 77)",
      "D": "Test option D (question 77)"
    },
    "answer": "A",
    "justification": "Test question #77 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10077,
    "exam": 99,
    "num_in_exam": 78,
    "domain": "People",
    "text": "[TEST #78] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 78)",
      "B": "Test option B (question 78)",
      "C": "Test option C (question 78)",
      "D": "Test option D (question 78)"
    },
    "answer": "B",
    "justification": "Test question #78 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10078,
    "exam": 99,
    "num_in_exam": 79,
    "domain": "People",
    "text": "[TEST #79] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 79)",
      "B": "Test option B (question 79)",
      "C": "Test option C (question 79)",
      "D": "Test option D (question 79)"
    },
    "answer": "C",
    "justification": "Test question #79 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10079,
    "exam": 99,
    "num_in_exam": 80,
    "domain": "Process",
    "text": "[TEST #80] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 80)",
      "B": "Test option B (question 80)",
      "C": "Test option C (question 80)",
      "D": "Test option D (question 80)"
    },
    "answer": "D",
    "justification": "Test question #80 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10080,
    "exam": 99,
    "num_in_exam": 81,
    "domain": "People",
    "text": "[TEST #81] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 81)",
      "B": "Test option B (question 81)",
      "C": "Test option C (question 81)",
      "D": "Test option D (question 81)"
    },
    "answer": "A",
    "justification": "Test question #81 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10081,
    "exam": 99,
    "num_in_exam": 82,
    "domain": "Business",
    "text": "[TEST #82] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 82)",
      "B": "Test option B (question 82)",
      "C": "Test option C (question 82)",
      "D": "Test option D (question 82)"
    },
    "answer": "B",
    "justification": "Test question #82 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10082,
    "exam": 99,
    "num_in_exam": 83,
    "domain": "Process",
    "text": "[TEST #83] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 83)",
      "B": "Test option B (question 83)",
      "C": "Test option C (question 83)",
      "D": "Test option D (question 83)"
    },
    "answer": "C",
    "justification": "Test question #83 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10083,
    "exam": 99,
    "num_in_exam": 84,
    "domain": "People",
    "text": "[TEST #84] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 84)",
      "B": "Test option B (question 84)",
      "C": "Test option C (question 84)",
      "D": "Test option D (question 84)"
    },
    "answer": "D",
    "justification": "Test question #84 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10084,
    "exam": 99,
    "num_in_exam": 85,
    "domain": "Process",
    "text": "[TEST #85] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 85)",
      "B": "Test option B (question 85)",
      "C": "Test option C (question 85)",
      "D": "Test option D (question 85)"
    },
    "answer": "A",
    "justification": "Test question #85 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10085,
    "exam": 99,
    "num_in_exam": 86,
    "domain": "Process",
    "text": "[TEST #86] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 86)",
      "B": "Test option B (question 86)",
      "C": "Test option C (question 86)",
      "D": "Test option D (question 86)"
    },
    "answer": "B",
    "justification": "Test question #86 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10086,
    "exam": 99,
    "num_in_exam": 87,
    "domain": "Process",
    "text": "[TEST #87] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 87)",
      "B": "Test option B (question 87)",
      "C": "Test option C (question 87)",
      "D": "Test option D (question 87)"
    },
    "answer": "C",
    "justification": "Test question #87 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10087,
    "exam": 99,
    "num_in_exam": 88,
    "domain": "People",
    "text": "[TEST #88] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 88)",
      "B": "Test option B (question 88)",
      "C": "Test option C (question 88)",
      "D": "Test option D (question 88)"
    },
    "answer": "D",
    "justification": "Test question #88 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10088,
    "exam": 99,
    "num_in_exam": 89,
    "domain": "People",
    "text": "[TEST #89] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 89)",
      "B": "Test option B (question 89)",
      "C": "Test option C (question 89)",
      "D": "Test option D (question 89)"
    },
    "answer": "A",
    "justification": "Test question #89 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10089,
    "exam": 99,
    "num_in_exam": 90,
    "domain": "Process",
    "text": "[TEST #90] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 90)",
      "B": "Test option B (question 90)",
      "C": "Test option C (question 90)",
      "D": "Test option D (question 90)"
    },
    "answer": "B",
    "justification": "Test question #90 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10090,
    "exam": 99,
    "num_in_exam": 91,
    "domain": "Business",
    "text": "[TEST #91] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 91)",
      "B": "Test option B (question 91)",
      "C": "Test option C (question 91)",
      "D": "Test option D (question 91)"
    },
    "answer": "C",
    "justification": "Test question #91 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10091,
    "exam": 99,
    "num_in_exam": 92,
    "domain": "People",
    "text": "[TEST #92] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 92)",
      "B": "Test option B (question 92)",
      "C": "Test option C (question 92)",
      "D": "Test option D (question 92)"
    },
    "answer": "D",
    "justification": "Test question #92 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10092,
    "exam": 99,
    "num_in_exam": 93,
    "domain": "Process",
    "text": "[TEST #93] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 93)",
      "B": "Test option B (question 93)",
      "C": "Test option C (question 93)",
      "D": "Test option D (question 93)"
    },
    "answer": "A",
    "justification": "Test question #93 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10093,
    "exam": 99,
    "num_in_exam": 94,
    "domain": "Process",
    "text": "[TEST #94] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 94)",
      "B": "Test option B (question 94)",
      "C": "Test option C (question 94)",
      "D": "Test option D (question 94)"
    },
    "answer": "B",
    "justification": "Test question #94 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10094,
    "exam": 99,
    "num_in_exam": 95,
    "domain": "Business",
    "text": "[TEST #95] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 95)",
      "B": "Test option B (question 95)",
      "C": "Test option C (question 95)",
      "D": "Test option D (question 95)"
    },
    "answer": "C",
    "justification": "Test question #95 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10095,
    "exam": 99,
    "num_in_exam": 96,
    "domain": "People",
    "text": "[TEST #96] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 96)",
      "B": "Test option B (question 96)",
      "C": "Test option C (question 96)",
      "D": "Test option D (question 96)"
    },
    "answer": "D",
    "justification": "Test question #96 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10096,
    "exam": 99,
    "num_in_exam": 97,
    "domain": "People",
    "text": "[TEST #97] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 97)",
      "B": "Test option B (question 97)",
      "C": "Test option C (question 97)",
      "D": "Test option D (question 97)"
    },
    "answer": "A",
    "justification": "Test question #97 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10097,
    "exam": 99,
    "num_in_exam": 98,
    "domain": "Process",
    "text": "[TEST #98] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 98)",
      "B": "Test option B (question 98)",
      "C": "Test option C (question 98)",
      "D": "Test option D (question 98)"
    },
    "answer": "B",
    "justification": "Test question #98 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10098,
    "exam": 99,
    "num_in_exam": 99,
    "domain": "Process",
    "text": "[TEST #99] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 99)",
      "B": "Test option B (question 99)",
      "C": "Test option C (question 99)",
      "D": "Test option D (question 99)"
    },
    "answer": "C",
    "justification": "Test question #99 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10099,
    "exam": 99,
    "num_in_exam": 100,
    "domain": "People",
    "text": "[TEST #100] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 100)",
      "B": "Test option B (question 100)",
      "C": "Test option C (question 100)",
      "D": "Test option D (question 100)"
    },
    "answer": "D",
    "justification": "Test question #100 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10100,
    "exam": 99,
    "num_in_exam": 101,
    "domain": "People",
    "text": "[TEST #101] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 101)",
      "B": "Test option B (question 101)",
      "C": "Test option C (question 101)",
      "D": "Test option D (question 101)"
    },
    "answer": "A",
    "justification": "Test question #101 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10101,
    "exam": 99,
    "num_in_exam": 102,
    "domain": "Process",
    "text": "[TEST #102] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 102)",
      "B": "Test option B (question 102)",
      "C": "Test option C (question 102)",
      "D": "Test option D (question 102)"
    },
    "answer": "B",
    "justification": "Test question #102 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10102,
    "exam": 99,
    "num_in_exam": 103,
    "domain": "People",
    "text": "[TEST #103] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 103)",
      "B": "Test option B (question 103)",
      "C": "Test option C (question 103)",
      "D": "Test option D (question 103)"
    },
    "answer": "C",
    "justification": "Test question #103 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10103,
    "exam": 99,
    "num_in_exam": 104,
    "domain": "Process",
    "text": "[TEST #104] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 104)",
      "B": "Test option B (question 104)",
      "C": "Test option C (question 104)",
      "D": "Test option D (question 104)"
    },
    "answer": "D",
    "justification": "Test question #104 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10104,
    "exam": 99,
    "num_in_exam": 105,
    "domain": "Process",
    "text": "[TEST #105] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 105)",
      "B": "Test option B (question 105)",
      "C": "Test option C (question 105)",
      "D": "Test option D (question 105)"
    },
    "answer": "A",
    "justification": "Test question #105 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10105,
    "exam": 99,
    "num_in_exam": 106,
    "domain": "Process",
    "text": "[TEST #106] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 106)",
      "B": "Test option B (question 106)",
      "C": "Test option C (question 106)",
      "D": "Test option D (question 106)"
    },
    "answer": "B",
    "justification": "Test question #106 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10106,
    "exam": 99,
    "num_in_exam": 107,
    "domain": "Process",
    "text": "[TEST #107] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 107)",
      "B": "Test option B (question 107)",
      "C": "Test option C (question 107)",
      "D": "Test option D (question 107)"
    },
    "answer": "C",
    "justification": "Test question #107 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10107,
    "exam": 99,
    "num_in_exam": 108,
    "domain": "Process",
    "text": "[TEST #108] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 108)",
      "B": "Test option B (question 108)",
      "C": "Test option C (question 108)",
      "D": "Test option D (question 108)"
    },
    "answer": "D",
    "justification": "Test question #108 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10108,
    "exam": 99,
    "num_in_exam": 109,
    "domain": "Process",
    "text": "[TEST #109] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 109)",
      "B": "Test option B (question 109)",
      "C": "Test option C (question 109)",
      "D": "Test option D (question 109)"
    },
    "answer": "A",
    "justification": "Test question #109 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10109,
    "exam": 99,
    "num_in_exam": 110,
    "domain": "People",
    "text": "[TEST #110] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 110)",
      "B": "Test option B (question 110)",
      "C": "Test option C (question 110)",
      "D": "Test option D (question 110)"
    },
    "answer": "B",
    "justification": "Test question #110 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10110,
    "exam": 99,
    "num_in_exam": 111,
    "domain": "Process",
    "text": "[TEST #111] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 111)",
      "B": "Test option B (question 111)",
      "C": "Test option C (question 111)",
      "D": "Test option D (question 111)"
    },
    "answer": "C",
    "justification": "Test question #111 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10111,
    "exam": 99,
    "num_in_exam": 112,
    "domain": "People",
    "text": "[TEST #112] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 112)",
      "B": "Test option B (question 112)",
      "C": "Test option C (question 112)",
      "D": "Test option D (question 112)"
    },
    "answer": "D",
    "justification": "Test question #112 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10112,
    "exam": 99,
    "num_in_exam": 113,
    "domain": "People",
    "text": "[TEST #113] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 113)",
      "B": "Test option B (question 113)",
      "C": "Test option C (question 113)",
      "D": "Test option D (question 113)"
    },
    "answer": "A",
    "justification": "Test question #113 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10113,
    "exam": 99,
    "num_in_exam": 114,
    "domain": "Process",
    "text": "[TEST #114] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 114)",
      "B": "Test option B (question 114)",
      "C": "Test option C (question 114)",
      "D": "Test option D (question 114)"
    },
    "answer": "B",
    "justification": "Test question #114 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10114,
    "exam": 99,
    "num_in_exam": 115,
    "domain": "People",
    "text": "[TEST #115] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 115)",
      "B": "Test option B (question 115)",
      "C": "Test option C (question 115)",
      "D": "Test option D (question 115)"
    },
    "answer": "C",
    "justification": "Test question #115 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10115,
    "exam": 99,
    "num_in_exam": 116,
    "domain": "People",
    "text": "[TEST #116] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 116)",
      "B": "Test option B (question 116)",
      "C": "Test option C (question 116)",
      "D": "Test option D (question 116)"
    },
    "answer": "D",
    "justification": "Test question #116 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10116,
    "exam": 99,
    "num_in_exam": 117,
    "domain": "Business",
    "text": "[TEST #117] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 117)",
      "B": "Test option B (question 117)",
      "C": "Test option C (question 117)",
      "D": "Test option D (question 117)"
    },
    "answer": "A",
    "justification": "Test question #117 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10117,
    "exam": 99,
    "num_in_exam": 118,
    "domain": "Process",
    "text": "[TEST #118] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 118)",
      "B": "Test option B (question 118)",
      "C": "Test option C (question 118)",
      "D": "Test option D (question 118)"
    },
    "answer": "B",
    "justification": "Test question #118 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10118,
    "exam": 99,
    "num_in_exam": 119,
    "domain": "Process",
    "text": "[TEST #119] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 119)",
      "B": "Test option B (question 119)",
      "C": "Test option C (question 119)",
      "D": "Test option D (question 119)"
    },
    "answer": "C",
    "justification": "Test question #119 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10119,
    "exam": 99,
    "num_in_exam": 120,
    "domain": "Process",
    "text": "[TEST #120] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 120)",
      "B": "Test option B (question 120)",
      "C": "Test option C (question 120)",
      "D": "Test option D (question 120)"
    },
    "answer": "D",
    "justification": "Test question #120 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10120,
    "exam": 99,
    "num_in_exam": 121,
    "domain": "Process",
    "text": "[TEST #121] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 121)",
      "B": "Test option B (question 121)",
      "C": "Test option C (question 121)",
      "D": "Test option D (question 121)"
    },
    "answer": "A",
    "justification": "Test question #121 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10121,
    "exam": 99,
    "num_in_exam": 122,
    "domain": "People",
    "text": "[TEST #122] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 122)",
      "B": "Test option B (question 122)",
      "C": "Test option C (question 122)",
      "D": "Test option D (question 122)"
    },
    "answer": "B",
    "justification": "Test question #122 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10122,
    "exam": 99,
    "num_in_exam": 123,
    "domain": "Process",
    "text": "[TEST #123] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 123)",
      "B": "Test option B (question 123)",
      "C": "Test option C (question 123)",
      "D": "Test option D (question 123)"
    },
    "answer": "C",
    "justification": "Test question #123 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10123,
    "exam": 99,
    "num_in_exam": 124,
    "domain": "People",
    "text": "[TEST #124] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 124)",
      "B": "Test option B (question 124)",
      "C": "Test option C (question 124)",
      "D": "Test option D (question 124)"
    },
    "answer": "D",
    "justification": "Test question #124 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10124,
    "exam": 99,
    "num_in_exam": 125,
    "domain": "Process",
    "text": "[TEST #125] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 125)",
      "B": "Test option B (question 125)",
      "C": "Test option C (question 125)",
      "D": "Test option D (question 125)"
    },
    "answer": "A",
    "justification": "Test question #125 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10125,
    "exam": 99,
    "num_in_exam": 126,
    "domain": "Process",
    "text": "[TEST #126] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 126)",
      "B": "Test option B (question 126)",
      "C": "Test option C (question 126)",
      "D": "Test option D (question 126)"
    },
    "answer": "B",
    "justification": "Test question #126 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10126,
    "exam": 99,
    "num_in_exam": 127,
    "domain": "People",
    "text": "[TEST #127] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 127)",
      "B": "Test option B (question 127)",
      "C": "Test option C (question 127)",
      "D": "Test option D (question 127)"
    },
    "answer": "C",
    "justification": "Test question #127 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10127,
    "exam": 99,
    "num_in_exam": 128,
    "domain": "People",
    "text": "[TEST #128] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 128)",
      "B": "Test option B (question 128)",
      "C": "Test option C (question 128)",
      "D": "Test option D (question 128)"
    },
    "answer": "D",
    "justification": "Test question #128 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10128,
    "exam": 99,
    "num_in_exam": 129,
    "domain": "People",
    "text": "[TEST #129] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 129)",
      "B": "Test option B (question 129)",
      "C": "Test option C (question 129)",
      "D": "Test option D (question 129)"
    },
    "answer": "A",
    "justification": "Test question #129 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10129,
    "exam": 99,
    "num_in_exam": 130,
    "domain": "Process",
    "text": "[TEST #130] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 130)",
      "B": "Test option B (question 130)",
      "C": "Test option C (question 130)",
      "D": "Test option D (question 130)"
    },
    "answer": "B",
    "justification": "Test question #130 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10130,
    "exam": 99,
    "num_in_exam": 131,
    "domain": "Process",
    "text": "[TEST #131] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 131)",
      "B": "Test option B (question 131)",
      "C": "Test option C (question 131)",
      "D": "Test option D (question 131)"
    },
    "answer": "C",
    "justification": "Test question #131 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10131,
    "exam": 99,
    "num_in_exam": 132,
    "domain": "People",
    "text": "[TEST #132] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 132)",
      "B": "Test option B (question 132)",
      "C": "Test option C (question 132)",
      "D": "Test option D (question 132)"
    },
    "answer": "D",
    "justification": "Test question #132 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10132,
    "exam": 99,
    "num_in_exam": 133,
    "domain": "People",
    "text": "[TEST #133] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 133)",
      "B": "Test option B (question 133)",
      "C": "Test option C (question 133)",
      "D": "Test option D (question 133)"
    },
    "answer": "A",
    "justification": "Test question #133 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10133,
    "exam": 99,
    "num_in_exam": 134,
    "domain": "Business",
    "text": "[TEST #134] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 134)",
      "B": "Test option B (question 134)",
      "C": "Test option C (question 134)",
      "D": "Test option D (question 134)"
    },
    "answer": "B",
    "justification": "Test question #134 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10134,
    "exam": 99,
    "num_in_exam": 135,
    "domain": "Process",
    "text": "[TEST #135] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 135)",
      "B": "Test option B (question 135)",
      "C": "Test option C (question 135)",
      "D": "Test option D (question 135)"
    },
    "answer": "C",
    "justification": "Test question #135 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10135,
    "exam": 99,
    "num_in_exam": 136,
    "domain": "People",
    "text": "[TEST #136] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 136)",
      "B": "Test option B (question 136)",
      "C": "Test option C (question 136)",
      "D": "Test option D (question 136)"
    },
    "answer": "D",
    "justification": "Test question #136 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10136,
    "exam": 99,
    "num_in_exam": 137,
    "domain": "Process",
    "text": "[TEST #137] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 137)",
      "B": "Test option B (question 137)",
      "C": "Test option C (question 137)",
      "D": "Test option D (question 137)"
    },
    "answer": "A",
    "justification": "Test question #137 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10137,
    "exam": 99,
    "num_in_exam": 138,
    "domain": "Process",
    "text": "[TEST #138] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 138)",
      "B": "Test option B (question 138)",
      "C": "Test option C (question 138)",
      "D": "Test option D (question 138)"
    },
    "answer": "B",
    "justification": "Test question #138 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10138,
    "exam": 99,
    "num_in_exam": 139,
    "domain": "Business",
    "text": "[TEST #139] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 139)",
      "B": "Test option B (question 139)",
      "C": "Test option C (question 139)",
      "D": "Test option D (question 139)"
    },
    "answer": "C",
    "justification": "Test question #139 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10139,
    "exam": 99,
    "num_in_exam": 140,
    "domain": "Process",
    "text": "[TEST #140] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 140)",
      "B": "Test option B (question 140)",
      "C": "Test option C (question 140)",
      "D": "Test option D (question 140)"
    },
    "answer": "D",
    "justification": "Test question #140 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10140,
    "exam": 99,
    "num_in_exam": 141,
    "domain": "People",
    "text": "[TEST #141] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 141)",
      "B": "Test option B (question 141)",
      "C": "Test option C (question 141)",
      "D": "Test option D (question 141)"
    },
    "answer": "A",
    "justification": "Test question #141 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10141,
    "exam": 99,
    "num_in_exam": 142,
    "domain": "People",
    "text": "[TEST #142] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 142)",
      "B": "Test option B (question 142)",
      "C": "Test option C (question 142)",
      "D": "Test option D (question 142)"
    },
    "answer": "B",
    "justification": "Test question #142 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10142,
    "exam": 99,
    "num_in_exam": 143,
    "domain": "Process",
    "text": "[TEST #143] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 143)",
      "B": "Test option B (question 143)",
      "C": "Test option C (question 143)",
      "D": "Test option D (question 143)"
    },
    "answer": "C",
    "justification": "Test question #143 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10143,
    "exam": 99,
    "num_in_exam": 144,
    "domain": "Process",
    "text": "[TEST #144] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 144)",
      "B": "Test option B (question 144)",
      "C": "Test option C (question 144)",
      "D": "Test option D (question 144)"
    },
    "answer": "D",
    "justification": "Test question #144 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10144,
    "exam": 99,
    "num_in_exam": 145,
    "domain": "People",
    "text": "[TEST #145] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 145)",
      "B": "Test option B (question 145)",
      "C": "Test option C (question 145)",
      "D": "Test option D (question 145)"
    },
    "answer": "A",
    "justification": "Test question #145 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10145,
    "exam": 99,
    "num_in_exam": 146,
    "domain": "Process",
    "text": "[TEST #146] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 146)",
      "B": "Test option B (question 146)",
      "C": "Test option C (question 146)",
      "D": "Test option D (question 146)"
    },
    "answer": "B",
    "justification": "Test question #146 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10146,
    "exam": 99,
    "num_in_exam": 147,
    "domain": "People",
    "text": "[TEST #147] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 147)",
      "B": "Test option B (question 147)",
      "C": "Test option C (question 147)",
      "D": "Test option D (question 147)"
    },
    "answer": "C",
    "justification": "Test question #147 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10147,
    "exam": 99,
    "num_in_exam": 148,
    "domain": "Business",
    "text": "[TEST #148] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 148)",
      "B": "Test option B (question 148)",
      "C": "Test option C (question 148)",
      "D": "Test option D (question 148)"
    },
    "answer": "D",
    "justification": "Test question #148 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10148,
    "exam": 99,
    "num_in_exam": 149,
    "domain": "Process",
    "text": "[TEST #149] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 149)",
      "B": "Test option B (question 149)",
      "C": "Test option C (question 149)",
      "D": "Test option D (question 149)"
    },
    "answer": "A",
    "justification": "Test question #149 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10149,
    "exam": 99,
    "num_in_exam": 150,
    "domain": "People",
    "text": "[TEST #150] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 150)",
      "B": "Test option B (question 150)",
      "C": "Test option C (question 150)",
      "D": "Test option D (question 150)"
    },
    "answer": "B",
    "justification": "Test question #150 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10150,
    "exam": 99,
    "num_in_exam": 151,
    "domain": "Process",
    "text": "[TEST #151] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 151)",
      "B": "Test option B (question 151)",
      "C": "Test option C (question 151)",
      "D": "Test option D (question 151)"
    },
    "answer": "C",
    "justification": "Test question #151 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10151,
    "exam": 99,
    "num_in_exam": 152,
    "domain": "People",
    "text": "[TEST #152] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 152)",
      "B": "Test option B (question 152)",
      "C": "Test option C (question 152)",
      "D": "Test option D (question 152)"
    },
    "answer": "D",
    "justification": "Test question #152 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10152,
    "exam": 99,
    "num_in_exam": 153,
    "domain": "Process",
    "text": "[TEST #153] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 153)",
      "B": "Test option B (question 153)",
      "C": "Test option C (question 153)",
      "D": "Test option D (question 153)"
    },
    "answer": "A",
    "justification": "Test question #153 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10153,
    "exam": 99,
    "num_in_exam": 154,
    "domain": "Process",
    "text": "[TEST #154] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 154)",
      "B": "Test option B (question 154)",
      "C": "Test option C (question 154)",
      "D": "Test option D (question 154)"
    },
    "answer": "B",
    "justification": "Test question #154 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10154,
    "exam": 99,
    "num_in_exam": 155,
    "domain": "People",
    "text": "[TEST #155] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 155)",
      "B": "Test option B (question 155)",
      "C": "Test option C (question 155)",
      "D": "Test option D (question 155)"
    },
    "answer": "C",
    "justification": "Test question #155 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10155,
    "exam": 99,
    "num_in_exam": 156,
    "domain": "Process",
    "text": "[TEST #156] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 156)",
      "B": "Test option B (question 156)",
      "C": "Test option C (question 156)",
      "D": "Test option D (question 156)"
    },
    "answer": "D",
    "justification": "Test question #156 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10156,
    "exam": 99,
    "num_in_exam": 157,
    "domain": "Process",
    "text": "[TEST #157] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 157)",
      "B": "Test option B (question 157)",
      "C": "Test option C (question 157)",
      "D": "Test option D (question 157)"
    },
    "answer": "A",
    "justification": "Test question #157 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10157,
    "exam": 99,
    "num_in_exam": 158,
    "domain": "People",
    "text": "[TEST #158] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 158)",
      "B": "Test option B (question 158)",
      "C": "Test option C (question 158)",
      "D": "Test option D (question 158)"
    },
    "answer": "B",
    "justification": "Test question #158 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10158,
    "exam": 99,
    "num_in_exam": 159,
    "domain": "People",
    "text": "[TEST #159] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 159)",
      "B": "Test option B (question 159)",
      "C": "Test option C (question 159)",
      "D": "Test option D (question 159)"
    },
    "answer": "C",
    "justification": "Test question #159 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10159,
    "exam": 99,
    "num_in_exam": 160,
    "domain": "People",
    "text": "[TEST #160] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 160)",
      "B": "Test option B (question 160)",
      "C": "Test option C (question 160)",
      "D": "Test option D (question 160)"
    },
    "answer": "D",
    "justification": "Test question #160 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10160,
    "exam": 99,
    "num_in_exam": 161,
    "domain": "Business",
    "text": "[TEST #161] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 161)",
      "B": "Test option B (question 161)",
      "C": "Test option C (question 161)",
      "D": "Test option D (question 161)"
    },
    "answer": "A",
    "justification": "Test question #161 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10161,
    "exam": 99,
    "num_in_exam": 162,
    "domain": "Process",
    "text": "[TEST #162] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 162)",
      "B": "Test option B (question 162)",
      "C": "Test option C (question 162)",
      "D": "Test option D (question 162)"
    },
    "answer": "B",
    "justification": "Test question #162 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10162,
    "exam": 99,
    "num_in_exam": 163,
    "domain": "People",
    "text": "[TEST #163] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 163)",
      "B": "Test option B (question 163)",
      "C": "Test option C (question 163)",
      "D": "Test option D (question 163)"
    },
    "answer": "C",
    "justification": "Test question #163 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10163,
    "exam": 99,
    "num_in_exam": 164,
    "domain": "People",
    "text": "[TEST #164] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 164)",
      "B": "Test option B (question 164)",
      "C": "Test option C (question 164)",
      "D": "Test option D (question 164)"
    },
    "answer": "D",
    "justification": "Test question #164 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10164,
    "exam": 99,
    "num_in_exam": 165,
    "domain": "Process",
    "text": "[TEST #165] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 165)",
      "B": "Test option B (question 165)",
      "C": "Test option C (question 165)",
      "D": "Test option D (question 165)"
    },
    "answer": "A",
    "justification": "Test question #165 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10165,
    "exam": 99,
    "num_in_exam": 166,
    "domain": "Process",
    "text": "[TEST #166] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 166)",
      "B": "Test option B (question 166)",
      "C": "Test option C (question 166)",
      "D": "Test option D (question 166)"
    },
    "answer": "B",
    "justification": "Test question #166 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10166,
    "exam": 99,
    "num_in_exam": 167,
    "domain": "Process",
    "text": "[TEST #167] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 167)",
      "B": "Test option B (question 167)",
      "C": "Test option C (question 167)",
      "D": "Test option D (question 167)"
    },
    "answer": "C",
    "justification": "Test question #167 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10167,
    "exam": 99,
    "num_in_exam": 168,
    "domain": "Process",
    "text": "[TEST #168] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 168)",
      "B": "Test option B (question 168)",
      "C": "Test option C (question 168)",
      "D": "Test option D (question 168)"
    },
    "answer": "D",
    "justification": "Test question #168 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10168,
    "exam": 99,
    "num_in_exam": 169,
    "domain": "People",
    "text": "[TEST #169] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 169)",
      "B": "Test option B (question 169)",
      "C": "Test option C (question 169)",
      "D": "Test option D (question 169)"
    },
    "answer": "A",
    "justification": "Test question #169 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10169,
    "exam": 99,
    "num_in_exam": 170,
    "domain": "Business",
    "text": "[TEST #170] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 170)",
      "B": "Test option B (question 170)",
      "C": "Test option C (question 170)",
      "D": "Test option D (question 170)"
    },
    "answer": "B",
    "justification": "Test question #170 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10170,
    "exam": 99,
    "num_in_exam": 171,
    "domain": "Process",
    "text": "[TEST #171] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 171)",
      "B": "Test option B (question 171)",
      "C": "Test option C (question 171)",
      "D": "Test option D (question 171)"
    },
    "answer": "C",
    "justification": "Test question #171 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10171,
    "exam": 99,
    "num_in_exam": 172,
    "domain": "Process",
    "text": "[TEST #172] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 172)",
      "B": "Test option B (question 172)",
      "C": "Test option C (question 172)",
      "D": "Test option D (question 172)"
    },
    "answer": "D",
    "justification": "Test question #172 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10172,
    "exam": 99,
    "num_in_exam": 173,
    "domain": "People",
    "text": "[TEST #173] Auto-generated test question (domain People) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 173)",
      "B": "Test option B (question 173)",
      "C": "Test option C (question 173)",
      "D": "Test option D (question 173)"
    },
    "answer": "A",
    "justification": "Test question #173 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10173,
    "exam": 99,
    "num_in_exam": 174,
    "domain": "Process",
    "text": "[TEST #174] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 174)",
      "B": "Test option B (question 174)",
      "C": "Test option C (question 174)",
      "D": "Test option D (question 174)"
    },
    "answer": "B",
    "justification": "Test question #174 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10174,
    "exam": 99,
    "num_in_exam": 175,
    "domain": "Process",
    "text": "[TEST #175] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 175)",
      "B": "Test option B (question 175)",
      "C": "Test option C (question 175)",
      "D": "Test option D (question 175)"
    },
    "answer": "C",
    "justification": "Test question #175 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10175,
    "exam": 99,
    "num_in_exam": 176,
    "domain": "Process",
    "text": "[TEST #176] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 176)",
      "B": "Test option B (question 176)",
      "C": "Test option C (question 176)",
      "D": "Test option D (question 176)"
    },
    "answer": "D",
    "justification": "Test question #176 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10176,
    "exam": 99,
    "num_in_exam": 177,
    "domain": "Process",
    "text": "[TEST #177] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 177)",
      "B": "Test option B (question 177)",
      "C": "Test option C (question 177)",
      "D": "Test option D (question 177)"
    },
    "answer": "A",
    "justification": "Test question #177 — the correct answer is arbitrarily set to \"A\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10177,
    "exam": 99,
    "num_in_exam": 178,
    "domain": "Business",
    "text": "[TEST #178] Auto-generated test question (domain Business) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 178)",
      "B": "Test option B (question 178)",
      "C": "Test option C (question 178)",
      "D": "Test option D (question 178)"
    },
    "answer": "B",
    "justification": "Test question #178 — the correct answer is arbitrarily set to \"B\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10178,
    "exam": 99,
    "num_in_exam": 179,
    "domain": "Process",
    "text": "[TEST #179] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 179)",
      "B": "Test option B (question 179)",
      "C": "Test option C (question 179)",
      "D": "Test option D (question 179)"
    },
    "answer": "C",
    "justification": "Test question #179 — the correct answer is arbitrarily set to \"C\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  },
  {
    "id": 10179,
    "exam": 99,
    "num_in_exam": 180,
    "domain": "Process",
    "text": "[TEST #180] Auto-generated test question (domain Process) — only used to validate the break mechanism after 60/120 questions and the 240-minute clock. Replace with a real question via the admin panel.",
    "options": {
      "A": "Test option A (question 180)",
      "B": "Test option B (question 180)",
      "C": "Test option C (question 180)",
      "D": "Test option D (question 180)"
    },
    "answer": "D",
    "justification": "Test question #180 — the correct answer is arbitrarily set to \"D\" to verify score calculation. Do not use as-is for a real exam.",
    "category": "Exam"
  }
];

function getQuestionBank(lang) {
  return lang === 'en' ? QUESTIONS_EN : QUESTIONS_FR;
}
