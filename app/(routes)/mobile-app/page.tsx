import type { Metadata } from "next";
import { sharedMetadata } from "@/app/metadata";
import MobileApp from "@/components/pages/mobile-app/content";

export const metadata: Metadata = {
  ...sharedMetadata,
  title:
    "TripSyncer: Ultimate No. 1 Road Trip Planner & Home Event Planner app",
  description:
    "Plan unforgettable road trips and flawless home events with TripSyncer’s Generative AI. Simplify logistics, enhance experiences, and create lasting memories. Try it now!",
  keywords: [
    "road trip planner",
    "home event manager",
    "TripSyncer app",
    "AI-driven planning",
    "event logistics",
    "road trip planning app",
    "stress-free event planning",
    "travel and events app",
    "generative AI for planning",
    "seamless travel planning",
    "home event organization",
  ],
  openGraph: {
    title:
      "TripSyncer: Your Go-To App for Road Trip Planning & Home Event Planning",
    description:
      "Organize seamless road trips and stress-free home events with intuitive tools and AI-driven planning features. Experience more, stress less with TripSyncer.",
    images: ["/tripsncer-mobile-app-meta-image.png"],
  },
};

export default function TourBookingAppMobile() {
  return <MobileApp />;
}
