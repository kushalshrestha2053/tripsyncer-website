export interface Product {
  title: string
  description: string
  price: string
  tags: string[]
  image: string
  category: ProductCategory
  
}

export type ProductCategory = 
  | "marketplace"
  | "tourManagement"
  | "mobileApp"
  | "eventManagement"
 

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "mobileApp",
  
  "tourManagement",
  "marketplace",
 
  "eventManagement"

 
];
export const PRODUCTS: Record<ProductCategory, Product[]> = {
  mobileApp: [
    {
      title: "Custom Route Planner 🚗",
      description:
        "Design your perfect journey with scenic stops, gas stations, and real-time traffic updates.",
      price: "Free",
      tags: ["route-planner", "real-time", "traffic-updates"],
      image: "/route-planner.jpeg",
      category: "mobileApp",
      
    },
    {
      title: "Expense Management 💰",
      description:
        "Keep tabs on travel costs like fuel, accommodations, and meals for a hassle-free budget.",
      price: "Free",
      tags: ["expense-tracking", "budget-management", "travel-costs"],
      image: "/expense-management.jpeg",
      category: "mobileApp",
    },
    {
      title: "Collaborative Itineraries 🤝",
      description:
        "Share plans with friends and family, assign tasks, and get live updates on changes.",
      price: "Free",
      tags: ["collaboration", "itinerary-sharing", "live-updates"],
      image: "/collaborative-itineraries.jpeg",
      category: "mobileApp",
    },
    {
      title: "Emergency Assistance Locator 🆘",
      description:
        "Find nearby medical centers, repair shops, and gas stations in just a few taps.",
      price: "Free",
      tags: ["emergency-locator", "repair-shops", "medical-centers"],
      image: "/emergency-assistance.jpeg",
      category: "mobileApp",
    },
  ],

  tourManagement: [
    {
      title: "Dynamic Itinerary Builder 🗺️",
      description:
        "Create detailed tour plans with pricing, GPS locations, and traveler preferences in minutes.",
      price: "Custom pricing",
      tags: ["itinerary-builder", "tour-planning", "travel-preferences"],
      image: "/dynamic-itinerary.jpeg",
      category: "tourManagement",
    },
    {
      title: "Booking Management 📖",
      description:
        "Handle confirmations, cancellations, and real-time updates seamlessly.",
      price: "Custom pricing",
      tags: ["booking-system", "real-time-updates", "cancellations"],
      image: "/booking-management.jpeg",
      category: "tourManagement",
    },
    {
      title: "Revenue Insights 📈",
      description:
        "Track your top-performing tours and identify areas for growth with financial analytics.",
      price: "Custom pricing",
      tags: ["revenue-tracking", "financial-analytics", "growth-strategy"],
      image: "/revenue-insights.jpeg",
      category: "tourManagement",
    },
    {
      title: "Role-Based Access 🔑",
      description:
        "Admins, guides, and accountants see only what they need—nothing more.",
      price: "Custom pricing",
      tags: ["role-based-access", "team-management", "permission-control"],
      image: "/role-based-access.jpeg",
      category: "tourManagement",
    },
  ],  

  marketplace: [
    {
      title: "Explore Tours and Events",
      description: "Discover a variety of tours and events tailored to your interests.",
      price: "Subscription-based",
      tags: ["tour-exploration", "event-discovery", "experiences"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
    },
    {
      title: "Tour Booking",
      description: "Book your dream tours directly from our platform with ease.",
      price: "Subscription-based",
      tags: ["tour-booking", "online-booking", "easy-booking"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
    },
    {
      title: "Review System",
      description: "Read reviews and share your experiences with other travelers.",
      price: "Subscription-based",
      tags: ["reviews", "user-feedback", "community"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
    },
    {
      title: "24/7 Support",
      description: "Get around-the-clock customer support for any travel-related inquiries.",
      price: "Subscription-based",
      tags: [ "24/7-service", "help-desk", "travel-assistance"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
    },
    
  ],

  eventManagement: [
    {
      title: "Itinerary Planning 🗓️",
      description:
        "Organize event schedules step-by-step, from meal times to entertainment, all in one app.",
      price: "Subscription-based",
      tags: ["itinerary-planning", "event-scheduling", "organization"],
      image: "/itinerary-planning.jpeg",
      category: "eventManagement",
    },
    {
      title: "Bulk Invites via Link ✉️",
      description:
        "Send one shareable link for RSVPs, and track attendance effortlessly.",
      price: "Subscription-based",
      tags: ["bulk-invites", "RSVP-tracking", "event-management"],
      image: "/bulk-invites.jpeg",
      category: "eventManagement",
    },
    {
      title: "Shared Photo Repository 📷",
      description:
        "Guests can upload, download, and share event photos in a secure gallery.",
      price: "Subscription-based",
      tags: ["photo-sharing", "secure-gallery", "event-photos"],
      image: "/shared-photo-repository.jpeg",
      category: "eventManagement",
    },
    {
      title: "Social Sharing 📲",
      description:
        "Build excitement by sharing updates, photos, and live moments with attendees.",
      price: "Subscription-based",
      tags: ["social-sharing", "live-updates", "engagement"],
      image: "/social-sharing.jpeg",
      category: "eventManagement",
    },
  ]
  
};

