import { ServiceTemplate } from "@/sections/ServiceTemplate";

export default function TheFirstMove() {
  return (
    <ServiceTemplate
      seoTitle="The First Move | Early Career Advisory | proHIRE resources"
      seoDescription="Early career advisory for high school and college students. LinkedIn, resume, and networking coaching built around landing the right internship."
      eyebrow="Early Career Advisory"
      title="The First Move"
      lead="Most careers are won or lost before the first interview. The First Move is proHIRE's early career advisory practice — built around one of the most competitive and underserved moments in a young person's professional life: landing the right internship."
      thesis="We work with high school juniors and seniors and college students to build a LinkedIn profile that actually gets found and taken seriously, craft a resume that reflects real potential, and develop the networking instincts that most people don't figure out until years into their career. That means learning how to identify and reach the right leaders and decision-makers, how to introduce themselves in a way that sparks genuine interest rather than triggers the delete button, and how to build organic relationships with people who can open doors — not by asking for a job, but by showing up with enough curiosity, ambition, and polish that the right people want to help them."
      pointOfView="Through individual coaching sessions and group workshops, we teach students how to be seen, how to be remembered, and how to turn a LinkedIn connection into an internship offer."
      whoFor={[
        "High school juniors and seniors preparing for college and first internships",
        "College students competing for selective internships in finance, technology, and operations",
        "Parents seeking structured advisory for a son or daughter at a critical career moment",
        "High schools and universities looking for an institutional partner on early career readiness",
      ]}
      capabilities={[
        {
          heading: "LinkedIn that actually gets found",
          body: "A profile built to be discovered by recruiters and decision-makers — positioning, headline, summary, and signal that read like a candidate worth taking seriously.",
        },
        {
          heading: "Resume that reflects real potential",
          body: "A resume that translates classes, clubs, and early jobs into the language hiring managers respond to, without inflating or pretending.",
        },
        {
          heading: "Networking instincts",
          detail: "How to identify and reach the right leaders and decision-makers, how to introduce yourself in a way that sparks interest rather than triggers the delete button, and how to follow up without burning the relationship.",
        },
        {
          heading: "Outreach that opens doors",
          detail: "Building organic relationships with people who can help — not by asking for a job, but by showing up with curiosity, ambition, and polish.",
        },
        {
          heading: "Group workshops and institutional partnerships",
          detail: "Workshops and structured programs for high schools and universities that want to give students a real advantage in the internship market.",
        },
      ]}
      engagements={[
        {
          name: "Individual coaching",
          detail: "One-to-one engagements with a student over a defined window — typically a semester or summer leading into recruiting season.",
        },
        {
          name: "Group workshops",
          detail: "Cohort-based sessions for small groups of students on LinkedIn, resume, and networking, run privately or with a partner institution.",
        },
        {
          name: "Institutional partnerships",
          detail: "Multi-session programs embedded with high schools and universities to support students through the internship search end-to-end.",
        },
      ]}
    />
  );
}
