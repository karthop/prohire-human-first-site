import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CTABand } from "@/sections/CTABand";
import { Seo } from "@/components/Seo";
import { FaqList } from "@/components/FaqList";
import { GridFill } from "@/components/GridFill";

const executiveServices = [
  {
    heading: "Career positioning and narrative",
    body: "We work on how you present your experience, including your resume, your personal LinkedIn profile, and the way you explain what you have run and what you want next.",
  },
  {
    heading: "Search strategy",
    body: "We build a plan for the roles and companies worth pursuing, how to reach the people who make those decisions, and which search firms and networks are relevant to your background.",
  },
  {
    heading: "Interview and offer preparation",
    body: "We prepare you for senior interviews and board conversations, and we work through compensation structures and multi-party offers before you have to respond to them.",
  },
  {
    heading: "Board readiness",
    body: "We help experienced executives prepare for board roles, including how to present governance experience and how to build the relationships that lead to a first seat.",
  },
  {
    heading: "Decisions about what comes next",
    body: "We advise on whether to stay, move, take an interim role, or step into advisory and board work. Sometimes the right answer is to stay where you are, and we will say so.",
  },
];

const earlyServices = [
  {
    heading: "Personal LinkedIn profile strategy",
    body: "We build a profile that recruiters and hiring managers can find and take seriously, with a headline, a summary, and experience entries that reflect real work.",
  },
  {
    heading: "Resume development",
    body: "We turn coursework, activities, internships, and early jobs into a resume that reads clearly to a hiring manager, without inflating what you have done.",
  },
  {
    heading: "Networking and outreach",
    body: "We teach you how to identify the right people to contact, how to introduce yourself so you get a reply, and how to follow up without damaging the relationship.",
  },
  {
    heading: "Interview preparation",
    body: "We prepare you for internship and early career interviews, including how to answer questions about experience you are still building.",
  },
  {
    heading: "Workshops and institutional programs",
    body: "We run group sessions and multi-session programs with high schools and universities that want to prepare students for the internship and early career market.",
  },
];

const engagements = [
  {
    name: "Executive advisory",
    detail: "One-to-one advisory for an executive or senior professional, scoped to a written plan and a schedule.",
  },
  {
    name: "Board readiness",
    detail: "A longer structured engagement for an experienced executive preparing for a first board role.",
  },
  {
    name: "Early career coaching",
    detail: "One-to-one coaching for a student or early career professional over a defined period.",
  },
  {
    name: "Group workshops",
    detail: "Sessions for small groups on LinkedIn profiles, resumes, and outreach.",
  },
  {
    name: "Institutional partnerships",
    detail: "Multi-session programs run with a high school or university.",
  },
  {
    name: "Introductory call",
    detail: "A short confidential conversation to decide whether the work is a fit. There is no obligation.",
  },
];

const faq = [
  {
    q: "Which path is right for me?",
    a: "Executive Career Advisory is for executives, senior leaders, and experienced professionals. Early Career Strategy is for students, recent graduates, and people establishing the first stage of their careers. We also help mid-career professionals, and we will tell you which approach fits after one conversation.",
  },
  {
    q: "How is this different from executive coaching?",
    a: "Coaching generally works on how you lead. Career advisory works on what you do next, how you present yourself, and how you get there. The two are complementary, and we will refer you to a coach when that is the better fit.",
  },
  {
    q: "Do you work for me or for a hiring company?",
    a: "In Career Advisory we work for you. Our recruiting and search work is paid for by client companies and is kept separate from this service.",
  },
  {
    q: "Will you find me a job?",
    a: "No. We do not promise placements, interviews, or board seats. We provide structure, preparation, and honest advice, and you do the work.",
  },
  {
    q: "Is the work confidential?",
    a: "Yes. We do not name individual advisory clients or publish their details, and most of the executives we work with are not publicly looking.",
  },
  {
    q: "Do you help with LinkedIn?",
    a: "Yes. Personal LinkedIn profiles and individual career positioning are part of Career Advisory. Company positioning, company LinkedIn pages, executive branding, and business-facing content are part of Digital Positioning & Web Design.",
  },
];

