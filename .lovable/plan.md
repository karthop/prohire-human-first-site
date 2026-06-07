## Part 1 — Homepage practice grid: 3 → 4

**File:** `src/sections/PillarGrid.tsx`

- Add a fourth entry to the `pillars` array: **Career Advisory for Senior Professionals**, linking to `/services/career-advisory`, with a one-line description consistent with the Services page tone (confidential, one-to-one advisory for senior leaders navigating high-stakes transitions).
- Change the section eyebrow + headline from "Three practices, one way of working." to "Four practices, one way of working."
- Change the grid layout from `md:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-4` so four tiles read cleanly on desktop and stack two-up on tablet, one-up on mobile.
- No other files touched. Services page already shows all four.

## Part 2 — Per-article URLs for "What We're Seeing"

### What changes for the visitor
- `/what-were-seeing` — unchanged layout, but each article card becomes a link.
- New: `/what-were-seeing/:slug` — dedicated page for a single article (full body, tags, references, "Back to all" link, copy-link button).
- Shareable links preview properly on LinkedIn/email/text with the article's own title and description.

### Technical implementation

**1. Article data — `src/pages/WhatWereSeeing.tsx`**
- Extract the `articles` array into a new shared module `src/content/articles.ts` so both the index page and the detail page can import it.
- Add a `slug` field to each article (kebab-case from title, e.g. `the-disappearing-entry-level-job`).
- Add a `publishedAt` ISO date field (for JSON-LD + sort order).
- Existing fields (title, type, audience, body, references) carry over unchanged.

**2. New detail page — `src/pages/WhatWereSeeingArticle.tsx`**
- Reads `:slug` param, looks up the article, renders 404 (existing `NotFound`) if not found.
- Layout: small back-link, type + audience tag chips, title (serif), publish date, body, references list, "Copy link" button, and a "More perspectives" footer with 2–3 other article cards.
- Per-page SEO via `react-helmet-async`: `<title>{article.title} | proHIRE resources</title>`, meta description from a short excerpt, canonical `https://prohireresources.com/what-were-seeing/{slug}`, og:title/og:description/og:url/og:type=article, and JSON-LD `Article` schema (headline, datePublished, author = "Chris Betz", publisher = "proHIRE resources").

**3. SEO plumbing — one-time setup**
- Install `react-helmet-async`.
- Wrap `<App />` in `<HelmetProvider>` in `src/main.tsx`.
- Remove the static `<link rel="canonical">` from `index.html` so per-route canonicals from Helmet don't double up. Leave sitewide og:* in `index.html` as a fallback for non-JS social crawlers.
- Existing `src/components/Seo.tsx` already exists — reuse/extend it for the article page rather than calling Helmet directly, so the rest of the site can adopt the same pattern over time.

**4. Routing — `src/App.tsx`**
- Add `<Route path="/what-were-seeing/:slug" element={<WhatWereSeeingArticle />} />` next to the existing `/what-were-seeing` route.

**5. Index page link-up — `src/pages/WhatWereSeeing.tsx`**
- Each article card becomes a `<Link to={\`/what-were-seeing/${slug}\`}>`.
- Filters/tags continue to work as today.

**6. Sitemap — `public/sitemap.xml`**
- Add a `<url>` entry per article so Google can discover and index each one.

### Honest constraint to flag

This is a client-side React app (no server-side rendering). That means:
- **Google** will index each article correctly — it executes JavaScript.
- **LinkedIn / Slack / iMessage previews** see only the static `index.html` head, so the link preview will show the sitewide title/description, not the article-specific one. Fixing that properly requires SSR, which is a much bigger architectural change. Recommend we accept this limitation for now; it can be revisited later.

### Out of scope (not doing unless you ask)
- Changing article copy or adding new articles
- Comments, likes, view counts
- RSS feed
- Author bio block
