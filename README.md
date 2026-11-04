# BentoUI

A reusable Bento Grid kit built with React, TypeScript, Vite, and Tailwind CSS 4. Includes Showcase, Editorial, and Mixed layouts, responsive cards, RTL/LTR support, and light/dark themes.

## Quick start

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to InfinityFree (static hosting)

1. Run `npm run build` locally.
2. Upload the **contents** of `dist/` (not the `dist` folder itself) to your domain's document root, usually `htdocs`.
3. If your app uses client-side routes, configure the host to serve `index.html` for unknown paths. The current preview uses example links such as `/work` and `/blog`; connect them to real routes or update their destinations before publishing.
4. For a site hosted in a subdirectory, set Vite's `base` option to that path before building. For a root-domain deployment, the default `/` is appropriate.

InfinityFree serves the built static site; it does not run the Vite development server. Re-upload the updated `dist/` contents after each production build.

## Reusable components

Import `BentoSection`, `ProjectCard`, `ArticleCard`, `HeroBentoCard`, `BentoCover`, or `BentoArrow` from `src/components/Bento.tsx`. Customize section content with `items`, `title`, and `allHref`.

## Scripts

- `npm run dev` — local development server
- `npm run build` — TypeScript check and production build
- `npm run preview` — preview the production build
- `npm run lint` — run Oxlint

## License

MIT. See [LICENSE](./LICENSE). The Dana typeface is not bundled; it is a commercial font and must be licensed separately if used.
