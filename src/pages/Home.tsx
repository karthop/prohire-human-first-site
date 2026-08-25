import { Seo } from "@/components/Seo";
import { EditorialHero } from "@/sections/EditorialHero";
import { ProofBar } from "@/sections/ProofBar";
import { PillarGrid } from "@/sections/PillarGrid";
import { FeaturedCases } from "@/sections/FeaturedCases";
import { FounderIntro } from "@/sections/FounderIntro";
import { CTABand } from "@/sections/CTABand";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 bg-background">
      <Seo
        title="proHIRE resources, Executive Search & Growth Advisory"
        description="We help founders and enterprise leaders make critical executive hires, build teams from scratch, and scale revenue. Senior partners run every engagement."
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
