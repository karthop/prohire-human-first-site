Good catch. The website copy was rewritten, but **Reece's knowledge base** (the `ai_knowledge_articles` table that Reece searches via the `search_knowledge_base` tool) was not updated. It still contains the old language and the Pyramid/Quest references you asked to remove.

## What's currently in the KB (5 published articles)

1. **About proHIRE resources** — uses "executive talent and growth advisory," "human-first, AI-enhanced, and outcome-accountable"
2. **Our four practices** — uses "Strategic Talent & Workforce Solutions," "Leadership Advisory," "RPO," etc.
3. **About founder Chris Betz** — explicitly names **Pyramid Consulting**, lists "Randstad and Kelly," uses "executive search, growth acceleration, and senior talent strategy"
4. **Who we work with** — explicitly names **Pyramid Consulting**
5. **How to engage us** — fine in tone but references "consultation"

There is also a hardcoded service list in `supabase/functions/ai-assistant/tools.ts` (the `list_services` tool) that still uses the old practice names ("Executive Search & Leadership Advisory," "Strategic Talent & Workforce Solutions," "Revenue & Operational Acceleration," "Career Advisory").

## Plan

1. **Rewrite all 5 knowledge base articles** (via a SQL migration that updates the rows in place) to match the new site tone:
   - Remove "Pyramid Consulting" and "Quest" everywhere; replace with neutral phrasing (e.g., "global staffing and consulting firms," or just drop the company list and keep "twenty years across executive search and growth")
   - Strip "talent solutions," "leadership advisory," "senior judgment," "growth acceleration" as labels, and other corporate filler
   - Match the plain-English, founder-to-founder voice used on the live pages
   - No em dashes
   - Keep the existing internal links (`/contact`, `/about`, `/services/...`)

2. **Update `supabase/functions/ai-assistant/tools.ts`** so the `list_services` tool returns the new practice names that match the site (I'll mirror whatever the current `/services` page calls them).

3. Leave the system prompt / `executeTool` logic alone — only data and the service list need to change.

## Questions before I write the plan into action

- For the founder bio, do you want to **keep any prior-employer mentions** (e.g., "Amazon, Randstad, Kelly") and only drop Pyramid + Quest, or **drop the whole employer list** and replace with something like "twenty years across global search and consulting firms"?
- Should I keep the four-practice names exactly as they appear on the current `/services` page, or do you want to rename any of them as part of this pass?
