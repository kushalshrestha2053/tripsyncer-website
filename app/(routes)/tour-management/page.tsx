import type { Metadata } from "next";
import { sharedMetadata } from "@/app/metadata";
import VendorPortfolio from "@/components/pages/tour-management/content";

export const metadata: Metadata = {
  ...sharedMetadata,
  title: "Tour Management System",
  description:
    "Manage your tours, bookings, staff, and invoices with ease. Access CRM tools, tour management features, and streamline your business processes.",
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
};

export default function VendorDashboardPage() {
  return <VendorPortfolio />;
}
