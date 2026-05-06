Plan to remove “Stellar” everywhere it can appear:

1. Update the homepage founder intro copy
   - Remove “Stellar Consulting Solutions” from `FounderIntro` so the main page no longer displays it.
   - Keep the sentence grammatically clean with the remaining organizations only.

2. Update assistant instructions
   - Remove “Stellar” from the AI assistant’s allowed past employer affiliations so the chat widget will not mention it.

3. Update seeded knowledge content
   - Remove “Stellar Consulting Solutions” from the Supabase migration seed text for “Who we work with” and “About founder Chris Betz.”
   - Keep the remaining copy intact.

4. Verify cleanup
   - Run a full repository search for `Stellar` and `stellar` to confirm there are zero remaining references in source, migrations, and functions.