"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Newsletter() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="border-t bg-muted/40 py-10 md:py-16 dark:bg-muted/10">
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
            <div className="flex justify-center gap-2">
              <Button onClick={handleButtonClick}>
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg max-w-xl w-full">
            <iframe
              width="540"
              height="640"
              src="https://547ae311.sibforms.com/serve/MUIFAGMZXHIeBBveu3G72hRhg-mpCabpTE6gD9Le07EMLdxU4-78JRA3n8B_8U5SKv0gBpb7ZA3HDeIwmeQssqxt9nJ_H32zBaAjApw-emrYsXAiRf0xejK9dadBXryW-Q7h9ZV5C3rufX87ZWMDC7FdJWX9C_DV_OeJn_Ad8DmF8WD2wJR3dpje9EDvvoaKBWDE7xQtxGi0rPAM"
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "100%",
              }}
            ></iframe>
            <button
              onClick={handleCloseModal}
              className="mt-4 text-sm text-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
