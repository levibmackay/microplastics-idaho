# Project Notes

Internal working notes for the microplastics-idaho site. Not shown to site visitors — this is
for whoever (future me, or a teammate) picks the repo back up.

## Current state

The site is a single long-scroll page (`src/App.jsx` composes `Hero → Intro → Methods →
StreamMap → DataSection → FieldNotes → Questions → Footer`, in that order). It's feature-complete
for the Chem 490R presentation: map, chart/table toggle, methods timeline, field notes, FAQ.
Deploys automatically to GitHub Pages on every push to `main` via
`.github/workflows/deploy.yml`. README is current as of 2026-07-20 and its feature list, tech
stack, and scripts were cross-checked against the actual source (package.json, App.jsx,
Methods.jsx, Questions.jsx, DataSection.jsx) rather than assumed.

## Data pipeline (how the numbers get on the page)

- All site + sample data lives in one file: `src/data/sites.js`.
- Raw data is a hardcoded array of `[lng, lat, siteId, particlesPerLiter]` tuples — 18 sites total,
  originally exported from a kepler.gl map (per the file's own comment). There is no build step or
  fetch that pulls this from a spreadsheet/CSV/API — if the team collects new samples, someone has
  to hand-edit this array.
- County assignment is derived, not stored: `county: lat >= 44.1 ? 'Clark' : 'Madison'`. This is a
  latitude-threshold heuristic, not a real geo lookup — fine for the current 18 sites since they
  cluster tightly around Kilgore (Clark) and Rexburg (Madison), but it would silently mis-tag a
  site added near the 44.1° line. Worth a comment in the source if new sites ever get added near
  that boundary.
- `severity()` buckets particle counts into low/moderate/high/severe with hardcoded thresholds
  (<=2, <=4, <=6, >6). `CONTROL = 2` is the control-sample value everything else is compared
  against (used for the "sites above control" stat and severity coloring).
- `severityColor` comment references `node scripts/validate_palette.js --ordinal` as having
  validated the color ramp — but there is no `scripts/` directory in the repo. Either that
  validation script was run once from a scratch location and never committed, or it's stale
  copy-paste from elsewhere. Not urgent, but if palette accessibility is ever questioned, that
  script doesn't exist to re-run.

## Stack specifics worth remembering

- React 19 + Vite 8 (rolldown-vite under the hood per node_modules — `@rolldown/*` packages are
  present), Tailwind v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — v4 is
  CSS-first config, check `src/index.css` for `@theme` if custom tokens need changing).
- `vite.config.js` sets `base: '/microplastics-idaho/'` — this is required for GitHub Pages
  project sites and must stay in sync with the actual repo name if it's ever renamed or forked.
- Linting is oxlint (`.oxlintrc.json`), not ESLint — fast but a smaller rule set. Only
  `react/rules-of-hooks` (error) and `react/only-export-components` (warn) are configured beyond
  defaults.
- `playwright` is a devDependency but there's no visible test suite or `tests/`/`e2e/` directory —
  it's installed but currently unused. Either tests were planned and not written, or it's a
  leftover from scaffolding.

## Known gaps / TODOs

- No automated tests exist despite Playwright being installed. If this site grows past the
  single-page-poster stage, worth adding at least a smoke test (map renders, chart/table toggle
  works, FAQ accordion opens).
- Data entry for new samples is fully manual (edit `sites.js` by hand). If the team keeps
  collecting samples across semesters, a small script to append/validate entries (or just a
  documented process) would reduce copy-paste errors.
- `CHANGELOG.md` exists but has a single vague entry ("Minor tweaks and touch-ups", 2026-07-16) —
  it's not being kept up with actual commits. Either commit to updating it per meaningful change
  or drop it in favor of relying on git log.
- The county heuristic (see above) is a latent gotcha for future site additions.

## Ideas for next steps

- If the study continues past this internship term, consider moving sample data to a small JSON
  or CSV file checked in alongside a short loader, so non-developers on the team can add rows
  without touching JS syntax.
- A "download raw data" link (CSV export of `sites.js`) would make the results section more
  useful to anyone citing the study.
- Given the map is already Leaflet-based, adding a legend toggle for county boundaries (rather
  than inferring county from latitude) would remove the need for the threshold heuristic entirely.