export default function CareerAdvisory() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <Seo
        title="Career Advisory | proHIRE resources"
        description="Career advisory for executives, senior professionals, students, and early career professionals. Executive Career Advisory and Early Career Strategy, including personal LinkedIn profile strategy and career positioning."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <Link
            to="/services"
            className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            ← All capabilities
          </Link>
          <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent mb-6">
            Career Advisory
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            We Help Professionals Make Better Career Decisions.
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            proHIRE resources supports professionals at different career stages. We advise
            executives and senior leaders on the decisions that shape the rest of their
            careers, and we help students and early career professionals establish a
            credible start.
          </p>
        </div>
      </section>

      {/* Two paths */}
      <section className="py-16 border-b border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Two service paths
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Choose the path that matches your stage.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-foreground text-lg font-light leading-relaxed">
              <p>
                Career Advisory covers two service paths on this page. Executive Career
                Advisory supports executives, senior leaders, and experienced
                professionals. Early Career Strategy supports students, recent graduates,
                and professionals who are establishing the first stage of their careers.
              </p>
              <p className="text-muted-foreground">
                We also advise mid-career professionals who are between these two stages.
                The approach draws on whichever path fits the situation.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2">
                <a
                  href="#executive-career-advisory"
                  className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
                >
                  Executive Career Advisory
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#early-career-strategy"
                  className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
                >
                  Early Career Strategy
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Career Advisory */}
      <section id="executive-career-advisory" className="py-16 scroll-mt-24">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
                Path one
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Executive Career Advisory
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-foreground text-lg font-light leading-relaxed">
                We advise executives, senior leaders, and experienced professionals on
                career decisions, positioning, and how to approach a search. Chris leads
                the work directly, and every engagement runs to a written plan.
              </p>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  Who it supports
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Sitting executives weighing an approach or an internal move, leaders
                  between roles, executives who have been asked about a board seat, and
                  senior professionals whose company is reorganizing around them.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {executiveServices.map((c) => (
              <div key={c.heading} className="bg-background p-8 lg:p-10">
                <h3 className="font-serif text-xl text-foreground mb-4">{c.heading}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{c.body}</p>
              </div>
            ))}
            <GridFill items={executiveServices.length} md={2} />
          </div>
        </div>
      </section>

      {/* Early Career Strategy */}
      <section
        id="early-career-strategy"
        className="py-16 bg-secondary/40 border-y border-border scroll-mt-24"
      >
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
                Path two
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Early Career Strategy
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <p className="text-foreground text-lg font-light leading-relaxed">
                We help students, recent graduates, and early career professionals build a
                credible profile, write a resume that reflects real work, and learn how to
                reach the people who make hiring decisions.
              </p>
              <div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  Who it supports
                </div>
                <p className="text-muted-foreground font-light leading-relaxed">
                  High school juniors and seniors, college students competing for
                  internships, recent graduates entering the market, and parents or
                  institutions looking for structured support. We also work with high
                  schools and universities on group programs.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {earlyServices.map((c) => (
              <div key={c.heading} className="bg-background p-8 lg:p-10">
                <h3 className="font-serif text-xl text-foreground mb-4">{c.heading}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{c.body}</p>
              </div>
            ))}
            <GridFill items={earlyServices.length} md={2} />
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 border-b border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How we deliver
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Chris leads the advisory work directly.
              </h2>
            </div>
            <ul className="lg:col-span-8 divide-y divide-border border-y border-border">
              <li className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    We work for you
                  </h3>
                </div>
                <p className="md:col-span-8 text-muted-foreground font-light leading-relaxed">
                  In Career Advisory the individual is the client. Our recruiting and
                  search work is paid for by companies and stays separate from this
                  service.
                </p>
              </li>
              <li className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    Every engagement is written down
                  </h3>
                </div>
                <p className="md:col-span-8 text-muted-foreground font-light leading-relaxed">
                  We agree the plan, the deliverables, and the schedule before the work
                  begins, and the written material stays with you afterwards.
                </p>
              </li>
              <li className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    The work is confidential
                  </h3>
                </div>
                <p className="md:col-span-8 text-muted-foreground font-light leading-relaxed">
                  We do not name individual advisory clients or publish their details.
                </p>
              </li>
              <li className="grid md:grid-cols-12 gap-6 py-8">
                <div className="md:col-span-4">
                  <h3 className="font-serif text-xl text-foreground leading-snug">
                    We give honest advice
                  </h3>
                </div>
                <p className="md:col-span-8 text-muted-foreground font-light leading-relaxed">
                  If we think the move you are considering is wrong for you, we will say
                  so. If a role is scoped in a way that will not work, we will help you
                  test it before you accept it.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-16 bg-secondary/50 border-b border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How we engage
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Ways to work together
              </h2>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 text-muted-foreground font-light text-lg leading-relaxed">
              Every engagement has a written plan and an agreed schedule. We discuss fees
              in conversation once we understand what you need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {engagements.map((e) => (
              <div key={e.name} className="bg-background p-8 flex flex-col">
                <div className="font-serif text-lg text-foreground mb-3">{e.name}</div>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  {e.detail}
                </p>
              </div>
            ))}
            <GridFill items={engagements.length} md={2} lg={3} />
          </div>
        </div>
      </section>

      <FaqList items={faq} />

      <CTABand
        title="Tell us where you are in your career."
        body="Send us a short summary of your situation and what you are weighing. We will respond with a candid view of how, and whether, we can help."
      />

      <div className="py-12 bg-background">
        <div className="container-editorial">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 rotate-180" /> All capabilities
          </Link>
        </div>
      </div>
    </div>
  );
}
