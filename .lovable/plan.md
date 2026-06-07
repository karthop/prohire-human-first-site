## What this does, in plain terms

Right now your site has two separate content sections that confuse the reader: Field Notes (research-backed pieces) and Insights (operator-voice pieces). This consolidates both into one place called **What We're Seeing**, accessible from a single nav item. Every existing article moves over, nothing is rewritten or lost. Each article picks up two small tags: one telling the reader what kind of piece it is, one telling them who it's written for. Readers can filter by either, or just scroll the whole feed.

## Navigation change

In `src/components/Navigation.tsx` and `src/components/Footer.tsx`:
- Remove the two separate links: "Insights" and "Field Notes."
- Replace with one link: **What We're Seeing** pointing to `/what-were-seeing`.

In `src/App.tsx`:
- Add a route `/what-were-seeing` rendering a new `WhatWereSeeing` page.
- Keep old `/insights` and `/field-notes` routes as redirects to `/what-were-seeing` so any existing inbound links still work.

## The new page

New file `src/pages/WhatWereSeeing.tsx` (the existing FieldNotes.tsx and Insights.tsx files get deleted once the merge is in place).

**Hero / opening:**
- Eyebrow: "What We're Seeing"
- Headline: "Thinking on talent, leadership, and the work of building great organizations."
- Sub-line (one sentence, restrained): "Grounded observations on hiring, executive search, and leadership from a firm actively doing the work."

That's it for framing. No further explanation.

**Article feed:**
- Single unified list of all 13 articles (7 from Field Notes, 6 from Insights).
- Each card shows: title, dek, two small tag pills (content type + audience), and an expand-to-read interaction matching the existing Field Notes/Insights collapsible pattern.
- No read-time labels. No publish dates surfaced as primary metadata (the dates on Insights pieces can stay in the data but won't be displayed prominently, to match how Field Notes already behaves).

**Filter row (above the feed):**
- Two filter groups, both optional, both default to "All":
  - **Type:** All · Analysis · Perspective
  - **Audience:** All · Executive Leadership · HR & Talent · Hiring & Management
- Filters combine (AND). Default state shows every article.
- Visual style matches the existing pill-filter pattern already used on Insights/Field Notes so nothing feels new.

## Tag assignments

Content-type tag: **Analysis** = research/data-backed (current Field Notes pieces). **Perspective** = first-person operator voice (current Insights pieces).

Audience tag is assigned per piece based on who the article actually speaks to:

| Article | Type | Audience |
|---|---|---|
| The CFO seat won't stay filled | Analysis | Executive Leadership |
| AI didn't replace the recruiter | Analysis | HR & Talent |
| Fractional is no longer a bridge | Analysis | Executive Leadership |
| The return-to-office fight is over | Analysis | HR & Talent |
| Why the next search you run should not go to a brand-name firm | Analysis | Executive Leadership |
| Hiring a senior leader in 2026 takes 94 days | Analysis | Hiring & Management |
| Statement of work is the engagement model nobody is asking for | Analysis | Executive Leadership |
| The end of keyword search | Perspective | Executive Leadership |
| Fractional, full-time, or none of the above | Perspective | Executive Leadership |
| Onboarding is the search | Perspective | Hiring & Management |
| Scope before sourcing | Perspective | Hiring & Management |
| Hiring through a capital event | Perspective | Executive Leadership |
| Career capital | Perspective | Executive Leadership |

## Data model

A single `articles` array in `WhatWereSeeing.tsx` with this shape:

```
{ id, title, dek, body: string[], type: 'Analysis' | 'Perspective',
  audience: 'Executive Leadership' | 'HR & Talent' | 'Hiring & Management' }
```

The old `category` and `readTime` fields are dropped from the displayed UI. Body content is copied over verbatim from both source files. No copy is rewritten.

## Punctuation pass

Everything new gets a final em-dash and en-dash scrub per the existing project rule. No em dashes, no en dashes anywhere in the new page or the nav/footer label.

## Memory update

Update `mem://index.md` core rules to replace the two-section model with the single hub, so future work doesn't accidentally re-split the content.

## Out of scope

- No rewriting of any article body.
- No design system, color, or typography changes.
- No changes to other pages.
