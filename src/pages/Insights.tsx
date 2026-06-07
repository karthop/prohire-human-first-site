import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type Category = "Search" | "Talent" | "Growth" | "Career" | "Operator notes";

interface Article {
  id: string;
  title: string;
  dek: string;
  excerpt: string[];
  category: Category;
  date: string;
}

const articles: Article[] = [
  {
    id: "end-of-keyword-search",
    title: "The end of keyword search.",
    dek: "Why committed executive search has to re-earn its premium, and what that actually looks like in practice.",
    excerpt: [
      "A lot of what is sold as committed or strategic executive search today is a sourcing motion dressed up in advisory language. A database query, a partner-fronted pitch, and a junior team running the actual work behind the curtain. It is worth naming, because plenty of firms still do the work the right way and they are getting confused with the firms that do not.",
      "Boards are starting to notice. The premium fee survived as long as two assumptions held: that the firm's network was meaningfully closed, and that its judgment was meaningfully experienced. Both assumptions are now testable. LinkedIn made the first one transparent. AI sourcing tools made the second one auditable. A fair number of firms struggle with the test.",
      "The work that justifies the fee is not the sourcing. It is the scope architecture at intake, the deep referencing through actual relationships rather than supplied lists, the candid read on candidates the client likes for the wrong reasons, and the stakeholder choreography around a difficult hire. That work is harder to scale, harder to package, and harder to delegate to a 26-year-old associate. Which is exactly why it is what you are paying for.",
      "The firms that will keep commanding the premium over the next five years are the ones willing to be smaller on purpose. They will run fewer searches per partner, they will turn down assignments that do not fit, and they will be in the room for the parts of the process that matter rather than handing those off the moment the engagement letter signs.",
      "If you are a board member or a CEO buying executive search right now, the diligence question is no longer 'what is your network?' Every credible firm has a comparable surface network. The question is 'who, by name, is doing the work on my search after week two, and how much of their time am I getting?' If the answer is vague, you already have your answer.",
    ],
    category: "Search",
    date: "2026-04-22",
  },
  {
    id: "fractional-or-full-time",
    title: "Fractional, full-time, or none of the above.",
    dek: "A decision framework for founders weighing senior leadership hires against runway, stage, and the work that actually needs to happen.",
    excerpt: [
      "The default question, 'should we hire a CRO?', is almost always the wrong starting point. The right question is, 'what does the next twelve months of revenue motion need to look like, and what is the smallest senior intervention that gets us there?' The framing matters because the default question forces a binary answer, and the binary is wrong roughly half the time.",
      "Fractional makes sense in three patterns. When the runway cannot yet carry a full-time CXO at market comp. When the company needs a specific operator's playbook for a defined window, such as a pricing reset, a GTM redesign, or a finance function rebuild. And when the role is real but the underlying motion is not yet validated, meaning a full-time hire would be optimizing a system that is still being designed.",
      "Full-time makes sense when three different conditions hold. The work is permanent, not project-shaped. The comp is supportable on the current plan without forcing a round. And the company has earned the right to a specific person who will not work fractionally at any price. The third condition is the one most founders skip, and it is the one that determines whether the search is realistic or aspirational.",
      "There is a third answer that more founders should consider than do: none of the above. Sometimes the honest read is that the company does not need a CXO yet. It needs a senior individual contributor, or a strong director, or a few months of advisory time from someone who has run the function before. Hiring a CXO into a company that is not ready for one is one of the most expensive mistakes a founder can make, because the wrong senior hire takes 12 to 18 months to unwind and costs the company momentum it may not get back.",
      "The discipline is to separate the work from the title. Write down the four or five outcomes that have to be true twelve months from now. Then ask which configuration of human time, at what seniority, actually delivers those outcomes. The title falls out of that conversation. It should not lead it.",
    ],
    category: "Search",
    date: "2026-03-18",
  },
  {
    id: "onboarding-is-the-search",
    title: "Onboarding is the search.",
    dek: "Why the first ninety days inside the role decide whether a placement is a hire or a write-off, and what changes when the firm stays in the room.",
    excerpt: [
      "Most firms quietly treat the offer letter as the finish line. The placement is announced, the fee invoices, and the firm disappears. Eighteen months later, the placement leaves and no one is sure why. The firm's reporting will record the search as successful, because the metric the firm tracks ends at start date.",
      "The honest answer, most of the time, is that onboarding was not part of the engagement. Scope was right, sourcing was right, the candidate was right, and then the company handed them a laptop and a Slack invitation and called it integration. Senior leaders fail in the first year for predictable reasons: an unspoken disagreement with the CEO about scope, a peer relationship that was never reset after their arrival, or a board member with a private mandate the new hire never heard about.",
      "The hire is finished at day ninety, not at day one. Structured 30, 60, and 90-day check-ins, run with both the placement and the hiring executive, surface the issues that destroy placements before they become unrecoverable. The conversations are short, they are uncomfortable on purpose, and they are the cheapest insurance the engagement can buy.",
      "The check-ins also keep the firm honest about the work it actually did. If a placement is struggling at day 60 because the role was mis-scoped at intake, that is information the firm should have to sit with. The firms that are willing to be present for that conversation are the firms that learn. The firms that disappear at start date keep making the same mistakes on behalf of the next client.",
      "For the company, the practical move is to write onboarding accountability into the engagement letter before signing. Define the check-in cadence, the participants, and what happens if the relationship is in trouble at day 90. A firm that resists those terms is telling you, in writing, where their work stops. Pay attention to that.",
    ],
    category: "Search",
    date: "2026-02-12",
  },
  {
    id: "scope-before-sourcing",
    title: "Scope before sourcing.",
    dek: "The single most common reason senior searches fail, and the one conversation that prevents it.",
    excerpt: [
      "We have done the post-mortem on dozens of failed senior searches over the years, our own and others'. The same pattern shows up almost every time. The role was mis-scoped at intake, and no one re-wrote it before sourcing began. Everything downstream then optimized against the wrong target.",
      "Mis-scoped means the job description is a wishlist of every quality the leadership team admires, rather than a structured statement of the outcomes the leader must own and the constraints they must operate within. The shortlist that follows is unfocused. The interviews are exploratory rather than evaluative. The offer, when it comes, is a compromise that nobody in the room will defend out loud.",
      "The conversation that prevents this is uncomfortable. It involves telling a CEO that the role they have written cannot be filled by a single human, or that two of the listed requirements contradict each other, or that the comp band they have approved does not match the market for what they are actually asking for. It is also, almost always, the most valuable hour of the engagement.",
      "The output of that hour is a one-page scope document that the entire interviewing team agrees to before the first candidate is contacted. Three to five outcomes the leader must produce in the first twelve months. The two or three constraints that make the role unusually hard. The non-negotiables and, more importantly, the requirements that look non-negotiable but are not. That page becomes the rubric for every interview, every reference, and every offer conversation.",
      "Companies that do this work upfront close searches faster, with cleaner offers, and with hires that survive past the eighteen-month mark. Companies that skip it pay for the same search twice. The math on that is not subtle, and yet the temptation to start sourcing on day one, before the scope is honest, is the single hardest discipline to hold in this business.",
    ],
    category: "Search",
    date: "2026-01-08",
  },
  {
    id: "hiring-through-a-capital-event",
    title: "Hiring through a capital event.",
    dek: "What changes about senior hiring when the cap table changes, and how to build the team the next round actually needs.",
    excerpt: [
      "The team that got the company to a Series B is rarely the team that takes it to a Series D. This is not a criticism of the original team. It is a statement about scope. Different stages require different operators, and the most common failure mode is hiring the previous stage's team again, one round late.",
      "A capital event is also a forcing function for honesty. The diligence the lead investor runs on the team is, in effect, a third-party scope audit. Companies that have been deferring leadership decisions for two quarters often have those decisions made for them at the term sheet, in the form of a board-mandated CFO search or a CRO replacement written into the closing conditions.",
      "The work begins six months before the round, not six months after. By the time the wire hits, the senior plan should already be on paper. The named-target list for the priority seats should already be sourced. The first conversations, framed as exploratory, should already be underway. Founders who wait until after close to start the searches lose the first six to nine months of the new capital to recruiting cycles, and the round runs out faster than the model said it would.",
      "There is a second-order effect worth naming. The senior people you can hire in the four weeks after a round announces are not the same people you can hire in the four months before. Public capital events compress the market. Every search firm in town knows the company just raised, every passive candidate gets ten inbounds the same week, and the negotiating leverage shifts hard toward the candidate. The companies that recruit ahead of the announcement get materially better outcomes.",
      "The discipline is to treat the round and the team as one plan, not two. The pitch the founder takes to the board for the round should include the leadership map for the twelve months after close, with names, sequence, and expected cost. If that map does not exist when the term sheet arrives, the round is, in a real sense, only half-prepared.",
    ],
    category: "Talent",
    date: "2025-11-15",
  },
  {
    id: "career-capital",
    title: "Career capital.",
    dek: "Why the most consequential moves in a senior career should be planned years before they are made.",
    excerpt: [
      "Senior careers compound. The next role is recruited from the last role. The next board seat is offered to the operator who has been visibly board-ready for eighteen months. The next exit option is structured by the choices made three roles ago. None of this is accidental, and very little of it is improvised at the moment of decision.",
      "Most senior leaders, however, treat career decisions reactively. They evaluate inbound conversations as they arrive, rather than constructing a deliberate portfolio of positioning, relationships, and target experiences. The market does not reward this. The leaders who land the consequential roles, and the consequential boards, have been building toward them for years in ways that look like luck from the outside.",
      "Career advisory at this level is the work of building the position before it is needed. Positioning means having a sharp, defensible answer to 'what kind of operator are you?' that is consistent across your public surface, your private references, and the way recruiters describe you when you are not in the room. Narrative means knowing which one or two stories from the last role you want to be known for, and making sure those stories actually reach the people who matter for the next role.",
      "Network means building, before you need them, the dozen or so relationships that will surface the consequential opportunities. Those relationships are not LinkedIn connections. They are senior operators, two or three search partners with real reach in your sector, and a small number of board members and investors who would take a call on you without thinking about it. None of that gets built in a quarter.",
      "Target landscape means knowing, with specificity, the twenty or thirty roles that would be the right next move and the conditions under which each of them is likely to open. That list is updated quarterly, quietly, in the background. When one of them opens, you are not starting from scratch. You are activating six to twenty-four months of preparation.",
      "The leaders who do this work look, from the outside, like they are perpetually being offered the right thing at the right time. They are not. They are running a process. The earlier in a senior career that process starts, the more consequential the eventual moves become.",
    ],
    category: "Career",
    date: "2025-10-04",
  },
];

