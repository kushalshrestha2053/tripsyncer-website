"use client";

import { motion } from "framer-motion";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";

export function HeroDescription() {
  return (
    <motion.p
      variants={HERO_ANIMATIONS.item}
      className="mb-8 text-lg text-muted-foreground sm:text-xl"
    >
      🚀 Explore exciting tours, check availability, read reviews, and book your
      next adventure. Enjoy 24/7 support and a seamless experience for all your
      travel needs.
    </motion.p>
  );
}
