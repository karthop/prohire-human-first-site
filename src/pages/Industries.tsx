import { Seo } from "@/components/Seo";
import { CTABand } from "@/sections/CTABand";

const industries = [
  { name: "Technology & SaaS", body: "Series A through public, engineering, product, GTM, and CXO roles." },
  { name: "FinTech & Financial Services", body: "Compliance-aware leadership, capital markets fluency, regulated growth." },
  { name: "Healthcare & MedTech", body: "Clinical, regulatory, and commercial talent for accelerated market access." },
  { name: "Supply Chain & Logistics", body: "Operations leadership and BD execution for industrial and logistics platforms." },
  { name: "Industrial & Energy", body: "Senior operators and commercial leadership for capital-intensive growth." },
  { name: "Professional Services", body: "Boutique-to-mid-market firms scaling delivery, BD, and back-office leadership." },
];

export default function Industries() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <Seo
        title="Industries | proHIRE resources"
        description="proHIRE resources works across selected industries, including technology and software, financial services and fintech, healthcare and medical technology, supply chain and logistics, industrial and energy, and professional services."
      />
      <section className="bg-primary text-primary-foreground brush-texture">
        <div className="container-editorial py-12 lg:py-18">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/70 mb-6">Industries</div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.1] max-w-4xl">
            We Work Across Selected Industries.
          </h1>
          <p className="mt-8 text-lg text-primary-foreground/80 font-light max-w-3xl leading-relaxed">
            proHIRE resources concentrates on a selected set of industries rather than
            every market. These are the sectors where we have the most relevant experience
            and the strongest network.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-editorial">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {industries.map((i) => (
            <article key={i.name} className="bg-background p-10 flex flex-col">
              <h2 className="font-serif text-xl text-foreground mb-4 leading-snug">{i.name}</h2>
              <p className="text-muted-foreground font-light leading-relaxed">{i.body}</p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Tell us about your industry and the role."
        body="Send us a short summary of your situation. We will respond with a candid view of how, and whether, we can help."
      />
    </div>
  );
}
