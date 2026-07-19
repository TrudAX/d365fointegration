# External Integration Module for D365FO — official site

The official site and documentation for the free, open-source **External Integration Module** for Microsoft Dynamics 365 Finance and Operations. The framework code lives in [TrudAX/XppTools](https://github.com/TrudAX/XppTools); this repository contains only the website.

Built with [Docusaurus](https://docusaurus.io/).

## Local development

```powershell
npm install
npm start        # dev server with hot reload (search is disabled in dev mode)
npm run build    # production build into ./build (validates all internal links)
npm run serve    # serve the production build locally (search works here)
```

## Live site

https://trudax.github.io/d365fointegration

## Configuration notes

| Setting in [`docusaurus.config.ts`](docusaurus.config.ts) | Current value | Note |
|---|---|---|
| `gtag.trackingID` | `G-74S7CMRN5V` | Google Analytics 4 measurement ID |
| `baseUrl` | `/d365fointegration/` | Change to `/` if a custom domain is added later |

## Deployment (GitHub Pages)

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every push to `main` builds the site and publishes it with `actions/deploy-pages`.

One-time repository setup: **Settings → Pages → Source → GitHub Actions**.

## Content layout

- `src/pages/index.tsx` — landing page.
- `docs/` — documentation: intro, getting started, comparison ("Why External Integration"), forms reference, connectors, document types, resources, support.
- `src/theme/prism-include-languages.ts` — X++ syntax highlighting (C# grammar plus the extra X++ keywords; the `xpp` code-fence language is an alias of `csharp`).

Screenshots in `docs/**/img/` are sourced from the tutorial posts on [denistrunin.com](https://denistrunin.com/tags/integration/).

## Reporting issues

- Framework code issues → [TrudAX/XppTools issues](https://github.com/TrudAX/XppTools/issues)
- Site/documentation issues → this repository's issue tracker
