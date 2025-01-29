"use client";

import { motion } from "framer-motion";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";

export function HeroDescription() {
  return (
    <motion.p
      variants={HERO_ANIMATIONS.item}
      className="mb-8 text-lg text-muted-foreground sm:text-xl"
    >
      From family road trips and home events to global tour management,
      TripSyncer combines powerful AI and user-friendly tools to simplify your
      life. Say goodbye to stress and hello to unforgettable experiences and
      seamless operations.
    </motion.p>
  );
}
