import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ProductsSection } from "@/components/products";
import { BlogSection } from "@/components/blog";
import PricingSection from "@/components/sections/pricing/content";
import Testimonials from "@/components/sections/testimonials/content";
import FAQSection from "@/components/sections/FAQ/content";
import KeyBenefits from "@/components/sections/key-benefits/content";
import HowItWorks from "@/components/sections/HowItWorks/content";
import Integrations from "@/components/sections/integrations/content";
import DataSecurity from "@/components/sections/data-security/content";
import CTA from "@/components/sections/cta-section";
import Newsletter from "@/components/sections/newsletter";
import FinalCTA from "@/components/sections/final-cta";
import SupportedAndTrustedBy from "@/components/slider/content";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SupportedAndTrustedBy />
      <KeyBenefits />
      <FeaturesSection />
      <ProductsSection />
      <HowItWorks />
      <Integrations />
      <DataSecurity />
      {/* <PricingSection /> */}
      <CTA />
      <Testimonials />
      <BlogSection />
      <FAQSection />
      <Newsletter />
      <FinalCTA />
    </main>
  );
}
