## Problem

Reece (the AI assistant) is leaking the personal email and phone number, and using the wrong email. The leak comes from three places that all need to be scrubbed:

1. **System prompt** in `supabase/functions/ai-assistant/index.ts` — explicitly instructs Reece to give out `info@prohireresources.com` and `678.697.2833` as escalation paths.
2. **`get_contact_info` tool** in `supabase/functions/ai-assistant/tools.ts` — returns the email + phone as structured data the model then quotes verbatim.
3. **Knowledge base article** "How to engage us" in the `ai_knowledge_articles` table — body text contains both the wrong email and the phone number.
4. **Contact form fallback** in `supabase/functions/send-contact-email/index.ts` — defaults `CONTACT_EMAIL_TO` to `info@prohireresources.com` if the env var isn't set.

Per project rule: email and phone are NEVER displayed publicly. Only the Contact page form. So Reece should funnel everyone to `/contact` — no email address quoted, no phone number quoted.

## Changes

### 1. Edit `supabase/functions/ai-assistant/index.ts`
Rewrite the two offending bullets in the system prompt:
- "If unsure" fallback → "…please reach out via the [Contact page](/contact)." (remove email + phone)
- "Only real escalation paths" → "Use only the [Contact page](/contact). Do not display, quote, or invent any email address or phone number under any circumstance, even if asked directly."

Add an explicit hard rule:
- "Never display, type out, or repeat any email address or phone number. The only contact channel is the Contact page form at `/contact`. If a user asks for an email or phone number, decline and link to `/contact`."

### 2. Edit `supabase/functions/ai-assistant/tools.ts`
Modify `get_contact_info` to return only the Contact page URL and the consultation note. Strip the `email` and `phone` fields entirely so the model has nothing to quote.

### 3. Update the "How to engage us" KB article in the database
Replace the content via a migration so the bullet list reads:
- "Submit the form on the [Contact page](/contact)."
…and remove the email + phone bullets.

### 4. Edit `supabase/functions/send-contact-email/index.ts`
Change the hardcoded default from `info@prohireresources.com` to `cbetz@prohireresources.com` so contact-form submissions route correctly even without the env var set.

### 5. Deploy
Redeploy `ai-assistant` and `send-contact-email` edge functions.

### 6. Verify
After deploy, send a test query to Reece asking "what's your email and phone?" and confirm it refuses and links to `/contact` only.

## Out of scope
- The mailto links in the public site already use `cbetz@prohireresources.com` (per memory) — no UI changes needed.
- No knowledge base UI changes.