# PMP Simulateur

Plateforme d'entraînement à l'examen de certification **PMP (Project Management Professional)**, générée à partir d'une banque de 65 questions (organisées par approche et par format), avec comptes utilisateurs, suivi de progression par domaine PMI, et espace d'administration.

Ceci est la version française du projet. Une version anglaise complète (`pmp-simulator-en/`) existe avec les mêmes fonctionnalités.

## Démarrer

Aucune installation n'est nécessaire : ouvre simplement `index.html` dans un navigateur.

```bash
cd pmp-simulator
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

## Compte admin par défaut

- **Utilisateur :** `admin`
- **Mot de passe :** `admin123`

⚠️ Change ce mot de passe dès la première connexion, depuis **Administration → Paramètres**.

## Fonctionnalités

- **Comptes utilisateurs** : inscription / connexion (page d'accueil).
- **6 catégories d'entraînement**, affichées dans une barre latérale : **Prédictif**, **Agile**, **Hybride**, **Examen**, **Quiz**, **Mini examen**. Chacune puise ses propres questions dans la banque.
- **Réponse obligatoire pour avancer** : impossible de passer à la question suivante sans avoir répondu à la question en cours.
- **Minuteur, navigation entre questions, indicateur de progression.**
- **Correction détaillée** après chaque session : bonne/mauvaise réponse, justification, répartition par domaine PMI (Personnes / Processus / Environnement commercial), historique complet. Le domaine n'est volontairement pas affiché pendant l'examen (seulement dans la correction), pour ne pas influencer la réponse.
- **PDF téléchargeable** du résultat : score, statut bonne/mauvaise réponse, bonne réponse et justification pour chaque question.
- **Espace admin** :
  - Ajouter, modifier, supprimer des questions (y compris les 65 questions d'origine), et leur assigner une catégorie.
  - Voir la liste des comptes créés et leurs statistiques (nombre d'examens, score moyen, meilleur score).
  - Changer le mot de passe admin.

## Comment les catégories ont été construites

Les 65 questions sources ont été réparties dans les 6 catégories de la barre latérale à partir de signaux explicites déjà présents dans le texte de chaque question :
- Questions mentionnant Agile/Scrum/Sprint/Kanban/vélocité/rétrospective/Product Owner → **Agile**
- Questions mentionnant explicitement "hybride" → **Hybride**
- Questions mentionnant des notions de cycle prédictif (Cycle en V, diagramme de réseau, chemin critique, CPI/SPI, EVM) → **Prédictif**
- Les questions People/Business restantes (sans approche explicite) ont été répartis entre **Examen**, **Quiz** et **Mini examen** selon lequel des trois examens blancs d'origine elles provenaient.

Du fait de cette méthode, **Prédictif, Agile et Hybride démarrent avec un nombre modeste de questions** (5, 10 et 2 respectivement) — celles où le texte source signale explicitement cette approche. Ajoute-en d'autres via l'espace admin pour enrichir chaque catégorie.

## Comment fonctionnent les données — point important

Ce projet est **100% statique** (HTML/CSS/JS, sans serveur ni base de données). Toutes les données — comptes, mots de passe, tentatives d'examen, questions ajoutées par l'admin — sont stockées dans le **`localStorage` du navigateur** :

- Les données restent **sur l'appareil et le navigateur** où le site est utilisé. Sur un autre ordinateur ou navigateur, tu repars de zéro.
- L'espace admin ne voit que les comptes/scores créés **sur ce même navigateur** — pas ceux d'autres appareils.
- Le "hash" de mot de passe est volontairement simple et sert uniquement à éviter de stocker les mots de passe en clair localement — **ce n'est pas une sécurité de niveau production**.
- L'export PDF utilise la bibliothèque jsPDF chargée depuis un CDN (cdnjs.cloudflare.com) — une connexion internet est nécessaire pour cette fonctionnalité précise ; tout le reste fonctionne hors ligne.

### Pour héberger une vraie plateforme multi-utilisateurs

Il faut ajouter un vrai backend (base de données + API). Toutes les opérations de données passent par l'objet `Store` dans `js/storage.js` — il suffit de remplacer les fonctions `localStorage` par des appels `fetch()` vers une API, sans toucher au reste de l'app.

Options simples : Supabase, Firebase, ou une petite API Node/Express + PostgreSQL.

## Structure du projet

```
pmp-simulator/
├── index.html          # connexion / inscription
├── dashboard.html       # tableau de bord, barre latérale des catégories
├── quiz.html             # passage de l'examen
├── results.html          # résultats + correction détaillée + export PDF
├── history.html          # historique complet des tentatives
├── admin.html             # espace administration
├── css/style.css
├── js/
│   ├── data.js           # banque de 65 questions, avec catégorie + domaine
│   ├── storage.js        # couche de persistance (localStorage)
│   ├── ui.js              # composants partagés (nav, compas des domaines, toasts)
│   ├── dashboard.js
│   ├── quiz.js
│   ├── results.js
│   └── admin.js
└── data/questions.json    # même banque de questions, au format JSON brut
```

## Personnaliser la banque de questions

1. **Via l'interface** : Administration → Questions → Ajouter/Modifier/Supprimer.
2. **Directement dans le code** : édite `js/data.js` (tableau `QUESTIONS`) :

```js
{
  "id": 1,
  "category": "Agile",
  "domain": "People",
  "text": "Énoncé de la question...",
  "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
  "answer": "C",
  "justification": "Explication affichée dans la correction."
}
```

---

*Outil d'entraînement indépendant, non affilié au Project Management Institute (PMI®). PMP® est une marque déposée du PMI.*
