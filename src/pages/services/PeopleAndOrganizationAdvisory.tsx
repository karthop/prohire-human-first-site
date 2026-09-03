import { Link } from "react-router-dom";
import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function PeopleAndOrganizationAdvisory() {
  return (
    <ServiceTemplate
      seoTitle="HR & Talent Leadership Support | proHIRE resources"
      seoDescription="We support CHROs, Chief People Officers, Heads of Talent, and senior HR leaders with function assessments, interim leadership, defined projects, talent operations support, and qualified specialists."
      eyebrow="HR & Talent Leadership Support"
      title="We Help HR and Talent Leaders Add Capacity and Complete Defined Projects."
      lead="We support CHROs, Chief People Officers, Heads of Talent, and senior HR leaders with function assessments, interim leadership, defined projects, and qualified specialists."
      thesis="HR and talent leaders are usually not short of ideas. They are short of hands and hours. We work as an extension of the existing team rather than a replacement for it, and every engagement has a written scope, an agreed schedule, and a named person responsible for the work. Chris leads the engagement and brings in qualified specialists when a project calls for expertise outside his own."
      pointOfView="The HR leader stays the leader. We provide capacity, an independent read on the function, and specialists for defined work."
      pointOfViewPlain
      whoFor={[
        "CHROs who need capacity for work the team cannot absorb right now.",
        "Chief People Officers who want an independent assessment of the function before setting priorities.",
        "Heads of Talent Acquisition who need help with hiring capacity, process, or reporting.",
        "Heads of People at companies where the function is still being built.",
        "Senior HR and talent leaders who have a defined project and no one available to run it.",
        "Founders and CEOs carrying HR decisions without a senior people leader in place.",
      ]}
      capabilities={[
        {
          heading: "HR and talent function assessments",
          body: "We assess how the function is structured, staffed, and running today, then give you a written summary of what we found, what we would prioritize, and why. The assessment has a fixed scope and a defined end point.",
          bullets: [
            "Structure, roles, and responsibility mapping",
            "Staffing levels against the work the business is asking for",
            "Where work is duplicated, missing, or sitting in the wrong place",
            "A written set of priorities you can act on",
          ],
        },
        {
          heading: "Interim CHRO and senior talent leadership",
          body: (
            <>
              We place an experienced HR or talent leader inside the company for an agreed
              period. The engagement can lead the function, stabilize one area, or run a
              defined project, and it can run alongside a permanent search. Fractional and
              interim executives in other functions run through{" "}
              <Link
                to="/services/executive-search"
                className="underline hover:text-foreground transition-colors"
              >
                Executive Search &amp; Leadership Advisory
              </Link>
              .
            </>
          ),
          bullets: [
            "Interim CHRO and interim Chief People Officer",
            "Interim Head of Talent Acquisition or Head of People",
            "Senior HR specialists for a defined period",
          ],
        },
        {
          heading: "The 100-day leadership service",
          body: (
            <>
              This is a defined engagement for a newly appointed CHRO or senior talent
              leader. We help the new leader assess the function, establish priorities,
              clarify who is responsible for what, and develop a practical plan for the
              first 100 days. Chris leads the engagement and brings in qualified
              specialists when a specific area needs them.{" "}
              <Link
                to="/what-were-seeing/new-chro-first-90-days-is-a-resourcing-problem"
                className="underline hover:text-foreground transition-colors"
              >
                Read our perspective on the first 90 days
              </Link>
              .
            </>
          ),
          bullets: [
            "An independent assessment of the function the leader inherited",
            "Agreed priorities for the first 100 days",
            "A responsibility map across the team",
            "A written plan the leader can take to the executive team or the board",
          ],
        },
        {
          heading: "Defined HR and talent projects",
          body: "We take on projects with a clear beginning and end. Each project has a written scope, a schedule, and a named delivery lead. Compliance, payroll, benefits, and employment-law-related work is handled only as a defined project completed with qualified specialists, and we say up front who is doing it.",
          bullets: [
            "Function or team redesign",
            "Compensation structure reviews, completed with qualified specialists",
            "HR system selection support",
            "Succession and critical-role planning",
            "Compliance readiness projects completed with qualified specialists",
          ],
        },
        {
          heading: "Talent operations and process support",
          body: "We work on the mechanics of how hiring and people processes run day to day, including interview processes, hiring manager guidance, reporting, and the data leadership relies on to make decisions.",
          bullets: [
            "Interview process and scorecard design",
            "Hiring manager guidance and enablement",
            "Recruiting reporting and hiring plan tracking",
            "Handoffs between recruiting, HR, and the business",
          ],
        },
        {
          heading: "Remote onboarding support",
          body: "We offer remote onboarding support as an optional add-on when a client wants help getting new hires productive in their first weeks. It is available alongside a project or an interim engagement and is not a standalone service.",
        },
        {
          heading: "Qualified specialist support",
          body: "We bring in specialists in compensation, HR systems, organizational development, change management, people analytics, learning, and employment-law-related matters. Specialists are named on the engagement and work within clear professional boundaries.",
        },
        {
          heading: "Recruiting execution",
          body: (
            <>
              When the need is recruiting rather than leadership capacity or project work,
              go to{" "}
              <Link
                to="/services/recruiting"
                className="underline hover:text-foreground transition-colors"
              >
                Recruiting &amp; Talent Delivery
              </Link>
              . That service covers direct-hire, contract, and contract-to-hire recruiting,
              embedded recruiting support, and functional team buildouts.
            </>
          ),
        },
      ]}
      disciplinesEyebrow="How we deliver"
      disciplinesHeading="Chris leads the engagement, with specialists where the work needs them."
      disciplines={[
        {
          heading: "Chris leads the engagement",
          body: "Chris runs the assessment, the scope, the client communication, and the accountability on every engagement. You are not handed to a junior team after the first conversation.",
        },
        {
          heading: "Specialists are named, not implied",
          body: "When a project needs expertise outside Chris's own, we bring in a qualified specialist and name that person on the engagement before the work begins.",
        },
        {
          heading: "We support the HR leader rather than replace them",
          body: "The CHRO, Chief People Officer, or Head of Talent stays the leader of the function. We provide capacity, an outside read, and access to specialists.",
        },
        {
          heading: "Every engagement has a defined scope",
          body: "We agree the deliverables, the schedule, and the communication cadence in writing before the work starts, so both sides know what finished looks like.",
        },
      ]}
      methodMap={[
        {
          phase: "Discovery",
          body: "We meet with the HR leader, and where useful the CEO and the team, to understand the business, the function, and where the work is backing up.",
        },
        {
          phase: "Design",
          body: "We put the scope in writing, including the deliverables, the priorities, the schedule, and who is responsible for each part of the work.",
        },
        {
          phase: "Execute",
          body: "We run the work on an agreed cadence, whether that is an assessment, an interim leadership engagement, or a defined project.",
        },
        {
          phase: "Handover",
          body: "We hand the work back with documentation the team can use, then check in once the team has had time to run with it.",
        },
      ]}
      wontDo={[
        "We do not act as a professional employer organization, a co-employer, or a benefits broker.",
        "We do not process payroll or administer benefits enrollment.",
        "We do not provide legal advice. Employment-law-related work is handled as a defined project with qualified specialists, and legal opinions come from your counsel.",
        "We do not sell open-ended day-to-day HR administration in place of the leader a company needs to hire.",
      ]}
      engagements={[
        {
          name: "Function assessment",
          detail: "A fixed-scope assessment of the HR or talent function, ending with written findings and priorities.",
        },
        {
          name: "The 100-day leadership service",
          detail: "A defined engagement for a newly appointed CHRO or senior talent leader, ending with a practical plan for the first 100 days.",
        },
        {
          name: "Interim leadership",
          detail: "An experienced HR or talent leader working inside the company for an agreed period.",
        },
        {
          name: "Defined project",
          detail: "A single project with a written scope, a schedule, and a named delivery lead.",
        },
        {
          name: "Specialist support",
          detail: "A named qualified specialist engaged for a specific area of work.",
        },
        {
          name: "Remote onboarding add-on",
          detail: "Optional support that helps new hires get productive in their first weeks.",
        },
      ]}
      engagementsNote="Every engagement has a written scope, an agreed schedule, and a named lead. We discuss fees in conversation once we understand the work."
      faq={[
        {
          q: "How is this different from an HR outsourcing firm or a PEO?",
          a: "We do not process payroll, administer benefits, or act as a co-employer. This service sits above that layer. We help HR and talent leaders assess the function, add capacity, and complete defined projects.",
        },
        {
          q: "What is the 100-day leadership service?",
          a: "It is a defined engagement for a newly appointed CHRO or senior talent leader. We help the new leader assess the function, establish priorities, clarify responsibilities, and develop a practical plan for the first 100 days. Chris leads the engagement with support from qualified specialists when needed.",
        },
        {
          q: "We need to fill open roles. Is that part of this service?",
          a: "Recruiting execution runs through Recruiting & Talent Delivery, which covers direct-hire, contract, and contract-to-hire recruiting, embedded recruiting support, and functional team buildouts. This service covers leadership capacity, function assessments, and defined projects.",
        },
        {
          q: "Do you handle compliance, payroll, or benefits work?",
          a: "Only as defined projects completed with qualified specialists, and we name the specialist on the engagement. We do not provide legal advice and we do not run routine payroll or benefits administration.",
        },
        {
          q: "Will you compete with our internal HR leader?",
          a: "No. The service is built to support HR and talent leaders. The leader stays responsible for the function, and we provide capacity, an independent read, and access to specialists.",
        },
        {
          q: "Who does the work?",
          a: "Chris leads the client relationship and the engagement. Qualified specialists support specific areas when a project requires expertise outside his own, and we name them before the work starts.",
        },
      ]}
      ctaTitle="Tell us where your team needs capacity."
      ctaBody="Send us a short summary of the function, the project, or the leadership gap. We will respond with a candid view of how, and whether, we can help."
    />
  );
}