const filters: ("All" | Category)[] = ["All", "Search", "Talent", "Growth", "Career", "Operator notes"];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

const readTimeFor = (paragraphs: string[]) => {
  const words = paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 230));
  return `${minutes} min`;
};

export default function Insights() {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const featured = articles[0];
  const rest = articles.slice(1);
  const filtered = useMemo(
    () => (filter === "All" ? rest : rest.filter((a) => a.category === filter)),
    [filter, rest],
  );

  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="Insights | proHIRE resources"
        description="Plain-spoken notes on executive search, professional hiring, fractional work, growth advisory, and senior careers."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">Insights</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.05] max-w-4xl">
            The Work Behind the Hire.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            Straight talk on why searches fail, how growth actually happens, and what makes a career move worth the risk.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Featured · {featured.category}</div>
            <div className="text-sm text-muted-foreground">
              {formatDate(featured.date)} · {readTimeFor(featured.excerpt)} read
            </div>
          </div>
          <article className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-[1.1]">{featured.title}</h2>
            <p className="font-serif text-xl text-muted-foreground leading-snug">{featured.dek}</p>
            <div className="space-y-4 text-foreground text-lg font-light leading-relaxed">
              {featured.excerpt.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="py-12 lg:py-16">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">All notes</div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                The archive.
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
            {filtered.map((a) => (
              <Collapsible key={a.id} asChild>
                <article className="bg-background p-8 lg:p-10 flex flex-col group">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">{a.category}</div>
                  <h3 className="font-serif text-2xl text-foreground leading-snug mb-3">{a.title}</h3>
                  <p className="font-serif text-base text-muted-foreground leading-snug mb-4">{a.dek}</p>
                  <p className="text-muted-foreground font-light leading-relaxed">{a.excerpt[0]}</p>
                  <CollapsibleContent className="space-y-4 pt-4 text-muted-foreground font-light leading-relaxed">
                    {a.excerpt.slice(1).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </CollapsibleContent>
                  <CollapsibleTrigger className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors [&[data-state=open]>svg]:rotate-180">
                    <span>{a.readTime} read</span>
                    <span className="flex items-center gap-2">
                      <span className="group-data-[state=open]:hidden">Read</span>
                      <span className="hidden group-data-[state=open]:inline">Close</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform" />
                    </span>
                  </CollapsibleTrigger>
                </article>
              </Collapsible>
            ))}
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
