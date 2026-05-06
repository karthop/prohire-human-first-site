## Goal

On `src/pages/About.tsx`, remove every reference to the company name "Stellar Consulting Solutions" / "Stellar" and replace it with a neutral descriptor. Also remove the sentence that incorrectly frames that role as "the throughline that became proHIRE resources," since it isn't related to proHIRE.

## Three locations to change

**1. Timeline entry (line 45–46) — Revenue leadership, 2023–2024**
- Current title: `"EVP of Sales, Stellar Consulting Solutions."`
- New title: `"EVP of Sales, an NMSDC Award-winning MBE technology consulting firm."`
- Current body ends with: `"...the human capital required to execute it. The throughline that became proHIRE resources."`
- New body ends with: `"...the human capital required to execute it."` (drop the throughline sentence entirely — it's inaccurate)
- Also remove the now-redundant `"NMSDC Award-winning MBE technology consulting firm"` phrase from the middle of the body so it doesn't repeat the title. Replace with `"a technology consulting firm"`. Result:
  > "Sales leadership at a technology consulting firm — closing the loop between go-to-market strategy and the human capital required to execute it."

**2. Founder bio paragraph (line 97)**
- Current: `"...across Amazon, Pyramid Consulting, Stellar Consulting Solutions, Randstad, and Kelly."`
- New: `"...across Amazon, Pyramid Consulting, Randstad, and Kelly."` (drop Stellar from the company list — the timeline already covers that role descriptively)

**3. Throughline paragraph (lines 119–122)**
- Current: `"...to senior TPM hiring at Amazon, to sales leadership at Stellar — has been the same..."`
- New: `"...to senior TPM hiring at Amazon, to revenue leadership in technology consulting — has been the same..."`

## Out of scope
No other copy, structure, styling, or routing changes. The "throughline across two decades" framing in paragraph 3 is preserved — only the literal "throughline that became proHIRE resources" sentence in the timeline is being removed, since that's the one the user flagged as inaccurate.
