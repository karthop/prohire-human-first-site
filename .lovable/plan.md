## Add "Off the clock" personal note to About page

Insert a short, warm personal paragraph in `src/pages/About.tsx`, immediately after the founder narrative paragraph that ends with *"people are the strategy. Everything else is execution."* — and before the "Operating principles" section.

### Placement

Inside the existing Founder narrative `<section>`, the new content sits as the final block of the right column (`lg:col-span-8`), visually separated by a thin top border and a small uppercase label so it reads as a distinct coda rather than another body paragraph.

### Markup to add

```tsx
<div className="pt-8 mt-2 border-t border-border">
  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
    Off the clock
  </div>
  <p className="text-foreground font-light text-lg leading-relaxed">
    Chris is a firm believer that the best work happens when you're
    grounded at home. For him, that means time with his two rescues,
    Charli, a girl Catahoula, and Leo, a boy Pit Mix. They're a meaningful part
    of his daily rhythm and a large part of why he has been a long-standing
    supporter of rescue adoption. There's a grit and loyalty in a rescue
    dog that he has always admired, and tried to carry into the work.
  </p>
</div>
```

### Notes

- Uses existing semantic tokens (`text-foreground`, `text-muted-foreground`, `border-border`) — no custom colors.
- Matches typography of surrounding founder narrative (`font-light text-lg leading-relaxed`).
- The "Off the clock" eyebrow mirrors the small uppercase labels used elsewhere on the page ("About", "Founder", "How we work", "Beliefs").
- Image placeholder is **not** added in this pass; once you share the photo we'll add it as a second step (likely a right-aligned image beside this paragraph, or beneath it on mobile).

### Files changed

- `src/pages/About.tsx` — single insertion in the founder narrative right column.