"use client";

import { motion } from "framer-motion";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export function HeroIcons() {
  return (
    <div className="text-center px-4 sm:px-6 md:px-8">
      {/* Hero Heading */}
      <motion.h1
        variants={HERO_ANIMATIONS.item}
        className="mb-4 text-sm text-gray-600 sm:text-base md:text-lg font-medium tracking-tight"
      >
        Streamlining your roadtrip planning so you can focus on making memories.
      </motion.h1>

      {/* App Store and Google Play icons */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0 mt-2 mb-5">
        <motion.a
          href="#"
          className="flex items-center space-x-2 text-gray-800 dark:text-white hover:text-accent transition-all"
          variants={HERO_ANIMATIONS.item} // Reusing the animation variants
          whileHover={{ scale: 1.1 }} // Hover animation for scaling
          whileTap={{ scale: 0.95 }} // Tap animation
        >
          <FaGooglePlay className="text-2xl sm:text-xl md:text-2xl" />
          <motion.span
            className="text-sm sm:text-base md:text-lg font-medium"
            variants={HERO_ANIMATIONS.item}
          >
            Get it on Google Play
          </motion.span>
        </motion.a>
        <motion.a
          href="#"
          className="flex items-center space-x-2 text-gray-800 dark:text-white hover:text-accent transition-all"
          variants={HERO_ANIMATIONS.item}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaApple className="text-2xl sm:text-xl md:text-2xl" />
          <motion.span
            className="text-sm sm:text-base md:text-lg font-medium"
            variants={HERO_ANIMATIONS.item}
          >
            Download on the App Store
          </motion.span>
        </motion.a>
      </div>
    </div>
  );
}
