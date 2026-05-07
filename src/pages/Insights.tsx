import { useMemo, useState } from "react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

type Category = "Search" | "Talent" | "Growth" | "Career" | "Operator notes";

interface Article {
  id: string;
  title: string;
  dek: string;
  excerpt: string[];
  category: Category;
  readTime: string;
  date: string;
}

const articles: Article[] = [
  {
    id: "end-of-keyword-search",
    title: "The end of keyword search.",
    dek: "One perspective on why committed executive search has to re-earn its premium, and what that looks like in practice.",
    excerpt: [
      "A lot of what's sold as committed or strategic executive search today is a sourcing motion dressed up in advisory language — a database query, a partner-fronted pitch, and a junior team running the actual work behind the curtain. It's worth naming, because plenty of firms still do the work the right way.",
      "Boards are starting to notice. The premium fee survived as long as the assumption that the firm's network was meaningfully closed and its judgment meaningfully experienced. Both assumptions are now testable, and a fair number of firms struggle with the test.",
      "The work that justifies the fee is not the sourcing. It is the scope architecture, the deep referencing, and the stakeholder choreography around a difficult hire. That work is harder to scale, harder to package, and harder to delegate. Which is exactly why it is what you are paying for.",
    ],
    category: "Search",
    readTime: "6 min",
    date: "2026-04-22",
  },
  {
    id: "fractional-or-full-time",
    title: "Fractional, full-time, or none of the above.",
    dek: "A decision framework for founders weighing senior leadership hires against runway and stage.",
    excerpt: [
      "The default question , 'should we hire a CRO?' , is almost always the wrong starting point. The right question is 'what does the next twelve months of revenue motion need to look like, and what is the smallest senior intervention that gets us there?'",
      "Fractional makes sense in three patterns: when the runway can't carry a full-time CXO yet, when the company needs a specific operator's playbook for a defined window, and when the role is real but the underlying motion isn't validated.",
      "Full-time makes sense when the work is permanent, the comp is supportable, and the company has earned the right to a specific person who will not work fractionally. There is a third answer , none of the above , that more founders should consider than do.",
    ],
    category: "Search",
    readTime: "5 min",
    date: "2026-03-18",
  },
  {
    id: "onboarding-is-the-search",
    title: "Onboarding is the search.",
    dek: "Why the first ninety days inside the role decide whether a placement is a hire or a write-off.",
    excerpt: [
      "Most firms quietly treat the offer letter as the finish line. The placement is announced, the fee invoices, and the firm disappears. Eighteen months later, the placement leaves and no one is sure why.",
      "The honest answer, most of the time, is that onboarding was not part of the engagement. Scope was right, sourcing was right, the candidate was right , and then the company handed them a laptop and a Slack invitation and called it integration.",
      "The hire is finished at day ninety, not at day one. Structured 30/60/90-day check-ins, with both the placement and the hiring executive, surface the issues that destroy placements before they become unrecoverable. They also keep the firm honest about the work it actually did.",
    ],
    category: "Search",
    readTime: "4 min",
    date: "2026-02-12",
  },
  {
    id: "scope-before-sourcing",
    title: "Scope before sourcing.",
    dek: "The single most common reason senior searches fail , and the one conversation that prevents it.",
    excerpt: [
      "We have done the post-mortem on dozens of failed senior searches over the years, our own and others'. The same pattern shows up almost every time: the role was mis-scoped at intake, and no one re-wrote it before sourcing began.",
      "Mis-scoped means the job description is a wishlist of every quality the leadership team admires, rather than a structured statement of the outcomes the leader must own and the constraints they must operate within. The shortlist that follows is unfocused; the interviews are exploratory; the offer is a compromise.",
      "The conversation that prevents this is uncomfortable. It involves telling a CEO that the role they have written cannot be filled by a single human, or that two of the listed requirements contradict each other. It is also, almost always, the most valuable hour of the engagement.",
    ],
    category: "Search",
    readTime: "5 min",
    date: "2026-01-08",
  },
  {
    id: "hiring-through-a-capital-event",
    title: "Hiring through a capital event.",
    dek: "What changes about senior hiring when the cap table changes , and how to build the team the next round actually needs.",
    excerpt: [
      "The team that got the company to a Series B is rarely the team that takes it to a Series D. This is not a criticism of the original team; it is a statement about scope. Different stages require different operators, and the most common failure mode is hiring the previous stage's team again, one round late.",
      "A capital event is also a forcing function for honesty. The diligence the lead investor runs on the team is, in effect, a third-party scope audit. Companies that have been deferring leadership decisions for two quarters often have those decisions made for them at the term sheet.",
      "The work begins six months before the round, not six months after. By the time the wire hits, the senior plan should already be on paper, the named-target list should already be sourced, and the first conversations should already be underway.",
    ],
    category: "Talent",
    readTime: "6 min",
    date: "2025-11-15",
  },
  {
    id: "career-capital",
    title: "Career capital.",
    dek: "Why the most consequential moves in a senior career should be planned years before they're made.",
    excerpt: [
      "Senior careers compound. The next role is recruited from the last role. The next board seat is offered to the operator who has been visibly board-ready for eighteen months. The next exit option is structured by the choices made three roles ago.",
      "Most senior leaders treat career decisions reactively , as inbound conversations to be evaluated, not as a portfolio to be deliberately constructed. The market does not reward this. The leaders who land the consequential roles, and the consequential boards, have been building toward them for years.",
      "Career advisory at this level is the work of building the position before it is needed. Positioning, narrative, network, and target landscape , done in a quiet quarter, not under pressure when the inbound call comes.",
    ],
    category: "Career",
    readTime: "5 min",
    date: "2025-10-04",
  },
];

const filters: ("All" | Category)[] = ["All", "Search", "Talent", "Growth", "Career", "Operator notes"];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

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
              {formatDate(featured.date)} · {featured.readTime} read
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
            <div className="pt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Full essay forthcoming.
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
              <article key={a.id} className="bg-background p-8 lg:p-10 flex flex-col">
                <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">{a.category}</div>
                <h3 className="font-serif text-2xl text-foreground leading-snug mb-3">{a.title}</h3>
                <p className="font-serif text-base text-muted-foreground leading-snug mb-4">{a.dek}</p>
                <p className="text-muted-foreground font-light leading-relaxed flex-1">{a.excerpt[0]}</p>
                <div className="mt-6 pt-4 border-t border-border text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {formatDate(a.date)} · {a.readTime} read
                </div>
              </article>
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
