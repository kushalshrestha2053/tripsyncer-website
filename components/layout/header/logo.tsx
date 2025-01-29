"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import NextLink from "next/link";

interface LogoProps {
  satisfy: any; // Next.js font object type
}

export function Logo({ satisfy }: LogoProps) {
  return (
    <Link href="/" className="relative flex items-center">
      <motion.div
        className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-lg"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <NextLink className="flex justify-start items-center gap-1" href="/">
        <img
          alt="logo"
          className="z-0 w-40 object-cover"
          src="/tripsyncer-logo.png"
        />
      </NextLink>
    </Link>
  );
}
