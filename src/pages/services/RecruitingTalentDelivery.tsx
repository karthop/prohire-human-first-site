import { Link } from "react-router-dom";
import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function RecruitingTalentDelivery() {
  return (
    <ServiceTemplate
      seoTitle="Recruiting & Talent Delivery | proHIRE resources"
      seoDescription="Senior-led recruiting for a single professional hire, a multi-role hiring campaign, or an embedded recruiting assignment. Direct-hire, contract, contract-to-hire, embedded recruiting, and functional team buildouts."
      eyebrow="Recruiting & Talent Delivery"
      title="We Help Companies Recruit Professionals, Build Teams, and Add Hiring Capacity."
      lead="We provide senior-led recruiting for a single professional hire, a multi-role hiring campaign, or an embedded recruiting assignment."
      whoFor={[
        "Companies that need to fill one professional role and want senior attention on the search.",
        "Hiring managers running several open roles at once who need additional recruiting capacity.",
        "Talent acquisition teams that need embedded recruiting support for a defined period.",
        "Leaders building a new function who need a full team hired on a schedule.",
        "Companies that need contract or contract-to-hire professionals for defined work.",
      ]}
      capabilities={[
        {
          heading: "Direct-hire recruiting",
          body: "We recruit full-time professionals for permanent roles. Chris runs the intake, the search, the candidate conversations, and the offer process with the hiring manager.",
        },
        {
          heading: "Contract recruiting",
          body: "We place contract professionals when a company needs experienced help for a defined period or a specific project.",
        },
        {
          heading: "Contract-to-hire recruiting",
          body: "We place professionals on a contract basis with the option to convert to a permanent role after both sides have worked together.",
        },
        {
          heading: "Embedded recruiting support",
          body: "We work inside your hiring process for an agreed period, use your systems and your interview process, and report to your hiring leaders.",
        },
        {
          heading: "Functional team buildouts",
          body: (
            <>
              We recruit an entire function or team against a written hiring plan and
              sequence the roles so leaders are in place before the rest of the team
              arrives. When the plan includes a senior leadership hire, that search runs
              through{" "}
              <Link
                to="/services/executive-search"
                className="underline hover:text-foreground transition-colors"
              >
                Executive Search &amp; Leadership Advisory
              </Link>
              .
            </>
          ),
        },
        {
          heading: "Additional recruiting support",
          body: (
            <>
              We recruit remote executive assistants on a selective basis when the role fits
              our network. We also provide remote onboarding support as an optional add-on
              when a client wants help getting a new hire productive in the first weeks. HR
              and talent leaders who need broader function support can start with{" "}
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
      ]}
      rolesEyebrow="Where we recruit"
      rolesHeading="Recruiting specialties."
      rolesWeLeadOn={[
        "Technology and IT",
        "Finance and Accounting",
        "HR and Talent",
        "Marketing and Sales",
        "Supply Chain and Operations",
        "Engineering and Technical",
        "General Corporate Functions",
      ]}
      disciplinesEyebrow="How we deliver"
      disciplinesHeading="Chris leads the work, with support when a project requires it."
      disciplines={[
        {
          heading: "Chris leads the client relationship",
          body: "Chris Betz runs the intake, the search strategy, the client communication, and the accountability on every recruiting engagement.",
        },
        {
          heading: "Qualified recruiters add capacity",
          body: "When a project requires additional capacity, qualified recruiters and specialists support the work under the same scope and the same standards. We name who is doing the work before the engagement starts.",
        },
        {
          heading: "Every engagement has a defined scope",
          body: "We agree on the roles, the schedule, the hiring process, and the communication cadence in writing before recruiting begins.",
        },
      ]}
      engagements={[
        {
          name: "Single-role search",
          detail: "We recruit for one open position against a defined scope and an agreed schedule.",
        },
        {
          name: "Multi-role hiring campaign",
          detail: "We recruit for several open positions at the same time and manage them as one coordinated project.",
        },
        {
          name: "Embedded recruiting",
          detail: "A recruiter works inside your team for an agreed number of months, in your systems and your hiring process.",
        },
        {
          name: "Contract and contract-to-hire",
          detail: "We place professionals for a defined period, with the option to convert to a permanent role.",
        },
        {
          name: "Functional team buildout",
          detail: "We hire a full function against a written hiring plan and an agreed sequence of roles.",
        },
        {
          name: "Remote onboarding add-on",
          detail: "Optional support that helps a new hire get productive in the first weeks after the start date.",
        },
      ]}
      engagementsNote="Every engagement has a written scope, an agreed schedule, and a named lead. We discuss fees in conversation once we understand the roles, the timeline, and the hiring process."
      faq={[
        {
          q: "Can you recruit for a single position?",
          a: "Yes. We take single-role searches, and Chris leads the work directly. We also run multi-role campaigns and full team buildouts when a company needs more than one hire.",
        },
        {
          q: "What does embedded recruiting mean?",
          a: "An embedded recruiter works inside your hiring process for an agreed period, uses your systems, follows your interview process, and reports to your hiring leaders. Companies use it when hiring volume rises faster than internal capacity.",
        },
        {
          q: "Which functions do you recruit for?",
          a: "We recruit across technology and IT, finance and accounting, HR and talent, marketing and sales, supply chain and operations, engineering and technical roles, and general corporate functions.",
        },
        {
          q: "How is this different from Executive Search & Leadership Advisory?",
          a: "Recruiting & Talent Delivery covers professional recruiting, contract hiring, embedded recruiting, and functional team buildouts. Executive Search & Leadership Advisory covers senior leadership searches and executive-level advisory work. We will tell you which one fits after we understand the role.",
        },
        {
          q: "Who does the recruiting work?",
          a: "Chris leads the client relationship and the recruiting work. Qualified recruiters and specialists support the engagement when a project requires additional capacity, and we name them before the work starts.",
        },
      ]}
      ctaTitle="Tell us which roles you need to fill."
      ctaBody="We recruit for one position, several positions at once, or an entire functional team. Send us the roles and the timeline, and we will respond with a candid view of how we can help."
    />
  );
}
