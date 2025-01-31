import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your Perfect Trip, Event, or Tour Starts Here
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12">
          Whether you're planning a personal adventure, hosting a family event,
          or growing your travel business, TripSyncer has the tools to make it
          effortless and memorable. Start now and see the difference.
        </p>
        <div className="space-y-6">
          {/* Mobile App */}
          <div className="flex flex-col sm:flex-row justify-center md:mr-5 gap-4">
            <Link href="/mobile-app">
              <Button size="sm" variant="default">
                Start Mobile App For Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=tUjk5QfrOd0"
              target="_blank"
            >
              <Button
                size="sm"
                variant="outline"
                className="min-w-[200px] cursor-pointer"
              >
                Watch a Quick Demo
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          {/* Tour Management */}
          <div className="flex flex-col sm:flex-row  md:ml-1 justify-center gap-4">
            <Link href="/tour-management">
              <Button size="default" variant="default">
                Start Tour Management For Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=tUjk5QfrOd0"
              target="_blank"
            >
              <Button
                size="default"
                variant="outline"
                className="min-w-[200px] cursor-pointer"
              >
                Watch a Quick Demo (Coming Soon)
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          {/* Event Management */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/event-management">
              <Button size="lg" variant="default">
                Start Event Management For Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=tUjk5QfrOd0"
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] cursor-pointer"
              >
                Watch a Quick Demo (Coming Soon)
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
