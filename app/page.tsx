import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ProductsSection } from "@/components/products";
import { BlogSection } from "@/components/blog";
import { Newsletter } from "@/components/layout/footer/newsletter";
import TrustedBySlider from "@/components/slider/trusted-by/slider";
import SupportedBySlider from "@/components/slider/supported-by/slider";
import PricingSection from "@/components/sections/pricing/content";
import CustomerTestimonials from "@/components/sections/testimonials/content";
import SecurityPrivacySection from "@/components/sections/securityandprivacy/content";
import FAQSection from "@/components/sections/FAQ/content";
import FinalCTASection from "@/components/sections/final-cta/content";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TrustedBySlider />
      <ProductsSection />
      <SupportedBySlider />
      <SecurityPrivacySection />
      <PricingSection />
      <CustomerTestimonials />
      <BlogSection />
      <FAQSection />
      <FinalCTASection />
      <Newsletter />
    </main>
  );
}
