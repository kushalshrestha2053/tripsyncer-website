"use client";

import { motion } from "framer-motion";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";

export function HeroDescription() {
  return (
    <motion.p
      variants={HERO_ANIMATIONS.item}
      className="mb-8 text-lg text-muted-foreground sm:text-xl"
    >
      🚀 Connecting Tour Guides, Operators, and Roadtrippers for Seamless Group
      Travel Experiences. Simplifies your roadtrips management powered by
      Generative AI, so you can focus on making your memories.
    </motion.p>
  );
}
