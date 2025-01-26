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
