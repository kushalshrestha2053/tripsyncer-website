"use client";

import { motion } from "framer-motion";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";

export function HeroHeading() {
  return (
    <motion.h1
      variants={HERO_ANIMATIONS.item}
      className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl hero-gradient bg-clip-text text-transparent"
    >
      Make Every Journey & Home Event a Memory of Lifetime with TripSyncer App
    </motion.h1>
  );
}
