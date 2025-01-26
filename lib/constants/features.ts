import { Smartphone, Map, ShoppingBag, Calendar } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  category: FeatureCategory;
}

export type FeatureCategory =
  | "Tech"
  | "Business"
  | "Travel"
  | "Event";

export const FEATURES: Feature[] = [
  {
    icon: Smartphone,
    title: "Mobile App ",
    description: "A mobile application allowing users to book and manage their tours on the go.",
    href: "/mobile-app",
    category: "Tech",
  },
  {
    icon: Map,
    title: "Tour Management System",
    description: "Tools for tour operators to manage listings, bookings, and customer interactions.",
    href: "/tour-management",
    category: "Travel",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace ",
    description: "A platform connecting travelers with unique tours and activities worldwide.",
    href: "/marketplace",
    category: "Business",
  },
  {
    icon: Calendar,
    title: "Event Management System",
    description: "Effortlessly manage events with end-to-end planning and scheduling tools.",
    href: "/event-management",
    category: "Event",
  },
] as const;
