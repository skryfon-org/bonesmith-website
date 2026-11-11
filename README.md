# Bonesmith website

Marketing and documentation site for [Bonesmith](https://github.com/skryfon-org/bonesmith) (`npm create bonesmith`).
React 19, Vite, Tailwind v4, prerendered to static HTML.

```sh
npm install
npm run dev      # local dev server
npm run build    # tsc, client build, SSR build, prerender every route into dist/
npm run lint
```

- Content lives in `src/docs/pages.tsx` (docs), `src/lib/faq.ts`, and `src/pages/`.
- Site constants (repo, version, URL) are in `src/lib/site.ts`; update `VERSION` when Bonesmith is released.
- `.github/workflows/pages.yml` deploys to GitHub Pages with `VITE_BASE=/bonesmith-website/`. For a custom domain, drop that variable and update `SITE_URL` in `src/lib/site.ts`, `scripts/prerender.mjs` and `index.html`.
