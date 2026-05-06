import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const principles = [
  {
    title: "Judgment over volume",
    body: "The right hire, the right move, the right counsel, usually arrived at by saying no to the obvious answer. Most of our work begins where a keyword search ends.",
  },
  {
    title: "Operator's lens",
    body: "Two decades inside revenue, delivery, and talent functions, at companies from Series A to Fortune 50. We've sat in the seats we now advise.",
  },
  {
    title: "Discretion as a default",
    body: "Boards, founders, and senior candidates trust us with sensitive transitions. Confidentiality isn't a feature, it's the practice.",
  },
  {
    title: "Candor with care",
    body: "If we're not the right fit, we'll say so. If a search is mis-scoped, we'll re-scope it. The relationship outlasts the engagement.",
  },
];

const chapters = [
  {
    label: "Foundation",
    years: "2003–2014",
    title: "Learning the trade at scale.",
    body: "Early years inside Randstad and Kelly Services — engineering staffing, executive accounts, and the mechanics of placing senior talent at velocity. Then PIC Group and NobleTek: marketing, business development, and global engineering services across automotive, aerospace, and industrial clients.",
    learned: "Volume teaches you what the work is. Senior judgment teaches you what the work is for.",
  },
  {
    label: "Senior delivery",
    years: "2014–2021",
    title: "Building practices, not just placements.",
    body: "VP and Director-level roles at Pyramid Consulting, 3i People, and Quest Group — running BD and delivery for global staffing firms serving Fortune 500 buyers. The work shifted from individual searches to architecting the teams, processes, and partnerships behind them.",
    learned: "The hardest work in talent isn't the placement. It's the system that makes the placement repeatable.",
  },
  {
    label: "Inside the buyer",
    years: "2021–2022",
    title: "Two years at Amazon.",
    body: "Senior Talent Acquisition Consultant for the Alexa product organization — Senior and Principal TPM hiring at one of the most demanding bars in tech. The view from inside a hyperscaler reshaped how we now advise founders and CHROs on what \"good\" actually looks like.",
    learned: "The bar is not what you think it is. And once you've seen it, you can't un-see it.",
  },
  {
    label: "Revenue leadership",
    years: "2023–2024",
    title: "EVP of Sales for an NMSDC Award-winning MBE consulting firm.",
    body: "A consulting engagement leading sales for a technology consulting firm — closing the loop between go-to-market strategy and the human capital required to execute it.",
    learned: "Strategy without staffing is theater. The two cannot be separated.",
  },
  {
    label: "The practice today",
    years: "2021–Present",
    title: "proHIRE resources.",
    body: "A boutique executive talent and growth advisory firm in Atlanta, serving founders, CEOs, and boards from Series A through Fortune 500, with revenue scales from $15M to $150B. Four integrated practices: Executive Search, Talent Solutions, Growth Acceleration, and Career Advisory.",
    learned: "The boutique model exists to do the work the larger firms have stopped doing.",
  },
];

const situations = [
  { tag: "Series C · Fintech", body: "CEO needed a fractional CRO with the playbook for $5M → $50M ARR before the next round." },
  { tag: "PE-backed · Industrials", body: "Year-one value-creation plan required finance and people functions rebuilt in two quarters." },
  { tag: "Founder-led · SaaS", body: "Confidential CEO succession during a refinance — off-books search, board-only visibility." },
  { tag: "Series B · Logistics", body: "Enterprise account penetration play — five national-chain meetings in 30 days, two contracts inside the quarter." },
  { tag: "Post-exit · Founder", body: "Multi-year board portfolio strategy following a strategic acquisition." },
  { tag: "Sitting CXO · Healthcare", body: "Confidential next-chapter advisory while still in seat — eighteen-month positioning to a CEO mandate." },
];

const boutiqueReasons = [
  {
    h: "Partner attention, every engagement.",
    b: "There is no junior staffing layer. The senior who pitches the engagement is the senior executing it. This is the single most consequential difference between boutique and large-firm work — and the easiest one to verify.",
  },
  {
    h: "No leverage model to feed.",
    b: "Large search and consulting firms have economics that require staffing engagements with junior associates. We don't. Our economics are aligned to do the work right, not to maximize headcount on the project plan.",
  },
  {
    h: "The relationship outlasts the engagement.",
    b: "Boutique work compounds across years and roles. Most of our engagements come from clients we've worked with at three different companies, in three different stages, for three different reasons. That's the model — and it only works if the work is honest.",
  },
];

