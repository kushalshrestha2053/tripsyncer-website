"use client";

import { motion } from "framer-motion";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";

export function HeroDescription() {
  return (
    <motion.p
      variants={HERO_ANIMATIONS.item}
      className="mb-8 text-lg text-muted-foreground sm:text-xl"
    >
      Imagine: Your entire tour operation – bookings, guides, pricing, customer
      communication – living in one zen-like dashboard. No more copy-pasting
      details across 8 tabs. No more ‘Wait, which version is current?’. Tour
      Management Software by TripSyncer helps travel businesses like yours
      manage 3x more tours with 70% less stress. Ready to see how?
    </motion.p>
  );
}
