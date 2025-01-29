"use client";

import { motion } from "framer-motion";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";

export function HeroDescription() {
  return (
    <motion.p
      variants={HERO_ANIMATIONS.item}
      className="mb-8 text-lg text-muted-foreground sm:text-xl"
    >
      Whether it’s a cross-country road trip or a cozy home gathering,
      TripSyncer transforms your planning process with Generative AI tools.
      Focus on the fun, and let us handle the logistics. From itineraries to
      invites, it’s all covered.
    </motion.p>
  );
}
