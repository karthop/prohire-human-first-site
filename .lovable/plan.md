Below is a single, copy-paste-ready prompt to drop into the **ridge-build-strong** Lovable project. It tells that agent to build an AI chatbot patterned after Reece (the assistant on proHIRE resources), but rebuilt around Ridge Planning & Engineering's content, voice, and industry — civil engineering, land planning, due diligence, and entitlements across Georgia and the Southeast. Copy everything between the two horizontal rules.

---

## Build a site-wide AI assistant for Ridge Planning & Engineering

I want you to add an AI chatbot to this site, modeled on a pattern I've used successfully on another project. Do **not** copy any content, branding, voice, or industry references from that other project — this assistant is exclusively about Ridge Planning & Engineering: civil engineering, land planning, due diligence, and entitlements, primarily across Georgia and the Southeast, serving residential (mostly single-family and mixed-use), commercial, retail, light industrial, and some recreational/municipal work.

Before writing code, read the existing project end-to-end (pages, components, `src/data/`, `src/assets/`, `index.css`, `tailwind.config.ts`, SEO setup, Supabase config) so the assistant's knowledge base, tone, and visual styling match what's actually on the site today. Then propose a plan before implementing.

### 1. Architecture

- **Frontend widget**: a floating button bottom-right on every page, opening a chat panel. Use the existing design tokens (warm cream background, deep blue primary, Source Serif 4 headings, Inter body). No purple gradients, no glassmorphism, no generic "AI sparkle" aesthetic.
- **Streaming backend**: a Supabase Edge Function that calls the **Lovable AI Gateway** using the **Vercel AI SDK** (`ai`, `@ai-sdk/openai-compatible`) with the shared `createLovableAiGatewayProvider` helper. Default model: `google/gemini-3-flash-preview`. Stream responses with `streamText` + `toUIMessageStreamResponse`. Keep the system prompt, tool execution, and `LOVABLE_API_KEY` server-side.
- **Knowledge base in Supabase**: tables `ai_knowledge_articles` (title, content, category, tags, published) and `ai_assistant_settings` (seasonal_message_enabled, seasonal_message_text). Public read on published rows; admin-only write via a `user_roles` table + `has_role()` security-definer function. RLS on everything.
- **Conversation logging**: `ai_conversations` table keyed by `session_id` (anonymous UUID in localStorage), append assistant text on stream completion. Admin-only read.
- **Tools the assistant can call** (server-side, AI SDK `tool()` with Zod `inputSchema`):
  1. `search_knowledge_base(query)` — token-scored search over published articles.
  2. `list_services` — returns the four service pillars and their routes (Civil Engineering, Land Planning, Due Diligence, Entitlements).
  3. `list_industries_served` — Residential, Mixed-Use, Commercial, Retail, Light Industrial, Recreational/Municipal.
  4. `get_contact_info` — returns only the route `/contact` and the instruction that the contact form is the single channel; never expose email or phone.
  5. `list_jurisdictions` — returns the jurisdictions/municipalities list from `src/data/` (or returns "not yet populated" if the file is a TODO).
- Use `stepCountIs(50)` for the tool loop. Surface 429 (rate limit) and 402 (credits) cleanly to the UI.

### 2. Assistant identity & voice

