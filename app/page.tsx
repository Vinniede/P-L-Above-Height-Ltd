import { HeroSection } from "@/components/home/hero-section";
import { OverviewSection } from "@/components/home/overview-section";
import { ServicesSection } from "@/components/home/services-section";
import { ProductsSection } from "@/components/home/products-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { StatsBanner } from "@/components/home/stats-banner";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";
import { ProcessSection } from "@/components/home/process-section";
import { TestimonialSection } from "@/components/home/testimonial-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { CertificationsSection } from "@/components/home/certifications-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

export default function HomePage() {
  return (
    <main className="pt-[72px] sm:pt-[80px] lg:pt-[90px]">
      <HeroSection />
      <OverviewSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <StatsBanner />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialSection />
      <ProjectsSection />
      <CertificationsSection />
      <FinalCtaSection />
    </main>
  );
}
