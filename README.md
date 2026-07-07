# PMP Simulateur — version unifiée (FR/EN dans une seule plateforme)

Une seule plateforme, un seul déploiement : pas de sous-dossiers séparés par langue. Le bouton **FR / EN** en haut à droite de chaque page bascule instantanément toute l'interface et la banque de questions, sans changer d'URL ni de dossier.

## Démarrer

Ouvre `index.html` dans un navigateur, ou héberge le dossier entier tel quel (Vercel, Netlify, GitHub Pages…) — un seul lien, tout est dedans.

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## Compte admin par défaut

- **Utilisateur :** `admin`
- **Mot de passe :** `admin123`

Change-le dès la première connexion (Administration → Paramètres) — le mot de passe est partagé entre les deux langues (même compte, juste un autre affichage).

## Comment fonctionne la bascule de langue

- La langue choisie est stockée dans `localStorage` (`pmp_lang`), pas dans l'URL.
- Cliquer sur "EN" (ou "FR") change cette valeur puis recharge la page courante — donc si tu es sur `results.html` en français, tu restes sur `results.html`, juste en anglais.
- Toute l'interface (menus, boutons, libellés) est traduite via `js/i18n.js` (dictionnaire `STRINGS.fr` / `STRINGS.en` + fonction `t('clé')`).
- La banque des 65 questions existe en deux versions (`QUESTIONS_FR` et `QUESTIONS_EN` dans `js/data.js`), avec **les mêmes identifiants numériques (id 1 à 65)** dans les deux langues — donc ton historique de tentatives reste cohérent même si tu changes de langue après coup : la question n°12 reste la question n°12, juste affichée dans l'autre langue.

## Fonctionnalités

- Comptes utilisateurs (inscription/connexion), partagés entre les deux langues.
- 6 catégories : Prédictif, Agile, Hybride, Examen, Quiz, Mini examen.
- Impossible de passer à la question suivante sans répondre.
- Domaine PMI masqué pendant l'examen, affiché seulement dans la correction.
- Export PDF du résultat (score, bonne/mauvaise réponse, bonne réponse, justification) — généré dans la langue active au moment du téléchargement.
- Espace admin : ajout/édition/suppression de questions **par langue** (les questions ajoutées en français n'apparaissent pas automatiquement en anglais, et inversement — ce sont deux banques distinctes côté admin), vue des comptes/scores, changement du mot de passe admin.

## Structure du projet

```
/
├── index.html          # connexion / inscription
├── dashboard.html
├── quiz.html
├── results.html
├── history.html
├── admin.html
├── css/style.css
├── js/
│   ├── i18n.js          # dictionnaire de traduction + t() + applyI18n()
│   ├── data.js          # QUESTIONS_FR + QUESTIONS_EN (65 questions chacune)
│   ├── storage.js       # localStorage, questions/overrides par langue
│   ├── ui.js             # topbar, sélecteur FR/EN, compas des domaines
│   ├── dashboard.js
│   ├── quiz.js
│   ├── results.js
│   └── admin.js
└── data/
    ├── questions_fr.json
    └── questions_en.json
```

## Point important sur les données

Projet 100% statique : tout vit dans le `localStorage` du navigateur (comptes, tentatives, questions ajoutées). Pas de partage entre appareils/navigateurs différents sans ajouter un vrai backend (voir `js/storage.js`, tout passe par l'objet `Store`).

---
*Outil d'entraînement indépendant, non affilié au PMI®.*
