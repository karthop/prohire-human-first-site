# Editorial Audit: Findings Only

No files will be edited until you approve. Below is the page-by-page report. Once you say go, I'll fix everything flagged in a single pass.

## Sitewide patterns (worst offenders first)

1. **Broken " , " artifacts (em dashes stripped and left as space-comma-space).** ~30 instances. These read as typos everywhere they appear.
   - ExecutiveSearch: 3 · CareerAdvisory: 9 · GrowthAcceleration: 9 (highest density) · About: 7
2. **Literal em dashes (—) still in the copy despite the no-em-dashes rule.** 7 places:
   - ExecutiveSearch.tsx L47, L65 (JSX dividers around a link)
   - GrowthAcceleration.tsx L78, L80 (engagement descriptions)
   - PeopleAndOrganizationAdvisory.tsx L279 (attribution)
   - TheFirstMove.tsx L43 (wontDo)
   - ServiceTemplate.tsx L143 (shared attribution — affects every service page using pointOfView)
3. **Brand quote inconsistency:** "You are more than a keyword search" (About) vs. "You are more than just a keyword search" (Footer). Same signature line, two wordings.
4. **Overused crutch words/phrases:** "senior-led," "named-target/named-account," "written [plan/artifact/milestone]," "re-scope," and the "X is not Y, it's Z" contrast structure reused as the pointOfView on nearly every service page.
5. **Missing mailto:** `cbetz@prohireresources.com` does not appear anywhere in the codebase. Contact page has a form only, no mailto fallback. Flagging for your call.

## Page-by-page

### Home / EditorialHero
- Hero renders only "A to Enterprise" as animated text. Without a visible "Series" prefix, it reads cryptic to a first-time visitor.
- SEO description ("founders, CEOs, and boards who can't afford the wrong hire") is narrower than the actual five-pillar scope; excludes advisory clients and students.

### Services
- Same idea printed twice back-to-back: "Most engagements draw on more than one practice" appears as an h2 and again as the very next body sentence.
- "Explore practice" repeated as CTA on every card — template-flavored.
- Echoes Approach/ExecutiveSearch language verbatim ("senior-led from intake to onboarding").

### Executive Search
- Two literal em dashes (JSX dividers L47/65).
- Three broken " , " artifacts: L105, L124, L141.
- "Senior-led from intake to offer" duplicates Services/Approach wording.

### People & Organization Advisory
- Broken idiom: "Not one-size-fits." (L243) — reads as a mid-edit fragment.
- Duplicate attribution em dash (L279) mirroring the shared ServiceTemplate line.
- "Senior" appears as the load-bearing modifier 4+ times on this page alone.

### Growth Acceleration
- Highest concentration of broken " , " artifacts (9 instances: L14 ×2, L22, L45, L88 ×2, L93 ×2, plus one on L14).
- Two literal em dashes in engagement descriptions (L78, L80).
- Tone drifts more "startup operator" (firepower, motion, bench, playbook) vs. the patrician register on ExecutiveSearch/CareerAdvisory/About.
- "Named-account/named play" repeated 5+ times.

### Career Advisory
- Nine broken " , " artifacts: L16, L38, L44 (×2), L52, L63, L66, L83, L95.
- "Written [artifacts/plan/plan/plan]" used 6+ times on this page.

### The First Move
- Tone drops out of register: "triggers the delete button" is colloquial vs. rest of site.
- One literal em dash (L43 wontDo).
- Thesis, lead, and first capability all say "LinkedIn that gets found" three different ways.
- "Most careers are won or lost before the first interview" mildly overclaims for a pre-professional audience.

### Industries
- Per-industry blurbs are terse enough that they don't clarify *what* proHIRE does for each sector (search only? advisory? both?). Clarity gap, not an error.

### Approach
- The h1 slogan "Human-first. AI-enhanced. Accountable for the outcome." — the first two beats are common industry boilerplate right now; borderline template-sounding.
- This page is the origin of the "senior-led / written / named-target / Discovery → Design → Execute → Embed" phrasing that cascades everywhere. Not a defect here, just the source of the sitewide repetition.

### What We're Seeing (index)
- "Grounded observations on hiring, executive search, and leadership from a firm actively doing the work" appears verbatim as the SEO description and again as the hero body copy on the same page.

### What We're Seeing (article template)
- Clean.

### About
- Seven broken " , " artifacts: L60, L61, L63, L69, L77, L143, L163.
- Signature line "You are more than a keyword search" — Footer says "more than just a keyword search." Pick one canonical wording.

### Contact
- Compliant on display rules (no visible email/phone). But no mailto fallback anywhere. Flagging.

### Privacy / Terms
- Clean. Brand name and email casing correct throughout. Legal-formal register is appropriate for these pages.

### Shared components
- **ServiceTemplate.tsx L143** — literal em dash on the attribution block. Fixing this one line propagates to every service page using non-plain pointOfView.
- **Footer.tsx L19** — brand quote variant mismatch (see About).
- **Navigation.tsx** — clean.

### TrustLayer.tsx (flagged, needs your call)
- Not imported by any audited page. Appears to be dead scaffold.
- If it *is* live somewhere:
  - "Trusted by startups and enterprise teams alike" — textbook boilerplate the brand rules prohibit.
  - "95% of hires onboarded successfully within 45 days" — unsubstantiated, and inconsistent with ProofBar's "30-60 days."
  - Stray leading comma render artifact: `, {author}` at L36.
- **Recommend: delete the file** unless you tell me it's used.

### PillarGrid / FounderIntro
- "The hires that decide the next two years" (PillarGrid) and "the hires, restructures, and revenue moves that decide what the next two years actually look like" (FounderIntro) sit back-to-back on the homepage and repeat the "next two years" framing.

### CTABand
- Default title and default body both say "Tell us what you're working on." Redundant when both defaults render together; most call sites override.

## Decisions I need from you before the edit pass

1. **" , " artifacts:** Replace with the correct punctuation for each context (usually a colon or a period, sometimes just a comma with the leading space removed). Confirm this approach.
2. **Literal em dashes:** Replace with commas, periods, colons, or parentheses depending on the sentence. Confirm.
3. **Hero headline "A to Enterprise":** Leave as-is, or reintroduce a visible "Series" qualifier for clarity? (You explicitly asked for "A to Enterprise" earlier — I'll only touch it if you say so.)
4. **Signature quote canonical form:** "You are more than a keyword search" (About) or "You are more than just a keyword search" (Footer)?
5. **cbetz@prohireresources.com mailto:** Add it to Contact (and/or Footer) as a fallback, or leave the site form-only?
6. **TrustLayer.tsx:** Delete (recommended) or fix in place?
7. **Overused crutch words:** Do a light pass to vary "senior-led," "written," "named-account" where it reads repetitive, or leave the vocabulary as-is?
8. **The First Move tone:** Lift the register on the thesis/lead so it matches the rest of the site, or keep it slightly more approachable for a student/parent audience?

Reply with answers (or "your call on all of them") and I'll execute the full sweep in one pass.
