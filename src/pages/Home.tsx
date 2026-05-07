import { Seo } from "@/components/Seo";
import { EditorialHero } from "@/sections/EditorialHero";
import { ProofBar } from "@/sections/ProofBar";
import { PillarGrid } from "@/sections/PillarGrid";
import { FeaturedCases } from "@/sections/FeaturedCases";
import { FounderIntro } from "@/sections/FounderIntro";
import { CTABand } from "@/sections/CTABand";

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <Seo
        title="proHIRE resources, Executive Search & Growth Advisory"
        description="Executive search and growth advisory for founders, CEOs, and boards who can't afford the wrong hire. Boutique by design, close to the decision."
      />
      <EditorialHero />
      <ProofBar />
      <PillarGrid />
      <FeaturedCases />
      <FounderIntro />
      <CTABand />
    </div>
  );
}
