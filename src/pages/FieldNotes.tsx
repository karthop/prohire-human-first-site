import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type Category = "Search" | "Talent" | "Fractional" | "Workplace";

interface Article {
  id: string;
  title: string;
  dek: string;
  category: Category;
  readTime: string;
  excerpt: string;
  body: string[];
}

const articles: Article[] = [
  {
    id: "cfo-seat",
    title: "The CFO seat won't stay filled.",
    dek: "Finance chiefs are turning over at the fastest pace in two decades, and the bench underneath them is thinner than most boards believe.",
    category: "Search",
    readTime: "6 min",
    excerpt:
      "The Crist Kolder Volatility Report has tracked Fortune 500 and S&P 500 CFO turnover every year since 2005. The 2024 reading came in at 18.5%, the highest rate they have ever recorded, and the 2025 update kept the number in that same elevated band. Average tenure is now hovering at roughly 4.7 years and falling. This is not a blip.",
    body: [
      "The Crist Kolder Volatility Report has tracked Fortune 500 and S&P 500 CFO turnover every year since 2005. The 2024 reading came in at 18.5%, the highest rate they have ever recorded, and the 2025 update kept the number in that same elevated band. Average tenure is now hovering at roughly 4.7 years and falling. This is not a blip.",
      "Russell Reynolds' quarterly CFO Turnover Index has been telling the same story from a different vantage point: announced CFO departures across the S&P 500, FTSE 100, ASX 200, and CAC 40 hit multi-year highs through 2024 and have not meaningfully cooled. The pattern is consistent across geography and sector, which makes the usual explanations — one bad industry, one capital cycle — insufficient.",
      "What is actually going on is a compounding of four pressures the role was not designed to absorb at the same time. Capital costs reset and stayed reset. AI is rewriting the finance operating model on a quarter-by-quarter basis. Regulatory and disclosure regimes (climate, cyber, AI governance) have expanded the scope of the seat. And boards, post-2023, are using CFOs as the primary lever for cost discipline and operating restraint, which makes the role politically exposed in a way it was not a decade ago.",
      "The hidden problem is the bench. Deloitte's CFO Signals work and Korn Ferry's succession research have both flagged that internal CFO-ready successors are scarce — most large companies have zero or one truly ready candidate, not the three or four that good succession planning assumes. When the seat opens, the search starts cold.",
      "For boards and CEOs, the implication is not 'hire faster.' It is to re-scope before sourcing. The CFO mandate you wrote in 2021 — capital allocation, IR fluency, ERP modernization — is not the mandate the next person will actually be asked to execute. Get the next 24 months of pressure honestly on paper before the search begins, or replace the outgoing CFO with a version of the outgoing CFO and start the cycle again in three years.",
      "There is also a fractional answer worth naming. For mid-market and PE-backed companies, the gap between a departing CFO and the right permanent successor is now routinely 6 to 9 months. A senior fractional or interim CFO during that window is not a stopgap; it is the difference between a clean handoff and a forced hire.",
    ],
  },
  {
    id: "ai-shortlist",
    title: "AI didn't replace the recruiter. It replaced the shortlist.",
    dek: "What generative AI has actually changed inside senior hiring — and the new failure modes nobody is putting on a slide.",
    category: "Talent",
    readTime: "7 min",
    excerpt:
      "LinkedIn's 2025 Future of Recruiting report found that 73% of talent acquisition professionals now consider AI a top priority and 37% are actively integrating it into sourcing and screening. SHRM's 2024–2025 data shows roughly one in four U.S. employers using AI somewhere in their hiring workflow, concentrated in sourcing, resume screening, and interview scheduling. The sourcing layer has effectively collapsed in cost and speed. That is the real change. Almost everything else being sold as 'AI in hiring' is downstream of it.",
    body: [
      "LinkedIn's 2025 Future of Recruiting report found that 73% of talent acquisition professionals now consider AI a top priority and 37% are actively integrating it into sourcing and screening. SHRM's 2024–2025 data shows roughly one in four U.S. employers using AI somewhere in their hiring workflow, concentrated in sourcing, resume screening, and interview scheduling. The sourcing layer has effectively collapsed in cost and speed. That is the real change. Almost everything else being sold as 'AI in hiring' is downstream of it.",
      "For senior roles, the collapse cuts both ways. Identifying a long list of plausibly qualified candidates is now a commodity. So is writing an outreach sequence, drafting a job description, and producing a competency-mapped scorecard. The work that used to fill the first three weeks of a search now fills the first three days.",
      "The candidate side has moved at least as fast. Resume tailoring, interview prep, written assessments, and case responses are now AI-assisted by default at the senior level. A 2024 Gartner survey found 47% of candidates have already used AI to help with applications, and the figure climbs sharply among executives. Several large enterprises (Amazon, Anthropic, and a growing list of consultancies) have publicly restricted AI use during live interviews because it became impossible to assess the human underneath.",
      "Three failure modes are now showing up consistently in the searches we audit.",
      "First, synthetic candidates. Not just embellished resumes — fully fabricated work histories, generated headshots, and AI-assisted live interviews using real-time prompting. The FBI and a stream of CISO reports through 2024 documented this at scale, originally tied to nation-state employment fraud, now spilling into ordinary white-collar roles. The defense is not a better ATS. It is structured reference work and verified credential checks, which most firms quietly stopped doing.",
      "Second, the shortlist that looks right and isn't. When sourcing is cheap, the bar for 'qualified enough to interview' silently drops. Hiring teams end up running more interviews against weaker slates and calling the noise 'optionality.' The fix is not more candidates. It is harder scope work before any name is surfaced.",
      "Third, the assessment that measures the model, not the person. AI-graded video interviews and AI-written case responses are now common enough that what you are scoring is often the candidate's tooling, not their judgment. For senior hires this is a category error.",
      "What the human work has to be now is narrower and harder: scope architecture, deep referencing through actual relationships, stakeholder choreography, and onboarding through day 90. None of that is automatable. All of it is what the fee was always supposed to be paying for.",
    ],
  },
  {
    id: "fractional-permanent",
    title: "Fractional is no longer a bridge.",
    dek: "The fractional executive market has crossed a line. For a growing share of mid-market and PE-backed companies, it is the operating model — not the gap before one.",
    category: "Fractional",
    readTime: "5 min",
    excerpt:
      "The shift is most visible in three seats: CMO, CFO, and Chief People Officer. Industry trackers including Chief Outsiders and BTA's fractional executive surveys put the U.S. fractional executive population in the tens of thousands and growing at double-digit rates year over year. Harvard Business Review's 2024 coverage of the fractional C-suite framed it as a structural rather than cyclical shift, and the pattern through 2025 has confirmed that read.",
    body: [
      "The shift is most visible in three seats: CMO, CFO, and Chief People Officer. Industry trackers including Chief Outsiders and BTA's fractional executive surveys put the U.S. fractional executive population in the tens of thousands and growing at double-digit rates year over year. Harvard Business Review's 2024 coverage of the fractional C-suite framed it as a structural rather than cyclical shift, and the pattern through 2025 has confirmed that read.",
      "The reasons are not mysterious. Senior talent burned by 2022–2023 layoffs is unwilling to re-bet on a single employer. Companies between $10M and $150M in revenue cannot afford a full-time CXO at current comp benchmarks but cannot grow without that caliber of judgment. Capital constraints have made every full-time senior hire a 12-month commitment the CEO does not want to make until the motion is proven.",
      "What has changed in 2024 and 2025 is the engagement pattern. The early fractional market was time-boxed: three months, six months, a defined deliverable. The current market is closer to ongoing part-time leadership — two or three days a week, multi-year, fully integrated into the executive team. That is a different operating model, and it works when three conditions are true.",
      "One: the scope is permanent, but the volume is not. A 60-person company genuinely needs a Chief People Officer's judgment, not a CPO's full week. Two: the company has earned the right to a specific operator with a specific playbook, and that operator is not available full-time at any price. Three: the CEO is willing to treat the fractional executive as a peer, not a vendor, including in board materials and comp structure.",
      "There are also three situations where fractional is the wrong answer, and the market is selling it anyway. When the role requires deep cultural authorship — a founding CHRO during a values reset, a CRO building a sales org from zero, a CTO inheriting a platform rebuild. When the company is in active crisis and needs daily presence. And when 'fractional' is being used to avoid the comp conversation a full-time hire would force. In each case, fractional buys time and defers a decision the company will eventually have to make under worse conditions.",
      "For VPs of HR and boards, the practical move is to stop treating fractional as a category and start treating it as a configuration. The question is not 'should we go fractional?' It is: 'what is the smallest senior intervention that gets us through the next four quarters, and at what point does that intervention need to become permanent?' Answer that honestly and the engagement shape writes itself.",
    ],
  },
  {
    id: "rto-retention",
    title: "The return-to-office fight is over. The retention fight isn't.",
    dek: "RTO mandates have largely landed. The senior attrition they triggered is the part most leadership teams are still under-counting.",
    category: "Workplace",
    readTime: "6 min",
    excerpt:
      "By mid-2025, Resume Builder's tracking showed roughly 9 in 10 companies that wanted employees back in the office had implemented a mandate, with full five-day-in-office requirements rising sharply through the year. KPMG's 2024 CEO Outlook found 83% of CEOs expected a full return within three years, and most are now executing on that view. The mandate fight is, functionally, over. What it produced is a quieter, more expensive problem.",
    body: [
      "By mid-2025, Resume Builder's tracking showed roughly 9 in 10 companies that wanted employees back in the office had implemented a mandate, with full five-day-in-office requirements rising sharply through the year. KPMG's 2024 CEO Outlook found 83% of CEOs expected a full return within three years, and most are now executing on that view. The mandate fight is, functionally, over. What it produced is a quieter, more expensive problem.",
      "The data on senior-level attrition tied to RTO is now solid enough to take seriously. A widely-cited University of Pittsburgh / Baylor study of S&P 500 firms found that companies implementing strict RTO mandates experienced significantly higher turnover among senior, longer-tenured, and higher-skilled employees, and notably slower backfilling. Gartner's 2024 research put the threatened attrition rate at around 35% among high-performers in companies with full-time office mandates. Gallup's State of the Global Workplace shows employee engagement at a decade low, with managers — the layer that actually holds the operating model together — hit hardest.",
      "The piece most HR leaders are still mis-reading is which leaders leave and why. The departures rarely cite the mandate directly. They cite the rollout: surprise announcements, exceptions granted to favored executives, inconsistent enforcement, the suspicion that the policy was about headcount reduction without saying so. Senior people read those signals quickly and start taking calls.",
      "There is also a recruiting consequence the slide decks do not capture. The senior talent pool has effectively bifurcated. A meaningful share of the most experienced operators — particularly in finance, engineering leadership, and product — will not engage with a five-day-in-office search at any comp level. That has not closed the market, but it has narrowed it, and the narrowing is concentrated in the seats most boards care about most.",
      "What VPs of HR should actually be doing in 2026 is three things. First, run a private attrition risk read on your top two layers of leadership specifically against the rollout, not the policy. Who watched it happen and quietly downgraded their commitment? Second, separate the policy from the messaging — most of the damage is repairable through how the next twelve months are managed, not through reversing the mandate. Third, get honest about which roles you are willing to lose the best candidate for in order to hold the line on attendance. That is a defensible answer. 'We didn't realize we were making that trade' is not.",
    ],
  },
];

