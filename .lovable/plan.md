## What changes

### 1. Hide all phone/email displays
- **Footer**: remove the "info@prohireresources.com · 678.697.2833" line. Replace with a single "Contact" link to `/contact`.
- **Contact page**: remove the visible email and phone number. Replace with copy like "Use the form — we respond within one business day."
- **Mailto behind the scenes**: keep the existing form's mailto handoff, but route it to `cbetz@prohireresources.com` (was `info@`). The address is never displayed; it only opens in the visitor's email app on submit.
- Update every other `mailto:info@…` in the codebase (Employers, Professionals, Contact) to `mailto:cbetz@…`.

### 2. LinkedIn icon in footer
- Replace the text "LinkedIn" link with a LinkedIn glyph icon (lucide `Linkedin`), pointing to `https://www.linkedin.com/in/betzchris/`. Accessible label preserved via `aria-label`.

### 3. Founder photo
- Add a new `Founder` photo to:
  - **Homepage `FounderIntro`** section (left column, replacing the plain text-only block with a portrait + name layout).
  - **About page** hero area.
- Photo isn't attached yet — once uploaded, drop it in `src/assets/chris-betz.jpg` and wire it in. If not uploaded by implementation time, leave a placeholder slot that's easy to swap.

### 4. Mobile body-text contrast
Tune the design tokens in `src/index.css` so text reads cleanly on phones without changing the look:
- Darken body ink on cream backgrounds (`--foreground` from `220 35% 8%` → `220 40% 5%`; `--muted-foreground` from `220 12% 38%` → `220 15% 28%`).
- Brighten body text on navy/dark sections (use a near-pure cream for `--primary-foreground` and any "on-dark" body text; bump opacity on muted text over dark backgrounds from ~70% to ~85%).
- Slight mobile-only base size bump: `html { font-size: 17px }` under `@media (max-width: 640px)` for body, headings unaffected.
- Strengthen weight of long-form body copy on mobile from 300 (font-light) → 400 in the few sections that currently use `font-light` for paragraphs.

### 5. Memory updates
- Update the contact-method memory: receiving address is now `cbetz@prohireresources.com`; email/phone must never be displayed publicly.
- Update social-links memory: LinkedIn is rendered as an icon (not text) in the footer, URL `linkedin.com/in/betzchris/`.

## Technical notes
- Files touched: `src/index.css`, `src/components/Footer.tsx`, `src/pages/Contact.tsx`, `src/pages/Employers.tsx`, `src/pages/Professionals.tsx`, `src/sections/FounderIntro.tsx`, `src/pages/About.tsx`, plus a new image asset.
- No backend, no email service — strictly mailto + form, per existing constraint.
- No database changes.

## Open item
Please attach your headshot in your next message (or after approving this plan) so it can be placed on the homepage and About page. Everything else can ship without it.