# Microplastics in Remote Streams

A single-page field-study site for a BYU–Idaho Chem 490R internship project tracking microplastic
contamination in headwater streams around Kilgore, Idaho (Clark County) and Rexburg, Idaho
(Madison County). It presents the team's research question, sampling methods, an interactive map
of sample sites, chart/table views of particle counts, field notes, and an FAQ — all built from
the team's own field data.

## Features

- **Interactive site map** — 18 GPS-tagged sample sites across Clark and Madison counties, plotted
  on a Leaflet map and color-coded by microplastic particles found per liter, with a control-value
  reference.
- **Results view** — a Recharts bar chart and a sortable table (toggle between the two) showing
  particles/L per site, plus summary stats (sites sampled, average particles/L, sites above
  control).
- **Methods timeline** — a scroll-driven, five-step walkthrough of the lab procedure: collect,
  sieve & concentrate, digest, filter & dry, count.
- **Field notes** — a look at the team's sample-bottle naming log and contamination-control
  process (pink lab attire flags self-contamination).
- **FAQ** — an accordion answering common questions about the study.
- Scroll-triggered animations throughout via Framer Motion.

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/) — app framework and build tooling
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`) — styling
- [Framer Motion](https://www.framer.com/motion/) — animation
- [React Leaflet](https://react-leaflet.js.org/) / [Leaflet](https://leafletjs.com/) — the sample-site map
- [Recharts](https://recharts.org/) — the results chart
- [Lucide](https://lucide.dev/) — icons
- [oxlint](https://oxc.rs/docs/guide/usage/linter.html) — linting

## Development

```bash
npm install
npm run dev       # start the dev server
npm run lint       # run oxlint
npm run build      # production build (outputs to dist/)
npm run preview    # preview the production build locally
```

## Data

Sample site coordinates and particle counts (`src/data/sites.js`) are the team's own field data,
originally exported from a kepler.gl map. Landscape and wildlife photography is public domain,
courtesy of the U.S. Forest Service and Bureau of Land Management.

## Deployment

Pushes to `main` build and deploy automatically to GitHub Pages via
`.github/workflows/deploy.yml`. On a brand-new repo, enable
**Settings → Pages → Source → GitHub Actions** once, then re-run the workflow.

## Team

Lydia Kessie, Cheyenne Gwynn, Kiersten Jensen, Ryan Sargeant
Chem 490R Internship · BYU–Idaho, Rexburg · Spring–Summer 2026

## Author

Levi B Mackay ([@levibmackay](https://github.com/levimackay))

_Last updated: July 22, 2026_

_Last reviewed: 2026-07-20 19:33 MDT_

---
**Last updated:** 2026-08-04 16:57 PDT

---

Maintained by [Levi Mackay](https://github.com/levibmackay)

