import { TopBar } from "@/app/_components/top-bar";
import { SiteHeader } from "@/app/_components/site-header";
import { HeroSection } from "@/app/_components/hero-section";
import { CatalogueExplorer } from "@/app/_components/catalogue-explorer";
import { WhyChooseUs } from "@/app/_components/why-choose-us";
import { IndustriesSection } from "@/app/_components/industries-section";
import { CtaBanner } from "@/app/_components/cta-banner";
import { SiteFooter } from "@/app/_components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopBar />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CatalogueExplorer />
        <WhyChooseUs />
        <IndustriesSection />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
