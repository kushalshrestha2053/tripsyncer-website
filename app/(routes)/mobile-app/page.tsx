import type { Metadata } from "next";
import { sharedMetadata } from "@/app/metadata";
import MobileApp from "@/components/pages/mobile-app/content";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "TripSyncer Tour Booking App",
  description:
    "Discover the best way to plan and book your tours with TripSyncer, a mobile app designed for seamless travel planning and bookings.",
  keywords: [
    "tour booking app",
    "TripSyncer",
    "travel app",
    "guided tours",
    "tour packages",
    "vacation planning",
    "destination guides",
    "travel planning app",
    "mobile tour booking",
    "holiday bookings",
    "adventure travel",
  ],
};

export default function TourBookingAppMobile() {
  return <MobileApp />;
}
