# CLAUDE.md

Official Docusaurus site for the **External Integration Module for D365FO** — a free, open-source X++ framework. Framework code lives in [TrudAX/XppTools](https://github.com/TrudAX/XppTools) (`DEVTutorial/DEVExternalIntegration`); this repo is the website only.

## Commands

- `npm start` — dev server (search disabled in dev)
- `npm run build` — production build; `onBrokenLinks: throw` validates all internal links
- `npm run serve` — serve `./build` (use this to test search)

## Structure

- `src/pages/index.tsx` + `index.module.css` — landing page (hero with retouched D365FO workspace screenshot, proof cards, 4-step "How it works", comparison columns, use-case cards, gradient CTA)
- `docs/` — original reference docs, 3-level: intro, getting-started, why-external-integration/, forms/ (setup/ with one page per form group, operations, logs, workspace), connectors/, document-types/, resources.md, support.md
- `src/theme/prism-include-languages.ts` — X++ highlighting: Prism `csharp` + exactly 4 extra keywords (`ttsbegin`, `firstonly`, `crosscompany`, `container`); `xpp` fence is an alias. Keep minimal.
- `.github/workflows/deploy.yml` — GitHub Pages deploy on push to main

## Key decisions

- Docs describe the module (forms → connectors → document types) and **link** to blog tutorials on denistrunin.com — never copy posts. All 12 integration posts listed in `docs/resources.md`.
- Light theme only — dark mode deliberately disabled (`colorMode.disableSwitch`).
- Docs screenshots come from blog sources at `C:\GitHub\denistrunin-blog\src\posts` (filter by tag `Integration`); copied into `docs/**/img/`.
- Hero image `static/img/workspace-hero.png` is anonymized. The on-disk original contains real client names — never publish it unedited.

## Deployment

Live at https://trudax.github.io/d365fointegration (repo TrudAX/d365fointegration, deploys via GitHub Actions on push to main). Google Analytics is wired (G-74S7CMRN5V).