const beliefs = [
  "You are more than a keyword search.",
  "Hiring is a leadership act, not a transaction.",
  "The best searches are scoped before they're sourced.",
  "A fractional executive, well-placed, can outperform a full-time hire mis-placed.",
  "Career capital compounds, but only when invested deliberately.",
];

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="About | proHIRE resources"
        description="Atlanta-based boutique executive talent and growth advisory practice founded by Chris Betz. Twenty years of operator-level judgment for founders, CEOs, and boards."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial py-20 lg:py-32">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">About</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.05] max-w-4xl">
            Senior judgment, applied quietly, to the moves that matter most.
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-primary-foreground/80 font-light max-w-3xl leading-relaxed">
            proHIRE resources is a boutique consulting and executive talent practice, built
            for founders and operators who don't want a vendor, and don't need a generalist.
            We work close to the decision, not adjacent to it.
          </p>
        </div>
      </section>

      {/* Founder narrative */}
      <section className="py-24 lg:py-32">
        <div className="container-editorial grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Founder</div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">Chris Betz</h2>
            <p className="mt-3 text-muted-foreground font-light">CEO, proHIRE resources LLC</p>
            <p className="mt-6 text-sm text-muted-foreground font-light leading-relaxed">
              Atlanta-based. Twenty years at the intersection of executive search,
              revenue leadership, and operator strategy, across Amazon, Pyramid Consulting,
              Randstad, and Kelly.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6 text-foreground font-light text-lg leading-relaxed">
            <p className="font-serif text-2xl lg:text-3xl text-foreground leading-snug">
              "You are more than a keyword search."
            </p>
            <p>
              That sentence is the practice in a single line. Most of what's labeled
              "executive search" today is a sourcing motion dressed up in advisory language —
              a database query with a glossy deck. The work that actually moves a company is
              slower, more specific, and almost always begins with re-scoping the question
              the client first asked.
            </p>
            <p>
              proHIRE resources was built to do that work. We sit with founders before the
              job description exists. We help CFOs and CHROs decide whether a role should be
              full-time, fractional, or restructured entirely. We advise senior professionals
              through transitions where the wrong move costs a decade of compounding.
            </p>
            <p>
              I have spent twenty years on every side of this work — staffing floors at
              Randstad and Kelly, BD and delivery leadership at Pyramid and Quest, senior
              TPM hiring inside Amazon, and sales leadership in technology consulting. Each
              of those seats taught the same lesson from a different angle: the firms that
              get senior talent right are not the ones with the largest databases. They are
              the ones with the most disciplined judgment.
            </p>
            <p>
              The boutique model exists to do the work the larger firms have stopped doing —
              re-scoping the role before sourcing it, referencing candidates through people
              they did not provide, and staying in the engagement through the first ninety
              days inside the seat. It is harder to scale. That is the point.
            </p>
            <p>
              The throughline across two decades has been the same:{" "}
              <em className="text-foreground">people are the strategy</em>. Everything else
              is execution.
            </p>
          </div>
        </div>
      </section>

      {/* Operating principles */}
      <section className="py-24 bg-secondary/40 border-y border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">How we work</div>
              <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-[1.1]">
                Four principles, held without exception.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4 text-muted-foreground font-light text-lg leading-relaxed">
              <p>
                These aren't taglines. They are the filters we use to decide which engagements
                to take, which candidates to introduce, and which advice to give, even when
                the easier answer is more profitable.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {principles.map((p) => (
              <div key={p.title} className="bg-background p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career chapters, narrative, not resume */}
      <section className="py-24 lg:py-32">
        <div className="container-editorial">
          <div className="max-w-3xl mb-20">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">The arc</div>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground leading-[1.1]">
              Five chapters, one consistent question:<br />
              <span className="text-muted-foreground">what does this leader actually need?</span>
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {chapters.map((c, i) => (
              <div key={c.label} className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-4 lg:flex-col lg:gap-2">
                    <div className="font-serif text-5xl lg:text-6xl text-foreground/20 leading-none tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</div>
                      <div className="text-sm text-muted-foreground mt-1 tracking-wide">{c.years}</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-9 lg:border-l border-border lg:pl-12">
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground leading-tight mb-4">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground font-light text-lg leading-relaxed">{c.body}</p>
                  <p className="mt-4 font-serif italic text-foreground/80 text-base leading-relaxed">
                    What I learned: {c.learned}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">Beliefs</div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
              What we've come to believe, after twenty years.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
              {beliefs.map((b, i) => (
                <li key={b} className="py-6 flex gap-6 items-baseline">
                  <span className="font-serif text-sm text-primary-foreground/50 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl lg:text-2xl leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="py-24">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Beyond the practice</div>
            <h2 className="font-serif text-3xl text-foreground leading-tight">Networks &amp; civic</h2>
            <p className="mt-4 text-muted-foreground font-light leading-relaxed">
              The communities and boards that keep the work honest, current, and connected to
              the city we call home.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-8 gap-y-8 text-foreground font-light leading-relaxed">
            <div>
              <div className="font-serif text-lg text-foreground">C-Level Advisory</div>
              <p className="text-muted-foreground text-sm mt-1">Consulting Specialist · CXO advisory and capital network.</p>
            </div>
            <div>
              <div className="font-serif text-lg text-foreground">The Curated Network™</div>
              <p className="text-muted-foreground text-sm mt-1">Member of the senior leadership community.</p>
            </div>
            <div>
              <div className="font-serif text-lg text-foreground">FinTech Atlanta</div>
              <p className="text-muted-foreground text-sm mt-1">Advisor and advocate for the city's fintech ecosystem.</p>
            </div>
            <div>
              <div className="font-serif text-lg text-foreground">Inspiredu</div>
              <p className="text-muted-foreground text-sm mt-1">Emeritus Board Member · digital literacy and access in Atlanta.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
