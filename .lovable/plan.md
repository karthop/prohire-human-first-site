
## What I reviewed

- **Services:** Executive Search & Leadership Advisory, Hiring & Workforce Strategy, Revenue & Operational Acceleration, Career Advisory.
- **Industries:** Tech/SaaS, FinTech, Healthcare/MedTech, Supply Chain, Industrial/Energy, Professional Services.
- **Client shape:** Founders, boards, PE-backed CEOs, VPs of HR, senior operators — Series A through PE-backed mid-market.
- **Voice:** Plain-spoken, senior, consultative, restraint over decoration. Cream background, serif headings, editorial layout with hairline borders and grid dividers.

An `Insights` page already exists with a similar pattern. The new page will be a separate, more practical destination focused on what's happening right now in the market, distinct from the more essay-style Insights archive.

## Page name — three options

1. **Field Notes** — operator-grade, observational, boutique-advisor feel. Distinct from "Insights."
2. **The Brief** — short, consultative, sounds like something a VP of HR would actually open.
3. **Signal** — current, market-aware, suggests filtering noise from what matters.

**Recommended: Field Notes.** It matches the senior, plain-spoken brand voice better than the others, signals firsthand observation rather than thought-leadership posturing, and pairs naturally with the existing "The Work Behind the Hire" tone on Insights without duplicating it.

Route: `/field-notes`. Add to primary nav between **Insights** and **About** (or replace if you prefer — flag this in feedback).

## The four articles (topics + angle)

Each is grounded in real, current (2025–2026) industry data I will pull during build via web research. Each speaks directly to a VP of HR / founder / PE operator. No filler, no recycled LinkedIn-style content.

1. **"The CFO seat won't stay filled."**
   Record CFO turnover (Russell Reynolds / Crist Kolder data shows Fortune 500 CFO tenure at multi-year lows, ~50% leaving inside 3 years). What's actually driving it, why internal benches are thin, and what changes about scoping the search.

2. **"AI didn't replace the recruiter. It replaced the shortlist."**
   What generative AI has actually changed in senior hiring through 2025–2026 — sourcing collapse, candidate-side AI in interviews, the new failure modes (synthetic candidates, AI-written assessments), and what the human work now has to be.

3. **"Fractional is no longer a bridge."**
   The fractional executive market has crossed from stopgap to permanent fixture, especially for CMO, CFO, and Chief People roles. Real data on adoption, the engagement patterns that actually work, and the three situations where fractional is the wrong call.

4. **"The return-to-office fight is over. The retention fight isn't."**
   Where RTO mandates actually landed in 2025, what the data says about senior-level attrition tied to them, and the more uncomfortable question for VPs of HR: which of your leaders are quietly interviewing because of how the mandate was rolled out, not the mandate itself.

Research sources I'll draw from during build: Russell Reynolds Global Leadership Monitor, Crist Kolder Volatility Report, Heidrick CEO/CFO turnover reports, Korn Ferry Workforce 2025, BCG / McKinsey talent reports, BLS JOLTS, Gartner HR research, SHRM, Bain fractional executive studies. Every statistic cited will be attributable to a named, recent source.

## Article card behavior

Each article renders as a card matching the existing `Insights` grid (hairline border dividers, serif title, category eyebrow, short dek, excerpt). Clicking "Read full piece" expands the card inline using the existing `Collapsible` primitive — no separate detail route needed, no page reload, keeps the editorial feel. No publish dates anywhere.

## Visual & structural design

- Same hero treatment as `Insights` / `Services` / `Industries`: dark primary band, eyebrow, serif H1, light supporting paragraph.
- Category filter row matching `Insights` (categories: *Search*, *Talent*, *Fractional*, *Workplace*).
- Two-column grid of expandable article cards on the cream background using the same `bg-border` 1px-gap grid pattern.
- Closes with the shared `CTABand`.
- All colors and type via existing semantic tokens — no new design tokens needed.

## Technical implementation

- New file: `src/pages/FieldNotes.tsx` (mirrors `Insights.tsx` patterns, uses `Seo`, `CTABand`, `Collapsible`).
- Article content stored in-file as a typed array (same shape as Insights), with full `body` paragraphs in addition to `excerpt`.
- Route added in `src/App.tsx`: `/field-notes` lazy-loaded with `PageTransition`.
- Nav link added in `src/components/Navigation.tsx` primary array.
- SEO: title "Field Notes | proHIRE resources", concise description, evergreen (no dates in markup or JSON-LD).
- No backend, no schema changes, no new dependencies.

## Open questions before I build

- Keep both **Insights** and **Field Notes** in the nav, or replace Insights with Field Notes?
- Approve the name **Field Notes**, or prefer **The Brief** / **Signal**?

If you want me to proceed with Field Notes added alongside Insights and the four articles above, just say go.
