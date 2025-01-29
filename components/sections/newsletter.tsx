import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="border-t bg-muted/40 py-16 md:py-24 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Stay Inspired – Join the TripSyncer Community
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-center mb-12 text-muted-foreground">
              Get exclusive planning tips, travel inspiration, and updates on
              new features delivered straight to your inbox. Join thousands of
              happy users making the most of every journey and event.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
              />
              <Button>
                Subscribe Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="/tripsyncer-dashboard-roadtrip-tour-event.jpg"
                alt="TripSyncer dashboard showing road trip map, event invite, and tour management tools."
                className="rounded-lg shadow-md"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs dark:bg-gray-800 dark:text-gray-100">
                <h3 className="font-semibold text-lg mb-2">
                  Thank You for Subscribing!
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your next adventure awaits. Check your inbox for exclusive
                  TripSyncer tips!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
