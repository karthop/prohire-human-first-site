import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";
import { FaqList } from "@/components/FaqList";
import { Reveal } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { OptimizedImage } from "@/components/OptimizedImage";
import prohireMark from "@/assets/proHIRE_Logo_circle_full.png";
import rackAndRobotsLogo from "@/assets/logo-rack-and-robots.png";
import ratchetOutreachLogo from "@/assets/logo-ratchet-outreach.png";
import martinFranchiseLogo from "@/assets/logo-martin-franchise.png";
import huvifitLogo from "@/assets/logo-huvifit.png";
import proscreenLogo from "@/assets/logo-proscreen.png";

const circumstances = [
  {
    heading: "The business evolved.",
    body: "The capabilities, clients or direction of the company changed. The website didn't.",
  },
  {
    heading: "The professional chapter changed.",
    body: "An executive left corporate life to build an advisory, fractional, consulting, board or portfolio career and suddenly needed a professional presence built around the individual rather than an employer.",
  },
  {
    heading: "The positioning wasn't clear.",
    body: "Sometimes the problem isn't really the website. The underlying message isn't clear enough yet to build one.",
  },
];

const audiences = [
  {
    heading: "Executives, Fractional Leaders & Post-Exit Founders",
    body: "For senior leaders building a professional presence beyond the company they currently represent. That may include fractional leadership, independent advisory work, board service, speaking, investing, consulting or a broader portfolio career. We help translate years of operating experience into a clear professional position and build the digital presence around it.",
  },
  {
    heading: "Independent Consultants & Advisors",
    body: "Being good at the work and explaining why someone should hire you are different disciplines. We help consultants clarify what they do, who they do it for, why it matters, and how that story should translate across their messaging, visual identity and website.",
  },
  {
    heading: "Boutique & Professional Services Firms",
    body: "A firm's capabilities can evolve much faster than its website. We work with consulting, advisory and other expertise-driven businesses whose current digital presence no longer reflects the sophistication, capabilities or direction of the company behind it.",
  },
  {
    heading: "Specialized B2B Businesses",
    body: "Complex businesses often face a different challenge: making sophisticated products, systems or services understandable without oversimplifying them. We help structure that complexity into a digital experience that allows prospective customers to understand the business, its capabilities and why they matter.",
  },
];

const capabilities = [
  {
    heading: "Positioning & Messaging",
    body: "Before design begins, we work through the audience, offer, differentiation and what someone should understand after spending a few minutes with you or your business. For some engagements, the positioning is already clear. For others, this is where the most important work happens.",
  },
  {
    heading: "Website Strategy & Architecture",
    body: "We determine what the site needs to accomplish, how information should be organized, what deserves prominence and how a visitor should move from first impression to meaningful action. The goal isn't more pages. It's the right ones.",
  },
  {
    heading: "Brand & Visual Direction",
    body: "Typography, imagery, visual language, hierarchy and supporting brand elements designed around the professional reputation you're building or the business you've already built.",
  },
  {
    heading: "Design & Development",
    body: "Modern, responsive websites built around the engagement rather than forced into a stock template. We handle design, development, mobile experience and the technical requirements established during discovery.",
  },
  {
    heading: "Content & Copy",
    body: "Good design can't rescue unclear thinking. We work collaboratively on headlines, service positioning, page copy, calls to action, executive biographies and the language that connects what you know with what your audience needs to understand.",
  },
  {
    heading: "Integrations & Digital Foundation",
    body: "Contact forms, scheduling, lead routing and other practical integrations can be incorporated based on the needs of the engagement. We also handle the technical path to launch, including domain configuration, site structure, performance fundamentals and search basics.",
  },
];

interface Project {
  name: string;
  category: string;
  /** Optional qualifier shown beside the category, e.g. a product rather than a site. */
  format?: string;
  context: string;
  /** Live site. Null means the URL has not been supplied yet. */
  url: string | null;
  /** Supplied logo asset. Null falls back to a typographic panel. */
  logo: string | null;
  logoAlt: string;
  /**
   * Which panel the supplied logo needs in order to read correctly.
   * "dark" = light-on-dark artwork, shown on the navy panel.
   * "light" = dark-on-transparent artwork, shown on a white panel that stays
   * white in both themes so the wordmark never disappears in dark mode.
   */
  logoTheme: "dark" | "light";
  /** Visitors are already on this site, so no external CTA is shown. */
  internal?: boolean;
  /** Only published projects render. */
  published: boolean;
}

