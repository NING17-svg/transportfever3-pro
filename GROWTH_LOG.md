# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-01 - Page bodies render as structure instead of one flat paragraph

- Task: Fix the fourteen pages whose Quick Answer was a 500-character slice of the article, and render authored Markdown as real structure.
- Files changed: `src/components/content/markdown.tsx` (new), `ModuleRenderer.tsx`, `StatusCallout.tsx`, `PageHero.tsx`, `ContentPage.tsx`, `HomePage.tsx`, `HubPage.tsx`, `WorkspacePage.tsx`, `src/styles/modules.css`, and the fourteen page data files under `src/data/pages/`.
- Content changed: `quickAnswer` now holds the opening section of the page in full instead of a mid-sentence truncation. The single `quick-answer` module that held the whole article is replaced by one prose module per section, with sentence-case headings; the section text itself is unchanged.
- Rendering changed: A prose module body is split into headings, paragraphs, lists and tables instead of being printed as one `<p>`, so authored `##` markers, bullet lists and links no longer show as literal text. `hero.subtitle` and `quickAnswer` render inline Markdown only.
- Fixed: Every `sources` callout printed a mangled date (`checked 2026): 09-28`); it now reads `checked 2026-09-28` and lists each source as its own bullet. Every `fact-boundaries` callout repeated its own title as the first line of its body; that line is removed so the bullets sit under the callout heading. The `Console Release Status` section on `/platforms` had a heading and no text, and is now carried by the two platform sections beneath it.
- URLs affected: No URL, route, page type, keyword, CTA, title, H1, canonical, schema, or internal-link role changed, so `CONTENT_INDEX.md` needs no update.
- Verification: `npm run verify` (typecheck, lint, template, content, IndexNow, static build, rendered SEO for 17 pages / 17 sitemap URLs / 17 manifest routes) plus a sweep of the 19 built HTML files for raw heading markers, unrendered links, broken source dates, and long unsegmented prose.

### 2026-09-28 - Adsterra fixed six-unit ads enabled

- Task: Replace empty Adsterra unit placeholders with real code from the Adsterra platform.
- Files changed: `src/data/ads.ts` only.
- URLs affected: None.
- Ad baseline: Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, and Smartlink are now populated with real code; fixed ad positions in the page shell, after the second content module, in the desktop right rail, and in the footer remain unchanged.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
