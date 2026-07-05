# PMP Simulator

A training platform for the **PMP (Project Management Professional)** certification exam, generated from a 65-question bank (organized by approach and format), with user accounts, per-domain progress tracking, and an administration area.

This is the English version of the project. A French version (`pmp-simulator/`) is also available with the same features.

## Getting started

No installation needed: just open `index.html` in a browser.

For best results (e.g. if you add images later), you can also serve it with a small local server:

```bash
cd pmp-simulator-en
python3 -m http.server 8000
# then open http://localhost:8000
```

## Default admin account

- **Username:** `admin`
- **Password:** `admin123`

⚠️ Change this password on first login, from **Administration → Settings**.

## Features

- **User accounts**: sign up / sign in (home page).
- **6 training categories**, shown in a left sidebar: **Predictive**, **Agile**, **Hybrid**, **Exam**, **Quiz**, **Mini exam**. Each pulls its own set of questions from the bank.
- **Sequential answering**: you can't move to the next question until you've answered the current one.
- **Timer, question navigation, progress indicator.**
- **Detailed review** after each session: correct/incorrect, explanation, breakdown by PMI domain (People / Process / Business Environment), full history.
- **Downloadable PDF** of your results: score, correct/incorrect status, correct answer, and explanation for every question.
- **Admin area**:
  - Add, edit, delete questions (including the 65 original questions), and assign them to a category.
  - View the list of created accounts and their statistics (number of exams, average score, best score).
  - Change the admin password.

## How the categories were built

The 65 source questions were sorted into the 6 sidebar categories based on explicit signals already present in each question's text:
- Questions mentioning Agile/Scrum/Sprint/Kanban/velocity/retrospective/Product Owner → **Agile**
- Questions mentioning "hybrid" explicitly → **Hybrid**
- Questions mentioning predictive-cycle concepts (V-model, network diagram, critical path, CPI/SPI, EVM) → **Predictive**
- Remaining People/Business questions (no explicit approach) were split across **Exam**, **Quiz**, and **Mini exam** based on which of the three original mock exams they came from.

Because of this, **Predictive, Agile, and Hybrid start with a modest number of questions** (5, 10, and 2 respectively) — the ones where the source text explicitly signals that approach. Add more through the admin panel to grow any category.

## How the data works — important note

This project is **100% static** (HTML/CSS/JS, no server, no database). All data — accounts, passwords, exam attempts, questions added by the admin — is stored in the **browser's `localStorage`**, which means:

- Data stays **on the device and browser** where the site is used. Opening the site on another computer or browser starts fresh.
- The admin area can only see accounts/scores created **on that same browser** — not those of users on other devices.
- The password "hash" used is intentionally simple and only prevents storing passwords in plain text locally — **it is not production-grade security**.
- The PDF export uses the jsPDF library loaded from a CDN (cdnjs.cloudflare.com) — an internet connection is required for that one feature; everything else works fully offline.

### To host a real multi-user platform

If you want multiple people to share the same accounts/scores across different devices, you'll need a real backend (database + API). The code is structured for this: all data operations go through the `Store` object in `js/storage.js` — you can swap the `localStorage` calls for `fetch()` calls to an API without touching the rest of the app (pages, quiz, admin).

Simple options: Supabase, Firebase, or a small Node/Express + PostgreSQL API.

## Project structure

```
pmp-simulator-en/
├── index.html          # sign in / sign up
├── dashboard.html        # dashboard, category sidebar
├── quiz.html              # taking the exam
├── results.html            # results + detailed review + PDF export
├── history.html             # full attempt history
├── admin.html                # administration area
├── css/style.css
├── js/
│   ├── data.js           # 65-question bank (English), with category + domain
│   ├── storage.js        # persistence layer (localStorage)
│   ├── ui.js              # shared components (nav, domain compass, toasts)
│   ├── dashboard.js
│   ├── quiz.js
│   ├── results.js
│   └── admin.js
└── data/questions.json    # same question bank, as raw JSON
```

## Customizing the question bank

Two ways:
1. **Via the interface**: Administration → Questions → Add/Edit/Delete.
2. **Directly in code**: edit `js/data.js` (the `QUESTIONS` array) — each question looks like:

```js
{
  "id": 1,
  "category": "Agile",
  "domain": "People",
  "text": "Question text...",
  "options": { "A": "...", "B": "...", "C": "...", "D": "..." },
  "answer": "C",
  "justification": "Explanation shown in the review."
}
```

---

*Independent training tool, not affiliated with the Project Management Institute (PMI®). PMP® is a registered trademark of PMI.*
