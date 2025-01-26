import type { Metadata } from "next";
import { sharedMetadata } from "@/app/metadata";
import Marketplace from "@/components/pages/marketplace/content";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Tour Booking Marketplace",
  description:
    "Explore a wide range of tours, travel packages, and destinations. Book your next adventure with ease and find the best deals on guided tours.",
  keywords: [
    "tour booking",
    "travel marketplace",
    "guided tours",
    "travel packages",
    "holiday bookings",
    "tour packages",
    "adventure travel",
    "vacation planning",
    "destination guides",
    "tourist attractions",
  ],
};

export default function TourBookingPage() {
  return <Marketplace />;
}
