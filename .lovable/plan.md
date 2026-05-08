# Copy-paste prompt for the Ridge Planning & Engineering Lovable project

Below is the full prompt. **Open your `ridge-build-strong` Lovable project, paste everything between the two horizontal rules into a single message, and send it.** It is written *to* that project's Lovable agent, not to you.

A few things before the prompt:

- It tells that agent to first read the existing project, then review the current public site at https://www.ridgepe.com/, then plan, then execute. It will likely take that agent more than one turn — that is intentional.
- It includes scope guardrails so the agent doesn't go off the rails.
- It does **not** copy any proHIRE-specific rules (no Source Serif, no cream background, no `mailto:cbetz@`, no LinkedIn-icon footer rule). Those belong to this project, not Ridge.
- If anything in section 2 (Visual Identity) doesn't match a direction you actually want, edit those hex codes and font names before pasting.

---

I want a full, considered upgrade pass on this Ridge Planning & Engineering site. Treat this as a substantial single body of work. Do not start editing files until you have completed steps A–C below.

## A. Read the existing project first

Before changing anything, inspect every page, section, component, and route currently in this project. Specifically:

- All files under `src/pages/` — Home, Services, Projects, IndustrialProjects, Leadership, Contact, Index, NotFound.
- All files under `src/components/sections/` and `src/components/layout/` — including hero-section, services-overview, featured-projects, testimonials-section, cta-section, page-layout.
- `src/components/Navigation.tsx`, `src/components/Footer.tsx`.
- `src/index.css` and the existing design tokens (the project already uses HSL CSS custom properties for primary blue, earth-tone secondary, green accent — review them before proposing palette changes).
- `tailwind.config.ts`.
- The `src/assets/` directory and `src/data/` directory.

Summarize back to me, in a short list, what pages and sections currently exist and what their copy says today.

## B. Review the current public site as a content reference

Pull and review **https://www.ridgepe.com/** and its primary subpages (especially `/what-we-do` and `/contact`). The voice and structure of that site is the legacy baseline. We are keeping the *substance* (civil engineering, land planning, due diligence, entitlements; Georgia-based; serves the Southeast) and replacing the *voice* (Squarespace marketing copy with phrases like "transforming vision," "your strategic partner," "we don't just plan, we accomplish," "Ridge difference") with something more credible.

## C. Then propose a plan

After A and B, give me a short plan of what you intend to change, page by page, before you write code. Once I approve, execute the full pass.

---

## About Ridge Planning & Engineering — context for tone and content

Ridge Planning & Engineering is a civil engineering, land planning, due diligence, and entitlements firm based in Woodstock, Georgia, serving the Southeast. The work breaks down roughly:

- **~75% residential** — single-family subdivisions, mixed-use, build-to-rent, master-planned communities, townhome and small-lot infill.
- **The remaining ~25%** — commercial, retail, light industrial, and recreational/parks work.

Primary clients are private developers (residential and mixed-use), with secondary work for retail and light-industrial owners and occasional municipal/recreational engagements. The voice should speak first to a developer doing deals — someone who reads a site plan, understands a pro forma, and wants a civil firm that won't blow their entitlements timeline. But it should never make a retail, light-industrial, or municipal client feel like an afterthought.

The differentiator is **responsiveness, regulatory fluency, and turning complex sites into approvable, buildable plans** — with a principal involved on every project. Not "innovation," not "passion," not "vision."

## Voice and tone — apply across every page

Speak like a senior civil engineer or principal planner talking to a developer at the early-stage table. Technically credible, regulatory-fluent, plainspoken Southern professional. Confident without being aggressive. Specific without being academic.

**Drop these phrases everywhere they appear** — they're filler and they undercut credibility:
- "transforming vision," "your strategic partner," "innovative solutions," "passionate about," "we don't just plan, we accomplish," "the Ridge difference," "stress-free," "seamless," "world-class," "cutting-edge," "best-in-class."

**Replace marketing language with concrete civil/planning vocabulary**: grading, drainage, stormwater management, utility coordination, yield studies, lot fit, density, master planning, mixed-use site planning, subdivision design, rezonings, variances, special use permits, DRI review, jurisdictional review, geotech coordination, environmental constraints, construction documents, construction administration, erosion and sedimentation control.

