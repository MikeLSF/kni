import { Header } from "@/src/components/Header";
import { HeroSection } from "@/src/components/HeroSection";
import { ServicesSection } from "@/src/components/ServicesSection";
import { WhyChooseSection } from "@/src/components/WhyChooseSection";
import { DetailedServicesSection } from "@/src/components/DetailedServicesSection";
import { CTASection } from "@/src/components/CTASection";
import { Footer } from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <DetailedServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