const filters: ("All" | Category)[] = ["All", "Search", "Talent", "Fractional", "Workplace"];

export default function FieldNotes() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? articles : articles.filter((a) => a.category === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Field Notes | proHIRE resources"
        description="Operator-grade observations on executive search, senior hiring, fractional leadership, and workplace strategy — grounded in current market data."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">
            Field Notes
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.05] max-w-4xl">
            What we are seeing in the market.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            Short, current observations from inside live engagements — grounded in the data
            boards and senior HR leaders are working with right now.
          </p>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-12 lg:py-16">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                The notes
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Current reading.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-xs uppercase tracking-[0.18em] px-4 py-2 border transition-colors ${
                    filter === f
                      ? "border-foreground text-background bg-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {filtered.map((a) => {
              const isOpen = openId === a.id;
              return (
                <article key={a.id} className="bg-background p-8 lg:p-10 flex flex-col">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
                    {a.category} · {a.readTime} read
                  </div>
                  <h3 className="font-serif text-2xl text-foreground leading-snug mb-3">
                    {a.title}
                  </h3>
                  <p className="font-serif text-base text-muted-foreground leading-snug mb-4">
                    {a.dek}
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed flex-1">
                    {a.excerpt}
                  </p>

                  <Collapsible open={isOpen} onOpenChange={(o) => setOpenId(o ? a.id : null)}>
                    <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="mt-6 pt-6 border-t border-border space-y-4 text-foreground font-light leading-relaxed">
                        {a.body.slice(1).map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    </CollapsibleContent>
                    <CollapsibleTrigger asChild>
                      <button
                        type="button"
                        className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors w-fit"
                      >
                        {isOpen ? "Close" : "Read full piece"}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </CollapsibleTrigger>
                  </Collapsible>
                </article>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-muted-foreground font-light text-center py-12">
              No notes in this category yet.
            </p>
          )}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
