import { Link } from "react-router-dom";
import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function ExecutiveSearch() {
  return (
    <ServiceTemplate
      seoTitle="Executive Search & Leadership Advisory | proHIRE resources"
      seoDescription="Senior-led executive search, executive assessment, leadership advisory, and fractional and interim executive placement for permanent and temporary senior leadership needs."
      eyebrow="Executive Search & Leadership Advisory"
      title="We Recruit and Advise on Senior Leadership."
      lead="We run senior leadership searches, assess executive candidates, advise leadership teams and boards on senior talent decisions, and place fractional and interim executives when a company needs experienced leadership sooner than a permanent hire allows."
      thesis="Senior leadership searches work differently from professional recruiting. The candidate pool is smaller, the people worth talking to are usually not looking, and the scope of the role often needs to be rewritten before the search begins. We start by agreeing what the leader must own in the first year, then we work a written list of named companies and named executives rather than a database query. Chris leads the search from the first conversation through the offer."
      pointOfView="Executive Search & Leadership Advisory covers senior leadership roles. Professional, contract, embedded, and team hiring runs through Recruiting & Talent Delivery."
      pointOfViewPlain
      whoFor={[
        "Founders, CEOs, and boards filling a senior leadership role.",
        "Investor-backed companies that need leadership experienced at the stage the company is entering.",
        "Companies that need experienced leadership on a temporary basis while a permanent search runs.",
        "Leadership teams that want an independent assessment of a senior candidate before they decide.",
        "Companies replacing a senior leader where the search needs to stay confidential.",
      ]}
      capabilities={[
        {
          heading: "Permanent executive search",
          body: "We recruit senior leaders on a retained basis. Chris agrees the scope with you, builds a written target list, runs the candidate conversations, completes reference work, and supports the offer.",
          bullets: [
            "Chief executive, financial, operating, revenue, technology, people, and legal roles",
            "Senior and functional vice president roles",
            "Confidential replacement and successor searches",
            "Board director and advisor searches",
          ],
        },
        {
          heading: "Fractional and interim executive leadership",
          body: "We place experienced executives on a fractional or interim basis when the work is real but a permanent hire is not the right answer yet. The engagement runs for an agreed period and can run alongside a permanent search.",
          bullets: [
            "Interim leadership while a permanent search is underway",
            "Fractional leadership for companies not yet ready for a full-time executive",
            "Defined operating windows with a written scope",
          ],
        },
        {
          heading: "Executive assessment",
          body: "We assess senior candidates against the responsibilities of the specific role. The work includes structured interviews, reference conversations with people beyond the candidate's own list, and a written summary of what we found.",
        },
        {
          heading: "Leadership advisory",
          body: (
            <>
              We advise CEOs, founders, and boards on senior talent decisions, including
              succession, leadership structure, and the sequence of senior hires. When the
              need is an interim CHRO, a senior talent leader, or a senior HR specialist,
              that work runs through{" "}
              <Link
                to="/services/hr-support-advisory"
                className="underline hover:text-foreground transition-colors"
              >
                HR &amp; Talent Leadership Support
              </Link>
              .
            </>
          ),
        },
        {
          heading: "Team hiring below the leadership level",
          body: (
            <>
              Many leadership searches are followed by hiring the team underneath the new
              leader. We handle that work through{" "}
              <Link
                to="/services/recruiting"
                className="underline hover:text-foreground transition-colors"
              >
                Recruiting &amp; Talent Delivery
              </Link>
              , which covers professional recruiting, contract hiring, embedded recruiting
              support, and functional team buildouts.
            </>
          ),
        },
        {
          heading: "Network access",
          body: (
            <>
              We draw on our partner networks, including{" "}
              <a
                href="https://www.linkedin.com/company/c-level-advisory-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                C-Level Advisory, The Curated Network™
              </a>
              , and{" "}
              <a
                href="https://fintechatlanta.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                FinTech Atlanta
              </a>
              . These relationships give us reach into senior candidates who do not
              respond to job postings.
            </>
          ),
        },
      ]}
      disciplinesEyebrow="How we deliver"
      disciplinesHeading="Chris leads the search, with specialist support when the work requires it."
      disciplines={[
        {
          heading: "We agree the scope before we start",
          body: "We write down what the leader must own in the first year, which requirements are genuine, and which ones are assumptions worth testing. Searches more often fail on scope than on sourcing.",
        },
        {
          heading: "We work a named list",
          body: "We source against a written list of specific companies and specific executives. Every candidate we approach can be traced to a reason for being on the list.",
        },
        {
          heading: "References are part of the work",
          body: "We speak with people the candidate did not put forward, including peers, former direct reports, and board members, under a consistent set of questions.",
        },
        {
          heading: "Chris leads the client relationship",
          body: "Chris runs the intake, the candidate conversations, the client communication, and the accountability. Qualified recruiters and specialists support the engagement when a search requires additional capacity, and we name them before the work starts.",
        },
        {
          heading: "We stay involved after the start date",
          body: "We check in with the new leader and the hiring executive through the first 30, 60, and 90 days so problems surface early.",
        },
      ]}
      rolesEyebrow="Where we search"
      rolesHeading="Roles we recruit."
      rolesWeLeadOn={[
        "Chief Executive Officer",
        "Chief Financial Officer",
        "Chief Operating Officer",
        "Chief Revenue Officer",
        "Chief Technology Officer",
        "Chief Human Resources Officer",
        "Chief People Officer",
        "General Counsel",
        "Board Director and Senior Advisor",
        "Senior and functional Vice President roles",
      ]}
      methodMap={[
        {
          phase: "Discovery",
          body: "We hold two or three structured conversations with the CEO and the other decision makers to agree the scope, the success measures, and the practical constraints, including compensation range, location, and companies that are off limits.",
        },
        {
          phase: "Design",
          body: "We write the engagement plan, which covers the candidate profile, the target list, the assessment approach, the interview sequence, and the schedule. You review and approve it before sourcing begins.",
        },
        {
          phase: "Execute",
          body: "Chris runs the sourcing, the first conversations, the shortlist, the reference work, and the client interviews. You receive written progress notes each week.",
        },
        {
          phase: "Handover",
          body: "We support the offer, the negotiation, and the transition, then check in with the new leader and the hiring executive through the first 90 days.",
        },
      ]}
      wontDo={[
        "We do not run contingent searches or compete against several firms for the same role.",
        "We do not present candidates we have not interviewed and referenced ourselves.",
        "We do not take a search when the role is scoped in a way we believe will fail and the client does not want to revisit it.",
      ]}
      engagements={[
        {
          name: "Retained executive search",
          detail: "A permanent senior leadership search with milestones, a written scope, and replacement terms agreed per engagement.",
        },
        {
          name: "Fractional or interim executive",
          detail: "An experienced executive working inside the company for an agreed period, with the responsibilities written down at the start.",
        },
        {
          name: "Executive assessment",
          detail: "A defined assessment of one or more senior candidates, ending with a written summary.",
        },
        {
          name: "Leadership advisory",
          detail: "Ongoing advisory capacity for a CEO, founder, or board on senior talent and leadership structure.",
        },
        {
          name: "Confidential succession",
          detail: "Succession work for a sitting executive, run under a confidentiality agreement with visibility limited to the people who need it.",
        },
      ]}
      faq={[
        {
          q: "How is this different from Recruiting & Talent Delivery?",
          a: "Executive Search & Leadership Advisory covers senior leadership roles, executive assessment, leadership advisory, and fractional and interim executives. Recruiting & Talent Delivery covers professional recruiting, contract and contract-to-hire hiring, embedded recruiting support, and functional team buildouts. We will tell you which one fits after we understand the role.",
        },
        {
          q: "How long does an executive search take?",
          a: "Most senior searches run 10 to 14 weeks from the first conversation to a signed offer. Fractional and interim placements usually move faster because the candidate pool is available sooner. We give you a schedule in the written engagement plan.",
        },
        {
          q: "When does a fractional or interim executive make more sense than a permanent hire?",
          a: "It makes sense when the work needs to start now, when the role is not yet large enough for a full-time executive, or when you need experienced leadership in place while a permanent search runs. We will tell you directly when a permanent hire is the better answer.",
        },
        {
          q: "We need an interim CHRO. Is that here or under HR & Talent Leadership Support?",
          a: "Interim CHROs, senior talent leaders, and senior HR specialists run through HR & Talent Leadership Support, because that service also covers the function assessment and project work that usually comes with them. Fractional and interim executives in other functions run through this service.",
        },
        {
          q: "Do you keep a search confidential?",
          a: "Yes. Most of our searches are not posted or advertised, and we limit discussion to the named stakeholders. Succession work runs under a confidentiality agreement.",
        },
        {
          q: "Who does the work?",
          a: "Chris leads the client relationship and the search. Qualified recruiters and specialists support the engagement when a search requires additional capacity, and we name them before the work starts.",
        },
      ]}
      ctaTitle="Tell us about the leadership role you need to fill."
      ctaBody="Send us the role, the timeline, and whether you need a permanent executive or temporary leadership. We will respond with a candid view of how, and whether, we can help."
    />
  );
}
