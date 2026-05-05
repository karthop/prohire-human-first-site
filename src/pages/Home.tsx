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
        title="proHIRE resources — Executive Talent & Growth Advisory"
        description="Leadership talent, fractional executives, and growth infrastructure for founder-led, PE-backed, and enterprise companies scaling with intent."
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
