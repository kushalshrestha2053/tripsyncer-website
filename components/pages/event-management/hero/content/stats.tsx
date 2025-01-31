"use client";

import { motion } from "framer-motion";
import { HERO_ANIMATIONS, HERO_STATS } from "@/lib/constants/hero";

export function HeroStats() {
  return (
    <motion.div
      variants={HERO_ANIMATIONS.item}
      className="mt-12 flex items-center justify-center gap-8 text-muted-foreground"
    >
      <div className="text-center">
        <div className="text-2xl font-bold">5K+</div>
        <div className="text-sm">Tours Completed</div>
      </div>
      <div className="h-12 w-px bg-border" />
      <div className="text-center">
        <div className="text-2xl font-bold">98%</div>
        <div className="text-sm">Customer Satisfaction</div>
      </div>
      <div className="h-12 w-px bg-border" />
      <div className="text-center">
        <div className="text-2xl font-bold">24/7</div>
        <div className="text-sm">Support</div>
      </div>
    </motion.div>
  );
}
