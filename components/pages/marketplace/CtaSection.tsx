"use client";

import { Button } from "@/components/ui/button";

export const CtaSection: FC = () => {
  return (
    <section
      id="cta"
      className="text-center bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-12"
    >
      <h2 className="text-4xl font-bold mb-4 text-white">
        Ready to Take Your Tours to the Next Level?
      </h2>
      <p className="text-xl text-gray-400 mb-8">
        Join our platform today and discover tours, book your next adventure,
        and enjoy 24/7 support!{" "}
      </p>
      <div className="space-x-4">
        <Button size="lg" className="bg-white text-black hover:bg-gray-200">
          Explore Tours Now
        </Button>
      </div>
    </section>
  );
};
