"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  ClipboardList,
  Users,
  Calendar,
  FileText,
} from "lucide-react";
import { HeroSection } from "./hero";
import FinalCTA from "./CTA/content";
import KeyBenefits from "./key-benefits/content";
import SplitScreenFeatures from "./split-screen-image/content";
import RoadTripFeatures from "./road-trip-features/content";
import Features from "./features/content";
import HomeEventFeatures from "./home-event-features/content";
import HowItWorks from "./how-it-works/content";
import Integrations from "./integrations/content";
import SecurityAndPrivacy from "./security-and-privacy/content";
import PricingSection from "./CTA/free-cta";
import Testimonials from "./testimonials/content";
import FAQSection from "./FAQ/content";
import SupportedAndTrustedBy from "@/components/sections/slider/content";

export default function MobileApp() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SupportedAndTrustedBy />
      <KeyBenefits />
      <SplitScreenFeatures />
      <RoadTripFeatures />
      <Features />
      <HomeEventFeatures />
      <HowItWorks />
      <Integrations />
      <SecurityAndPrivacy />
      <PricingSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}