const projects: Project[] = [
  {
    name: "proHIRE resources",
    category: "Executive Search & Business Advisory",
    context:
      "A multi-practice digital presence bringing executive search, organizational advisory, growth support and senior career strategy together under one coherent brand and service architecture.",
    url: null,
    logo: prohireMark,
    logoAlt: "proHIRE resources",
    logoTheme: "dark",
    internal: true,
    published: true,
  },
  {
    name: "Rack & Robots",
    category: "Warehouse Automation & Intralogistics",
    context:
      "A technical, product-intensive business requiring a digital presence capable of communicating warehouse automation, robotics, storage systems and integrated solutions clearly to enterprise buyers.",
    url: "https://www.rackandrobots.com",
    logo: rackAndRobotsLogo,
    logoAlt: "Rack & Robots",
    logoTheme: "dark",
    published: true,
  },
  {
    name: "Ratchet Outreach",
    category: "Marketing & Growth Advisory",
    context:
      "A professional-services presence designed to translate expertise, methodology and commercial value into a clear and credible market story.",
    url: "https://ratchetoutreach.com",
    logo: ratchetOutreachLogo,
    logoAlt: "Ratchet Outreach",
    logoTheme: "light",
    published: true,
  },
  {
    name: "Martin Franchise Consultants",
    category: "Franchise Advisory",
    context:
      "A consultant-led business where personal credibility, professional positioning and the service offering needed to operate together as one brand.",
    url: "https://martinfranchiseconsultants.com",
    logo: martinFranchiseLogo,
    logoAlt: "Martin Franchise Consultants",
    logoTheme: "light",
    published: true,
  },
  {
    name: "HuviFit",
    category: "Fitness Technology",
    context:
      "A consumer-facing fitness platform combining brand development, digital product experience and web presence.",
    url: "https://huvifit.com",
    logo: huvifitLogo,
    logoAlt: "HuviFit",
    logoTheme: "light",
    published: true,
  },
  {
    name: "proSCREEN",
    category: "Recruiting Technology & AI",
    format: "Web application",
    context:
      "A purpose-built recruiting application designed to help evaluate candidate resumes against active positions, assess fit and readiness, support recruiter decision-making, and manage the workflow from initial resume review through candidate disposition. Not a marketing site, but the same discipline applied to a working product.",
    url: "https://app.prohireresources.com",
    logo: proscreenLogo,
    logoAlt: "proSCREEN by proHIRE resources",
    logoTheme: "dark",
    published: true,
  },
];

const method = [
  {
    number: "01",
    phase: "Discovery",
    body: "We start with the objective, audience and current position. What are you building toward? Who needs to understand it? What should they understand? What's working today, and what's getting in the way?",
  },
  {
    number: "02",
    phase: "Design",
    body: "We establish positioning, messaging, site architecture and visual direction before development begins. The strategy drives the design, not the other way around.",
  },
  {
    number: "03",
    phase: "Execute",
    body: "We bring the strategy to life through content, design, development, integrations and the technical build. Review points throughout the engagement keep the work collaborative without creating unnecessary project drag.",
  },
  {
    number: "04",
    phase: "Embed",
    body: "We launch, connect the required infrastructure, test the experience across devices and make sure you understand how the finished system works.",
  },
];

const faq = [
  {
    q: "How long does an engagement take?",
    a: "Many engagements can move from kickoff to launch within a few weeks. Timing depends on scope, content readiness, integrations and how much positioning work needs to happen before the build begins. We'll establish the expected timeline before work starts.",
  },
  {
    q: "Do I own the finished site?",
    a: "Yes. Your domain and core accounts remain under your control. Once the engagement is complete, you aren't required to maintain an ongoing relationship with proHIRE simply to keep your website operating.",
  },
  {
    q: "Can you help write or refine the copy?",
    a: "Yes. Messaging is part of the work when it's needed. We can help develop or refine positioning, service language, headlines, biographies and core page content so the words and design are working toward the same objective.",
  },
  {
    q: "Do you only work with executives and consulting firms?",
    a: "No. The common denominator isn't an industry. It's expertise. We're best suited to executives, consultants, professional-services firms and specialized businesses where credibility, clarity and communicating complex value matter.",
  },
];

const ProjectPanel = ({ project }: { project: Project }) => {
  const onDark = project.logoTheme === "dark";
  return (
    <div
      className={`relative aspect-[16/10] flex items-center justify-center overflow-hidden ${
        onDark
          ? "bg-primary brush-texture"
          : "bg-white border border-border"
      }`}
    >
      {project.logo ? (
        <OptimizedImage
          src={project.logo}
          alt={project.logoAlt}
          className="w-[62%] max-w-[280px] h-[62%] [&_img]:object-contain"
        />
      ) : (
        <span
          className={`font-serif text-2xl lg:text-3xl px-8 text-center ${
            onDark ? "text-primary-foreground/80" : "text-primary/80"
          }`}
        >
          {project.name}
        </span>
      )}
    </div>
  );
};

