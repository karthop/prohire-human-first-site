## Goal

1. Add three new evergreen articles to the Field Notes page, written from a 2026 vantage point, grounded in current research and specific to proHIRE resources' service lines and ideal clients.
2. Remove every em-dash (—) and en-dash (–) from visible copy across the entire site, replacing each with the punctuation that best preserves the sentence (period, comma, colon, parentheses).

## Three new articles

All four existing articles stay as-is (aside from dash removal). Three new entries get appended to the `articles` array in `src/pages/FieldNotes.tsx`.

**Article 5 — "Why the next search you run should not go to a brand-name firm."**
- Category: Search
- Angle: The structural case for boutique executive search in 2026. The large global firms have scaled into a volume model with off-limits constraints that block half their own network, junior associates running the actual search, and standardized scorecards that flatten what makes a senior hire actually work. Boutique firms own the engagement end-to-end with a senior operator, hold a far smaller off-limits list, and earn the role of advisor rather than vendor.
- 2026 grounding: AESC and Hunt Scanlon market data on the continued share shift from global firms to boutique and specialized practices through 2024 and 2025; the off-limits math (a firm that places 800 executives a year at Fortune 1000 companies cannot recruit from any of them for two years); the senior-led delivery question that nearly every search RFP in 2025 started asking; cost-per-placement comparisons that no longer favor the global firms once retainer plus equity-style backend fees are normalized.

**Article 6 — "Hiring a senior leader in 2026 takes 94 days. Most of that is not searching."**
- Category: Talent
- Angle: Time-to-hire data for executive and senior roles has not improved despite AI sourcing. The bottleneck moved. Scope iteration, interview choreography across distributed decision-makers, compensation negotiation in a comp-compressed market, and reference verification (post-synthetic-candidate era) now consume more time than candidate identification ever did. The leaders who shorten the cycle do specific things differently.
- 2026 grounding: LinkedIn and Workable 2025 time-to-hire benchmarks (senior roles trending 80-100+ days); the AI-sourcing-doesn't-fix-time paradox; Gartner data on interview-loop bloat; the rise of "second offer" attrition where a hired exec resigns inside 90 days because comp benchmarking moved during the search.

**Article 7 — "Statement of work is the engagement model nobody is asking for, and most companies need."**
- Category: Fractional
- Angle: Beyond retained search and fractional leadership, an SOW-based engagement (scoped deliverable, fixed fee, defined outcome, time-bound) is increasingly the right shape for one-off senior interventions: a single VP search bundled with onboarding through day 90, a leadership team assessment, a comp framework rebuild, a succession plan for the top two layers. Most firms do not offer it because it caps revenue. proHIRE resources will. This article explains when SOW is the right model and when retained or fractional still wins.
- 2026 grounding: Procurement trends in mid-market and PE-backed companies pushing every advisory spend toward defined-scope SOW; the shift away from open-ended retainers in legal, consulting, and now talent advisory; the practical comparison matrix (retained vs. fractional vs. SOW) by trigger event.

Each article matches the existing schema: `id`, `title`, `dek`, `category`, `readTime`, `excerpt`, `body[]`. Length and structure mirror the existing four. No publish dates. Categories already exist in the filter row, so no UI changes needed.

## Em-dash and en-dash removal

A site-wide pass on all visible-copy `.tsx` files under `src/pages/`, `src/sections/`, `src/components/`, and any data files that feed copy. Each occurrence reviewed individually so the replacement reads naturally:
- Em-dash separating two independent thoughts → period and new sentence.
- Em-dash setting off a parenthetical → comma pair or parentheses.
- Em-dash before a list or punchline → colon.
- En-dash in number ranges (e.g., "2024–2025") → hyphen ("2024-2025").

Files certain to need edits based on the existing codebase pattern: `FieldNotes.tsx`, `Insights.tsx`, `Services.tsx`, `Industries.tsx`, `Approach.tsx`, `About.tsx`, `Home.tsx`, the service sub-pages, and any shared sections (`CTABand`, hero components, footer copy). A grep for `—` and `–` will catch the full set before edits start.

## Out of scope

- No design, layout, routing, or navigation changes.
- No changes to the existing four Field Notes articles other than dash removal.
- No changes to logo, fonts, colors, or component structure.

## Technical notes

- Edits are confined to `src/pages/FieldNotes.tsx` (new articles + dash removal) plus dash-only edits across other copy files.
- Article body paragraphs are plain strings in the existing array; no new dependencies, no schema changes.
- The category filter already includes Search, Talent, Fractional, Workplace; the three new articles fall into Search, Talent, and Fractional respectively.
