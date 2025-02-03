import type { Metadata } from "next";
import { sharedMetadata } from "@/app/metadata";
import VendorPortfolio from "@/components/pages/tour-management/content";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "No.1 Tour Management Software for Agencies & Guides",
  description:
    "Easily manage tours with Tripsyncer's all-in-one tour management software. Automate itineraries, live updates, SEO tools, and more. Start your free trial now!",
  keywords: [
    "vendor dashboard",
    "tour management",
    "CRM for vendors",
    "staff management",
    "booking management",
    "invoice generation",
    "tour bookings",
    "vendor portal",
    "travel business tools",
    "tour operator management",
  ],
  openGraph: {
    title:
      "TourPro by TripSyncer: The Swiss Army Knife of Tour Management Software, tour operator software, and travel management solution",
    description:
      "Manage 1000+ tours effortlessly with automated workflows, real-time collaboration, and global language support. Trusted by 1000+ travel businesses worldwide.",
    images: ["/tripsyncer-logo.png"],
  },
};

export default function VendorDashboardPage() {
  return <VendorPortfolio />;
}