export default function DigitalPositioning() {
  const published = projects.filter((p) => p.published);
  const workLead =
    published.length === 1 && published[0].internal
      ? "Start with the site you are reading. It was built the same way every engagement is: positioning first, architecture second, design and build last."
      : "Digital positioning and website engagements across professional services, technical B2B and consumer businesses, shown as finished work rather than written case studies. Where the business need calls for it, the same work extends into digital products.";

  return (
    <div className="min-h-screen pt-20 bg-background">
      <Seo
        title="Digital Positioning & Web Design | proHIRE resources"
        description="Digital positioning, messaging and website design for executives, independent consultants, professional-services firms and specialized businesses."
      />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <Link
            to="/services"
            className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            ← All services
          </Link>
          <div className="mt-6 text-xs uppercase tracking-[0.2em] text-accent mb-6">
            Digital Positioning & Web Design
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            Your reputation already exists. Your digital presence should reinforce it.
          </h1>
          <div className="mt-8 max-w-3xl space-y-5 text-lg lg:text-xl text-primary-foreground/85 font-light leading-relaxed">
            <p>
              Digital positioning, messaging, brand direction and website design for
              executives, independent consultants and expertise-driven firms.
            </p>
            <p>
              We help translate what makes a person or business valuable into a digital
              presence that communicates it clearly.
            </p>
            <p>
              That can mean sharpening the positioning. Reworking the message. Establishing
              the visual direction. Designing and building a new website. Or starting over
              when the current presence no longer reflects the business or professional
              reputation behind it.
            </p>
            <p className="text-primary-foreground">
              The website is the visible result. The work starts before we build it.
            </p>
          </div>
          <div className="mt-10">
            <MagneticButton
              to="/contact"
              className="link-arrow gap-2 bg-primary-foreground text-primary px-7 py-4 text-sm font-medium hover:bg-primary-foreground/90 transition-colors"
              strength={8}
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* Early proof: compact selected work strip */}
      <section className="py-10 lg:py-12 border-b border-border">
        <div className="container-editorial">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Selected work
            </div>
            <a
              href="#selected-work"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground link-arrow"
            >
              See the full portfolio <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
            {published.map((p) => {
              const tile = (
                <div
                  className={`group h-24 lg:h-28 flex items-center justify-center px-5 py-4 transition-colors ${
                    p.logoTheme === "dark"
                      ? "bg-primary hover:bg-primary-dark"
                      : "bg-white hover:bg-secondary/60"
                  }`}
                >
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.logoAlt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <span
                      className={`font-serif text-base text-center ${
                        p.logoTheme === "dark" ? "text-primary-foreground/80" : "text-primary/80"
                      }`}
                    >
                      {p.name}
                    </span>
                  )}
                </div>
              );
              return p.url ? (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} — visit site (opens in a new tab)`}
                  className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {tile}
                </a>
              ) : (
                <div key={p.name}>{tile}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why this work exists */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <Reveal variant="rise" className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Why this work exists
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
              The work is often stronger than the website representing it.
            </h2>
          </Reveal>
          <Reveal variant="rise" delay={120} className="lg:col-span-8">
            <div className="text-foreground text-lg leading-relaxed font-light space-y-5">
              <p>
                Over years of working with business owners, executives, consultants and
                professional-services leaders, we kept encountering the same disconnect:
                sophisticated people doing genuinely good work represented by websites and
                messaging that didn't reflect the caliber of what they actually did.
              </p>
              <p className="text-muted-foreground">The circumstances vary.</p>
            </div>

            <ul className="mt-8 divide-y divide-border border-y border-border">
              {circumstances.map((c) => (
                <li key={c.heading} className="grid md:grid-cols-12 gap-4 md:gap-6 py-6">
                  <h3 className="md:col-span-5 font-serif text-xl text-foreground leading-snug">
                    {c.heading}
                  </h3>
                  <p className="md:col-span-7 text-muted-foreground font-light leading-relaxed">
                    {c.body}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-foreground text-lg leading-relaxed font-light space-y-5">
              <p>
                We started doing this work because those conversations were already
                happening.
              </p>
              <p>
                Today, we bring the same approach to digital positioning that we use
                throughout proHIRE: understand the objective first, challenge assumptions
                when necessary, design around the audience, and then execute.
              </p>
              <p>
                For expertise-driven businesses and senior professionals, a website is often
                where someone goes to validate what they've already heard about you.
              </p>
              <p>
                A referral checks you out. A prospective client looks at the firm. A former
                colleague considers bringing you into an engagement. A potential partner
                wants to understand what you do.
              </p>
              <p>What they find should reinforce the reputation that got them there.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-secondary/40 border-b border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <Reveal variant="rise" className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Who it's for
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Where this work fits.
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {audiences.map((a) => (
              <div key={a.heading} className="bg-background p-8 lg:p-10">
                <h3 className="font-serif text-xl text-foreground mb-4 leading-snug">
                  {a.heading}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <Reveal variant="rise" className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                What's included
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                What we do.
              </h2>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {capabilities.map((c) => (
              <div key={c.heading} className="bg-background p-8 lg:p-10">
                <h3 className="font-serif text-xl text-foreground mb-4">{c.heading}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we think about the work */}
      <section className="py-16 bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">
              How we think about the work
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
              The website isn't automatically the answer.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ul className="divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
              <li className="py-6 font-serif text-xl lg:text-2xl leading-snug">
                Sometimes a business needs a new site.
              </li>
              <li className="py-6 font-serif text-xl lg:text-2xl leading-snug">
                Sometimes the existing site needs a clearer message, stronger structure or
                better visual presentation.
              </li>
              <li className="py-6 font-serif text-xl lg:text-2xl leading-snug">
                Sometimes the real issue is positioning, and rebuilding anything before
                resolving it would simply create a better-looking version of the same
                problem.
              </li>
            </ul>
            <div className="mt-8 space-y-4 text-primary-foreground/85 font-light text-lg leading-relaxed">
              <p>We'll tell you which one we think you're dealing with.</p>
              <p>
                That's also why we don't begin with page counts, templates or predetermined
                packages. We begin with the objective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      {published.length > 0 && (
        <section id="selected-work" className="py-16 border-b border-border">
          <div className="container-editorial">
            <div className="grid lg:grid-cols-12 gap-12 mb-12">
              <Reveal variant="rise" className="lg:col-span-5">
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Selected work
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                  The work, not the case study.
                </h2>
              </Reveal>
              <p className="lg:col-span-6 lg:col-start-7 text-muted-foreground font-light text-lg leading-relaxed">
                {workLead}
              </p>
            </div>

            <div className="divide-y divide-border border-t border-border">
              {published.map((p, i) => {
                const media = (
                  <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <ProjectPanel project={p} />
                  </div>
                );
                const copy = (
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="text-xs uppercase tracking-[0.18em] text-accent mb-4">
                      {p.category}
                      {p.format && (
                        <span className="text-muted-foreground"> · {p.format}</span>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-foreground leading-snug mb-4">
                      {p.name}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {p.context}
                    </p>
                    {p.url && (
                      <span className="link-arrow mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        Visit Site
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                );

                const body = (
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {media}
                    {copy}
                  </div>
                );

                return (
                  <Reveal key={p.name} variant="rise" className="block py-12 first:pt-12">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.name} — visit site (opens in a new tab)`}
                        className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        {body}
                      </a>
                    ) : (
                      body
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* How we work */}
      <section className="py-16 bg-secondary/40 border-b border-border">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal variant="rise" className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How we work
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                Discovery → Design → Execute → Embed.
              </h2>
              <p className="mt-4 text-muted-foreground font-light leading-relaxed">
                The same four phases we run everywhere else at proHIRE, applied to the
                texture of this work.
              </p>
            </Reveal>
            <div className="lg:col-span-8 divide-y divide-border border-y border-border">
              {method.map((m) => (
                <div key={m.phase} className="py-6">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-xs tracking-[0.18em] text-accent">{m.number}</span>
                    <span className="font-serif text-lg text-foreground">{m.phase}</span>
                  </div>
                  <p className="text-muted-foreground font-light leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Built to be yours */}
      <section className="py-16">
        <div className="container-editorial grid lg:grid-cols-12 gap-12">
          <Reveal variant="rise" className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Ownership
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
              Built to be yours.
            </h2>
          </Reveal>
          <Reveal variant="rise" delay={120} className="lg:col-span-8">
            <blockquote className="font-serif text-2xl lg:text-3xl text-foreground leading-snug border-l border-accent pl-6">
              Your website shouldn't become someone else's leverage.
            </blockquote>
            <div className="mt-8 space-y-5 text-foreground text-lg font-light leading-relaxed">
              <p>
                Your domain, accounts and core digital infrastructure remain under your
                control. We don't retain ownership of your domain or make access to your own
                digital presence dependent on an ongoing relationship with us.
              </p>
              <p>Some clients want continued support after launch. Others don't. Either is fine.</p>
              <p>
                The objective is to build something that works for you, not dependency on us.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqList items={faq} />

      <CTABand
        eyebrow="Start a Conversation"
        title="Start with a conversation."
        body="You don't need to know how many pages you need, what platform you should use or exactly what the finished site should look like. That's part of the work. Tell us what you're building, changing or preparing for. We'll give you a candid view of what the digital presence needs to accomplish and whether we're the right partner to help."
        ctaLabel="Start a Conversation"
        ctaHref="/contact"
      />

      <div className="py-12 bg-background">
        <div className="container-editorial">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
          >
            <ArrowUpRight className="w-4 h-4 rotate-180" /> All services
          </Link>
        </div>
      </div>
    </div>
  );
}
