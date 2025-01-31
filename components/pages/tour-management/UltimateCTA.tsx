import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function UltimateCTA() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground dark:text-white">
            Start Your Free Trial
          </h2>
          <p className="text-center text-gray-500 mb-6 max-w-2xl mx-auto">
            Join 1000+ Tour Titans Already Growing Their Business
          </p>
          <Button
            size="sm"
            className=" text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="mt-6">
            No credit card required • Start Your Free Trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
