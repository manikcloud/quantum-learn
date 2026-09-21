# Quantum Learning Hub

Independent study notes for **quantum computing and quantum machine learning**
— plain-language lessons that go from "explain it to a 10th-class
student" to full mathematical rigor, with quizzes and progress tracking.
All content is written from scratch; the site is not affiliated with,
endorsed by, or reproducing any institution's course materials.

Built with [Astro](https://astro.build). Output is 100% static HTML/CSS/JS.

## Run it locally

```bash
npm install
npm run dev      # live preview at http://localhost:4321
```

To test the exact production build:

```bash
npm run build     # compiles to dist/
npm run preview   # serves dist/ locally
```

## Deploy to Cloudflare Pages (live pipeline)

- **Repo:** https://github.com/manikcloud/quantum-learn (`main` branch)
- **Live site:** https://quantum-learn.pages.dev
- **Cloudflare project:** `quantum-learn` (Pages, connected to Git)

Every `git push` to `main` triggers an automatic rebuild and deploy:

1. Push this folder to the GitHub repo above.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 or newer
4. Deploy. Every `git push` after that redeploys automatically.

## How content is organized

- `src/data/curriculum.js` — the 7 modules + lesson list (sidebar, prev/next, search index all derive from this).
- `src/data/lesson-content.js` — the actual lesson bodies. Each lesson has:
  - `simple` — plain-language explanation (HTML string)
  - `deeper` — rigorous layer with KaTeX math (`\(...\)`, `\[...\]`)
  - `keyPoints` — takeaways
  - `quiz` — `{ q, options, answer, why }`
- Lessons with no entry in `lesson-content.js` render a "coming soon" placeholder automatically.

## Notes

- Progress tracking uses `localStorage` — per-browser, nothing leaves the device.
- Math is rendered client-side with KaTeX (CDN). No build-time dependency.
- Arrow keys (←/→) turn pages on lesson and module pages.
