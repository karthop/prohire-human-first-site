
# Motion & Interaction Polish — Executive Consulting Tier

The goal is the kind of motion you feel on Bain, McKinsey, Accenture, and high-end editorial sites: nothing announces itself, but everything responds. No bouncing, no glow pulses, no parallax tilt cards, no scale-on-hover everywhere.

## Principles (the "not cheesy" rules)

- **Slow and short.** Durations 300–700ms, easing `cubic-bezier(0.22, 1, 0.36, 1)` (editorial ease-out).
- **Move 8–24px max.** Never large translates. No rotations except chevrons.
- **Opacity does most of the work.** Fades > slides > scales.
- **One motion per element.** Never combine scale + lift + glow.
- **Respect `prefers-reduced-motion`.** Every effect must disable cleanly.
- **Hover = subtle feedback only.** Color shift, underline grow, arrow nudge — never card lift + scale + shadow.

## What gets added

### 1. Section-level scroll reveals (already partly wired)
Audit `useScrollAnimation` + `ScrollReveal` and standardize across Home, Services, About, Industries, Approach. Use the `lift` variant only on hero/section headers; everything else uses `fade`. Stagger child items 60–80ms (currently 100ms — slightly snappier).

### 2. Editorial hero treatments
- **Slow image drift** on `EditorialHero`: hero image scales from 1.0 → 1.04 over 12s, infinite, paused on hover. Replaces nothing — purely ambient.
- **Word-by-word headline reveal** on first paint (h1 split into spans, each fades + rises 8px with 40ms stagger). One-time, only on hero.

### 3. Link & button micro-interactions
- **Arrow nudge:** any `Link` with a trailing `ArrowRight` translates the arrow `+4px` on hover (200ms). Already used ad-hoc — make it a utility class `.link-arrow`.
- **Underline grow:** text links use a `.link-underline` (left-origin scaleX 0→1, 300ms). Replaces current ad-hoc `border-b`.
- **Magnetic primary CTA:** the main "Contact" / "Request consultation" buttons gently translate toward the cursor when it's within ~80px (max 6px offset). Lightweight pointer-move handler, disabled on touch and reduced-motion. Used sparingly — hero CTA + CTABand only.

### 4. Card & pillar interactions
- `PillarGrid` cards: on hover, the **rule line** above the title grows from 24px → 64px (300ms), title color shifts to `accent`. No translate, no shadow, no scale.
- `FeaturedCases`: image gets a slow 1.0 → 1.03 zoom on hover (700ms). Caption fades up 4px.

### 5. Navigation polish
- Nav background opacity ramps `0.85 → 1.0` and a hairline border fades in as `scrolled` flips (already partial — refine timing to 250ms).
- Active link gets a 2px underline that animates between items using a shared `layoutId`-style indicator (CSS-only via `::after` + transform; no Framer needed).
- Mobile menu: replace instant toggle with fade + 8px slide (200ms).

### 6. Page transitions
Wrap `<Routes>` in a lightweight `PageTransition` component: outgoing page fades out (150ms), incoming fades + rises 12px (300ms). Pure CSS keyed off `location.pathname`. No libraries.

### 7. Cursor signal (optional, tasteful)
A small **custom cursor accent** — only a 6px dot that trails the cursor with ~120ms lag, and grows to a 32px ring when hovering links/buttons. Desktop only, hidden on touch, hidden under reduced-motion. This is the only "showy" element and is opt-in via a `<MotionAccents />` mount in `App.tsx`. If you'd rather skip it, we drop it — see questions.

### 8. Numbers & proof bar
`ProofBar` / `StatCounter`: numbers count up from 0 to target over 1.2s when scrolled into view, once. Already partially built — verify it fires and respects reduced-motion.

### 9. Image reveals
Any large editorial image (hero, case studies, founder portrait) uses a **clip-path reveal**: `inset(0 100% 0 0)` → `inset(0 0 0 0)` over 900ms when entering viewport. Feels like Korn Ferry / Accenture.

## What we are NOT doing

- No parallax backgrounds (already removed, stays removed).
- No tilt-on-mouse 3D cards.
- No glow / pulse / ripple buttons.
- No scroll-jacked sections or locked scrolling.
- No bouncy springs.
- No animated gradients.
- No Lottie illustrations.

## Technical details

- New file `src/lib/motion.ts` exporting `easeEditorial = "cubic-bezier(0.22, 1, 0.36, 1)"` and shared durations.
- New utilities in `src/index.css`: `.link-arrow`, `.link-underline`, `.image-reveal`, `.kenburns-slow`.
- New components:
  - `src/components/motion/MagneticButton.tsx`
  - `src/components/motion/PageTransition.tsx`
  - `src/components/motion/SplitHeadline.tsx`
  - `src/components/motion/CursorAccent.tsx` (opt-in)
- Audit and prune `tailwind.config.ts` keyframes: remove `glow-pulse`, `lift-hover`, `parallax-slow`, `hero-float` (none should be used after this pass). Keep `fade-in`, `slide-in`, `scale-in`, `scroll-reveal`, `accordion-*`.
- Update `EditorialHero`, `PillarGrid`, `FeaturedCases`, `FounderIntro`, `CTABand`, `Navigation`, `App.tsx` to consume the new utilities/components.
- All effects gated behind `@media (prefers-reduced-motion: reduce)` → instant/no-op.
- No new dependencies. Pure CSS + small React hooks. (Framer Motion not needed for this fidelity and adds weight.)

## Questions before I build

1. **Custom cursor accent (item 7)** — include it, or skip? It's the most "designed" element; tasteful firms split on it.
2. **Magnetic CTA buttons (item 3)** — apply only to the single primary hero CTA, or to all primary buttons site-wide?
3. **Page transitions (item 6)** — full fade + rise on every route change, or only between top-level sections (Home / Services / About / etc.)?
