"use client";

import { HeroSection } from "./hero";
import { FeatureList } from "./FeatureSection";
import { CtaSection } from "./CtaSection";

export default function VendorPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureList />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
