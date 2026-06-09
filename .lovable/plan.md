## What changes

Rebuild `src/components/BackToTop.tsx` so it visually matches the Reece chat widget exactly, just mirrored to the opposite corner with an upward chevron inside.

## Steps

1. Overwrite `src/components/BackToTop.tsx`.
2. Match Reece's launcher classes 1:1, only swapping `right-6` → `left-6`:
   - `fixed z-50 bottom-6 left-6 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl`
   - Same hover/focus treatment as Reece's button
3. Icon: lucide `ChevronUp` (soft, editorial feel), centered, sized to match Reece's icon weight.
4. Visibility:
   - Hidden by default (`opacity-0 pointer-events-none`)
   - Fades to `opacity-100 pointer-events-auto` when `window.scrollY > 300`
   - Fades back out below the threshold
   - Smooth opacity transition; respect `prefers-reduced-motion` on the scroll itself
5. Click → `window.scrollTo({ top: 0, behavior: 'smooth' })` (or `'auto'` if reduced motion).
6. `aria-label="Back to top"`.
7. Keep the existing `<BackToTop />` mount in `src/App.tsx`. No other files touched.

## Verification

Reload preview, scroll past 300px, confirm a navy circle identical in size/shape/shadow to Reece appears in the bottom-left with a chevron-up inside, click it, confirm smooth scroll to top and fade-out.

## Out of scope

No edits to Reece, navigation, footer, routes, or any page content.