import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HERO_ANIMATIONS } from "@/lib/constants/hero";

export function HeroCTA() {
  const handleScroll = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      variants={HERO_ANIMATIONS.item}
      className="flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      <Button
        size="lg"
        className="group min-w-[200px]"
        asChild
        onClick={handleScroll}
      >
        <span>
          Start Planning for Free
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Button>

      <Button
        size="lg"
        variant="outline"
        className="min-w-[200px] cursor-pointer"
        asChild
      >
        <Link
          href="https://www.youtube.com/watch?v=tUjk5QfrOd0"
          target="_blank"
        >
          See How It Works (90-Second Demo)
        </Link>
      </Button>
    </motion.div>
  );
}