**Style rules:**
- Sentence case for headings, not Title Case.
- One H1 per page (the hero headline). Every other heading is H2 or smaller.
- No exclamation points. Em dash usage: at most one per paragraph.
- Short paragraphs. Lead with the answer or the point, not the windup.
- When Ridge isn't the right firm for a project type, the site should be honest about it — that reads as confidence, not weakness.

## 1. Homepage — copy and structure

### 1a. Hero

Replace the current hero block. Keep the page-layout component and CTA placement.

- **Eyebrow (small, uppercase, tracked):** `Civil engineering · Land planning · Entitlements`
- **H1:** `Plans that get approved. Sites that get built.`
- **Subhead:** `Ridge Planning & Engineering is a Georgia-based civil and land planning firm serving residential, mixed-use, commercial, and light-industrial developers across the Southeast. We turn raw sites and regulatory hurdles into approved, buildable plans — and stay with the project from feasibility through construction.`
- **Primary CTA:** `Start a project` → `/contact`
- **Secondary CTA (text link with arrow):** `See what we do` → `/services`

### 1b. Hero media — DYNAMIC SLOT (architect this carefully)

The hero image today is a single static photo. Replace it with a **single reusable component** — call it `<HeroMedia />` — that supports three modes via a `mode` prop:

1. `"video"` — a looping, muted, `playsInline`, `autoPlay` background MP4 with a poster image fallback while the video loads. Lazy-load the video source.
2. `"carousel"` — an auto-rotating cross-fade slideshow of 3–6 images, ~5 seconds per slide, with a `prefers-reduced-motion` fallback to a single static image. Use Embla Carousel (already common in shadcn projects) or a hand-rolled cross-fade — no third-party slider library beyond what's already installed.
3. `"static"` — a single image with a slow Ken Burns pan/zoom (CSS `transform` only, GPU-friendly), also disabled under `prefers-reduced-motion`.

Ship the component in this pass with `mode="static"` and the existing `hero-engineering.jpg` as a placeholder. Document the prop API in a comment at the top of the file. Do **not** generate fake project photos or stock imagery to fill the carousel — the owner will provide real project media later. The point of this pass is to scaffold the slot so swapping in a video or real photos later is a content change, not a rebuild.

Apply the same carousel pattern to the Featured Projects section (1e) so project photography can rotate when available.

### 1c. Trust / proof bar (just below hero)

Four items, no icons, just numbers/labels and short captions. Keep it factual. Replace any current proof bar copy with:

- **Southeast** — Primary service region, with a focus on metro Atlanta and North Georgia
- **Residential, mixed-use, commercial, light industrial** — Project types served
- **Civil · Planning · Due diligence · Entitlements** — Disciplines under one roof
- **Concept → CDs → CA** — Engaged through the full project lifecycle

### 1d. What we do (services overview, 4 cards)

Replace existing copy. Four cards, each links to its detail page on `/services`.

1. **Civil engineering** — `Site civil from concept through construction administration: grading, drainage, utilities, stormwater, erosion control, and roadway design. Plans that pass review the first time and survive the field.`
2. **Land planning** — `Master plans, site layouts, and yield studies that respect the land and the pro forma. We balance density, topography, environmental constraints, and community context before a single line is drawn in CAD.`
3. **Due diligence** — `Pre-acquisition site analysis: zoning, utilities, environmental, geotech coordination, and constraint mapping. We tell you what a site can really do before you close.`
4. **Entitlements & approvals** — `Rezonings, variances, special use permits, and plan approvals across Georgia and the Southeast. We know the staff, the standards, and the political terrain — and we navigate them on your behalf.`

### 1e. Featured projects

Replace current copy. Section heading: `Selected work`. Subhead: `A sample of recent residential, mixed-use, and commercial work across Georgia and the Southeast.` Architect the section so each project card supports: project name, location (city, county, state), project type tag (Residential / Mixed-Use / Commercial / Retail / Light Industrial / Recreational), Ridge's role (e.g. "Civil engineer of record"), one-line outcome, and a hero image. Use the same carousel pattern from 1b so this section can become a rotating showcase once real project photos are in. For now, scaffold with the placeholder data already in the project — do not invent new project names.

