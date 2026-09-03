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
        title="proHIRE resources, Recruiting, Executive Search & Growth Advisory"
        description="proHIRE resources provides recruiting, executive search, and growth advisory for growing companies. We recruit professionals and executives, build functional teams, and provide targeted advisory support."
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
