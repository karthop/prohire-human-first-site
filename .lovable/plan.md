## What we're building

A new pillar — **People & Organization Advisory** — that absorbs the existing Hiring & Workforce Strategy work and expands proHIRE into HR leadership advisory, function build-out, workforce planning, and CHRO-level execution support. One long page, richer structure, five pillars total.

## Pillar name and placement

- **Name (nav label):** People & Organization Advisory
- **URL:** `/services/people-and-organization-advisory`
- **Order (five pillars):** Executive Search & Leadership Advisory → **People & Organization Advisory** → Revenue & Operational Acceleration → Career Advisory → The First Move
- **Old URL:** `/services/talent-solutions` → 301-style client-side redirect to the new URL (preserves inbound links and search equity)

## Page structure (single scroll, no sub-pages)

```text
1. Hero + subhead
2. Framing: three situations we're built for
   - Build the function
   - Strengthen the function
   - Transform the function
3. Four signature offers (flagships)
   - CHRO Transition & 100-Day Partnership
   - HR Function Diagnostic & Roadmap
   - Fractional & Interim HR Leadership
   - Workforce & Organization Planning
4. Sized for your stage
   - Startup (<100)      → Flagship: People Foundation Build
   - Growth (100-500)    → Flagship: New HR Leader Launch
   - Mid-market (500-2,500) → Flagship: Strategic Workforce Planning
   - Enterprise (2,500+) → Flagship: Confidential leadership & interim
5. What the practice covers (eight capability areas grouped as supporting lines,
   not top-level pitches):
   HR Function Strategy & Operating Model · Office of the CHRO ·
   Fractional & Interim HR Leadership · Workforce Planning & Org Design ·
   Leadership, Performance & Succession · Compensation & People Analytics ·
   HR Technology, Process & Responsible AI · Change, Integration & Special Situations
6. How we deliver: senior-led, specialist-supported
   (Chris owns diagnosis, judgment, accountability; curated specialist bench executes)
7. Engagement models
   Diagnostic · Project · Embedded Advisory · Fractional/Interim ·
   Transformation Office · Annual Partnership
8. What we don't do (guardrail section)
   Not a PEO. Not payroll. Not benefits brokerage. Not ERISA fiduciary.
   Not employment-law opinions. Compliance work is readiness and coordination
   with qualified counsel, not legal advice.
9. Situation-based entry points
   ("You just hired a new CHRO", "Your HR team is buried in execution",
   "You are restructuring or acquiring", "You need senior HR leadership
   but not yet a permanent hire", etc.)
10. FAQ
11. CTA — mailto:cbetz@prohireresources.com
```

Tone matches the Approach page: direct, plain, accountable. No em dashes. No PEO/outsourcing/"empowering people teams" language.

## Companion article (launched with the page)

New article on **What We're Seeing**, published same release:

- **Title:** "The new CHRO's first 90 days is a resourcing problem, not a strategy problem."
- **Type tag:** Perspective
- **Audience tags:** Executive Leadership; HR & Talent
- Cross-linked from the new pillar page's CHRO Transition flagship section.

## Sitewide updates

- **Navigation:** `Navbar.tsx` Services dropdown — replace "Hiring & Workforce Strategy" with "People & Organization Advisory" in the same slot.
- **Homepage:** `PillarGrid.tsx` — replace the Hiring & Workforce card with the new pillar card, same slot. Rewrite the card blurb.
- **Services index:** `Services.tsx` — replace the corresponding pillar card and description.
- **Footer:** `Footer.tsx` — update the Services list entry.
- **About page:** correct the practice count so it reads five (currently references four in places). Only this count/description text; no other About changes.
- **Cross-links on other service pages:**
  - `ExecutiveSearch.tsx` — add one line: "Placing a CHRO? Ask about the CHRO Transition & 100-Day Partnership." linking to the new pillar.
  - `CareerAdvisory.tsx` — add outplacement/transition cross-reference into the new pillar's Change & Special Situations area.
  - `GrowthAcceleration.tsx`, `TheFirstMove.tsx` — light cross-link in the "related practices" area if present.
- **Redirect:** keep the `/services/talent-solutions` route registered in `App.tsx` and render `<Navigate to="/services/people-and-organization-advisory" replace />` so inbound links and any old search results still land correctly.
- **Sitemap:** update `public/sitemap.xml` and `scripts/generate-sitemap.ts` — remove `/services/talent-solutions`, add `/services/people-and-organization-advisory`, add the new article slug.
- **SEO / metadata on the new page:**
  - Title: `People & Organization Advisory | proHIRE resources`
  - Meta description: "Execution partner for CHROs, Heads of People, and founders. HR leadership advisory, people function build-out, and workforce strategy, scaled from startup to enterprise."
  - Target phrases woven naturally: new CHRO first 90 days, fractional CHRO, strategic workforce planning, HR function diagnostic, interim HR leadership, HR partner for startups.
  - JSON-LD Service schema matching existing pillar pages.

## Files touched

**New**
- `src/pages/services/PeopleAndOrganizationAdvisory.tsx` (built from `TalentSolutions.tsx` as starting scaffold, then rewritten to the structure above)
- New article entry in `src/content/articles.ts` for the CHRO first-90-days piece

**Modified**
- `src/App.tsx` (add new route; convert old route to `<Navigate>`)
- `src/components/Navbar.tsx`
- `src/components/PillarGrid.tsx`
- `src/pages/Services.tsx`
- `src/components/Footer.tsx`
- `src/pages/About.tsx` (practice count/description only)
- `src/pages/services/ExecutiveSearch.tsx` (single cross-link line)
- `src/pages/services/CareerAdvisory.tsx` (single cross-link line)
- `src/pages/services/GrowthAcceleration.tsx` (light related-practices update if applicable)
- `src/pages/services/TheFirstMove.tsx` (light related-practices update if applicable)
- `public/sitemap.xml`
- `scripts/generate-sitemap.ts`

**Removed**
- `src/pages/services/TalentSolutions.tsx` (content absorbed into the new pillar; route stays as a redirect)

## What is explicitly not changing

- No backend, no forms, no email services, no notifications. All CTAs remain `mailto:cbetz@prohireresources.com`.
- Email and phone number stay hidden — mailto only.
- LinkedIn icon in footer only. No new social links.
- No em dashes anywhere in new copy.
- No pricing on the page. Engagement models named, no numbers.
- The other four pillars (Executive Search, Revenue & Operational Acceleration, Career Advisory, The First Move) keep their existing content — only the small cross-link lines noted above are added.
- Older `/employers` or `/areas`-style legacy pages are out of scope for this change unless we discover a stale one directly linked from updated surfaces; anything else stays as-is per your 72-hour-window rule.
