import { Link } from "react-router-dom";
import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function RevenueOperationalAcceleration() {
  return (
    <ServiceTemplate
      seoTitle="Revenue & Operational Acceleration | proHIRE resources"
      seoDescription="We help companies improve revenue team structure and role clarity, support sales leadership and sales talent decisions, align hiring plans with growth priorities, and improve selected operating processes."
      eyebrow="Revenue & Operational Acceleration"
      title="We Help Companies Improve Revenue Team Structure and Execution."
      lead="We work with company leaders on how the revenue team is structured, who is responsible for what, which roles to hire next, and which operating processes need attention."
      thesis="This is defined project work, not general management consulting. We take on a specific problem with a written scope, an agreed schedule, and a named person responsible for delivering it. Chris leads the client relationship and brings in qualified specialists when the work requires expertise outside his own. We do not sell open-ended advisory retainers and we do not promise a revenue number."
      pointOfView="We take on defined work with an agreed scope. We do not guarantee revenue, sales, or cost outcomes."
      pointOfViewPlain
      whoFor={[
        "Company leaders building a revenue team for the first time.",
        "Leaders reorganizing an existing sales or revenue team where responsibilities have become unclear.",
        "Companies whose hiring plan and growth priorities no longer match each other.",
        "Leaders who need experienced help with sales leadership and sales talent decisions.",
        "Companies with a specific operating process that needs to be documented or improved.",
      ]}
      capabilities={[
        {
          heading: "Revenue team structure and role clarity",
          body: "We review how the revenue team is organized today, where responsibilities overlap or fall through, and what the structure needs to look like for the stage the company is entering. The work ends with a written structure and a responsibility map.",
          bullets: [
            "Current structure and reporting review",
            "Role definitions and responsibility mapping",
            "Coverage gaps and duplicated effort",
            "A written recommended structure",
          ],
        },
        {
          heading: "Sales leadership and talent support",
          body: (
            <>
              We advise on the sales leadership the company needs next and support the
              hiring that follows. Senior leadership searches run through{" "}
              <Link
                to="/services/executive-search"
                className="underline hover:text-foreground transition-colors"
              >
                Executive Search &amp; Leadership Advisory
              </Link>
              , and sales and marketing recruiting runs through{" "}
              <Link
                to="/services/recruiting"
                className="underline hover:text-foreground transition-colors"
              >
                Recruiting &amp; Talent Delivery
              </Link>
              .
            </>
          ),
        },
        {
          heading: "Alignment between hiring plans and growth priorities",
          body: "We compare the hiring plan against the growth priorities and the current team, then identify which roles to hire, in what order, and which ones can wait. The work ends with a written hiring sequence the leadership team can act on.",
          bullets: [
            "Hiring plan review against stated priorities",
            "Role sequencing and timing",
            "Where existing team members can cover the work instead",
          ],
        },
        {
          heading: "Selected operating process improvements",
          body: "We take on specific processes rather than whole operating models. Typical work includes documenting how a process runs today, agreeing how it should run, and putting the change in place with the people who use it.",
          bullets: [
            "Pipeline and forecast review practices",
            "Handoffs between sales, marketing, and delivery",
            "Reporting the leadership team relies on",
            "Onboarding and enablement for new revenue hires",
          ],
        },
        {
          heading: "Defined projects with qualified specialists",
          body: "When a project needs expertise outside Chris's own, we bring in a qualified specialist and name that person on the engagement. Each project has a written scope, a schedule, and a named delivery lead.",
        },
      ]}
      disciplinesEyebrow="How we deliver"
      disciplinesHeading="Every engagement has a defined scope and a named delivery lead."
      disciplines={[
        {
          heading: "Chris leads the client relationship",
          body: "Chris runs the intake, the scope, the client communication, and the accountability on every engagement, and brings in qualified specialists when the work requires additional expertise.",
        },
        {
          heading: "The scope is written down before we start",
          body: "We agree the problem, the deliverables, the schedule, and the communication cadence in writing. Both sides know what finished looks like.",
        },
        {
          heading: "Specialists are named on the engagement",
          body: "When a specialist is doing part of the work, we tell you who they are and which part they own before the work begins.",
        },
        {
          heading: "We report progress in writing",
          body: "Engagements run on a regular working session and a written note covering what moved, what is outstanding, and what needs a decision.",
        },
      ]}
      methodMap={[
        {
          phase: "Discovery",
          body: "We hold structured conversations with the CEO and the revenue or operations leadership to understand the current team, the priorities, and the specific problem to work on.",
        },
        {
          phase: "Design",
          body: "We write the scope, which covers the deliverables, the schedule, the delivery lead, and any specialists involved. You review and approve it before the work starts.",
        },
        {
          phase: "Execute",
          body: "We run the work on an agreed cadence with written progress notes, working alongside the people who own the process or the team.",
        },
        {
          phase: "Handover",
          body: "We hand over the documentation and the plan so the internal team can carry the work forward, then check in once they have had time to run with it.",
        },
      ]}
      wontDo={[
        "We do not operate as a general management consulting firm or take on whole-company transformation programs.",
        "We do not guarantee revenue growth, increased sales, cost savings, or other business results.",
        "We do not take performance-only engagements where neither side is accountable for the scope of work.",
        "We do not sell open-ended advisory retainers without a defined scope.",
      ]}
      engagements={[
        {
          name: "Structure and role review",
          detail: "A fixed-scope review of the revenue team structure, ending with a written structure and responsibility map.",
        },
        {
          name: "Hiring plan alignment",
          detail: "A defined project comparing the hiring plan against growth priorities, ending with a written hiring sequence.",
        },
        {
          name: "Process improvement project",
          detail: "A single operating process documented, agreed, and put in place with the people who use it.",
        },
        {
          name: "Sales leadership advisory",
          detail: "Advisory support on the sales leadership the company needs next and the hiring that follows.",
        },
        {
          name: "Specialist project",
          detail: "A defined project delivered with a named qualified specialist for work outside our own expertise.",
        },
      ]}
      engagementsNote="Every engagement has a written scope, an agreed schedule, and a named delivery lead. We discuss fees in conversation once we understand the work."
      faq={[
        {
          q: "Are you a management consulting firm?",
          a: "No. We take on defined pieces of work with a written scope and a named delivery lead. We do not run whole-company transformation programs or sell open-ended advisory retainers.",
        },
        {
          q: "Do you guarantee revenue results?",
          a: "No. We do not guarantee revenue growth, sales increases, or cost savings. We agree the scope of work, the deliverables, and the schedule, and we are accountable for delivering those.",
        },
        {
          q: "Can you hire the revenue team as well as advise on it?",
          a: "Yes, through the other services. Sales and marketing recruiting runs through Recruiting & Talent Delivery, and senior sales leadership searches run through Executive Search & Leadership Advisory.",
        },
        {
          q: "How long does an engagement run?",
          a: "It depends on the work. A structure review or a hiring plan alignment is usually a matter of weeks. A process improvement project runs longer because it includes putting the change in place. We agree the schedule in writing before we start.",
        },
        {
          q: "Who does the work?",
          a: "Chris leads the client relationship and the engagement. Qualified specialists deliver the parts of the work that require expertise outside his own, and we name them before the work starts.",
        },
      ]}
      ctaTitle="Tell us which part of the revenue team needs work."
      ctaBody="Send us a short summary of the team, the priorities, and the problem you want to solve. We will respond with a candid view of how, and whether, we can help."
    />
  );
}
