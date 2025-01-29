import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="border-t bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your Perfect Trip, Event, or Tour Starts Here
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12">
          Whether you're planning a personal adventure, hosting a family event,
          or growing your travel business, TripSyncer has the tools to make it
          effortless and memorable. Start now and see the difference.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="default">
            Start Planning for Free
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Link
            href="https://www.youtube.com/watch?v=tUjk5QfrOd0"
            target="blank"
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
