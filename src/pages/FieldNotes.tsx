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
      "Russell Reynolds' quarterly CFO Turnover Index has been telling the same story from a different vantage point: announced CFO departures across the S&P 500, FTSE 100, ASX 200, and CAC 40 hit multi-year highs through 2024 and have not meaningfully cooled. The pattern is consistent across geography and sector, which makes the usual explanations insufficient. One bad industry or one capital cycle does not account for it.",
      "What is actually going on is a compounding of four pressures the role was not designed to absorb at the same time. Capital costs reset and stayed reset. AI is rewriting the finance operating model on a quarter-by-quarter basis. Regulatory and disclosure regimes (climate, cyber, AI governance) have expanded the scope of the seat. And boards, post-2023, are using CFOs as the primary lever for cost discipline and operating restraint, which makes the role politically exposed in a way it was not a decade ago.",
      "The hidden problem is the bench. Deloitte's CFO Signals work and Korn Ferry's succession research have both flagged that internal CFO-ready successors are scarce. Most large companies have zero or one truly ready candidate, not the three or four that good succession planning assumes. When the seat opens, the search starts cold.",
      "For boards and CEOs, the implication is not 'hire faster.' It is to re-scope before sourcing. The CFO mandate you wrote in 2021 (capital allocation, IR fluency, ERP modernization) is not the mandate the next person will actually be asked to execute. Get the next 24 months of pressure honestly on paper before the search begins, or replace the outgoing CFO with a version of the outgoing CFO and start the cycle again in three years.",
      "There is also a fractional answer worth naming. For mid-market and PE-backed companies, the gap between a departing CFO and the right permanent successor is now routinely 6 to 9 months. A senior fractional or interim CFO during that window is not a stopgap. It is the difference between a clean handoff and a forced hire.",
    ],
  },
  {
    id: "ai-shortlist",
    title: "AI didn't replace the recruiter. It replaced the shortlist.",
    dek: "What generative AI has actually changed inside senior hiring, and the new failure modes nobody is putting on a slide.",
    category: "Talent",
    readTime: "7 min",
    excerpt:
      "LinkedIn's 2025 Future of Recruiting report found that 73% of talent acquisition professionals now consider AI a top priority and 37% are actively integrating it into sourcing and screening. SHRM's 2024 and 2025 data shows roughly one in four U.S. employers using AI somewhere in their hiring workflow, concentrated in sourcing, resume screening, and interview scheduling. The sourcing layer has effectively collapsed in cost and speed. That is the real change. Almost everything else being sold as 'AI in hiring' is downstream of it.",
    body: [
      "LinkedIn's 2025 Future of Recruiting report found that 73% of talent acquisition professionals now consider AI a top priority and 37% are actively integrating it into sourcing and screening. SHRM's 2024 and 2025 data shows roughly one in four U.S. employers using AI somewhere in their hiring workflow, concentrated in sourcing, resume screening, and interview scheduling. The sourcing layer has effectively collapsed in cost and speed. That is the real change. Almost everything else being sold as 'AI in hiring' is downstream of it.",
      "For senior roles, the collapse cuts both ways. Identifying a long list of plausibly qualified candidates is now a commodity. So is writing an outreach sequence, drafting a job description, and producing a competency-mapped scorecard. The work that used to fill the first three weeks of a search now fills the first three days.",
      "The candidate side has moved at least as fast. Resume tailoring, interview prep, written assessments, and case responses are now AI-assisted by default at the senior level. A 2024 Gartner survey found 47% of candidates have already used AI to help with applications, and the figure climbs sharply among executives. Several large enterprises (Amazon, Anthropic, and a growing list of consultancies) have publicly restricted AI use during live interviews because it became impossible to assess the human underneath.",
      "Three failure modes are now showing up consistently in the searches we audit.",
      "First, synthetic candidates. Not just embellished resumes, but fully fabricated work histories, generated headshots, and AI-assisted live interviews using real-time prompting. The FBI and a stream of CISO reports through 2024 documented this at scale, originally tied to nation-state employment fraud, now spilling into ordinary white-collar roles. The defense is not a better ATS. It is structured reference work and verified credential checks, which most firms quietly stopped doing.",
      "Second, the shortlist that looks right and isn't. When sourcing is cheap, the bar for 'qualified enough to interview' silently drops. Hiring teams end up running more interviews against weaker slates and calling the noise 'optionality.' The fix is not more candidates. It is harder scope work before any name is surfaced.",
      "Third, the assessment that measures the model, not the person. AI-graded video interviews and AI-written case responses are now common enough that what you are scoring is often the candidate's tooling, not their judgment. For senior hires this is a category error.",
      "What the human work has to be now is narrower and harder: scope architecture, deep referencing through actual relationships, stakeholder choreography, and onboarding through day 90. None of that is automatable. All of it is what the fee was always supposed to be paying for.",
    ],
  },
  {
    id: "fractional-permanent",
    title: "Fractional is no longer a bridge.",
    dek: "The fractional executive market has crossed a line. For a growing share of mid-market and PE-backed companies, it is the operating model, not the gap before one.",
    category: "Fractional",
    readTime: "5 min",
    excerpt:
      "The shift is most visible in three seats: CMO, CFO, and Chief People Officer. Industry trackers including Chief Outsiders and BTA's fractional executive surveys put the U.S. fractional executive population in the tens of thousands and growing at double-digit rates year over year. Harvard Business Review's 2024 coverage of the fractional C-suite framed it as a structural rather than cyclical shift, and the pattern through 2025 has confirmed that read.",
    body: [
      "The shift is most visible in three seats: CMO, CFO, and Chief People Officer. Industry trackers including Chief Outsiders and BTA's fractional executive surveys put the U.S. fractional executive population in the tens of thousands and growing at double-digit rates year over year. Harvard Business Review's 2024 coverage of the fractional C-suite framed it as a structural rather than cyclical shift, and the pattern through 2025 has confirmed that read.",
      "The reasons are not mysterious. Senior talent burned by 2022 and 2023 layoffs is unwilling to re-bet on a single employer. Companies between $10M and $150M in revenue cannot afford a full-time CXO at current comp benchmarks but cannot grow without that caliber of judgment. Capital constraints have made every full-time senior hire a 12-month commitment the CEO does not want to make until the motion is proven.",
      "What has changed in 2024 and 2025 is the engagement pattern. The early fractional market was time-boxed: three months, six months, a defined deliverable. The current market is closer to ongoing part-time leadership: two or three days a week, multi-year, fully integrated into the executive team. That is a different operating model, and it works when three conditions are true.",
      "One: the scope is permanent, but the volume is not. A 60-person company genuinely needs a Chief People Officer's judgment, not a CPO's full week. Two: the company has earned the right to a specific operator with a specific playbook, and that operator is not available full-time at any price. Three: the CEO is willing to treat the fractional executive as a peer, not a vendor, including in board materials and comp structure.",
      "There are also three situations where fractional is the wrong answer, and the market is selling it anyway. When the role requires deep cultural authorship, such as a founding CHRO during a values reset, a CRO building a sales org from zero, or a CTO inheriting a platform rebuild. When the company is in active crisis and needs daily presence. And when 'fractional' is being used to avoid the comp conversation a full-time hire would force. In each case, fractional buys time and defers a decision the company will eventually have to make under worse conditions.",
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
      "The data on senior-level attrition tied to RTO is now solid enough to take seriously. A widely-cited University of Pittsburgh and Baylor study of S&P 500 firms found that companies implementing strict RTO mandates experienced significantly higher turnover among senior, longer-tenured, and higher-skilled employees, and notably slower backfilling. Gartner's 2024 research put the threatened attrition rate at around 35% among high-performers in companies with full-time office mandates. Gallup's State of the Global Workplace shows employee engagement at a decade low, with managers (the layer that actually holds the operating model together) hit hardest.",
      "The piece most HR leaders are still mis-reading is which leaders leave and why. The departures rarely cite the mandate directly. They cite the rollout: surprise announcements, exceptions granted to favored executives, inconsistent enforcement, the suspicion that the policy was about headcount reduction without saying so. Senior people read those signals quickly and start taking calls.",
      "There is also a recruiting consequence the slide decks do not capture. The senior talent pool has effectively bifurcated. A meaningful share of the most experienced operators, particularly in finance, engineering leadership, and product, will not engage with a five-day-in-office search at any comp level. That has not closed the market, but it has narrowed it, and the narrowing is concentrated in the seats most boards care about most.",
      "What VPs of HR should actually be doing in 2026 is three things. First, run a private attrition risk read on your top two layers of leadership specifically against the rollout, not the policy. Who watched it happen and quietly downgraded their commitment? Second, separate the policy from the messaging. Most of the damage is repairable through how the next twelve months are managed, not through reversing the mandate. Third, get honest about which roles you are willing to lose the best candidate for in order to hold the line on attendance. That is a defensible answer. 'We didn't realize we were making that trade' is not.",
    ],
  },
  {
    id: "boutique-vs-brand",
    title: "Why the next search you run should not go to a brand-name firm.",
    dek: "The structural advantages of boutique executive search compounded through 2024 and 2025. Going into 2026, the math on the global firms has stopped working for most mid-market and PE-backed mandates.",
    category: "Search",
    readTime: "6 min",
    excerpt:
      "Hunt Scanlon's 2025 market data shows the boutique and specialized segment of executive search continuing to take share from the global brands for the fifth consecutive year. AESC's own membership reporting tells the same story from inside the industry: the fastest growth is at firms under 50 consultants, not at the names every board still defaults to. There is a structural reason for it, and most search committees only discover it after the second failed engagement.",
    body: [
      "Hunt Scanlon's 2025 market data shows the boutique and specialized segment of executive search continuing to take share from the global brands for the fifth consecutive year. AESC's own membership reporting tells the same story from inside the industry: the fastest growth is at firms under 50 consultants, not at the names every board still defaults to. There is a structural reason for it, and most search committees only discover it after the second failed engagement.",
      "Start with off-limits. The global firms run a placement volume that mathematically blocks them from recruiting at the companies they serve. A firm that places hundreds of executives a year across the Fortune 1000 cannot touch any of those companies' talent for 12 to 24 months under standard off-limits clauses. By 2025, that effectively removed a meaningful slice of the senior talent universe from those firms' addressable pool. Boards rarely ask the question on the front end. They feel it on the back end when the shortlist is thinner than the brand suggested.",
      "Then there is who actually runs the search. The pitch is delivered by a name partner. The work is done by an associate two years out of business school. That model is not a secret anymore, and in 2025 it became one of the standard RFP questions: who specifically will be on the phone with candidates, and what is their average tenure in the seat we are filling? Boutique firms answer that question with the same person who sold the engagement. The global firms answer it with an org chart.",
      "Process is the third issue. At scale, search becomes a manufactured product: a standardized scorecard, a templated competency model, a pipeline report that looks the same whether the role is a divisional CFO at a $2B company or a Chief People Officer at a $200M one. That sameness is what scale requires. It is also what flattens the judgment that a senior hire is actually buying.",
      "The cost argument has flipped too. Once you normalize for the retainer plus the third-installment fee plus the off-limits ripple cost (the talent you can no longer recruit at the firms that referred you in), boutique engagements are routinely 20 to 30 percent less expensive end-to-end on a comparable senior search. The reason large firms have held the premium this long is brand insurance for the search committee, not better outcomes.",
      "Where the global firms still win, and where boards should still use them, is genuinely cross-border CEO and board-level work where global insurance and a published methodology matter to a regulator, an activist investor, or a foreign listing. For everything else (CFO, CHRO, CRO, divisional president, key VP), the boutique math has been clearer than the brand math for at least two years now, and 2026 is the year search committees should stop defaulting and start choosing.",
    ],
  },
  {
    id: "time-to-hire",
    title: "Hiring a senior leader in 2026 takes 94 days. Most of that is not searching.",
    dek: "Time-to-hire for senior roles has not improved despite AI sourcing. The bottleneck moved. The companies shortening the cycle are doing specific things, and almost none of it has to do with technology.",
    category: "Talent",
    readTime: "6 min",
    excerpt:
      "LinkedIn's 2025 Talent Trends and Workable's benchmark data both put median time-to-fill for senior and executive roles in the 80 to 100 day range, and rising. AI has compressed the sourcing layer by an order of magnitude, but total cycle time has barely moved. That is the paradox everyone in talent acquisition is quietly grappling with. The bottleneck is not finding people. It has not been finding people for two years.",
    body: [
      "LinkedIn's 2025 Talent Trends and Workable's benchmark data both put median time-to-fill for senior and executive roles in the 80 to 100 day range, and rising. AI has compressed the sourcing layer by an order of magnitude, but total cycle time has barely moved. That is the paradox everyone in talent acquisition is quietly grappling with. The bottleneck is not finding people. It has not been finding people for two years.",
      "Four things actually consume the calendar.",
      "Scope iteration is the first and largest. A 2025 Gartner study of executive searches found the average senior role had its scorecard materially revised at least twice between kickoff and offer, usually after the first round of interviews surfaced something the hiring team had not articulated. Every revision resets the funnel. The fix is not faster sourcing. It is harder scope work before the first conversation, including the uncomfortable question of what the company is actually trying to buy that it does not currently have.",
      "Interview choreography is the second. Senior hires now routinely involve seven to nine decision-makers across distributed time zones, and the calendar math alone adds two to three weeks. The companies shortening this are not running more interviews. They are running fewer, longer, better-prepared ones, and they are giving one person (usually the hiring manager, occasionally the CEO) the authority to call the slate done when it is done.",
      "Compensation negotiation is the third, and 2025 made it materially harder. Comp benchmarks reset twice during the year in several functions (AI engineering leadership and senior finance especially), and candidates with active offers have leverage they did not have in 2022. The companies that close cleanly do their own comp work up front rather than discovering the market through three rounds of counteroffer.",
      "Reference and credential verification is the fourth, and the time spent here has roughly doubled since 2023. The synthetic-candidate problem (documented by the FBI through 2024 and now extending well beyond nation-state cases) means every senior hire warrants structured back-channel referencing and verified credentials, not the perfunctory two-call ritual most firms reverted to during the 2021 talent crunch.",
      "There is also a 2025 phenomenon worth naming: second-offer attrition. A meaningful share of senior hires made during long cycles in 2024 and 2025 resigned inside 90 days because comp moved during the search and a better offer landed after acceptance. The cycle did not just take longer. It cost more, twice.",
      "The practical move for VPs of HR going into 2026 is to stop measuring time-to-hire as one number and start measuring it in four: scope-to-slate, slate-to-final, final-to-offer, and offer-to-day-90 retention. The total only matters if the last number holds.",
    ],
  },
  {
    id: "sow-engagement",
    title: "Statement of work is the engagement model nobody is asking for, and most companies need.",
    dek: "Retained search and fractional leadership are not the only two shapes a senior talent engagement can take. For a specific class of problem, a defined-scope SOW is the right answer, and almost no firm offers it because it caps revenue.",
    category: "Fractional",
    readTime: "6 min",
    excerpt:
      "Procurement has spent the last three years pushing every category of advisory spend (legal, consulting, technology, and now talent) toward defined-scope, fixed-fee engagements. The pattern is clearest at PE-backed and mid-market companies, where open-ended retainers no longer survive a portfolio review. Talent advisory is the last category to feel it, and 2026 is the year the question gets asked at most search RFP meetings: can we do this as an SOW instead?",
    body: [
      "Procurement has spent the last three years pushing every category of advisory spend (legal, consulting, technology, and now talent) toward defined-scope, fixed-fee engagements. The pattern is clearest at PE-backed and mid-market companies, where open-ended retainers no longer survive a portfolio review. Talent advisory is the last category to feel it, and 2026 is the year the question gets asked at most search RFP meetings: can we do this as an SOW instead?",
      "The short answer is yes, for a specific class of problem, and most firms will not offer it because the model caps revenue. A retained search bills as a percentage of comp regardless of how hard the work actually was. An SOW bills for the scope you actually agreed to. The economics favor the buyer when the scope is well-defined and the firm when the scope is genuinely ambiguous. Honest firms tell you which one you have before quoting.",
      "Five engagement shapes work cleanly as SOW.",
      "One: a single named VP or director search bundled with structured onboarding through day 90, fixed fee, defined deliverable. The fee is typically lower than a comparable retained search and the firm carries onboarding accountability the retained model does not.",
      "Two: a leadership team assessment. Three to six executives, a defined methodology, a written read on bench strength and succession risk, delivered in 60 days. Most boards have never commissioned one because no firm in their rolodex sells it as a discrete product.",
      "Three: a compensation framework rebuild for the top two layers. Benchmark, leveling, equity philosophy, a board-ready document. Eight to twelve weeks, fixed price.",
      "Four: a succession plan for the executive team. Internal candidate identification, gap analysis, development paths for the ready-in-two-years cohort, and a documented external bench for the seats where no internal candidate exists.",
      "Five: a search audit. An independent read on a failed or stalled engagement (whether the firm is yours or someone else's), including what the scope missed, what the slate lacked, and what to do next. This is the engagement most companies wish they had run before starting search number two.",
      "Where SOW is the wrong shape: any engagement where the scope genuinely cannot be defined up front (a CEO search at a company in transition, a build from zero of a function the company has never had), and any engagement where the value is in the ongoing relationship rather than a discrete deliverable (an embedded fractional CHRO, a multi-quarter advisory seat).",
      "For VPs of HR and CFOs sitting on advisory budgets in 2026, the practical move is to stop asking 'retained or fractional?' and start asking 'what is the smallest, cleanest scope of work that gets us the outcome we actually need?' For a meaningful share of senior talent problems, the honest answer is an SOW that no one has offered you yet.",
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
        description="Operator-grade observations on executive search, senior hiring, fractional leadership, and workplace strategy, grounded in current market data."
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
            Short, current observations from inside live engagements, grounded in the data
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