- **Name**: pick a short, grounded name that fits a civil/planning firm — propose 3 options in your plan (e.g. *Ridge*, *Survey*, *Plat*, *Marker*, *Bench* — surveyor's bench mark). I'll choose one.
- **Voice**: plainspoken, technically literate, consultative. Sounds like a senior project manager who has actually pulled permits, not a chipper sales bot. No "synergy", "leverage", "rockstar", no exclamation points, no emoji.
- **Markdown**: render replies as markdown. Use relative links (`[Services](/services)`), never full URLs.
- **Self-reference**: refer to itself by its chosen name; confirm it's an AI if asked.

### 3. System prompt requirements

The system prompt (built server-side, with the KB articles inlined) must enforce:

- **Domain lock**: only answers questions about Ridge Planning & Engineering, civil engineering, land planning, due diligence, entitlements, and adjacent topics (zoning, stormwater, grading, utilities, geotech, DRI, variances, rezonings, plats, site plans, LDP). Redirect off-topic questions in one sentence.
- **No invented facts**. Never fabricate fees, timelines, jurisdictions served, project names, client names, certifications, PE license numbers, or staff bios. If the KB is silent: *"I don't have that detail. The Ridge team can answer directly — please use the [contact form](/contact)."*
- **No professional advice**. No legal, engineering stamp, code-compliance, surveying, or environmental determinations. Recommend a licensed professional and link to `/contact`.
- **Permitted intuition**: the assistant *may* explain general industry concepts (what a variance is, what stormwater detention means, what due diligence typically covers) when the KB doesn't speak to it — but must label such answers as general industry context, not Ridge-specific commitments, and end with a `/contact` nudge.
- **Contact rule** (hard): every mention of contacting, reaching out, getting in touch, requesting a proposal, scheduling a consultation, or asking for a quote **must** be a markdown link to `/contact`. Never display, quote, hint at, or invent any email address or phone number, even if a KB article or tool response contains one. If a user asks for an email or phone, decline once and link to `/contact`.
- **Confidentiality**: never disclose internal fees, margins, client lists beyond what's publicly on the site, or unreleased work. Decline once and stop if pressed.
- **Source-of-truth precedence**: KB articles > general industry knowledge > escalate. Prefer calling `search_knowledge_base` before answering Ridge-specific questions.
- **Safety**: for emergencies (active flooding, sinkhole, structural collapse, gas line strike, etc.), tell the user to call local emergency services / 811 / their utility, and do not improvise hotline numbers.
- **Privacy**: never request or echo sensitive data (SSN, payment info, government IDs).
- **Honesty about being AI** if asked.

### 4. Seed knowledge-base articles

Pre-populate `ai_knowledge_articles` (published=true) with at least:

- About Ridge Planning & Engineering (firm overview, geography, project types — pull from existing site copy, do not invent).
- The four service pillars, one article each, using existing site language.
- Industries served (six, as listed above).
- Typical project lifecycle (feasibility → due diligence → entitlements → civil design → permitting → construction admin), in plain language.
- "How to engage Ridge" — explains the consultation flow and links to `/contact`. Never lists a fee.
- Jurisdictions served — placeholder article noting the list is being finalized; link to `/contact` for specific jurisdiction questions. Mark with a `// TODO: populate from owner-provided list` comment in the seed migration.
- Glossary: variance, rezoning, DRI, LDP, stormwater detention vs retention, ESA Phase I, ALTA survey, plat vs site plan, geotech report. Short, neutral definitions.

If the existing site already has copy that covers any of these, use that copy verbatim rather than rewriting.

### 5. Frontend widget

- Floating launcher button (bottom-right, ~56px), site-themed, with a sensible domain icon (compass, T-square, or transit — not Sparkles).
- Panel: ~380px wide on desktop, full-width sheet on mobile. Header with assistant name + short tagline ("Civil engineering & land planning, Georgia Southeast"). Close button. Reset/new-conversation button.
- Message list renders `message.parts` (not just a flat string). Render markdown with `react-markdown`. Show a tasteful "thinking..." shimmer while `status` is `submitted` or `streaming`.
- Input: textarea with Enter-to-send, Shift+Enter newline, send button disabled while streaming. Autofocus on open and after each send.
- Quick-start chips above the input on first open: "What services do you offer?", "Where do you work?", "How do I start a project?", "What's involved in due diligence?". Clicking a chip sends that exact message.
- Persist `session_id` and message history in `localStorage` so the conversation survives reloads. Provide a clear "Start over" action.
- Errors: 429 → "I'm getting a lot of questions right now — try again in a moment." 402 → quiet admin-only console log + a generic "I'm temporarily unavailable; please use the [contact form](/contact)." Network errors → same generic fallback with `/contact` link.

### 6. Admin surface (optional but recommended)

A simple `/admin/assistant` route gated by the `admin` role:
- CRUD for `ai_knowledge_articles` (title, content, category, tags, published toggle).
- Toggle + textarea for `ai_assistant_settings.seasonal_message` (e.g. "Holiday hours Dec 23–Jan 2").
- Read-only list of recent `ai_conversations` for QA.

If you don't have time to build the UI in this pass, at minimum create the tables, RLS, and seed data so I can manage rows directly.

### 7. Scope guardrails

- Do **not** copy content, prompts, tone, or tool names from any other project I've built. Rebuild from this site's actual content.
- Do **not** add new top-level pages beyond `/admin/assistant` (and only if you build it).
- Do **not** introduce new animation libraries, chat UI kits, or CSS frameworks.
- Do **not** invent fees, jurisdictions, certifications, or staff bios.
- Do **not** display or store email addresses or phone numbers in assistant output.
- Use the existing design tokens; do not introduce new colors outside `index.css` / `tailwind.config.ts`.

### 8. Deliverables

1. A short written plan listing: assistant name options, tables/migrations, edge function structure, tool list, widget component tree, and seed articles you intend to write.
2. Wait for my approval on the name and the seed-article outline before generating final copy.
3. Then implement: migrations → edge function → widget → seed data → admin (if in scope).
4. Verify: send 5 test prompts (a service question, an off-topic question, a "what's your phone number" question, a "give me a quote" question, and an emergency question) and paste the responses so I can sanity-check the guardrails.

---

That's the full prompt. Paste it into ridge-build-strong as a single message and let it run through its plan step before approving implementation.