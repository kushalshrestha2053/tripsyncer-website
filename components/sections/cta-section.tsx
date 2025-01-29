import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="border-t bg-muted/40 py-16 md:py-24 dark:bg-muted/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Started for Free
        </h2>
        <p className="text-xl mb-8">Plan Smarter Today</p>
        <Button size="lg" variant="default" className="group">
          Start Planning
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
