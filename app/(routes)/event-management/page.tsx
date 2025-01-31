import type { Metadata } from "next";
import { sharedMetadata } from "@/app/metadata";
import EventManagement from "@/components/pages/event-management/content";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Event Management Marketplace",
  description:
    "Discover a variety of event management services, including venues, catering, entertainment, and more. Plan your next event with ease and find the best vendors for any occasion.",
  keywords: [
    "event management",
    "event planning",
    "wedding planning",
    "corporate events",
    "event venues",
    "event services",
    "catering services",
    "event entertainment",
    "event vendors",
    "party planning",
    "conference planning",
  ],
};

export default function EventManagementPage() {
  return <EventManagement />;
}
