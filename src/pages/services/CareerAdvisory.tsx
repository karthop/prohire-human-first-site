import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function CareerAdvisory() {
  return (
    <ServiceTemplate
      seoTitle="Career Advisory for Senior Professionals | proHIRE resources"
      seoDescription="Confidential one-to-one advisory for senior executives, board candidates, and operators navigating high-stakes transitions."
      eyebrow="Career Advisory"
      title="Career Advisory for Senior Professionals"
      lead="Confidential, one-to-one advisory for senior leaders navigating high-stakes transitions, CXO moves, board candidacies, post-exit chapters, and the legacy-defining decisions that arrive without warning."
      thesis="Senior careers compound. The wrong move costs a decade, not because the next role fails, but because every role after that gets recruited from the last one. The market doesn't give senior executives a structured way to make these decisions. Recruiters work for the company. Coaches work on personal development. Board networks are closed. Career advisory at this level is the work between those layers: the positioning, the activation, and the calibration of judgment that turns a transition into a deliberate move rather than a reactive one."
      pointOfView="Senior careers should be designed years before they're needed. By the time the call comes, the work should already be done."
      whoFor={[
        "Sitting CXOs evaluating an inbound opportunity, an exit, or an internal succession",
        "Operators between roles who have been approached for a board seat and need a structured path",
        "Founders post-exit weighing the next chapter , operator, investor, board director, or independent",
        "Senior leaders inside a company restructuring whose next move will define the next decade",
      ]}
      capabilities={[
        {
          heading: "Executive positioning",
          body: "Resume, LinkedIn, and executive-narrative development calibrated to board-level audiences and the scrutiny of retained search firms. We rewrite the story, not the document.",
        },
        {
          heading: "Search and network strategy",
          body: "A targeted approach to retained search firms, board networks, and decision-makers in your category. The plan names the doors and how they open.",
        },
        {
          heading: "Interview and negotiation advisory",
          body: "Preparation for board interviews, executive comp structures, equity, and the complex multi-party offer negotiations that define senior moves.",
        },
        {
          heading: "Board readiness",
          body: "Board-track positioning, governance preparation, affiliations, and director-level introductions. Most board seats require eighteen months of deliberate work , we run it.",
        },
        {
          heading: "Exit and post-exit chapters",
          body: "Structured advisory for founders post-exit and CXOs post-transaction on the next chapter , operator, investor, advisor, or board portfolio. For company-side outplacement and workforce transitions handled with the same care, see People & Organization Advisory.",
        },
      ]}
      disciplines={[
        {
          heading: "Discretion as the default",
          body: "We do not name clients. We do not publish testimonials. Every engagement runs under NDA. Most of our advisory work is happening for senior leaders who are not , publicly , looking.",
        },
        {
          heading: "Operator's lens",
          body: "Twenty years inside revenue, delivery, and talent functions, including senior hiring at one of the most demanding bars in tech. We have sat on both sides of the search, and the advice reflects it.",
        },
        {
          heading: "Written, structured, calibrated",
          body: "Every engagement produces written artifacts , positioning, target list, narrative, decision frameworks. The work outlasts the conversation.",
        },
        {
          heading: "Honest counsel",
          body: "If the move you are considering is wrong for you, we will say so. If the role you are interviewing for is mis-scoped, we will help you re-scope it before you accept it.",
        },
      ]}
      methodMap={[
        { phase: "Discovery", body: "Two confidential conversations to map the situation, the constraints, the timeline, and the underlying objective. We listen for what the next role needs to do for the next ten years, not just the next two." },
        { phase: "Design", body: "A written engagement plan: positioning thesis, narrative, target list of firms or board categories, activation sequence, and timeline. Signed before the work begins." },
        { phase: "Execute", body: "Positioning artifacts, search-firm and network introductions, interview preparation, and offer or comp advisory. Working cadence calibrated to the urgency of the situation." },
        { phase: "Embed", body: "Onboarding advisory for the first 90 days in the new seat. The transition is not the finish line , the first quarter inside the role is." },
      ]}
      wontDo={[
        "Operate as a recruiter , we work for you, not for a hiring company.",
        "Promise placements, interviews, or board seats. We promise structure, judgment, and access.",
        "Take an engagement when the work is fundamentally outplacement, not advisory. We will refer.",
      ]}
      engagements={[
        { name: "Confidential advisory", detail: "Scoped per engagement against a written plan and timeline. Most engagements run six to twelve weeks of focused work, with optional ongoing advisory after." },
        { name: "Board readiness", detail: "Twelve-to-eighteen-month structured program to position for and land the first board seat." },
        { name: "Discovery call", detail: "30-minute confidential conversation to assess fit and approach. Complimentary and without obligation." },
      ]}
      engagementsNote="Investment is engagement-specific and discussed in consultation. Senior advisory work is fixed-fee, structured, and scoped to a written plan , never hourly."
      faq={[
        {
          q: "How is this different from executive coaching?",
          a: "Coaching works on how you lead. Career advisory works on what you do next, how you position for it, and how you land it. We will refer to a coach when that is the right work; most of the time the two are complementary, not substitutes.",
        },
        {
          q: "How long does an engagement take?",
          a: "Most engagements run six to twelve weeks of focused work, calibrated to the urgency of the situation. Board readiness is a longer arc , typically twelve to eighteen months of deliberate positioning.",
        },
        {
          q: "Will my advisor be the founder, or someone junior?",
          a: "The work is led by Chris Betz directly. There is no junior staffing. Boutique means partner attention, every engagement, end to end.",
        },
        {
          q: "How do you protect confidentiality?",
          a: "Every engagement runs under NDA. We do not name clients, publish testimonials, or use career advisory work in marketing. Most of our clients are senior leaders who are not publicly looking.",
        },
        {
          q: "Is this outplacement?",
          a: "No. Outplacement is a service paid for by the departing employer, focused on speed of next role. Career advisory is paid for by the executive, focused on the right next move , which is sometimes staying, sometimes board work, sometimes a deliberate pause. We will refer to outplacement when that is the right answer.",
        },
      ]}
    />
  );
}