### 1f. Industries served grid (NEW SECTION)

Add a grid below Featured Projects. Heading: `Who we work with`. Six cards, one line each. No icons unless they already exist in the project's lucide set; if used, keep them subtle and monochromatic.

- **Residential developers** — Single-family subdivisions, build-to-rent, townhome and small-lot infill, master-planned communities.
- **Mixed-use developers** — Vertical and horizontal mixed-use, town-center projects, and transit-adjacent infill.
- **Commercial owners** — Office, medical office, and small-format commercial site work.
- **Retail developers** — Anchored and unanchored retail centers, outparcels, and quick-service pad sites.
- **Light industrial** — Flex, last-mile, and small industrial pad sites with utility and access coordination.
- **Recreational & municipal** — Parks, trails, and public-realm projects where civil and planning work in tandem.

### 1g. Jurisdictions served (NEW SECTION)

Add a band — visually quieter than the rest of the page — listing Georgia and Southeast jurisdictions Ridge has worked with. Heading: `Jurisdictions we know`. Subhead: `Approvals are won at the staff level long before they're won at the dais. We've worked across these jurisdictions and we know how each one reads a plan.`

Then a simple multi-column list of city/county names. **Do not invent jurisdictions.** Pull only from what's already in the project's existing data, the current `Projects.tsx` / `IndustrialProjects.tsx` content, or ridgepe.com. If there is no source data, scaffold the section with a comment in the file: `// TODO: populate from owner-provided jurisdictions list` and leave a clean empty state that says `Jurisdictions list coming soon` rather than fabricating names.

### 1h. Testimonials

Keep the three existing testimonials, but tighten attributions to first name + last initial + role + project type, e.g. `— Samantha R., Parks & Recreation Director` / `— Michael T., Commercial Developer` / `— Linda P., Residential Developer`. Do not invent names, companies, or projects.

### 1i. Closing CTA band

Replace existing CTA section copy.
- **Heading:** `Have a site? Let's look at it.`
- **Subhead:** `Send us the parcel, the project type, and where you are in the process. We'll tell you honestly whether we're the right fit and what the next step looks like.`
- **CTA:** `Start a project` → `/contact`

## 2. Visual identity — design system tune-up

Keep the existing structure of `src/index.css` (HSL custom properties, `--primary`, `--secondary`, `--accent`, etc.). **Tune the palette** to feel more like an established Southeast civil engineering firm and less like generic SaaS blue:

- **Primary** — a deeper, more grounded engineering blue: `210 60% 28%` (HSL). Less saturated, more authoritative than the current `214 85% 45%`.
- **Secondary** — keep an earth/clay accent, slightly warmer: `30 35% 78%` for surfaces, `25 40% 35%` for text use.
- **Accent** — a muted forest/sage green for civic/environmental cues: `145 25% 38%`. Drop the current bright `158 60% 45%` — too saturated for the brand register.
- **Background** — keep light, but warm it slightly: `40 20% 98%` instead of pure white.
- **Foreground/text** — keep the dark slate, but warm it: `210 20% 18%`.

These are starting points — feel free to refine within the same family if a hex looks off in context. Do not introduce a fourth color. Update both light and dark mode tokens.

**Typography:**
- **Headings:** keep a serious, modern sans. If a serif feels right for headlines and the project already loads one, you may use it for H1/H2 only — but no display serifs (no Playfair, no Cormorant). A grounded humanist sans like Inter, Söhne, or IBM Plex Sans is the safer choice for an engineering firm.
- **Body:** Inter or system sans.
- Maximum two font families across the entire site.

**Component style:**
- Slightly smaller border radius than default — engineering firms read as more credible with `--radius: 0.375rem` than with rounded-pill buttons.
- Buttons: solid primary for primary CTAs, ghost-with-arrow for secondary text links.
- Card shadows: subtle, single-layer. Avoid colored or glowing shadows.
- Imagery: when generated or selected, prefer real project photography and aerial/site imagery over abstract stock. No purple gradients, no blue-purple hero overlays, no glassmorphism.

