# faridhafizh.github.io

Personal portfolio of **Muhammad Farid Hafizh** — Network & IT Support Engineer and Fullstack & Automation Developer.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **shadcn/ui**. Bilingual (Indonesian / English) with light and dark themes.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build
npm run typecheck  # TypeScript only
npm run og         # regenerate public/og-image.png
```

## Content

All copy and CV data live in [`src/data/content.ts`](src/data/content.ts), split into `id` and `en` objects with a shared `SiteContent` type. Edit both languages when you change content.

Site links, email, phone, CV path, and the Web3Forms key are in [`src/config.ts`](src/config.ts).

## Assets to update

| Asset | Path | Notes |
| --- | --- | --- |
| Profile photo | `public/profile.jpg` | Portrait, 4:5 ratio, 800px+ wide. Until it exists, the hero shows a monogram fallback. |
| CV | `public/Muhammad-Farid-Hafizh-CV.pdf` | Replace with the latest CV. `docs/CV.pdf` is the source copy. |
| Social preview | `public/og-image.png` | Regenerate with `npm run og` after changing the design. |
| Favicon | `public/favicon.svg` | Monogram favicon. |

## Contact form

The form uses [Web3Forms](https://web3forms.com). Create a free access key, then either:

- **Local:** create `.env.local` with `VITE_WEB3FORMS_KEY=your-key`
- **GitHub Pages:** add the same value as a repository secret named `VITE_WEB3FORMS_KEY`

The workflow passes the secret at build time. Without a key, the form falls back to opening the visitor's email client with a prefilled message.

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages.

One-time setup in the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The old single-file version of the site is preserved in [`legacy/`](legacy/) for reference and is not deployed.

## Structure

```
src/
  components/        # page sections + shared components
  components/ui/     # shadcn/ui primitives
  data/content.ts    # bilingual content and CV data
  lib/               # i18n, theme, utils
  App.tsx
  index.css          # Tailwind v4 theme tokens
public/              # static assets, CV, 404, robots, sitemap
legacy/              # previous site (not deployed)
```
