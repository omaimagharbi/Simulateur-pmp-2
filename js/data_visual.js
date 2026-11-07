// Questions de type ECO 2026 (graphique, zone sensible, liste déroulante) — générées.
// Elles remplacent, dans chaque examen de 180 questions, des questions simples du même
// domaine (VISUAL_HIDDEN_IDS) : le total reste de 180 par examen.
const VISUAL_QUESTIONS_FR = [
 {
  "id": 2000001,
  "category": "Exam",
  "examen": 1,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-1",
  "justification": "CPI = EV / AC = 420 / 525 = 0,80. Avec une tendance de coût qui se maintient, EAC = BAC / CPI = 1 200 / 0,80 = 1 500 k€. 1 305 k€ (AC + BAC − EV) s'appliquerait à un écart atypique ; 1 714 k€ utilise le SPI (délai) au lieu du CPI.",
  "type": "single_choice",
  "text": "Le graphique ci-dessus présente l'état d'un projet au mois 6 (BAC = 1 200 k€). Si la performance de coût actuelle se maintient jusqu'à la fin du projet, quelle est l'estimation à l'achèvement (EAC) ?",
  "options": {
   "A": "1 500 k€",
   "B": "1 305 k€",
   "C": "1 714 k€",
   "D": "1 200 k€"
  },
  "answer": "A",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 1200,
   "yTicks": [
    0,
    300,
    600,
    900,
    1200
   ],
   "xTitle": "Mois",
   "yTitle": "Coût cumulé (k€)",
   "series": [
    {
     "id": "s1",
     "color": "#2f6fed",
     "pts": [
      0,
      40,
      100,
      190,
      310,
      450,
      600,
      750,
      880,
      990,
      1080,
      1150,
      1200
     ],
     "dash": "7 4",
     "label": "PV (valeur planifiée)",
     "labelAt": 8,
     "labelDy": 18,
     "labelAnchor": "start",
     "labelDx": 8
    },
    {
     "id": "s2",
     "color": "#a3392b",
     "pts": [
      0,
      45,
      110,
      200,
      320,
      430,
      525,
      null,
      null,
      null,
      null,
      null,
      null
     ],
     "label": "AC (coût réel)",
     "labelAt": 6,
     "labelDy": -10,
     "labelAnchor": "end",
     "labelDx": -8
    },
    {
     "id": "s3",
     "color": "#2c7a6d",
     "pts": [
      0,
      30,
      75,
      140,
      225,
      330,
      420,
      null,
      null,
      null,
      null,
      null,
      null
     ],
     "label": "EV (valeur acquise)",
     "labelAt": 6,
     "labelDy": 20,
     "labelAnchor": "start",
     "labelDx": 6
    }
   ],
   "markers": [
    {
     "x": 6,
     "label": "Aujourd'hui"
    }
   ]
  }
 },
 {
  "id": 2000002,
  "category": "Exam",
  "examen": 1,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-2",
  "justification": "La courbe en tirets qui court jusqu'à la fin du projet est la valeur planifiée (PV). Les deux autres s'arrêtent à la date du jour : comme CPI < 1, le coût réel (AC) est supérieur à la valeur acquise (EV) — AC est donc la courbe supérieure.",
  "type": "hotspot",
  "text": "Le graphique n'a pas de légende. Le projet est en dépassement de coût (CPI < 1) et en retard sur le planning (SPI < 1). Cliquez sur la courbe qui représente le coût réel (AC).",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 1200,
   "yTicks": [
    0,
    300,
    600,
    900,
    1200
   ],
   "xTitle": "Mois",
   "yTitle": "Coût cumulé (k€)",
   "series": [
    {
     "id": "s1",
     "color": "#2f6fed",
     "pts": [
      0,
      40,
      100,
      190,
      310,
      450,
      600,
      750,
      880,
      990,
      1080,
      1150,
      1200
     ],
     "dash": "7 4"
    },
    {
     "id": "s2",
     "color": "#a3392b",
     "pts": [
      0,
      40,
      100,
      190,
      310,
      430,
      560,
      690,
      810,
      null,
      null,
      null,
      null
     ]
    },
    {
     "id": "s3",
     "color": "#2c7a6d",
     "pts": [
      0,
      30,
      80,
      150,
      250,
      370,
      480,
      590,
      690,
      null,
      null,
      null,
      null
     ]
    }
   ],
   "markers": [
    {
     "x": 8,
     "label": "Aujourd'hui"
    }
   ]
  },
  "zones": [
   "s1",
   "s2",
   "s3"
  ],
  "zone_labels": {
   "s1": "Courbe en tirets (jusqu'au mois 12)",
   "s2": "Courbe supérieure arrêtée au mois 8",
   "s3": "Courbe inférieure arrêtée au mois 8"
  },
  "correct_zone": "s2"
 },
 {
  "id": 2000003,
  "category": "Exam",
  "examen": 1,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-3",
  "justification": "Reporter l'impact d'un risque négatif sur un tiers (assurance, garantie, contrat à prix fixe) est la stratégie de transfert. Le suivi des risques et des risques résiduels se fait dans le registre des risques.",
  "type": "dropdown",
  "text": "Le risque R-07 (défaillance du fournisseur unique) est un risque négatif. En souscrivant une assurance contractuelle qui reporte l'impact financier sur un tiers, l'équipe applique la stratégie de {1}. Le risque résiduel restera suivi dans {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "éviter",
     "transférer",
     "atténuer",
     "accepter"
    ],
    "answer": 1
   },
   {
    "id": "2",
    "options": [
     "la charte du projet",
     "le diagramme de Gantt",
     "le registre des risques",
     "le plan de gestion des parties prenantes"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": 2000004,
  "category": "Exam",
  "examen": 1,
  "domain": "Business",
  "approach": "predictif",
  "source_id": "VIS-4",
  "justification": "Toute demande de changement est d'abord analysée (impacts sur périmètre, coût, délai, risques, qualité), puis soumise à l'instance d'approbation (CCB). La baseline n'est mise à jour qu'après approbation ; une exigence réglementaire ne se refuse pas par principe.",
  "type": "dropdown",
  "text": "Une nouvelle exigence réglementaire modifie le périmètre en cours de projet. Le chef de projet doit d'abord {1}, puis soumettre la demande de changement à {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "mettre à jour la baseline du périmètre",
     "évaluer l'impact sur le périmètre, le coût, le délai et les risques",
     "demander à l'équipe de commencer le travail",
     "refuser tout changement hors baseline"
    ],
    "answer": 1
   },
   {
    "id": "2",
    "options": [
     "l'équipe de développement",
     "le fournisseur",
     "le comité de contrôle des changements",
     "l'ensemble des parties prenantes externes"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": 2000005,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "agile_hybride",
  "source_id": "VIS-5",
  "justification": "La remontée de la courbe au jour 3 indique du travail ajouté ; 33 points restent contre 12 attendus. Un sprint est à durée fixe (timebox) : on ne le prolonge pas. L'équipe se synchronise avec le Product Owner pour renégocier le contenu, sans heures supplémentaires imposées.",
  "type": "single_choice",
  "text": "Au jour 7 d'un sprint de 10 jours, l'équipe observe ce burndown. Que montre-t-il et quelle est la meilleure réaction ?",
  "options": {
   "A": "Du travail a été ajouté, l'équipe est en retard ; elle discute avec le PO pour réajuster le sprint",
   "B": "L'équipe est en avance sur le plan ; elle peut ajouter des éléments au sprint backlog sans en parler au PO",
   "C": "Le sprint doit être prolongé de trois jours pour absorber le retard constaté sur la courbe",
   "D": "L'équipe doit faire des heures supplémentaires pour rejoindre la courbe idéale avant la fin"
  },
  "answer": "A",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
   ],
   "yMax": 44,
   "yTicks": [
    0,
    10,
    20,
    30,
    40
   ],
   "xTitle": "Jour du sprint",
   "yTitle": "Points restants",
   "series": [
    {
     "id": "ideal",
     "color": "#8a93a8",
     "dash": "7 4",
     "pts": [
      40,
      36,
      32,
      28,
      24,
      20,
      16,
      12,
      8,
      4,
      0
     ],
     "label": "Idéal",
     "labelAt": 9,
     "labelDy": -8,
     "labelDx": 0
    },
    {
     "id": "actual",
     "color": "#2f6fed",
     "pts": [
      40,
      38,
      36,
      41,
      39,
      37,
      35,
      33,
      null,
      null,
      null
     ],
     "dots": true,
     "label": "Réel",
     "labelAt": 7,
     "labelDy": -12,
     "labelDx": 6
    }
   ],
   "markers": [
    {
     "x": 7,
     "label": "Aujourd'hui"
    }
   ]
  }
 },
 {
  "id": 2000006,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-6",
  "justification": "La règle des sept : sept points consécutifs ou plus du même côté de la moyenne indiquent une cause assignable, même sans dépasser les limites. Il faut investiguer et agir ; on ne modifie pas les limites pour masquer la dérive.",
  "type": "single_choice",
  "text": "Ce diagramme de contrôle suit le nombre de défauts par échantillon. Tous les points sont à l'intérieur des limites de contrôle. Quelle est la meilleure action du chef de projet ?",
  "options": {
   "A": "Ne rien faire : tous les points sont dans les limites, le processus est donc maîtrisé",
   "B": "Élargir les limites de contrôle pour refléter les derniers résultats observés du processus",
   "C": "Rechercher la cause : huit points consécutifs du même côté de la moyenne signalent une dérive",
   "D": "Remplacer les échantillons des derniers lots et recalculer les limites de contrôle"
  },
  "answer": "C",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 18,
   "yTicks": [
    0,
    6,
    10,
    14,
    18
   ],
   "xTitle": "Échantillon",
   "yTitle": "Défauts",
   "hlines": [
    {
     "y": 14,
     "label": "LSC",
     "color": "#a3392b"
    },
    {
     "y": 6,
     "label": "LIC",
     "color": "#a3392b"
    },
    {
     "y": 10,
     "label": "Moyenne",
     "color": "#5a6786",
     "dash": "2 4"
    }
   ],
   "series": [
    {
     "id": "m",
     "color": "#2f6fed",
     "pts": [
      10,
      11,
      9,
      10,
      12,
      11,
      12,
      13,
      12,
      13,
      12,
      13
     ],
     "dots": true
    }
   ]
  }
 },
 {
  "id": 2000007,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-7",
  "justification": "Le point de l'échantillon 9 (16 défauts) dépasse la limite supérieure de contrôle (14) : c'est un signal hors contrôle qui impose de chercher la cause assignable.",
  "type": "hotspot",
  "text": "Cliquez sur le point du diagramme de contrôle qui sort des limites de contrôle et exige une analyse de cause assignable.",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 18,
   "yTicks": [
    0,
    6,
    10,
    14,
    18
   ],
   "xTitle": "Échantillon",
   "yTitle": "Défauts",
   "hlines": [
    {
     "y": 14,
     "label": "LSC",
     "color": "#a3392b"
    },
    {
     "y": 6,
     "label": "LIC",
     "color": "#a3392b"
    },
    {
     "y": 10,
     "label": "Moyenne",
     "color": "#5a6786",
     "dash": "2 4"
    }
   ],
   "series": [
    {
     "id": "m",
     "color": "#2f6fed",
     "pts": [
      10,
      11,
      9,
      10,
      12,
      9,
      11,
      10,
      16,
      11,
      10,
      9
     ],
     "dots": true
    }
   ]
  },
  "zones": [
   "pt0",
   "pt1",
   "pt2",
   "pt3",
   "pt4",
   "pt5",
   "pt6",
   "pt7",
   "pt8",
   "pt9",
   "pt10",
   "pt11"
  ],
  "zone_labels": {
   "pt0": "Échantillon 1",
   "pt1": "Échantillon 2",
   "pt2": "Échantillon 3",
   "pt3": "Échantillon 4",
   "pt4": "Échantillon 5",
   "pt5": "Échantillon 6",
   "pt6": "Échantillon 7",
   "pt7": "Échantillon 8",
   "pt8": "Échantillon 9",
   "pt9": "Échantillon 10",
   "pt10": "Échantillon 11",
   "pt11": "Échantillon 12"
  },
  "correct_zone": "pt8"
 },
 {
  "id": 2000008,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-8",
  "justification": "CPI = EV / AC = 80 / 100 = 0,80 (< 1 : dépassement de coût). SPI = EV / PV = 80 / 90 = 0,89 (< 1 : retard).",
  "type": "dropdown",
  "text": "Avec EV = 80 k€, AC = 100 k€ et PV = 90 k€, le CPI vaut {1} et le SPI vaut {2} ; le projet est donc {3}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "1,25",
     "0,89",
     "1,13",
     "0,80"
    ],
    "answer": 3
   },
   {
    "id": "2",
    "options": [
     "0,89",
     "1,13",
     "0,80",
     "1,25"
    ],
    "answer": 0
   },
   {
    "id": "3",
    "options": [
     "sous le budget et en avance",
     "en dépassement de coût et en retard",
     "en dépassement de coût et en avance",
     "sous le budget et en retard"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 2000009,
  "category": "Exam",
  "examen": 3,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-9",
  "justification": "Chemin A-B-D-E = 3 + 5 + 6 + 4 = 18 jours (chemin critique). Chemin A-C-D-E = 15 jours. La marge totale de C = 18 − 15 = 3 jours (LS 6 − ES 3).",
  "type": "single_choice",
  "text": "D'après ce diagramme de réseau, quelle est la marge totale de l'activité C et la durée minimale du projet ?",
  "options": {
   "A": "Marge de 3 jours ; durée de 18 jours",
   "B": "Marge de 0 jour ; durée de 15 jours",
   "C": "Marge de 3 jours ; durée de 15 jours",
   "D": "Marge de 5 jours ; durée de 18 jours"
  },
  "answer": "A",
  "figure": {
   "kind": "network",
   "durLabel": "Durée",
   "critical": [],
   "nodes": [
    {
     "id": "A",
     "label": "A",
     "dur": 3,
     "x": 14,
     "y": 124,
     "es": 0,
     "ef": 3
    },
    {
     "id": "B",
     "label": "B",
     "dur": 5,
     "x": 178,
     "y": 44,
     "es": 3,
     "ef": 8
    },
    {
     "id": "C",
     "label": "C",
     "dur": 2,
     "x": 178,
     "y": 204,
     "es": 3,
     "ef": 5
    },
    {
     "id": "D",
     "label": "D",
     "dur": 6,
     "x": 342,
     "y": 124,
     "es": 8,
     "ef": 14
    },
    {
     "id": "E",
     "label": "E",
     "dur": 4,
     "x": 506,
     "y": 124,
     "es": 14,
     "ef": 18
    }
   ],
   "edges": [
    [
     "A",
     "B"
    ],
    [
     "A",
     "C"
    ],
    [
     "B",
     "D"
    ],
    [
     "C",
     "D"
    ],
    [
     "D",
     "E"
    ]
   ],
   "note": "Unité : jours. ES (en bas à gauche) / EF (en bas à droite)."
  }
 },
 {
  "id": 2000010,
  "category": "Exam",
  "examen": 3,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-10",
  "justification": "Le chemin critique est A-B-E-F (16 jours). L'activité C appartient au chemin A-C-E-F (13 jours) : marge de 3 jours. L'activité D (chemin A-D-F = 14 jours) n'a que 2 jours de marge.",
  "type": "hotspot",
  "text": "Cliquez sur l'activité qui dispose de la plus grande marge totale.",
  "figure": {
   "kind": "network",
   "durLabel": "Durée",
   "nodes": [
    {
     "id": "A",
     "label": "A",
     "dur": 4,
     "x": 14,
     "y": 130
    },
    {
     "id": "B",
     "label": "B",
     "dur": 6,
     "x": 178,
     "y": 18
    },
    {
     "id": "C",
     "label": "C",
     "dur": 3,
     "x": 178,
     "y": 130
    },
    {
     "id": "D",
     "label": "D",
     "dur": 6,
     "x": 178,
     "y": 244
    },
    {
     "id": "E",
     "label": "E",
     "dur": 2,
     "x": 342,
     "y": 60
    },
    {
     "id": "F",
     "label": "F",
     "dur": 4,
     "x": 506,
     "y": 130
    }
   ],
   "edges": [
    [
     "A",
     "B"
    ],
    [
     "A",
     "C"
    ],
    [
     "A",
     "D"
    ],
    [
     "B",
     "E"
    ],
    [
     "C",
     "E"
    ],
    [
     "D",
     "F"
    ],
    [
     "E",
     "F"
    ]
   ],
   "note": "Unité : jours. Durées en jours ouvrés."
  },
  "zones": [
   "A",
   "B",
   "C",
   "D",
   "E",
   "F"
  ],
  "zone_labels": {
   "A": "Activité A",
   "B": "Activité B",
   "C": "Activité C",
   "D": "Activité D",
   "E": "Activité E",
   "F": "Activité F"
  },
  "correct_zone": "C"
 },
 {
  "id": 2000011,
  "category": "Exam",
  "examen": 3,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-11",
  "justification": "Pouvoir élevé et intérêt faible = « tenir satisfait » : il peut bloquer le projet, mais le saturer d'informations est contre-productif. On cible la communication sur ses préoccupations (budget, décisions clés).",
  "type": "single_choice",
  "text": "Selon cette grille pouvoir/intérêt, quelle approche d'engagement convient le mieux au directeur financier ?",
  "options": {
   "A": "Le gérer de près en l'impliquant dans toutes les décisions quotidiennes du projet",
   "B": "Le tenir satisfait avec des informations ciblées sur le budget et les décisions clés",
   "C": "Le tenir informé uniquement par la lettre d'information hebdomadaire de l'équipe",
   "D": "Se contenter de le surveiller de loin sans communication particulière avec lui"
  },
  "answer": "B",
  "figure": {
   "kind": "grid",
   "rows": [
    "Élevé",
    "Faible"
   ],
   "cols": [
    "Faible",
    "Élevé"
   ],
   "xTitle": "Intérêt",
   "yTitle": "Pouvoir",
   "cells": [
    [
     {
      "text": "Directeur financier",
      "fill": "b",
      "bold": true,
      "size": 12
     },
     {
      "text": "Sponsor",
      "fill": "b",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "Fournisseur",
      "fill": "n",
      "bold": true,
      "size": 12
     },
     {
      "text": "Utilisateurs finaux",
      "fill": "n",
      "bold": true,
      "size": 12
     }
    ]
   ]
  }
 },
 {
  "id": 2000012,
  "category": "Exam",
  "examen": 3,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-12",
  "justification": "La rétrospective de sprint porte sur les personnes, les relations, les processus et les outils ; les améliorations retenues sont intégrées dès le prochain sprint (souvent dans son backlog). La revue de sprint, elle, inspecte l'incrément avec les parties prenantes.",
  "type": "dropdown",
  "text": "Lors de la {1}, l'équipe Scrum inspecte la façon dont le travail a été réalisé et identifie des améliorations à intégrer dans {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "revue de sprint",
     "planification de sprint",
     "mêlée quotidienne",
     "rétrospective de sprint"
    ],
    "answer": 3
   },
   {
    "id": "2",
    "options": [
     "la vision produit",
     "le prochain sprint",
     "la release précédente",
     "le plan de gestion de la qualité"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 2000013,
  "category": "Exam",
  "examen": 4,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-13",
  "justification": "Scores : R1 = 3 × 3 = 9 ; R2 = 3 × 2 = 6 ; R4 = 2 × 2 = 4 ; R3 = 1 × 3 = 3 ; R5 = 1 × 1 = 1. L'ordre décroissant est donc R1, R2, R4, R3, R5.",
  "type": "single_choice",
  "text": "Les cinq risques R1 à R5 sont placés dans la matrice probabilité/impact ci-dessus (échelle 3 × 3, score = probabilité × impact, Faible = 1, Moyen = 2, Élevé = 3). Quel est l'ordre de priorité de traitement ?",
  "options": {
   "A": "R1, R2, R4, R3, R5",
   "B": "R1, R3, R2, R4, R5",
   "C": "R2, R1, R3, R4, R5",
   "D": "R5, R4, R3, R2, R1"
  },
  "answer": "A",
  "figure": {
   "kind": "grid",
   "rows": [
    "Élevé",
    "Moyen",
    "Faible"
   ],
   "cols": [
    "Faible",
    "Moyen",
    "Élevé"
   ],
   "xTitle": "Impact",
   "yTitle": "Probabilité",
   "cells": [
    [
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "R2",
      "fill": "r",
      "bold": true,
      "size": 13
     },
     {
      "text": "R1",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "R4",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "R5",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "R3",
      "fill": "a",
      "bold": true,
      "size": 13
     }
    ]
   ]
  }
 },
 {
  "id": 2000014,
  "category": "Exam",
  "examen": 4,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-14",
  "justification": "Probabilité faible (ligne du bas) et impact élevé (colonne de droite) : c'est la cellule en bas à droite. Elle est de criticité moyenne : on prévoit un plan de réponse ou une provision plutôt qu'une action immédiate.",
  "type": "hotspot",
  "text": "Un risque d'intempérie exceptionnelle est jugé très improbable (probabilité faible), mais s'il survenait il arrêterait le chantier (impact élevé). Cliquez sur la cellule de la matrice où il doit être placé.",
  "figure": {
   "kind": "grid",
   "rows": [
    "Élevé",
    "Moyen",
    "Faible"
   ],
   "cols": [
    "Faible",
    "Moyen",
    "Élevé"
   ],
   "xTitle": "Impact",
   "yTitle": "Probabilité",
   "cells": [
    [
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     }
    ]
   ]
  },
  "zones": [
   "r0c0",
   "r0c1",
   "r0c2",
   "r1c0",
   "r1c1",
   "r1c2",
   "r2c0",
   "r2c1",
   "r2c2"
  ],
  "zone_labels": {
   "r0c0": "Probabilité élevée / Impact faible",
   "r0c1": "Probabilité élevée / Impact moyen",
   "r0c2": "Probabilité élevée / Impact élevé",
   "r1c0": "Probabilité moyenne / Impact faible",
   "r1c1": "Probabilité moyenne / Impact moyen",
   "r1c2": "Probabilité moyenne / Impact élevé",
   "r2c0": "Probabilité faible / Impact faible",
   "r2c1": "Probabilité faible / Impact moyen",
   "r2c2": "Probabilité faible / Impact élevé"
  },
  "correct_zone": "r2c2"
 },
 {
  "id": 2000015,
  "category": "Exam",
  "examen": 4,
  "domain": "Business",
  "approach": "predictif",
  "source_id": "VIS-15",
  "justification": "Un statut rouge signifie que la tolérance est dépassée et que le sponsor doit décider ; ici il s'agit de conformité réglementaire, qui peut bloquer la mise en service. Les statuts orange se surveillent et se traitent dans l'équipe.",
  "type": "single_choice",
  "text": "Vous présentez ce tableau de bord au sponsor. Quel élément devez-vous escalader en priorité ?",
  "options": {
   "A": "Les interfaces ERP (délai orange)",
   "B": "La migration des données (coût et délai orange)",
   "C": "Rien : tous les indicateurs sont dans les tolérances",
   "D": "Le déploiement pilote (conformité rouge)"
  },
  "answer": "D",
  "figure": {
   "kind": "grid",
   "rows": [
    "Migration des données",
    "Interfaces ERP",
    "Formation",
    "Déploiement pilote"
   ],
   "cols": [
    "Coût",
    "Délai",
    "Qualité",
    "Conformité"
   ],
   "cells": [
    [
     {
      "text": "Orange",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Orange",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Orange",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Orange",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Orange",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Vert",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Rouge",
      "fill": "r",
      "bold": true,
      "size": 12
     }
    ]
   ]
  }
 },
 {
  "id": 2000016,
  "category": "Exam",
  "examen": 4,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-16",
  "justification": "Collaborer (résoudre le problème) intègre plusieurs points de vue pour obtenir un consensus et un engagement solide. C'est la technique généralement préférée quand le temps et la confiance le permettent.",
  "type": "dropdown",
  "text": "Deux experts s'opposent sur une solution technique. Le chef de projet les réunit pour examiner le problème et trouver une solution intégrant les deux points de vue : c'est la technique {1}. Elle est généralement privilégiée car elle conduit à {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "forcer",
     "éviter",
     "collaborer / résoudre le problème",
     "temporiser"
    ],
    "answer": 2
   },
   {
    "id": "2",
    "options": [
     "une décision rapide imposée par le chef de projet",
     "un engagement durable autour d'une solution gagnant-gagnant",
     "un compromis où chacun perd un peu",
     "le retrait des parties du débat"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 2000017,
  "category": "Exam",
  "examen": 5,
  "domain": "Process",
  "approach": "agile_hybride",
  "source_id": "VIS-17",
  "justification": "La moyenne des trois derniers sprints (19, 22, 20) est d'environ 20 points : 120 / 20 ≈ 6 sprints. Le pic du sprint 1 (30) est atypique et optimiste ; arrondir à l'inférieur sous-estime l'effort ; la vélocité sert précisément à prévoir.",
  "type": "single_choice",
  "text": "Le backlog produit restant est estimé à 120 points. À partir de l'historique de vélocité ci-dessus, quelle prévision est la plus fiable ?",
  "options": {
   "A": "Environ 6 sprints, avec la vélocité moyenne des derniers sprints (≈ 20 points)",
   "B": "4 sprints, en utilisant la meilleure vélocité observée sur un sprint (30 points)",
   "C": "5 sprints, en arrondissant à l'inférieur la moyenne de tous les sprints passés",
   "D": "La vélocité ne permet aucune prévision fiable sur ce type de projet"
  },
  "answer": "A",
  "figure": {
   "kind": "barchart",
   "xLabels": [
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6"
   ],
   "bars": [
    30,
    20,
    21,
    19,
    22,
    20
   ],
   "yMax": 36,
   "yTicks": [
    0,
    10,
    20,
    30
   ],
   "yTitle": "Vélocité (points)",
   "xTitle": "Sprint"
  }
 },
 {
  "id": 2000018,
  "category": "Exam",
  "examen": 5,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-18",
  "justification": "« Gérer de près » s'applique aux parties prenantes à pouvoir élevé et intérêt élevé (quadrant en haut à droite) : elles sont impliquées activement et fréquemment.",
  "type": "hotspot",
  "text": "Dans cette grille pouvoir/intérêt, cliquez sur le quadrant dont la stratégie d'engagement est « gérer de près ».",
  "figure": {
   "kind": "grid",
   "rows": [
    "Élevé",
    "Faible"
   ],
   "cols": [
    "Faible",
    "Élevé"
   ],
   "xTitle": "Intérêt",
   "yTitle": "Pouvoir",
   "cells": [
    [
     {
      "text": "",
      "fill": "b"
     },
     {
      "text": "",
      "fill": "b"
     }
    ],
    [
     {
      "text": "",
      "fill": "b"
     },
     {
      "text": "",
      "fill": "b"
     }
    ]
   ]
  },
  "zones": [
   "r0c0",
   "r0c1",
   "r1c0",
   "r1c1"
  ],
  "zone_labels": {
   "r0c0": "Pouvoir élevé / Intérêt faible",
   "r0c1": "Pouvoir élevé / Intérêt élevé",
   "r1c0": "Pouvoir faible / Intérêt faible",
   "r1c1": "Pouvoir faible / Intérêt élevé"
  },
  "correct_zone": "r0c1"
 },
 {
  "id": 2000019,
  "category": "Exam",
  "examen": 5,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-19",
  "justification": "La première barre (Interface) concentre 45 % des défauts : agir sur les « quelques causes vitales » donne le meilleur rendement. Avec la catégorie suivante, on couvre déjà 70 % du total.",
  "type": "hotspot",
  "text": "Ce diagramme de Pareto classe les défauts par catégorie. Cliquez sur la catégorie à traiter en premier pour obtenir la plus grande réduction du nombre de défauts.",
  "figure": {
   "kind": "barchart",
   "xLabels": [
    "Interface",
    "Sécurité",
    "Perf.",
    "Doc.",
    "Install.",
    "Autres"
   ],
   "bars": [
    45,
    25,
    12,
    8,
    6,
    4
   ],
   "yMax": 100,
   "yTicks": [
    0,
    25,
    50,
    75,
    100
   ],
   "line": [
    45,
    70,
    82,
    90,
    96,
    100
   ],
   "lineLabel": "Cumul %",
   "yTitle": "Défauts",
   "barColors": [
    "#2f6fed",
    "#2f6fed",
    "#2f6fed",
    "#2f6fed",
    "#2f6fed",
    "#2f6fed"
   ]
  },
  "zones": [
   "b0",
   "b1",
   "b2",
   "b3",
   "b4",
   "b5"
  ],
  "zone_labels": {
   "b0": "Catégorie 1",
   "b1": "Catégorie 2",
   "b2": "Catégorie 3",
   "b3": "Catégorie 4",
   "b4": "Catégorie 5",
   "b5": "Catégorie 6"
  },
  "correct_zone": "b0"
 },
 {
  "id": 2000020,
  "category": "Exam",
  "examen": 5,
  "domain": "Business",
  "approach": "predictif",
  "source_id": "VIS-20",
  "justification": "Le business case justifie le projet (bénéfices attendus, alignement stratégique). Si le contexte change, il est réévalué pour vérifier que le projet crée toujours la valeur attendue, voire pour décider de l'arrêter.",
  "type": "dropdown",
  "text": "Lorsque l'environnement de l'organisation change, le {1} doit être réexaminé afin de confirmer que le projet continue de créer {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "WBS",
     "business case",
     "registre des problèmes",
     "échéancier"
    ],
    "answer": 1
   },
   {
    "id": "2",
    "options": [
     "plus de livrables",
     "moins de risques",
     "des délais plus courts",
     "la valeur attendue pour l'organisation"
    ],
    "answer": 3
   }
  ]
 }
];
const VISUAL_QUESTIONS_EN = [
 {
  "id": 2000001,
  "category": "Exam",
  "examen": 1,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-1",
  "justification": "CPI = EV / AC = 420 / 525 = 0.80. With the cost trend continuing, EAC = BAC / CPI = 1,200 / 0.80 = €1,500k. €1,305k (AC + BAC − EV) applies to an atypical variance; €1,714k wrongly uses SPI (schedule) instead of CPI.",
  "type": "single_choice",
  "text": "The chart above shows a project's status at month 6 (BAC = €1,200k). If the current cost performance continues until the end of the project, what is the estimate at completion (EAC)?",
  "options": {
   "A": "€1,500k",
   "B": "€1,305k",
   "C": "€1,714k",
   "D": "€1,200k"
  },
  "answer": "A",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 1200,
   "yTicks": [
    0,
    300,
    600,
    900,
    1200
   ],
   "xTitle": "Month",
   "yTitle": "Cumulative cost (€k)",
   "series": [
    {
     "id": "s1",
     "color": "#2f6fed",
     "pts": [
      0,
      40,
      100,
      190,
      310,
      450,
      600,
      750,
      880,
      990,
      1080,
      1150,
      1200
     ],
     "dash": "7 4",
     "label": "PV (planned value)",
     "labelAt": 8,
     "labelDy": 18,
     "labelAnchor": "start",
     "labelDx": 8
    },
    {
     "id": "s2",
     "color": "#a3392b",
     "pts": [
      0,
      45,
      110,
      200,
      320,
      430,
      525,
      null,
      null,
      null,
      null,
      null,
      null
     ],
     "label": "AC (actual cost)",
     "labelAt": 6,
     "labelDy": -10,
     "labelAnchor": "end",
     "labelDx": -8
    },
    {
     "id": "s3",
     "color": "#2c7a6d",
     "pts": [
      0,
      30,
      75,
      140,
      225,
      330,
      420,
      null,
      null,
      null,
      null,
      null,
      null
     ],
     "label": "EV (earned value)",
     "labelAt": 6,
     "labelDy": 20,
     "labelAnchor": "start",
     "labelDx": 6
    }
   ],
   "markers": [
    {
     "x": 6,
     "label": "Today"
    }
   ]
  }
 },
 {
  "id": 2000002,
  "category": "Exam",
  "examen": 1,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-2",
  "justification": "The dashed curve running to the end of the project is planned value (PV). The other two stop at today's date: since CPI < 1, actual cost (AC) is higher than earned value (EV) — so AC is the upper curve.",
  "type": "hotspot",
  "text": "The chart has no legend. The project is over budget (CPI < 1) and behind schedule (SPI < 1). Click on the curve that represents actual cost (AC).",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 1200,
   "yTicks": [
    0,
    300,
    600,
    900,
    1200
   ],
   "xTitle": "Month",
   "yTitle": "Cumulative cost (€k)",
   "series": [
    {
     "id": "s1",
     "color": "#2f6fed",
     "pts": [
      0,
      40,
      100,
      190,
      310,
      450,
      600,
      750,
      880,
      990,
      1080,
      1150,
      1200
     ],
     "dash": "7 4"
    },
    {
     "id": "s2",
     "color": "#a3392b",
     "pts": [
      0,
      40,
      100,
      190,
      310,
      430,
      560,
      690,
      810,
      null,
      null,
      null,
      null
     ]
    },
    {
     "id": "s3",
     "color": "#2c7a6d",
     "pts": [
      0,
      30,
      80,
      150,
      250,
      370,
      480,
      590,
      690,
      null,
      null,
      null,
      null
     ]
    }
   ],
   "markers": [
    {
     "x": 8,
     "label": "Today"
    }
   ]
  },
  "zones": [
   "s1",
   "s2",
   "s3"
  ],
  "zone_labels": {
   "s1": "Dashed curve (to month 12)",
   "s2": "Upper curve stopping at month 8",
   "s3": "Lower curve stopping at month 8"
  },
  "correct_zone": "s2"
 },
 {
  "id": 2000003,
  "category": "Exam",
  "examen": 1,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-3",
  "justification": "Shifting the impact of a negative risk to a third party (insurance, warranty, fixed-price contract) is the transfer strategy. Risks and residual risks are tracked in the risk register.",
  "type": "dropdown",
  "text": "Risk R-07 (failure of the sole supplier) is a negative risk. By taking out contractual insurance that shifts the financial impact to a third party, the team is applying the {1} strategy. The residual risk will continue to be tracked in {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "avoid",
     "transfer",
     "mitigate",
     "accept"
    ],
    "answer": 1
   },
   {
    "id": "2",
    "options": [
     "the project charter",
     "the Gantt chart",
     "the risk register",
     "the stakeholder management plan"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": 2000004,
  "category": "Exam",
  "examen": 1,
  "domain": "Business",
  "approach": "predictif",
  "source_id": "VIS-4",
  "justification": "Every change request is first analyzed (impacts on scope, cost, schedule, risks, quality) and then submitted to the approval body (CCB). The baseline is updated only after approval; a regulatory requirement is not refused on principle.",
  "type": "dropdown",
  "text": "A new regulatory requirement changes the scope mid-project. The project manager must first {1}, and then submit the change request to {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "update the scope baseline",
     "assess the impact on scope, cost, schedule and risks",
     "ask the team to start the work",
     "reject any change outside the baseline"
    ],
    "answer": 1
   },
   {
    "id": "2",
    "options": [
     "the development team",
     "the supplier",
     "the change control board",
     "all external stakeholders"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": 2000005,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "agile_hybride",
  "source_id": "VIS-5",
  "justification": "The line rising on day 3 shows added work; 33 points remain versus 12 expected. A sprint is time-boxed: it is not extended. The team works with the Product Owner to renegotiate the content, with no imposed overtime.",
  "type": "single_choice",
  "text": "On day 7 of a 10-day sprint, the team looks at this burndown. What does it show and what is the best reaction?",
  "options": {
   "A": "Scope was added and the team is behind the ideal line; it should discuss the sprint content with the PO",
   "B": "The team is ahead of plan; it can add more items to the sprint backlog without discussing it with anyone",
   "C": "The sprint must be extended by three days to absorb the delay and finish all of the planned items",
   "D": "The team must work overtime every day until it gets back to the ideal line shown on the chart"
  },
  "answer": "A",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
   ],
   "yMax": 44,
   "yTicks": [
    0,
    10,
    20,
    30,
    40
   ],
   "xTitle": "Sprint day",
   "yTitle": "Points remaining",
   "series": [
    {
     "id": "ideal",
     "color": "#8a93a8",
     "dash": "7 4",
     "pts": [
      40,
      36,
      32,
      28,
      24,
      20,
      16,
      12,
      8,
      4,
      0
     ],
     "label": "Ideal",
     "labelAt": 9,
     "labelDy": -8,
     "labelDx": 0
    },
    {
     "id": "actual",
     "color": "#2f6fed",
     "pts": [
      40,
      38,
      36,
      41,
      39,
      37,
      35,
      33,
      null,
      null,
      null
     ],
     "dots": true,
     "label": "Actual",
     "labelAt": 7,
     "labelDy": -12,
     "labelDx": 6
    }
   ],
   "markers": [
    {
     "x": 7,
     "label": "Today"
    }
   ]
  }
 },
 {
  "id": 2000006,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-6",
  "justification": "The rule of seven: seven or more consecutive points on the same side of the mean indicate an assignable cause even without breaching the limits. Investigate and act; limits are not changed to hide the drift.",
  "type": "single_choice",
  "text": "This control chart tracks the number of defects per sample. All points are inside the control limits. What is the project manager's best action?",
  "options": {
   "A": "Do nothing: all points are within the limits, so the process is under control and needs no review",
   "B": "Widen the control limits so that they reflect the latest results observed in the process samples",
   "C": "Look for the root cause: eight consecutive points on one side of the mean signal a drifting process",
   "D": "Replace the samples from the latest batches with new ones, so the chart looks centered again"
  },
  "answer": "C",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 18,
   "yTicks": [
    0,
    6,
    10,
    14,
    18
   ],
   "xTitle": "Sample",
   "yTitle": "Defects",
   "hlines": [
    {
     "y": 14,
     "label": "UCL",
     "color": "#a3392b"
    },
    {
     "y": 6,
     "label": "LCL",
     "color": "#a3392b"
    },
    {
     "y": 10,
     "label": "Mean",
     "color": "#5a6786",
     "dash": "2 4"
    }
   ],
   "series": [
    {
     "id": "m",
     "color": "#2f6fed",
     "pts": [
      10,
      11,
      9,
      10,
      12,
      11,
      12,
      13,
      12,
      13,
      12,
      13
     ],
     "dots": true
    }
   ]
  }
 },
 {
  "id": 2000007,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-7",
  "justification": "The point for sample 9 (16 defects) exceeds the upper control limit (14): it is an out-of-control signal that calls for finding the assignable cause.",
  "type": "hotspot",
  "text": "Click on the point of the control chart that falls outside the control limits and requires an assignable-cause analysis.",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 18,
   "yTicks": [
    0,
    6,
    10,
    14,
    18
   ],
   "xTitle": "Sample",
   "yTitle": "Defects",
   "hlines": [
    {
     "y": 14,
     "label": "UCL",
     "color": "#a3392b"
    },
    {
     "y": 6,
     "label": "LCL",
     "color": "#a3392b"
    },
    {
     "y": 10,
     "label": "Mean",
     "color": "#5a6786",
     "dash": "2 4"
    }
   ],
   "series": [
    {
     "id": "m",
     "color": "#2f6fed",
     "pts": [
      10,
      11,
      9,
      10,
      12,
      9,
      11,
      10,
      16,
      11,
      10,
      9
     ],
     "dots": true
    }
   ]
  },
  "zones": [
   "pt0",
   "pt1",
   "pt2",
   "pt3",
   "pt4",
   "pt5",
   "pt6",
   "pt7",
   "pt8",
   "pt9",
   "pt10",
   "pt11"
  ],
  "zone_labels": {
   "pt0": "Sample 1",
   "pt1": "Sample 2",
   "pt2": "Sample 3",
   "pt3": "Sample 4",
   "pt4": "Sample 5",
   "pt5": "Sample 6",
   "pt6": "Sample 7",
   "pt7": "Sample 8",
   "pt8": "Sample 9",
   "pt9": "Sample 10",
   "pt10": "Sample 11",
   "pt11": "Sample 12"
  },
  "correct_zone": "pt8"
 },
 {
  "id": 2000008,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-8",
  "justification": "CPI = EV / AC = 80 / 100 = 0.80 (< 1: over budget). SPI = EV / PV = 80 / 90 = 0.89 (< 1: behind schedule).",
  "type": "dropdown",
  "text": "With EV = €80k, AC = €100k and PV = €90k, the CPI is {1} and the SPI is {2}; the project is therefore {3}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "1.25",
     "0.89",
     "1.13",
     "0.80"
    ],
    "answer": 3
   },
   {
    "id": "2",
    "options": [
     "0.89",
     "1.13",
     "0.80",
     "1.25"
    ],
    "answer": 0
   },
   {
    "id": "3",
    "options": [
     "under budget and ahead of schedule",
     "over budget and behind schedule",
     "over budget and ahead of schedule",
     "under budget and behind schedule"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 2000009,
  "category": "Exam",
  "examen": 3,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-9",
  "justification": "Path A-B-D-E = 3 + 5 + 6 + 4 = 18 days (critical path). Path A-C-D-E = 15 days. Total float of C = 18 − 15 = 3 days (LS 6 − ES 3).",
  "type": "single_choice",
  "text": "According to this network diagram, what is the total float of activity C and the minimum project duration?",
  "options": {
   "A": "Float of 3 days; duration of 18 days",
   "B": "Float of 0 days; duration of 15 days",
   "C": "Float of 3 days; duration of 15 days",
   "D": "Float of 5 days; duration of 18 days"
  },
  "answer": "A",
  "figure": {
   "kind": "network",
   "durLabel": "Dur.",
   "critical": [],
   "nodes": [
    {
     "id": "A",
     "label": "A",
     "dur": 3,
     "x": 14,
     "y": 124,
     "es": 0,
     "ef": 3
    },
    {
     "id": "B",
     "label": "B",
     "dur": 5,
     "x": 178,
     "y": 44,
     "es": 3,
     "ef": 8
    },
    {
     "id": "C",
     "label": "C",
     "dur": 2,
     "x": 178,
     "y": 204,
     "es": 3,
     "ef": 5
    },
    {
     "id": "D",
     "label": "D",
     "dur": 6,
     "x": 342,
     "y": 124,
     "es": 8,
     "ef": 14
    },
    {
     "id": "E",
     "label": "E",
     "dur": 4,
     "x": 506,
     "y": 124,
     "es": 14,
     "ef": 18
    }
   ],
   "edges": [
    [
     "A",
     "B"
    ],
    [
     "A",
     "C"
    ],
    [
     "B",
     "D"
    ],
    [
     "C",
     "D"
    ],
    [
     "D",
     "E"
    ]
   ],
   "note": "Unit: days. ES (bottom left) / EF (bottom right)."
  }
 },
 {
  "id": 2000010,
  "category": "Exam",
  "examen": 3,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-10",
  "justification": "The critical path is A-B-E-F (16 days). Activity C is on path A-C-E-F (13 days): 3 days of float. Activity D (path A-D-F = 14 days) has only 2 days of float.",
  "type": "hotspot",
  "text": "Click on the activity that has the greatest total float.",
  "figure": {
   "kind": "network",
   "durLabel": "Dur.",
   "nodes": [
    {
     "id": "A",
     "label": "A",
     "dur": 4,
     "x": 14,
     "y": 130
    },
    {
     "id": "B",
     "label": "B",
     "dur": 6,
     "x": 178,
     "y": 18
    },
    {
     "id": "C",
     "label": "C",
     "dur": 3,
     "x": 178,
     "y": 130
    },
    {
     "id": "D",
     "label": "D",
     "dur": 6,
     "x": 178,
     "y": 244
    },
    {
     "id": "E",
     "label": "E",
     "dur": 2,
     "x": 342,
     "y": 60
    },
    {
     "id": "F",
     "label": "F",
     "dur": 4,
     "x": 506,
     "y": 130
    }
   ],
   "edges": [
    [
     "A",
     "B"
    ],
    [
     "A",
     "C"
    ],
    [
     "A",
     "D"
    ],
    [
     "B",
     "E"
    ],
    [
     "C",
     "E"
    ],
    [
     "D",
     "F"
    ],
    [
     "E",
     "F"
    ]
   ],
   "note": "Unit: days. Working days."
  },
  "zones": [
   "A",
   "B",
   "C",
   "D",
   "E",
   "F"
  ],
  "zone_labels": {
   "A": "Activity A",
   "B": "Activity B",
   "C": "Activity C",
   "D": "Activity D",
   "E": "Activity E",
   "F": "Activity F"
  },
  "correct_zone": "C"
 },
 {
  "id": 2000011,
  "category": "Exam",
  "examen": 3,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-11",
  "justification": "High power and low interest = \"keep satisfied\": the CFO can block the project, but overloading them with information is counter-productive. Communication targets their concerns (budget, key decisions).",
  "type": "single_choice",
  "text": "According to this power/interest grid, which engagement approach best suits the CFO?",
  "options": {
   "A": "Manage closely by involving the CFO in every daily decision and every status review meeting",
   "B": "Keep satisfied with targeted information on the budget and key decisions, without overloading",
   "C": "Keep informed through the team's weekly newsletter, sent to everyone on the mailing list",
   "D": "Just monitor from a distance, with no particular communication unless a problem arises"
  },
  "answer": "B",
  "figure": {
   "kind": "grid",
   "rows": [
    "High",
    "Low"
   ],
   "cols": [
    "Low",
    "High"
   ],
   "xTitle": "Interest",
   "yTitle": "Power",
   "cells": [
    [
     {
      "text": "CFO",
      "fill": "b",
      "bold": true,
      "size": 12
     },
     {
      "text": "Sponsor",
      "fill": "b",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "Supplier",
      "fill": "n",
      "bold": true,
      "size": 12
     },
     {
      "text": "End users",
      "fill": "n",
      "bold": true,
      "size": 12
     }
    ]
   ]
  }
 },
 {
  "id": 2000012,
  "category": "Exam",
  "examen": 3,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-12",
  "justification": "The sprint retrospective covers people, relationships, process and tools; the retained improvements go into the next sprint (often its backlog). The sprint review, by contrast, inspects the increment with stakeholders.",
  "type": "dropdown",
  "text": "During the {1}, the Scrum team inspects how the work was done and identifies improvements to include in {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "sprint review",
     "sprint planning",
     "daily scrum",
     "sprint retrospective"
    ],
    "answer": 3
   },
   {
    "id": "2",
    "options": [
     "the product vision",
     "the next sprint",
     "the previous release",
     "the quality management plan"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 2000013,
  "category": "Exam",
  "examen": 4,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-13",
  "justification": "Scores: R1 = 3 × 3 = 9; R2 = 3 × 2 = 6; R4 = 2 × 2 = 4; R3 = 1 × 3 = 3; R5 = 1 × 1 = 1. The descending order is therefore R1, R2, R4, R3, R5.",
  "type": "single_choice",
  "text": "The five risks R1 to R5 are placed in the probability/impact matrix above (3 × 3 scale, score = probability × impact, Low = 1, Medium = 2, High = 3). What is the order of priority for response?",
  "options": {
   "A": "R1, R2, R4, R3, R5",
   "B": "R1, R3, R2, R4, R5",
   "C": "R2, R1, R3, R4, R5",
   "D": "R5, R4, R3, R2, R1"
  },
  "answer": "A",
  "figure": {
   "kind": "grid",
   "rows": [
    "High",
    "Medium",
    "Low"
   ],
   "cols": [
    "Low",
    "Medium",
    "High"
   ],
   "xTitle": "Impact",
   "yTitle": "Probability",
   "cells": [
    [
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "R2",
      "fill": "r",
      "bold": true,
      "size": 13
     },
     {
      "text": "R1",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "R4",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "R5",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "R3",
      "fill": "a",
      "bold": true,
      "size": 13
     }
    ]
   ]
  }
 },
 {
  "id": 2000014,
  "category": "Exam",
  "examen": 4,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-14",
  "justification": "Low probability (bottom row) and high impact (right column): the bottom-right cell. Its criticality is medium: plan a response or a reserve rather than immediate action.",
  "type": "hotspot",
  "text": "An exceptional weather event is judged very unlikely (low probability), but if it occurred it would stop the construction site (high impact). Click on the matrix cell where it belongs.",
  "figure": {
   "kind": "grid",
   "rows": [
    "High",
    "Medium",
    "Low"
   ],
   "cols": [
    "Low",
    "Medium",
    "High"
   ],
   "xTitle": "Impact",
   "yTitle": "Probability",
   "cells": [
    [
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     }
    ]
   ]
  },
  "zones": [
   "r0c0",
   "r0c1",
   "r0c2",
   "r1c0",
   "r1c1",
   "r1c2",
   "r2c0",
   "r2c1",
   "r2c2"
  ],
  "zone_labels": {
   "r0c0": "Probability high / Impact low",
   "r0c1": "Probability high / Impact medium",
   "r0c2": "Probability high / Impact high",
   "r1c0": "Probability medium / Impact low",
   "r1c1": "Probability medium / Impact medium",
   "r1c2": "Probability medium / Impact high",
   "r2c0": "Probability low / Impact low",
   "r2c1": "Probability low / Impact medium",
   "r2c2": "Probability low / Impact high"
  },
  "correct_zone": "r2c2"
 },
 {
  "id": 2000015,
  "category": "Exam",
  "examen": 4,
  "domain": "Business",
  "approach": "predictif",
  "source_id": "VIS-15",
  "justification": "A red status means the tolerance is exceeded and the sponsor must decide; here it is regulatory compliance, which can block go-live. Amber statuses are monitored and handled within the team.",
  "type": "single_choice",
  "text": "You are presenting this dashboard to the sponsor. Which item should you escalate first?",
  "options": {
   "A": "The ERP interfaces (amber schedule)",
   "B": "The data migration (amber cost and schedule)",
   "C": "Nothing: all indicators are within tolerance",
   "D": "The pilot rollout (red compliance)"
  },
  "answer": "D",
  "figure": {
   "kind": "grid",
   "rows": [
    "Data migration",
    "ERP interfaces",
    "Training",
    "Pilot rollout"
   ],
   "cols": [
    "Cost",
    "Schedule",
    "Quality",
    "Compliance"
   ],
   "cells": [
    [
     {
      "text": "Amber",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Amber",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Amber",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Amber",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Amber",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "Green",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "Red",
      "fill": "r",
      "bold": true,
      "size": 12
     }
    ]
   ]
  }
 },
 {
  "id": 2000016,
  "category": "Exam",
  "examen": 4,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-16",
  "justification": "Collaborating (problem solving) integrates multiple viewpoints to reach consensus and strong commitment. It is the generally preferred technique when time and trust allow.",
  "type": "dropdown",
  "text": "Two experts disagree on a technical solution. The project manager brings them together to examine the problem and find a solution integrating both viewpoints: this is the {1} technique. It is generally preferred because it leads to {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "force",
     "avoid",
     "collaborate / problem solve",
     "smooth"
    ],
    "answer": 2
   },
   {
    "id": "2",
    "options": [
     "a quick decision imposed by the project manager",
     "lasting commitment around a win-win solution",
     "a compromise where everyone loses a little",
     "the parties withdrawing from the debate"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 2000017,
  "category": "Exam",
  "examen": 5,
  "domain": "Process",
  "approach": "agile_hybride",
  "source_id": "VIS-17",
  "justification": "The average of the last three sprints (19, 22, 20) is about 20 points: 120 / 20 ≈ 6 sprints. The sprint-1 peak (30) is atypical and optimistic; rounding down underestimates the effort; velocity exists precisely to forecast.",
  "type": "single_choice",
  "text": "The remaining product backlog is estimated at 120 points. Based on the velocity history above, which forecast is the most reliable?",
  "options": {
   "A": "About 6 sprints, using the average velocity of the recent sprints (≈ 20 points)",
   "B": "4 sprints, using the best velocity observed over all the sprints (30 points)",
   "C": "5 sprints, rounding down the average velocity of all of the sprints so far",
   "D": "Velocity cannot be used to forecast the number of remaining sprints reliably"
  },
  "answer": "A",
  "figure": {
   "kind": "barchart",
   "xLabels": [
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6"
   ],
   "bars": [
    30,
    20,
    21,
    19,
    22,
    20
   ],
   "yMax": 36,
   "yTicks": [
    0,
    10,
    20,
    30
   ],
   "yTitle": "Velocity (points)",
   "xTitle": "Sprint"
  }
 },
 {
  "id": 2000018,
  "category": "Exam",
  "examen": 5,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-18",
  "justification": "\"Manage closely\" applies to stakeholders with high power and high interest (top-right quadrant): they are involved actively and frequently.",
  "type": "hotspot",
  "text": "In this power/interest grid, click on the quadrant whose engagement strategy is \"manage closely\".",
  "figure": {
   "kind": "grid",
   "rows": [
    "High",
    "Low"
   ],
   "cols": [
    "Low",
    "High"
   ],
   "xTitle": "Interest",
   "yTitle": "Power",
   "cells": [
    [
     {
      "text": "",
      "fill": "b"
     },
     {
      "text": "",
      "fill": "b"
     }
    ],
    [
     {
      "text": "",
      "fill": "b"
     },
     {
      "text": "",
      "fill": "b"
     }
    ]
   ]
  },
  "zones": [
   "r0c0",
   "r0c1",
   "r1c0",
   "r1c1"
  ],
  "zone_labels": {
   "r0c0": "High power / Low interest",
   "r0c1": "High power / High interest",
   "r1c0": "Low power / Low interest",
   "r1c1": "Low power / High interest"
  },
  "correct_zone": "r0c1"
 },
 {
  "id": 2000019,
  "category": "Exam",
  "examen": 5,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-19",
  "justification": "The first bar (UI) concentrates 45% of the defects: acting on the \"vital few\" gives the best return. With the next category, 70% of the total is already covered.",
  "type": "hotspot",
  "text": "This Pareto chart ranks defects by category. Click on the category to address first to get the greatest reduction in the number of defects.",
  "figure": {
   "kind": "barchart",
   "xLabels": [
    "UI",
    "Security",
    "Perf.",
    "Docs",
    "Install",
    "Other"
   ],
   "bars": [
    45,
    25,
    12,
    8,
    6,
    4
   ],
   "yMax": 100,
   "yTicks": [
    0,
    25,
    50,
    75,
    100
   ],
   "line": [
    45,
    70,
    82,
    90,
    96,
    100
   ],
   "lineLabel": "Cumulative %",
   "yTitle": "Defects",
   "barColors": [
    "#2f6fed",
    "#2f6fed",
    "#2f6fed",
    "#2f6fed",
    "#2f6fed",
    "#2f6fed"
   ]
  },
  "zones": [
   "b0",
   "b1",
   "b2",
   "b3",
   "b4",
   "b5"
  ],
  "zone_labels": {
   "b0": "Category 1",
   "b1": "Category 2",
   "b2": "Category 3",
   "b3": "Category 4",
   "b4": "Category 5",
   "b5": "Category 6"
  },
  "correct_zone": "b0"
 },
 {
  "id": 2000020,
  "category": "Exam",
  "examen": 5,
  "domain": "Business",
  "approach": "predictif",
  "source_id": "VIS-20",
  "justification": "The business case justifies the project (expected benefits, strategic alignment). When the context changes it is re-assessed to verify that the project still creates the expected value, or even to decide to stop it.",
  "type": "dropdown",
  "text": "When the organization's environment changes, the {1} must be reviewed to confirm that the project continues to create {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "WBS",
     "business case",
     "issue log",
     "schedule"
    ],
    "answer": 1
   },
   {
    "id": "2",
    "options": [
     "more deliverables",
     "fewer risks",
     "shorter timelines",
     "the expected value for the organization"
    ],
    "answer": 3
   }
  ]
 }
];
const VISUAL_QUESTIONS_AR = [
 {
  "id": 2000001,
  "category": "Exam",
  "examen": 1,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-1",
  "justification": "CPI = EV / AC = 420 / 525 = 0.80. مع استمرار اتجاه التكلفة: EAC = BAC / CPI = 1,200 / 0.80 = 1,500 ألف يورو. أما 1,305 (AC + BAC − EV) فتنطبق عند انحراف استثنائي، و1,714 تستخدم SPI (الجدول) بدل CPI.",
  "type": "single_choice",
  "text": "يعرض الرسم أعلاه حالة مشروع في الشهر 6 (الميزانية عند الإنجاز BAC = 1,200 ألف يورو). إذا استمر أداء التكلفة الحالي حتى نهاية المشروع، فما التقدير عند الإنجاز (EAC)؟",
  "options": {
   "A": "1,500 ألف يورو",
   "B": "1,305 ألف يورو",
   "C": "1,714 ألف يورو",
   "D": "1,200 ألف يورو"
  },
  "answer": "A",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 1200,
   "yTicks": [
    0,
    300,
    600,
    900,
    1200
   ],
   "xTitle": "الشهر",
   "yTitle": "التكلفة التراكمية (ألف €)",
   "series": [
    {
     "id": "s1",
     "color": "#2f6fed",
     "pts": [
      0,
      40,
      100,
      190,
      310,
      450,
      600,
      750,
      880,
      990,
      1080,
      1150,
      1200
     ],
     "dash": "7 4",
     "label": "PV (القيمة المخططة)",
     "labelAt": 8,
     "labelDy": 18,
     "labelAnchor": "start",
     "labelDx": 8
    },
    {
     "id": "s2",
     "color": "#a3392b",
     "pts": [
      0,
      45,
      110,
      200,
      320,
      430,
      525,
      null,
      null,
      null,
      null,
      null,
      null
     ],
     "label": "AC (التكلفة الفعلية)",
     "labelAt": 6,
     "labelDy": -10,
     "labelAnchor": "end",
     "labelDx": -8
    },
    {
     "id": "s3",
     "color": "#2c7a6d",
     "pts": [
      0,
      30,
      75,
      140,
      225,
      330,
      420,
      null,
      null,
      null,
      null,
      null,
      null
     ],
     "label": "EV (القيمة المكتسبة)",
     "labelAt": 6,
     "labelDy": 20,
     "labelAnchor": "start",
     "labelDx": 6
    }
   ],
   "markers": [
    {
     "x": 6,
     "label": "اليوم"
    }
   ]
  }
 },
 {
  "id": 2000002,
  "category": "Exam",
  "examen": 1,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-2",
  "justification": "المنحنى المتقطع الممتد إلى نهاية المشروع هو القيمة المخططة (PV). أما المنحنيان الآخران فيتوقفان عند تاريخ اليوم؛ وبما أن CPI < 1 فالتكلفة الفعلية (AC) أعلى من القيمة المكتسبة (EV)، إذن AC هو المنحنى العلوي.",
  "type": "hotspot",
  "text": "الرسم بلا مفتاح. المشروع متجاوز للتكلفة (CPI < 1) ومتأخر عن الجدول (SPI < 1). انقر على المنحنى الذي يمثل التكلفة الفعلية (AC).",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 1200,
   "yTicks": [
    0,
    300,
    600,
    900,
    1200
   ],
   "xTitle": "الشهر",
   "yTitle": "التكلفة التراكمية (ألف €)",
   "series": [
    {
     "id": "s1",
     "color": "#2f6fed",
     "pts": [
      0,
      40,
      100,
      190,
      310,
      450,
      600,
      750,
      880,
      990,
      1080,
      1150,
      1200
     ],
     "dash": "7 4"
    },
    {
     "id": "s2",
     "color": "#a3392b",
     "pts": [
      0,
      40,
      100,
      190,
      310,
      430,
      560,
      690,
      810,
      null,
      null,
      null,
      null
     ]
    },
    {
     "id": "s3",
     "color": "#2c7a6d",
     "pts": [
      0,
      30,
      80,
      150,
      250,
      370,
      480,
      590,
      690,
      null,
      null,
      null,
      null
     ]
    }
   ],
   "markers": [
    {
     "x": 8,
     "label": "اليوم"
    }
   ]
  },
  "zones": [
   "s1",
   "s2",
   "s3"
  ],
  "zone_labels": {
   "s1": "المنحنى المتقطع (حتى الشهر 12)",
   "s2": "المنحنى العلوي المتوقف عند الشهر 8",
   "s3": "المنحنى السفلي المتوقف عند الشهر 8"
  },
  "correct_zone": "s2"
 },
 {
  "id": 2000003,
  "category": "Exam",
  "examen": 1,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-3",
  "justification": "نقل أثر الخطر السلبي إلى طرف ثالث (تأمين، ضمان، عقد بسعر ثابت) هو استراتيجية النقل. وتتم متابعة المخاطر والمخاطر المتبقية في سجل المخاطر.",
  "type": "dropdown",
  "text": "الخطر R-07 (تعثر المورّد الوحيد) خطر سلبي. بإبرام تأمين تعاقدي ينقل الأثر المالي إلى طرف ثالث، يطبّق الفريق استراتيجية {1}. وسيبقى الخطر المتبقي مُتابَعًا في {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "التجنّب",
     "النقل",
     "التخفيف",
     "القبول"
    ],
    "answer": 1
   },
   {
    "id": "2",
    "options": [
     "ميثاق المشروع",
     "مخطط جانت",
     "سجل المخاطر",
     "خطة إدارة أصحاب المصلحة"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": 2000004,
  "category": "Exam",
  "examen": 1,
  "domain": "Business",
  "approach": "predictif",
  "source_id": "VIS-4",
  "justification": "يُحلَّل كل طلب تغيير أولًا (الأثر على النطاق والتكلفة والجدول والمخاطر والجودة) ثم يُرفع إلى جهة الاعتماد (CCB). ولا يُحدَّث خط الأساس إلا بعد الموافقة؛ ولا يُرفض المتطلب التنظيمي من حيث المبدأ.",
  "type": "dropdown",
  "text": "يؤدي متطلب تنظيمي جديد إلى تغيير النطاق أثناء المشروع. على مدير المشروع أولًا {1}، ثم يرفع طلب التغيير إلى {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "تحديث خط الأساس للنطاق",
     "تقييم الأثر على النطاق والتكلفة والجدول والمخاطر",
     "طلب بدء العمل من الفريق",
     "رفض أي تغيير خارج خط الأساس"
    ],
    "answer": 1
   },
   {
    "id": "2",
    "options": [
     "فريق التطوير",
     "المورّد",
     "لجنة التحكم في التغيير",
     "جميع أصحاب المصلحة الخارجيين"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": 2000005,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "agile_hybride",
  "source_id": "VIS-5",
  "justification": "ارتفاع الخط في اليوم 3 يدل على عمل مضاف؛ وتبقى 33 نقطة مقابل 12 متوقعة. السبرنت محدد المدة (timebox) فلا يُمدَّد. ويتفاوض الفريق مع مالك المنتج حول المحتوى دون فرض ساعات إضافية.",
  "type": "single_choice",
  "text": "في اليوم 7 من سبرنت مدته 10 أيام، يلاحظ الفريق مخطط الاحتراق (burndown) هذا. ماذا يُظهر وما أفضل رد فعل؟",
  "options": {
   "A": "أُضيف عمل أثناء السبرنت والفريق متأخر عن الخط المثالي؛ عليه مناقشة مالك المنتج لإعادة ضبط محتوى السبرنت",
   "B": "الفريق متقدم عن الخطة ويمكنه إضافة عناصر إلى سجل السبرنت دون نقاش",
   "C": "يجب تمديد السبرنت ثلاثة أيام لاستيعاب التأخير",
   "D": "على الفريق العمل لساعات إضافية للحاق بالخط المثالي"
  },
  "answer": "A",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
   ],
   "yMax": 44,
   "yTicks": [
    0,
    10,
    20,
    30,
    40
   ],
   "xTitle": "يوم السبرنت",
   "yTitle": "النقاط المتبقية",
   "series": [
    {
     "id": "ideal",
     "color": "#8a93a8",
     "dash": "7 4",
     "pts": [
      40,
      36,
      32,
      28,
      24,
      20,
      16,
      12,
      8,
      4,
      0
     ],
     "label": "المثالي",
     "labelAt": 9,
     "labelDy": -8,
     "labelDx": 0
    },
    {
     "id": "actual",
     "color": "#2f6fed",
     "pts": [
      40,
      38,
      36,
      41,
      39,
      37,
      35,
      33,
      null,
      null,
      null
     ],
     "dots": true,
     "label": "الفعلي",
     "labelAt": 7,
     "labelDy": -12,
     "labelDx": 6
    }
   ],
   "markers": [
    {
     "x": 7,
     "label": "اليوم"
    }
   ]
  }
 },
 {
  "id": 2000006,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-6",
  "justification": "قاعدة السبعة: سبع نقاط متتالية أو أكثر في جهة واحدة من المتوسط تدل على سبب يمكن تحديده حتى دون تجاوز الحدود. يجب التحقيق والتصرف، ولا تُعدَّل الحدود لإخفاء الانحراف.",
  "type": "single_choice",
  "text": "يتتبع مخطط التحكم هذا عدد العيوب في كل عيّنة. جميع النقاط داخل حدود التحكم. ما أفضل إجراء لمدير المشروع؟",
  "options": {
   "A": "عدم فعل شيء: جميع النقاط ضمن الحدود إذن العملية تحت السيطرة",
   "B": "توسيع حدود التحكم لتعكس أحدث النتائج",
   "C": "البحث عن السبب الجذري: ثماني نقاط متتالية في جهة واحدة من المتوسط تدل على انحراف العملية",
   "D": "استبدال عيّنات الدفعات الأخيرة"
  },
  "answer": "C",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 18,
   "yTicks": [
    0,
    6,
    10,
    14,
    18
   ],
   "xTitle": "العيّنة",
   "yTitle": "العيوب",
   "hlines": [
    {
     "y": 14,
     "label": "UCL",
     "color": "#a3392b"
    },
    {
     "y": 6,
     "label": "LCL",
     "color": "#a3392b"
    },
    {
     "y": 10,
     "label": "المتوسط",
     "color": "#5a6786",
     "dash": "2 4"
    }
   ],
   "series": [
    {
     "id": "m",
     "color": "#2f6fed",
     "pts": [
      10,
      11,
      9,
      10,
      12,
      11,
      12,
      13,
      12,
      13,
      12,
      13
     ],
     "dots": true
    }
   ]
  }
 },
 {
  "id": 2000007,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-7",
  "justification": "نقطة العيّنة 9 (16 عيبًا) تتجاوز حد التحكم الأعلى (14): إنها إشارة خروج عن السيطرة تستوجب البحث عن السبب القابل للتحديد.",
  "type": "hotspot",
  "text": "انقر على النقطة في مخطط التحكم التي تخرج عن حدود التحكم وتتطلب تحليل سبب يمكن تحديده.",
  "figure": {
   "kind": "linechart",
   "xLabels": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
   ],
   "yMax": 18,
   "yTicks": [
    0,
    6,
    10,
    14,
    18
   ],
   "xTitle": "العيّنة",
   "yTitle": "العيوب",
   "hlines": [
    {
     "y": 14,
     "label": "UCL",
     "color": "#a3392b"
    },
    {
     "y": 6,
     "label": "LCL",
     "color": "#a3392b"
    },
    {
     "y": 10,
     "label": "المتوسط",
     "color": "#5a6786",
     "dash": "2 4"
    }
   ],
   "series": [
    {
     "id": "m",
     "color": "#2f6fed",
     "pts": [
      10,
      11,
      9,
      10,
      12,
      9,
      11,
      10,
      16,
      11,
      10,
      9
     ],
     "dots": true
    }
   ]
  },
  "zones": [
   "pt0",
   "pt1",
   "pt2",
   "pt3",
   "pt4",
   "pt5",
   "pt6",
   "pt7",
   "pt8",
   "pt9",
   "pt10",
   "pt11"
  ],
  "zone_labels": {
   "pt0": "العيّنة 1",
   "pt1": "العيّنة 2",
   "pt2": "العيّنة 3",
   "pt3": "العيّنة 4",
   "pt4": "العيّنة 5",
   "pt5": "العيّنة 6",
   "pt6": "العيّنة 7",
   "pt7": "العيّنة 8",
   "pt8": "العيّنة 9",
   "pt9": "العيّنة 10",
   "pt10": "العيّنة 11",
   "pt11": "العيّنة 12"
  },
  "correct_zone": "pt8"
 },
 {
  "id": 2000008,
  "category": "Exam",
  "examen": 2,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-8",
  "justification": "CPI = EV / AC = 80 / 100 = 0.80 (< 1: تجاوز في التكلفة). SPI = EV / PV = 80 / 90 = 0.89 (< 1: تأخر).",
  "type": "dropdown",
  "text": "إذا كانت EV = 80 ألف يورو وAC = 100 ألف يورو وPV = 90 ألف يورو، فإن CPI يساوي {1} وSPI يساوي {2}؛ إذن المشروع {3}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "1.25",
     "0.89",
     "1.13",
     "0.80"
    ],
    "answer": 3
   },
   {
    "id": "2",
    "options": [
     "0.89",
     "1.13",
     "0.80",
     "1.25"
    ],
    "answer": 0
   },
   {
    "id": "3",
    "options": [
     "أقل من الميزانية ومتقدم عن الجدول",
     "متجاوز للتكلفة ومتأخر عن الجدول",
     "متجاوز للتكلفة ومتقدم عن الجدول",
     "أقل من الميزانية ومتأخر عن الجدول"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 2000009,
  "category": "Exam",
  "examen": 3,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-9",
  "justification": "المسار A-B-D-E = 3 + 5 + 6 + 4 = 18 يومًا (المسار الحرج). المسار A-C-D-E = 15 يومًا. الفائض الكلي لـ C = 18 − 15 = 3 أيام (LS 6 − ES 3).",
  "type": "single_choice",
  "text": "وفق مخطط الشبكة هذا، ما الفائض الكلي (Total Float) للنشاط C وما المدة الدنيا للمشروع؟",
  "options": {
   "A": "فائض 3 أيام؛ المدة 18 يومًا",
   "B": "فائض 0 يوم؛ المدة 15 يومًا",
   "C": "فائض 3 أيام؛ المدة 15 يومًا",
   "D": "فائض 5 أيام؛ المدة 18 يومًا"
  },
  "answer": "A",
  "figure": {
   "kind": "network",
   "durLabel": "المدة",
   "critical": [],
   "nodes": [
    {
     "id": "A",
     "label": "A",
     "dur": 3,
     "x": 14,
     "y": 124,
     "es": 0,
     "ef": 3
    },
    {
     "id": "B",
     "label": "B",
     "dur": 5,
     "x": 178,
     "y": 44,
     "es": 3,
     "ef": 8
    },
    {
     "id": "C",
     "label": "C",
     "dur": 2,
     "x": 178,
     "y": 204,
     "es": 3,
     "ef": 5
    },
    {
     "id": "D",
     "label": "D",
     "dur": 6,
     "x": 342,
     "y": 124,
     "es": 8,
     "ef": 14
    },
    {
     "id": "E",
     "label": "E",
     "dur": 4,
     "x": 506,
     "y": 124,
     "es": 14,
     "ef": 18
    }
   ],
   "edges": [
    [
     "A",
     "B"
    ],
    [
     "A",
     "C"
    ],
    [
     "B",
     "D"
    ],
    [
     "C",
     "D"
    ],
    [
     "D",
     "E"
    ]
   ],
   "note": "الوحدة: أيام. ES (أسفل اليسار) / EF (أسفل اليمين)."
  }
 },
 {
  "id": 2000010,
  "category": "Exam",
  "examen": 3,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-10",
  "justification": "المسار الحرج هو A-B-E-F (16 يومًا). النشاط C يقع على المسار A-C-E-F (13 يومًا): فائض 3 أيام. أما النشاط D (المسار A-D-F = 14 يومًا) فلديه يومان فقط.",
  "type": "hotspot",
  "text": "انقر على النشاط الذي يملك أكبر فائض كلي.",
  "figure": {
   "kind": "network",
   "durLabel": "المدة",
   "nodes": [
    {
     "id": "A",
     "label": "A",
     "dur": 4,
     "x": 14,
     "y": 130
    },
    {
     "id": "B",
     "label": "B",
     "dur": 6,
     "x": 178,
     "y": 18
    },
    {
     "id": "C",
     "label": "C",
     "dur": 3,
     "x": 178,
     "y": 130
    },
    {
     "id": "D",
     "label": "D",
     "dur": 6,
     "x": 178,
     "y": 244
    },
    {
     "id": "E",
     "label": "E",
     "dur": 2,
     "x": 342,
     "y": 60
    },
    {
     "id": "F",
     "label": "F",
     "dur": 4,
     "x": 506,
     "y": 130
    }
   ],
   "edges": [
    [
     "A",
     "B"
    ],
    [
     "A",
     "C"
    ],
    [
     "A",
     "D"
    ],
    [
     "B",
     "E"
    ],
    [
     "C",
     "E"
    ],
    [
     "D",
     "F"
    ],
    [
     "E",
     "F"
    ]
   ],
   "note": "الوحدة: أيام عمل."
  },
  "zones": [
   "A",
   "B",
   "C",
   "D",
   "E",
   "F"
  ],
  "zone_labels": {
   "A": "النشاط A",
   "B": "النشاط B",
   "C": "النشاط C",
   "D": "النشاط D",
   "E": "النشاط E",
   "F": "النشاط F"
  },
  "correct_zone": "C"
 },
 {
  "id": 2000011,
  "category": "Exam",
  "examen": 3,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-11",
  "justification": "سلطة مرتفعة واهتمام منخفض = «إبقاؤه راضيًا»: يستطيع تعطيل المشروع، لكن إغراقه بالمعلومات يأتي بنتيجة عكسية. يُوجَّه التواصل إلى ما يهمه (الميزانية والقرارات الرئيسة).",
  "type": "single_choice",
  "text": "وفق شبكة السلطة/الاهتمام هذه، ما أنسب أسلوب إشراك للمدير المالي؟",
  "options": {
   "A": "إدارته عن قرب بإشراكه في كل القرارات اليومية",
   "B": "إبقاؤه راضيًا بمعلومات مستهدفة عن الميزانية والقرارات الرئيسة دون إغراقه",
   "C": "إبقاؤه على اطلاع عبر النشرة الأسبوعية للفريق",
   "D": "الاكتفاء بمراقبته دون تواصل خاص"
  },
  "answer": "B",
  "figure": {
   "kind": "grid",
   "rows": [
    "مرتفع",
    "منخفض"
   ],
   "cols": [
    "منخفض",
    "مرتفع"
   ],
   "xTitle": "الاهتمام",
   "yTitle": "السلطة",
   "cells": [
    [
     {
      "text": "المدير المالي",
      "fill": "b",
      "bold": true,
      "size": 12
     },
     {
      "text": "الراعي",
      "fill": "b",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "المورّد",
      "fill": "n",
      "bold": true,
      "size": 12
     },
     {
      "text": "المستخدمون النهائيون",
      "fill": "n",
      "bold": true,
      "size": 12
     }
    ]
   ]
  }
 },
 {
  "id": 2000012,
  "category": "Exam",
  "examen": 3,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-12",
  "justification": "يتناول استعراض السبرنت الاسترجاعي الأفراد والعلاقات والعمليات والأدوات؛ وتُدمج التحسينات المختارة في السبرنت القادم (غالبًا في سجله). أما مراجعة السبرنت فتفحص الزيادة مع أصحاب المصلحة.",
  "type": "dropdown",
  "text": "خلال {1}، يفحص فريق Scrum كيف أُنجز العمل ويحدد تحسينات تُدرج في {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "مراجعة السبرنت",
     "تخطيط السبرنت",
     "الاجتماع اليومي",
     "استعراض السبرنت الاسترجاعي (Retrospective)"
    ],
    "answer": 3
   },
   {
    "id": "2",
    "options": [
     "رؤية المنتج",
     "السبرنت القادم",
     "الإصدار السابق",
     "خطة إدارة الجودة"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 2000013,
  "category": "Exam",
  "examen": 4,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-13",
  "justification": "الدرجات: R1 = 3 × 3 = 9؛ R2 = 3 × 2 = 6؛ R4 = 2 × 2 = 4؛ R3 = 1 × 3 = 3؛ R5 = 1 × 1 = 1. فالترتيب التنازلي هو R1, R2, R4, R3, R5.",
  "type": "single_choice",
  "text": "وُضعت المخاطر الخمسة R1 إلى R5 في مصفوفة الاحتمال/الأثر أعلاه (مقياس 3 × 3، الدرجة = الاحتمال × الأثر، منخفض = 1، متوسط = 2، مرتفع = 3). ما ترتيب الأولوية في المعالجة؟",
  "options": {
   "A": "R1, R2, R4, R3, R5",
   "B": "R1, R3, R2, R4, R5",
   "C": "R2, R1, R3, R4, R5",
   "D": "R5, R4, R3, R2, R1"
  },
  "answer": "A",
  "figure": {
   "kind": "grid",
   "rows": [
    "مرتفع",
    "متوسط",
    "منخفض"
   ],
   "cols": [
    "منخفض",
    "متوسط",
    "مرتفع"
   ],
   "xTitle": "الأثر",
   "yTitle": "الاحتمال",
   "cells": [
    [
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "R2",
      "fill": "r",
      "bold": true,
      "size": 13
     },
     {
      "text": "R1",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "R4",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "R5",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "R3",
      "fill": "a",
      "bold": true,
      "size": 13
     }
    ]
   ]
  }
 },
 {
  "id": 2000014,
  "category": "Exam",
  "examen": 4,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-14",
  "justification": "احتمال منخفض (الصف السفلي) وأثر مرتفع (العمود الأيمن): الخلية السفلية اليمنى. درجتها متوسطة: يُخطَّط لرد أو احتياطي بدل إجراء فوري.",
  "type": "hotspot",
  "text": "يُعدّ حدث مناخي استثنائي غير مرجح جدًا (احتمال منخفض)، لكنه لو وقع لأوقف الورشة (أثر مرتفع). انقر على خلية المصفوفة التي يجب وضعه فيها.",
  "figure": {
   "kind": "grid",
   "rows": [
    "مرتفع",
    "متوسط",
    "منخفض"
   ],
   "cols": [
    "منخفض",
    "متوسط",
    "مرتفع"
   ],
   "xTitle": "الأثر",
   "yTitle": "الاحتمال",
   "cells": [
    [
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "r",
      "bold": true,
      "size": 13
     }
    ],
    [
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "g",
      "bold": true,
      "size": 13
     },
     {
      "text": "",
      "fill": "a",
      "bold": true,
      "size": 13
     }
    ]
   ]
  },
  "zones": [
   "r0c0",
   "r0c1",
   "r0c2",
   "r1c0",
   "r1c1",
   "r1c2",
   "r2c0",
   "r2c1",
   "r2c2"
  ],
  "zone_labels": {
   "r0c0": "الاحتمال مرتفع / الأثر منخفض",
   "r0c1": "الاحتمال مرتفع / الأثر متوسط",
   "r0c2": "الاحتمال مرتفع / الأثر مرتفع",
   "r1c0": "الاحتمال متوسط / الأثر منخفض",
   "r1c1": "الاحتمال متوسط / الأثر متوسط",
   "r1c2": "الاحتمال متوسط / الأثر مرتفع",
   "r2c0": "الاحتمال منخفض / الأثر منخفض",
   "r2c1": "الاحتمال منخفض / الأثر متوسط",
   "r2c2": "الاحتمال منخفض / الأثر مرتفع"
  },
  "correct_zone": "r2c2"
 },
 {
  "id": 2000015,
  "category": "Exam",
  "examen": 4,
  "domain": "Business",
  "approach": "predictif",
  "source_id": "VIS-15",
  "justification": "الحالة الحمراء تعني تجاوز الحد المسموح ووجوب قرار الراعي؛ وهنا يتعلق الأمر بالامتثال التنظيمي الذي قد يمنع الإطلاق. أما الحالات البرتقالية فتُراقَب وتُعالج داخل الفريق.",
  "type": "single_choice",
  "text": "تعرض لوحة المتابعة هذه على الراعي. أي عنصر يجب تصعيده أولًا؟",
  "options": {
   "A": "واجهات ERP (الجدول برتقالي)",
   "B": "ترحيل البيانات (التكلفة والجدول برتقاليان)",
   "C": "لا شيء: جميع المؤشرات ضمن الحدود المسموحة",
   "D": "النشر التجريبي (الامتثال أحمر)"
  },
  "answer": "D",
  "figure": {
   "kind": "grid",
   "rows": [
    "ترحيل البيانات",
    "واجهات ERP",
    "التدريب",
    "النشر التجريبي"
   ],
   "cols": [
    "التكلفة",
    "الجدول",
    "الجودة",
    "الامتثال"
   ],
   "cells": [
    [
     {
      "text": "برتقالي",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "برتقالي",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "برتقالي",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "برتقالي",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     }
    ],
    [
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "برتقالي",
      "fill": "a",
      "bold": true,
      "size": 12
     },
     {
      "text": "أخضر",
      "fill": "g",
      "bold": true,
      "size": 12
     },
     {
      "text": "أحمر",
      "fill": "r",
      "bold": true,
      "size": 12
     }
    ]
   ]
  }
 },
 {
  "id": 2000016,
  "category": "Exam",
  "examen": 4,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-16",
  "justification": "التعاون (حل المشكلة) يدمج وجهات نظر متعددة للوصول إلى إجماع والتزام قوي. وهو التقنية المفضلة عمومًا عندما يسمح الوقت وتتوافر الثقة.",
  "type": "dropdown",
  "text": "يختلف خبيران على حل تقني. يجمعهما مدير المشروع لفحص المشكلة وإيجاد حل يدمج وجهتي النظر: هذه تقنية {1}. وهي مفضلة عمومًا لأنها تؤدي إلى {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "الفرض",
     "التجنّب",
     "التعاون / حل المشكلة",
     "التهدئة"
    ],
    "answer": 2
   },
   {
    "id": "2",
    "options": [
     "قرار سريع يفرضه مدير المشروع",
     "التزام دائم حول حل يربح فيه الجميع",
     "حل وسط يخسر فيه كل طرف قليلًا",
     "انسحاب الأطراف من النقاش"
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": 2000017,
  "category": "Exam",
  "examen": 5,
  "domain": "Process",
  "approach": "agile_hybride",
  "source_id": "VIS-17",
  "justification": "متوسط آخر ثلاثة سبرنتات (19 و22 و20) نحو 20 نقطة: 120 / 20 ≈ 6 سبرنتات. وذروة السبرنت الأول (30) استثنائية ومتفائلة؛ والتقريب إلى الأدنى يقلل من الجهد؛ والسرعة وُجدت للتوقع.",
  "type": "single_choice",
  "text": "يُقدَّر ما تبقى من سجل المنتج بـ 120 نقطة. استنادًا إلى سجل السرعة أعلاه، ما التوقع الأكثر موثوقية؟",
  "options": {
   "A": "نحو 6 سبرنتات، باستخدام متوسط سرعة السبرنتات الأخيرة (≈ 20 نقطة)",
   "B": "4 سبرنتات، باستخدام أفضل سرعة مُسجَّلة (30 نقطة)",
   "C": "5 سبرنتات، بتقريب متوسط جميع السبرنتات إلى الأدنى",
   "D": "لا يمكن التوقع باستخدام السرعة"
  },
  "answer": "A",
  "figure": {
   "kind": "barchart",
   "xLabels": [
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6"
   ],
   "bars": [
    30,
    20,
    21,
    19,
    22,
    20
   ],
   "yMax": 36,
   "yTicks": [
    0,
    10,
    20,
    30
   ],
   "yTitle": "السرعة (نقاط)",
   "xTitle": "السبرنت"
  }
 },
 {
  "id": 2000018,
  "category": "Exam",
  "examen": 5,
  "domain": "People",
  "approach": "agile_hybride",
  "source_id": "VIS-18",
  "justification": "تنطبق «الإدارة عن قرب» على أصحاب المصلحة ذوي السلطة المرتفعة والاهتمام المرتفع (الربع العلوي الأيمن): يُشركون بنشاط وبصورة متكررة.",
  "type": "hotspot",
  "text": "في شبكة السلطة/الاهتمام هذه، انقر على الربع الذي تكون استراتيجية الإشراك فيه «الإدارة عن قرب».",
  "figure": {
   "kind": "grid",
   "rows": [
    "مرتفع",
    "منخفض"
   ],
   "cols": [
    "منخفض",
    "مرتفع"
   ],
   "xTitle": "الاهتمام",
   "yTitle": "السلطة",
   "cells": [
    [
     {
      "text": "",
      "fill": "b"
     },
     {
      "text": "",
      "fill": "b"
     }
    ],
    [
     {
      "text": "",
      "fill": "b"
     },
     {
      "text": "",
      "fill": "b"
     }
    ]
   ]
  },
  "zones": [
   "r0c0",
   "r0c1",
   "r1c0",
   "r1c1"
  ],
  "zone_labels": {
   "r0c0": "سلطة مرتفعة / اهتمام منخفض",
   "r0c1": "سلطة مرتفعة / اهتمام مرتفع",
   "r1c0": "سلطة منخفضة / اهتمام منخفض",
   "r1c1": "سلطة منخفضة / اهتمام مرتفع"
  },
  "correct_zone": "r0c1"
 },
 {
  "id": 2000019,
  "category": "Exam",
  "examen": 5,
  "domain": "Process",
  "approach": "predictif",
  "source_id": "VIS-19",
  "justification": "يتركز 45% من العيوب في العمود الأول (الواجهة): والعمل على «القلة الحيوية» يعطي أفضل مردود. ومع الفئة التالية يُغطّى 70% من الإجمالي.",
  "type": "hotspot",
  "text": "يرتّب مخطط باريتو هذا العيوب حسب الفئة. انقر على الفئة التي يجب معالجتها أولًا للحصول على أكبر خفض في عدد العيوب.",
  "figure": {
   "kind": "barchart",
   "xLabels": [
    "الواجهة",
    "الأمان",
    "الأداء",
    "التوثيق",
    "التثبيت",
    "أخرى"
   ],
   "bars": [
    45,
    25,
    12,
    8,
    6,
    4
   ],
   "yMax": 100,
   "yTicks": [
    0,
    25,
    50,
    75,
    100
   ],
   "line": [
    45,
    70,
    82,
    90,
    96,
    100
   ],
   "lineLabel": "التراكمي %",
   "yTitle": "العيوب",
   "barColors": [
    "#2f6fed",
    "#2f6fed",
    "#2f6fed",
    "#2f6fed",
    "#2f6fed",
    "#2f6fed"
   ]
  },
  "zones": [
   "b0",
   "b1",
   "b2",
   "b3",
   "b4",
   "b5"
  ],
  "zone_labels": {
   "b0": "الفئة 1",
   "b1": "الفئة 2",
   "b2": "الفئة 3",
   "b3": "الفئة 4",
   "b4": "الفئة 5",
   "b5": "الفئة 6"
  },
  "correct_zone": "b0"
 },
 {
  "id": 2000020,
  "category": "Exam",
  "examen": 5,
  "domain": "Business",
  "approach": "predictif",
  "source_id": "VIS-20",
  "justification": "تبرّر دراسة الجدوى (Business Case) المشروع (الفوائد المتوقعة والمواءمة الاستراتيجية). وعند تغير السياق تُعاد دراستها للتحقق من أن المشروع ما زال يحقق القيمة المتوقعة، أو لاتخاذ قرار بإيقافه.",
  "type": "dropdown",
  "text": "عندما تتغير بيئة المنظمة، يجب إعادة النظر في {1} للتأكد من أن المشروع ما زال يحقق {2}.",
  "blanks": [
   {
    "id": "1",
    "options": [
     "هيكل تجزئة العمل (WBS)",
     "دراسة الجدوى / حالة العمل (Business Case)",
     "سجل المشكلات",
     "الجدول الزمني"
    ],
    "answer": 1
   },
   {
    "id": "2",
    "options": [
     "مزيدًا من المخرجات",
     "مخاطر أقل",
     "مددًا أقصر",
     "القيمة المتوقعة للمنظمة"
    ],
    "answer": 3
   }
  ]
 }
];
const VISUAL_HIDDEN_IDS = {"fr": [1104, 1112, 1113, 1163, 1171, 1177, 1192, 1215, 1217, 1220, 1221, 1230, 1233, 1238, 1246, 1274, 1291, 1299, 1314, 1368], "en": [1128, 1135, 1149, 1152, 1157, 1164, 1167, 1169, 1179, 1190, 1213, 1230, 1239, 1250, 1257, 1268, 1282, 1298, 1299, 1339], "ar": [1024, 1026, 1031, 1042, 1045, 1048, 1072, 1080, 1086, 1091, 1092, 1094, 1101, 1127, 1129, 1133, 1135, 1137, 1193, 1249]};
