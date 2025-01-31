"use client";

import { HeroSection } from "./hero";
import UltimateCTA from "./UltimateCTA";
import SupportedAndTrustedBy from "@/components/slider/content";
import KeyBenefits from "./key-benefits/content";
import TourProComparison from "./split-screen-image/tour-pro-comparison";
import TMSFeatures from "./tms-feature/content";
import TourHeroSteps from "./how-it-works/content";
import AITourManagementPreview from "./ai-powered-tms/content";
import Integrations from "./integrations/content";
import SecurityAndPrivacy from "./security-and-privacy/content";
import PricingSection from "./pricing/content";
import CustomerLoveSection from "./customer-love/content";
import FAQSection from "./FAQ/content";

import FinalCTABomb from "./FinalCTA";

export default function VendorPortfolio() {
  return (
    <div>
      <HeroSection />
      <SupportedAndTrustedBy />
      <KeyBenefits />
      <TourProComparison />
      <TMSFeatures />
      <TourHeroSteps />
      <AITourManagementPreview />
      <Integrations />
      <SecurityAndPrivacy />
      <PricingSection />
      <UltimateCTA />
      <CustomerLoveSection />
      <FAQSection />
      <FinalCTABomb />
    </div>
  );
}
