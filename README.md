<div align="center">

# BentoUI — Modern Bento Grid Kit

Responsive Bento Grid components for React, TypeScript, and Tailwind CSS 4, based on the Flowsee Figma design system.

[Preview](http://127.0.0.1:5174/) · [Report an issue](https://github.com/flowsee-org)

</div>

---

## Highlights

- **Three reusable compositions:** Showcase, Editorial, and Mixed layouts, with three- and four-column Showcase options.
- **Responsive grid:** Single-column mobile, two-column tablet, and composed desktop layouts.
- **RTL and LTR:** Direction-aware content with logical alignment and preserved reading order.
- **Light and dark themes:** Theme-ready cards with consistent tokens.
- **Composable React components:** Typed cards and section components with configurable content and links.
- **Local visual assets:** Bento illustrations and icons are included in `public/bento`.

## Preview

Run the app locally to explore the layouts and controls. Replace this section with a project screenshot before publishing if you want a static preview in GitHub.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Quick start

```bash
git clone https://github.com/flowsee-org/bentoui.git
cd bentoui
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Components

`src/components/Bento.tsx` exports `BentoSection`, `HeroBentoCard`, `ProjectCard`, `ArticleCard`, `BentoCover`, and `BentoArrow`, along with the `Pattern`, `StoryKey`, and `Story` types.

```tsx
import { BentoSection } from './components/Bento'

export function WorkSection() {
  return <BentoSection pattern="showcase" columns={3} />
}
```

Choose `showcase`, `editorial`, or `mixed` with the `pattern` prop. `columns={4}` is available for Showcase. You can pass `items`, `title`, and `allHref` to customize a section. For custom grids, compose the exported card components directly.

## Responsive behavior

- **Below 768px:** one-column stack.
- **768px and above:** two-column tablet composition.
- **1024px and above:** desktop Bento placement.

The content width is capped at 1200px. Cards use 24px gaps and rounded corners; grid rows have a 360px minimum height to accommodate content.

## Themes and direction

Set `dir="rtl"` or `dir="ltr"` on a parent element. Add the `dark` class to a parent to enable dark colors. The DOM order stays readable on mobile; CSS Grid controls desktop placement.

## Project structure

```text
src/
  components/Bento.tsx  Reusable React components
  data.ts               Example stories and layout placement
  index.css             Tailwind import, theme tokens, and font setup
  App.tsx               Interactive layout preview
public/bento/           Local illustrations and icons
```

## Notes

- The Dana font is commercial and is not bundled. Add a licensed project copy in WOFF2 format and configure it in `src/index.css` for consistent typography.
- Example links such as `/work` and `/blog` are placeholders. Connect them to your router or CMS.
- This repository is the React implementation. The Figma file and earlier standalone HTML/Tailwind package remain separate.

## License

No license has been added yet. Add a `LICENSE` file before granting permission for reuse or redistribution.
