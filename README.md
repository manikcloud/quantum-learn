# Quantum Learning Hub

**Live site:** https://quantum-learn.pages.dev

Independent study notes for **quantum computing and quantum machine learning** —
plain-language lessons that go from "explain it to a 10th-class student" to full
mathematical rigor. Every lesson opens with a no-jargon explanation, then unfolds
into the real math (Dirac notation, derivations, KaTeX-rendered equations) for
readers who want depth, and closes with a quiz to check understanding.

All content is written from scratch for this site. It is not affiliated with,
endorsed by, or reproducing any institution's course materials.

## What's inside

- **10 modules, 61 lessons** — from qubits and quantum gates, through the postulates,
  quantum algorithms (Deutsch–Jozsa, Shor's, Grover's), quantum machine learning,
  hybrid quantum-classical neural networks, and variational methods (VQE, QAOA) —
  plus three enrichment tracks you won't find in a standard syllabus:
  - *Quantum Physics Stories* — the double-slit experiment, the Einstein–Bohr debate,
    decoherence, and the human drama behind the math.
  - *Nobel Prizes That Built Quantum* — ten prizes from Planck (1918) to the 2022
    entanglement prize, each with deep technical background and story.
  - *Quantum Philosophy* — why quantum computing needs philosophy: six interpretations
    of quantum mechanics, randomness vs determinism and free will, and Wheeler's
    "it from bit," each with book references for deeper reading.
- **Bilingual (English / Hindi)** — full UI in both languages with an EN/हिंदी
  toggle; Hindi uses Devanagari with natural English technical terms.
- **Two-layer lessons** — `simple` (plain words) + `deeper` (the math), key
  takeaways, and quizzes with instant feedback and explanations.
- **Full-text search** — Pagefind index over English and Hindi, with a
  language filter and a relevance gate that keeps only real matches.
- **Progress tracking** — mark lessons complete, watch the progress bar, keep a
  streak. Stored in `localStorage`; nothing leaves the device.
- **Reading comfort** — dark/light theme, ←/→ arrow-key page turning, mobile
  sidebar, responsive layout.
- **100% static** — no server, no database, no tracking.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 5 (static output) |
| Search | [Pagefind](https://pagefind.app) 1.5.2 (built at deploy time) |
| Math | KaTeX 0.16.11, rendered client-side |
| Hosting | Cloudflare Pages, auto-deploy on every push to `main` |
| Repo | https://github.com/manikcloud/quantum-learn (`main`) |

## Run it locally

```bash
npm install
npm run dev      # live preview at http://localhost:4321
```

To test the exact production build (Astro + Pagefind index):

```bash
npm run build     # compiles to dist/ and builds the search index
npm run preview   # serves dist/ locally
```

## Deploy pipeline (already live)

Cloudflare Pages project `quantum-learn` is connected to this repo's `main`
branch. Every `git push` to `main` triggers an automatic rebuild and deploy:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 20 or newer

## How content is organized

```
src/
  data/
    curriculum.js        # the 10 modules + lesson list (sidebar, prev/next, search index derive from this)
    lesson-content.js    # lesson bodies: { simple, deeper, keyPoints, quiz }
    lesson-extra/
      physics.js         # Module 8: quantum physics stories
      nobel.js           # Module 9: Nobel prize lessons
      philosophy.js      # Module 10: philosophy of quantum lessons
    hi-meta.js           # Hindi module titles/taglines/descriptions + lesson title overrides
    i18n.js              # UI strings for EN/HI
  pages/
    index.astro          # homepage (EN)
    hi/index.astro       # homepage (HI)
    lessons/[lesson].astro
    modules/[module].astro
    hi/lessons/[lesson].astro
    hi/modules/[module].astro
  layouts/SiteLayout.astro   # header, sidebar, search, footer, theme
  components/Quiz.astro      # quiz widget
  styles/global.css
```

**Authoring a new lesson:**

1. Add the entry to `curriculum.js` (module's `lessons` array: `slug` + `title`).
2. Write the body in `lesson-content.js` (or `lesson-extra/` for enrichment tracks) with
   `simple`, `deeper`, `keyPoints`, and `quiz` (`{ q, options, answer, why }`).
3. Optionally add a Hindi title in `hi-meta.js` (`hiLessonTitles`).
4. Lessons with no entry render a "coming soon" placeholder automatically — navigation
   keeps working around them.

## Content status

- **Authored:** 26 of 61 lessons (Qubits fully bilingual, all 11 physics stories, all 10 Nobel lessons, all 4 philosophy lessons).
- **Remaining:** 35 core syllabus lessons are placeholders awaiting authoring.
- Math uses KaTeX delimiters `\(...\)` (inline) and `\[...\]` / `$$...$$` (display).

## Notes

- Progress tracking uses `localStorage` — per-browser, nothing leaves the device.
- Math is rendered client-side with KaTeX (CDN). No build-time dependency.
- Arrow keys (←/→) turn pages on lesson and module pages.
