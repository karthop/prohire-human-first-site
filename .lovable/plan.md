## What changes

Add a single new entry to `src/content/articles.ts`. Both the index card and the full article page render from this data — no other files need changes.

## The new article entry

- **slug:** `internship-is-the-new-entry-point`
- **title:** "The internship is the new entry point. Most students don't know how to get in the door."
- **dek:** "The application volume has doubled. The postings have declined. And the students who are landing the right internships aren't just more qualified — they showed up before the posting existed."
- **type:** `Perspective`
- **audience:** `Hiring & Management`
- **publishedAt:** `2026-06-10` (places it at the top of the index, ahead of the current most-recent 2026-06-01 entry)
- **body:** 13 paragraphs, exact copy as provided, with the closing References paragraph included as the final body entry (consistent with the existing "Canaries in the Coal Mine" article that ends the same way)

## What renders automatically

- **Card on `/what-were-seeing`** — sorted by `publishedAt` desc, so the new card appears first. Tags, title, dek, and "Read" link all derive from the data.
- **Full article page at `/what-were-seeing/internship-is-the-new-entry-point`** — `WhatWereSeeingArticle.tsx` resolves the slug from the URL, renders the navy header with the two tags (`Perspective` | `Hiring & Management`), the title, the dek, the formatted date ("June 10, 2026"), and "proHIRE resources" as the byline.
- **"More for Hiring & Management"** — the article page already filters by matching audience and shows up to three sibling articles; this will populate from the existing Hiring & Management entries.
- **"Start a conversation" CTA band** — already mounted at the bottom of every article page via `<CTABand />`.

## Out of scope

No new components, routes, styles, or sitemap changes. The sitemap generator (`scripts/generate-sitemap.ts`) already iterates the articles array, so the new URL is picked up automatically on the next build.
