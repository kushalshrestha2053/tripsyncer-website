"use client";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA() {
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
    <section className="border-t bg-muted/40 py-10 md:py-16 dark:bg-muted/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Started for Free
        </h2>
        <p className="text-xl mb-8">Plan Smarter Today</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            className="group"
            onClick={handleScroll}
          >
            Start Planning
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Link
            href="https://www.youtube.com/watch?v=tUjk5QfrOd0"
            target="_blank"
          >
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] cursor-pointer"
            >
              Watch a Quick Demo
              <Play className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