## 3. Other pages

### 3a. `/services`
Keep the existing four-discipline structure. Rewrite each service detail page using the civil/planning vocabulary above. Each page should have: a one-line definition of the service, a "what's included" list of concrete deliverables (e.g. for Civil Engineering: site grading plans, storm and sanitary sewer design, water distribution, stormwater management plans, erosion and sedimentation control, roadway and access design, utility coordination, construction documents, bid support, construction administration), a short paragraph on how Ridge engages on that service, and a closing CTA back to `/contact`.

### 3b. `/projects` and `/industrial-projects`
Tighten the project descriptions to read as case summaries: project name, location, role, scope, outcome. No marketing adjectives. If the current copy includes generic "transforming vision" language, strip it.

### 3c. `/leadership`
Add a credentials block per leader: name, title, PE license state(s) if applicable, years of experience, jurisdictions/regions worked, project-type focus. Keep bios under 120 words each, written in third person, factual, no hype. If credential data isn't in the project today, scaffold the structure and leave clearly labeled `TODO: confirm with owner` placeholders — do not fabricate licenses, schools, or employers.

### 3d. `/contact`
Update intro copy to:
> Tell us about the project. Include the parcel or address, the project type (residential, mixed-use, commercial, retail, light industrial, recreational), and where you are — under contract, in due diligence, in entitlements, or already designing. A principal will get back to you within one business day.

Make sure the form captures: name, company, email, phone (optional), project location (free text — city/county/state or address), project type (dropdown: Residential / Mixed-Use / Commercial / Retail / Light Industrial / Recreational / Other), project stage (dropdown: Evaluating / Under Contract / Due Diligence / Entitlements / Design / Construction / Other), and a free-text message. If a contact submission backend already exists in this project, keep it; if not, route the form to whatever email/Lovable Cloud handler is already wired — do not invent a new one.

## 4. SEO pass — every page

- Per-page `<title>` under 60 characters, keyword-led, brand suffix.
- Per-page meta description under 160 characters, plain-English, no marketing adjectives.
- Single H1 per page; demote any duplicates to H2.
- Descriptive `alt` text on every image — describe project type, location, and scene (`Aerial view of a residential subdivision under grading in Cherokee County, GA`), never `image-asset` or `photo-1`.
- JSON-LD `ProfessionalService` schema on the homepage with: name (`Ridge Planning & Engineering`), address (Woodstock, Georgia), area served (`Southeastern United States`), service catalog (Civil Engineering, Land Planning, Due Diligence, Entitlements), and URL.
- Responsive viewport meta confirmed in `index.html`.
- `robots.txt` and `sitemap.xml` present and accurate to the final route list.
- Lazy-load all non-hero images.

## 5. What I do NOT want changed in this pass

- No new top-level pages beyond what already exists, and no removed pages.
- No new third-party libraries beyond what's already installed unless absolutely required for the hero media component (and even then, prefer a hand-rolled cross-fade over a new dependency).
- No animation framework swap. Use the existing motion patterns.
- No logo redesign.
- No fabricated content — no invented project names, no invented testimonial authors, no invented PE licenses, no invented client logos, no invented jurisdictions.

## 6. Deliverable

When you're done, give me:
1. A list of every file you edited or created.
2. A short summary of the design-token changes.
3. The current state of the hero media component (which mode is active and where to put a video or images later).
4. Any sections where you scaffolded a structure but left a TODO for owner-provided content.

Begin with steps A, B, and C. Do not start coding until I approve the plan.

---

## After you paste

When the other Lovable agent finishes step C and shows you its plan, you can say *"approved, proceed"* and let it execute. If anything in its plan looks off — wrong palette interpretation, wrong jurisdictions, wrong service names — push back at that stage rather than after the work is done. That's the same approach that worked best for us on proHIRE.

Want me to also draft a follow-up prompt for **after** this first pass — focused on populating real project photography, a drone reel for the hero, and a proper jurisdictions list — once you've gathered that content?
