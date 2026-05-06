## Goal

Bring eight pages up to the depth, voice, and structural rigor of Bain, McKinsey, BCG, Korn Ferry, and Accenture — while keeping the boutique, founder-led tone. No new dependencies. No design-system changes. Copy and section-structure work only.

## Cross-cutting changes (apply to every page)

- **Voice tightening.** Move from feature-list copy to point-of-view copy: each section opens with a thesis sentence, then evidence. Short paragraphs, declarative, no marketing hedges.
- **Remove all visible dollar amounts** from service pages. Top-tier firms never publish fees; replace with engagement *shapes* (Retainer, Project, Subscription, Performance-linked) and a "Investment is engagement-specific and shared in consultation" line. (Current pages list specific weekly/monthly rates — this undercuts the premium positioning.)
- **Add a consistent "Point of view" pull-quote block** on each service page (one sentence, founder voice, serif).
- **Add a "What we will not do" block** on each service page — three sharp disqualifiers. This is a Bain/McKinsey signature move and reinforces discretion.
- **Add a "Method on this practice" mini-section** that maps the four-phase Approach (Discovery → Design → Execute → Embed) to that specific practice in 1–2 lines each.
- **Add an FAQ block (3–5 questions)** at the bottom of each service page using a simple semantic accordion (no UI lib changes — use native `<details>/<summary>` with our typography). Helps SEO and answers buyer hesitations.

## Page-by-page

### 1. Services (index)
- New intro paragraph explaining the *integration thesis* — most engagements draw on more than one practice; a single-line-on-the-org-chart matrix shows how the four practices combine for the most common client situations (founder scaling, PE value-creation, succession, market entry).
- Add a short "How we're different from a search firm / from a consulting firm / from a fractional marketplace" three-column comparison.

### 2. Executive Search
- Expand the lead with a thesis paragraph on why retained search is failing the market (commodified sourcing, missed scope, weak diligence) and what we replace it with.
- Add **"Search disciplines"** section: Scope architecture, Named-target sourcing, 360° referencing, Stakeholder choreography, Onboarding accountability — one paragraph each.
- Add **"Roles we lead on"** as a clean two-column list (CEO, CFO, COO, CRO, CTO, CHRO, GC, Board Director, Advisor).
- Replace the bracketed quotes with one anonymized case narrative ("Series C FinTech, fractional CRO, $5M→$50M ARR") in 4–5 sentences — story arc not testimonial.
- Add FAQ: search timeline, off-limits policy, replacement guarantee, fractional-vs-full-time decision.

### 3. Talent Solutions
- Reframe lead around *workforce architecture*, not "hiring": we build the function, not just fill the seat.
- New section **"Functions we build"** — Finance & Accounting, Technology & Product, Operations & Supply Chain, People & HR.
- New section **"Engagement modes"** — Direct hire / Embedded RPO / Project squad / Onboarding system. Words only, no fees.
- Add FAQ: difference vs. agency, scope of RPO, who owns the offer, data and IP handling.

### 4. Growth Acceleration
- Reframe as *Revenue & Operating Acceleration* with a thesis: the gap between strategy and execution is staffed wrong; we close it with senior operators on shorter time horizons.
- Add **"Plays we run"** section — 4 named plays: Enterprise Account Penetration, Channel & Partnership Build, GTM Re-architecture, Operating Cadence Install. Each gets one paragraph.
- Add a 30/60/90-day expectation block — what changes by week 4, week 8, week 12.
- Replace dollar tiers with named partnership shapes (Foundation, Growth, Enterprise) and 1-line scope, no prices.
- Add FAQ.

### 5. Career Advisory
- Currently the thinnest page. Expand significantly.
- New thesis lead: senior careers compound — the wrong move costs a decade.
- New section **"Who we advise"** — sitting CXOs, board candidates, exit-stage founders, transitioning operators (one paragraph each, including how the work differs).
- New section **"How an engagement runs"** — six-week structure: Audit → Positioning → Targeting → Activation → Interview & Negotiation → Onboarding.
- New section **"Discretion"** — explicit confidentiality stance, no public testimonials, NDA-backed.
- Add FAQ: cost structure (engagement-specific), time commitment, outplacement vs. advisory difference, board readiness timeline.

### 6. Approach
- Keep four phases but expand each phase from one sentence to a short paragraph + a "What you get" deliverable line + a "What we don't do" line.
- Add a new section **"Pricing philosophy"** — three principles: transparency, modularity, shared accountability. No numbers.
- Add **"Working with us"** — engagement cadence: weekly working session, written milestone notes, one steering check-in monthly.
- Strengthen network section with one-paragraph descriptions of each affiliation and what doors they open.

### 7. Insights
- Replace placeholder articles with a **proper editorial structure**: 6 long-form pieces with real titles, dek, 3-paragraph excerpts, and a "Read time / Date" line. Topics:
  1. *The end of keyword search.* Why retained search needs to re-earn its premium.
  2. *Fractional, full-time, or none of the above.* A decision framework for founders.
  3. *Onboarding is the search.* Why the first 90 days decide the placement.
  4. *Scope before sourcing.* The most common reason searches fail.
  5. *Hiring through a capital event.* What changes when the cap table changes.
  6. *Career capital.* Why senior moves should be made years before they're needed.
- Add a featured-piece treatment at the top, then a clean grid.
- Add filters that actually map to content categories (Search, Talent, Growth, Career, Operator notes).
- Each card links to `#` for now (full article pages out of scope this round) — agree we'll author full posts in a follow-up.

### 8. About
- Hero lead: tighten to one sentence + one paragraph.
- Replace founder narrative with a longer first-person essay (4–5 paragraphs) — written voice, not bio voice. Already strong, just lengthen.
- Add **"Founders we've worked alongside"** — anonymized one-line situation cards (e.g., "Series C fintech CEO, succession planning during refinance"). 6 cards.
- Keep career chapters but add a one-line "What I learned" closing italic line under each.
- Add a **"Why boutique"** section — three short paragraphs on partner attention, no leverage model, no junior staffing.
- Strengthen affiliations section with what each network produces for clients.
- Founder photo — placeholder slot left in the homepage `FounderIntro` and About hero, ready to swap when uploaded.

## Out of scope (call out)

- New article detail pages — Insights cards will not be clickable yet; a follow-up round can author full posts.
- Visual/design-system changes — covered separately.
- Pricing pages or fee disclosure.

## Files touched

- `src/pages/Services.tsx`
- `src/pages/services/ExecutiveSearch.tsx`
- `src/pages/services/TalentSolutions.tsx`
- `src/pages/services/GrowthAcceleration.tsx`
- `src/pages/services/CareerAdvisory.tsx`
- `src/pages/Approach.tsx`
- `src/pages/Insights.tsx`
- `src/pages/About.tsx`
- `src/sections/ServiceTemplate.tsx` (extend with optional `pointOfView`, `wontDo`, `methodMap`, `faq` props)
- A new `src/components/FaqList.tsx` for accessible accordion using native `<details>`.