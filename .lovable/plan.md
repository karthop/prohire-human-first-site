
# proHIRE Resources — Executive Consulting Redesign

A ground-up rethink positioning proHIRE as a senior advisory firm — not a recruiting site. The bar is Bain / McKinsey / BCG / Korn Ferry / Accenture polish, adapted to a boutique, founder-led practice.

---

## 1. Strategic Positioning Shift

**Today:** Reads as a recruiting / staffing site with a persona toggle (Employer vs Professional) and tactical service blurbs.

**New positioning:** *Executive talent advisory and growth-acceleration partner for founder-led, PE-backed, and enterprise leadership teams.*

Three pillars (mirroring how Bain/Korn Ferry structure themselves):

1. **Executive Search & Leadership Advisory** — retained search, fractional CXOs, board advisory.
2. **Strategic Talent & Workforce Solutions** — RPO, niche tech & finance hiring, onboarding systems.
3. **Growth Acceleration** — fractional BD, operational infrastructure, partnership development (the Strategic Business Operations offering from your PDF).

Plus a fourth, smaller pillar: **Career Advisory for Senior Professionals** (the individual-side service from your LinkedIn) — kept present but de-emphasized so the site doesn't feel like a job board.

---

## 2. Information Architecture (new)

```text
/                         Home — executive narrative, not feature grid
/services
  /executive-search       Retained search & fractional CXO
  /talent-solutions       RPO, contract, finance & tech hiring, onboarding
  /growth-acceleration    BD execution, fractional ops, partnerships
  /career-advisory        Senior professional / board-track support
/industries               Tech, FinTech, Healthcare, Supply Chain, Industrial
/approach                 Methodology — "Human-first, AI-enhanced"
/insights                 Thought leadership (kept, redesigned)
/about                    Firm + Chris Betz bio, network, affiliations
/contact                  Executive consultation request (mailto-based, as established)
```

Drop the persona toggle as the primary IA device. It's a B2C pattern; the firms you admire don't use it. Persona-relevant CTAs still live contextually inside Services and Career Advisory.

---

## 3. Visual & Brand Language

Goal: quiet authority, generous whitespace, editorial typography, restrained motion.

- **Type:** Serif display (e.g., *Source Serif*, *Canela*-feel, or *Tiempos Headline* via free alternative *Source Serif Pro*) for headlines; clean grotesque (*Inter* or *Söhne*-feel via *Inter Tight*) for body. Bain/BCG/McKinsey all pair editorial serif headlines with neutral sans body.
- **Palette refinement:** Keep navy authority, but pull back the emerald/teal gradient noise. Move to:
  - Deep navy `#0B1F3A` (primary)
  - Ink black `#0A0A0A` (text)
  - Warm off-white `#F7F5F1` (background — McKinsey/Bain-style cream rather than pure white)
  - Single accent: a refined ember/copper `#B45309`-range OR a single confident blue. Choose one — not both. (Korn Ferry uses one accent; current site uses 3+.)
- **Remove:** Premium gradient buttons, glow shadows, scale-on-hover, hero parallax. These read as SaaS/marketing, not advisory. Replace with subtle 1–2px borders, understated underline-on-hover, and quiet fades.
- **Photography:** Replace stock handshake with editorial-style photography: real boardrooms, candid leadership moments, abstract architectural details. If real photos aren't available now, use restrained abstract imagery (textures, geometry) rather than stock people.
- **Logo strip:** Keep, but greyscale, evenly spaced, captioned "Leaders we've partnered with" — Bain/BCG style.

---

## 4. Page-by-Page Redesign

### Home
- **Hero:** Editorial headline, left-aligned, no gradient. Example: *"Leadership talent and growth infrastructure for companies scaling with intent."* Sub: one line on human-first + AI. Two restrained CTAs: "Explore our work" / "Request a consultation."
- **Proof bar:** quiet stats — *20 yrs · $15M–$150B client revenue range · Fortune 500 to Series A · Atlanta-based, national reach*.
- **Three-pillar block:** Executive Search · Talent Solutions · Growth Acceleration. Each a card with one paragraph and "Learn more →" — no icons-in-circles.
- **Featured insight / case:** One large editorial card pulling from your PDF success stories ("Series B AI Platform: $1.2M qualified pipeline in 60 days"). This is the signature McKinsey/BCG move.
- **Approach teaser:** "Human-first. AI-enhanced. Outcome-accountable."
- **Founder section:** Chris Betz — short bio, photo, board/affiliation marks (Inspiredu, FinTech Atlanta, C-Level Advisory, The Curated Network).
- **CTA band:** "Schedule an executive consultation."

