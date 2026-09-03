import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const capabilities = [
  {
    eyebrow: "Recruiting & Talent Delivery",
    title: "Recruiting & Talent Delivery",
    what: "We recruit professionals for permanent, contract, and contract-to-hire roles. We also provide embedded recruiting support inside your hiring process and build out complete functional teams against a written hiring plan.",
    who: "Hiring managers, talent acquisition teams, and company leaders who need professional hires across technology, finance, HR, marketing, sales, supply chain, engineering, and general corporate functions.",
    when: "Use this capability when you need to fill one position, several positions at once, or an entire team, and you want senior attention on the work.",
    href: "/services/recruiting",
  },
  {
    eyebrow: "Executive Search & Leadership Advisory",
    title: "Executive Search & Leadership Advisory",
    what: "We run senior leadership searches, assess executive candidates, advise leadership teams and boards on senior talent decisions, and place fractional and interim executives.",
    who: "Founders, CEOs, boards, and investors filling senior leadership roles, and companies that need experienced leadership before a permanent hire is in place.",
    when: "Use this capability when the role sits at the senior leadership level, whether you need a permanent executive or temporary executive leadership.",
    href: "/services/executive-search",
  },
  {
    eyebrow: "HR & Talent Leadership Support",
    title: "HR & Talent Leadership Support",
    what: "We assess HR and talent functions, provide interim CHRO and senior talent leadership, complete defined HR and talent projects, support talent operations, and bring in qualified specialists for specific work.",
    who: "CHROs, Chief People Officers, Heads of Talent Acquisition, Heads of People, and senior HR and talent leaders.",
    when: "Use this capability when your team needs additional capacity, when a defined project needs to get done, or when a newly appointed leader wants a practical plan for the first 100 days.",
    href: "/services/hr-support-advisory",
  },
  {
    eyebrow: "Revenue & Operational Acceleration",
    title: "Revenue & Operational Acceleration",
    what: "We help companies clarify revenue team structure and role responsibilities, support sales leadership and sales talent decisions, align hiring plans with growth priorities, and improve selected operating processes.",
    who: "Company leaders who are building or reorganizing a revenue team and want experienced help with structure, roles, and execution.",
    when: "Use this capability when revenue responsibilities are unclear, when the hiring plan and the growth plan do not match, or when a specific operating process needs work.",
    href: "/services/revenue-operational-acceleration",
  },
  {
    eyebrow: "Career Advisory",
    title: "Career Advisory",
    what: "We advise individuals on career decisions, positioning, and personal LinkedIn strategy. The page covers two service paths, Executive Career Advisory and Early Career Strategy.",
    who: "Executives, senior leaders, and experienced professionals on one path, and students, recent graduates, and early career professionals on the other. We also help mid-career professionals.",
    when: "Use this capability when you are weighing a move, preparing for a search, or deciding how to present your experience.",
    href: "/services/career-advisory",
  },
  {
    eyebrow: "Digital Positioning & Web Design",
    title: "Digital Positioning & Web Design",
    what: "We help companies define their positioning and messaging, then write, design, build, and launch the website that carries it. We also handle executive branding, company LinkedIn pages, and business-facing LinkedIn content.",
    who: "Companies, independent consultants, and expertise-driven firms whose digital presence no longer reflects what they do.",
    when: "Use this capability when your positioning needs to be clearer, when your website needs to be rebuilt, or when your company presence on LinkedIn needs work.",
    href: "/services/digital-positioning",
  },
];

export default function ServicesIndex() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <Seo
        title="Capabilities | proHIRE resources"
        description="Recruiting and talent delivery, executive search and leadership advisory, HR and talent leadership support, revenue and operational acceleration, career advisory, and digital positioning and web design."
      />

      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">
            Capabilities
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            We Provide Six Capabilities for Companies and Professionals.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/85 font-light max-w-3xl leading-relaxed">
            Each capability below explains what we provide, who it supports, and when a
            client typically uses it. Follow the link on any capability to read the
            complete service information.
          </p>
        </div>
      </section>

      {/* Capability sections */}
      <section className="py-16">
        <div className="container-editorial">
          <ul className="divide-y divide-border border-y border-border">
            {capabilities.map((c) => (
              <li key={c.href} className="grid lg:grid-cols-12 gap-8 lg:gap-12 py-12">
                <div className="lg:col-span-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
                    {c.eyebrow}
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl leading-snug text-foreground">
                    {c.title}
                  </h2>
                  <Link
                    to={c.href}
                    className="link-arrow mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
                  >
                    Read the full capability
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="lg:col-span-8 space-y-5">
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      What we provide
                    </div>
                    <p className="text-foreground font-light leading-relaxed">{c.what}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      Who it supports
                    </div>
                    <p className="text-muted-foreground font-light leading-relaxed">{c.who}</p>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                      When clients use it
                    </div>
                    <p className="text-muted-foreground font-light leading-relaxed">{c.when}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries is not a capability. It sits after the capability content. */}
      <section className="py-16 bg-secondary/40 border-y border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Industries
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
              We work across selected industries.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-5">
            <p className="text-foreground text-lg font-light leading-relaxed">
              proHIRE resources works across a selected set of industries rather than
              every market. Our experience is concentrated in technology and software,
              financial services and fintech, healthcare and medical technology, supply
              chain and logistics, industrial and energy, and professional services.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Industries are not a separate capability. They describe the sectors where we
              have the most relevant experience and the strongest network.
            </p>
            <Link
              to="/industries"
              className="link-arrow inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
            >
              See the industries we serve
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
