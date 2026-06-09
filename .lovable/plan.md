# Add a "Back to Top" button

## What this does
A small, unobtrusive button will appear in the bottom-right corner of every page after the user scrolls down past a threshold (400px). When clicked, it smoothly scrolls the page back to the top. The button uses the site's existing design tokens so it looks like it belongs.

## Design
- **Position**: fixed, bottom-right, with margin from viewport edges
- **Size**: 40x40 circular button (subtle, not large or distracting)
- **Color**: deep navy primary background (`--primary`) with cream foreground (`--primary-foreground`), matching the footer
- **Icon**: up arrow from lucide-react (`ArrowUp`)
- **Visibility**: fades in after scrolling > 400px, fades out near the top
- **Interaction**: smooth scroll to top via `window.scrollTo({ top: 0, behavior: 'smooth' })`
- **Motion**: opacity and translateY transition using existing `ease-editorial` easing (cubic-bezier 0.22, 1, 0.36, 1)
- **Accessibility**: `aria-label="Back to top"`, keyboard focusable
- **Reduced motion**: respects `prefers-reduced-motion` by disabling the smooth scroll and transition

## Files changed
1. **Create `src/components/BackToTop.tsx`** — new component with scroll listener, visibility state, and click handler
2. **Edit `src/App.tsx`** — import and render `<BackToTop />` inside the router so it appears on every page

No other design elements, layout, or content will be modified.