### Services (4 sub-pages)
Each follows a consistent template:
1. One-sentence positioning
2. Who it's for (stage/size/situation)
3. What's included (capability list, not feature bullets)
4. Engagement models & investment (pulled from your PDFs — keep the transparent pricing; it's a differentiator)
5. Representative outcomes (1–2 quoted case stories)
6. CTA

Investment ranges from your PDFs are a **strength** — most consulting sites hide pricing. Keep them, framed as "Investment models" not "Pricing."

### Industries
Six tiles: Technology · FinTech · Healthcare / MedTech · Supply Chain & Logistics · Industrial / Energy · Professional Services. Each links to a short page with stage focus and 1–2 wins.

### Approach
The methodology page — this is where Korn Ferry and Bain build credibility. Sections:
- The proHIRE method (Discovery → Design → Execute → Embed)
- Human-first principles
- AI augmentation (responsible use, what we automate vs. what stays human)
- Network: The Curated Network, C-Level Advisory, Inspiredu, FinTech Atlanta

### Insights
Editorial grid, large typography, category filters (Leadership, Talent Markets, Growth, AI in Hiring). Even with few articles today, the layout signals seriousness.

### About
Firm story + Chris's bio expanded from LinkedIn (Amazon, Pyramid, Stellar EVP, 20 years across Randstad/Kelly/Quest). Affiliations as logo row. Values. Locations / reach.

### Contact
"Request an executive consultation" — single column, generous whitespace, 4 fields (name, company, role, brief context). Continues to use the established mailto pattern (no backend). Add a calendar booking link if you have one.

---

## 5. Codebase Work (technical plan)

Most of this is *redesign at the design-system level* so individual pages get the polish for free.

1. **Design tokens (`src/index.css` + `tailwind.config.ts`)**
   - Replace gradient/glow/scale tokens with editorial tokens (cream bg, navy, single accent, restrained shadows).
   - Add serif display font family + Inter via `<link>` in `index.html`.
2. **Button & Card variants**
   - Slim down `button.tsx` variants: keep `default`, `outline`, `ghost`, `link`. Remove `premium`, `hero`, `interactive`, `emerald`, `teal`. Replace with one `accent` variant.
   - Card: add an `editorial` variant (no shadow, hairline border, generous padding).
3. **Navigation**
   - Replace persona icons with a clean text nav: Services (dropdown to 4 sub-services) · Industries · Approach · Insights · About · Contact.
   - Sticky, thin, off-white background, hairline bottom border. Drop the scroll-shrink animation.
4. **New section components** in `src/sections/`:
   - `EditorialHero.tsx`, `PillarGrid.tsx`, `FeaturedCase.tsx`, `FounderIntro.tsx`, `ApproachStrip.tsx`, `CTABand.tsx`, `ServiceTemplate.tsx`, `IndustryGrid.tsx`.
5. **Routing (`src/App.tsx`)**
   - Add nested `/services/*` routes and `/industries`, `/approach`. Keep existing routes redirecting where appropriate (`/employers` → `/services/talent-solutions`, `/professionals` → `/services/career-advisory`).
6. **Remove / retire**
   - `PersonaSelector`, `PersonaToggle` from primary nav (keep context internally if useful for CTA copy).
   - Heavy parallax + staggered scroll animations on Home; replace with single subtle fade-in.
   - Unused gradient utilities once buttons are simplified.
7. **Content**
   - Port your three PDFs (Strategic Ops, Finance/Accounting, Onboarding) into structured page content with consistent investment-model blocks.
   - Pull 4–6 quoted case stories from the PDFs into a reusable `<CaseQuote />` component.
8. **Performance & polish**
   - Replace the hero image with a properly sized, art-directed asset (or abstract placeholder until photography is sourced).
   - Audit and remove unused shadcn components from `src/components/ui` that aren't referenced.
   - Add proper SEO per page via the existing `Seo` component (titles, descriptions, OG images).
9. **Accessibility**
   - Audit color contrast against the new palette.
   - Ensure focus rings on the simplified buttons remain visible on cream background.

---

## 6. What Stays vs. Goes

**Keep:** Mailto-based contact pattern (per your direction), `Insights` route, `Seo` component, `ThemeToggle` (consider removing dark mode for v1 — none of your reference firms offer it; revisit later), Logo, footer structure.

**Retire:** Persona toggle as primary IA, gradient/glow button variants, parallax hero, scale-on-hover, the persona-conditional homepage CTA logic, `Index.tsx` if redundant with `Home.tsx`.

---

## 7. Phased Delivery

I recommend two implementation passes so you can react between them:

- **Phase A — Foundation (single build):** New design tokens, typography, simplified button/card system, redesigned Navigation + Footer, new Home, new About, new Contact. Existing service pages temporarily restyled to inherit the new system.
- **Phase B — Depth:** Build out `/services/*` (4 pages), `/industries`, `/approach`, redesigned `/insights` grid, case-study component, founder section with affiliations, route redirects.

Phase A alone will already give the site the polish you're after; Phase B brings the structural depth that matches the reference firms.

---

## 8. Open Questions Before We Build

I'll ask these as a quick multi-choice round once you approve the direction, but flagging now:

1. **Accent color** — single confident blue (Accenture/Bain-leaning) vs. warm copper/ember (more distinctive, boutique-feel) vs. keep navy-only with no accent (most McKinsey-like).
2. **Dark mode** — keep or remove for v1? (Recommend remove.)
3. **Persona toggle** — fully retire, or keep as a contextual helper inside Services pages only?
4. **Photography** — do you have any real photos (you, team, clients with permission), or should we go abstract/editorial textures until you commission a shoot?

Approve the plan and I'll proceed with Phase A and confirm the four questions above before writing code.
