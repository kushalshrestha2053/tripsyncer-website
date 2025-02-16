"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";

export function HeroCTA() {
  return (
    <motion.div
      variants={HERO_ANIMATIONS.item}
      className="flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      <Button size="lg" className="group min-w-[200px]" asChild>
        <Link href="#">
          Start Free Trial (No CC Required)
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
      <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
        <Link
          href="https://www.youtube.com/watch?v=tUjk5QfrOd0"
          target="_blank"
        >
          Watch 90-Second Demo →
        </Link>
      </Button>
    </motion.div>
  );
}
