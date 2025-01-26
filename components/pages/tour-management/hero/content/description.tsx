"use client";

import { motion } from "framer-motion";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";

export function HeroDescription() {
  return (
    <motion.p
      variants={HERO_ANIMATIONS.item}
      className="mb-8 text-lg text-muted-foreground sm:text-xl"
    >
      🚀 Uniting Tour Operators, Guides, and Travelers for Effortless Group and
      Solo Adventures. Streamline your travel planning with AI-powered
      management, letting you focus on creating unforgettable experiences.
    </motion.p>
  );
}
