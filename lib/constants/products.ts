export interface Product {
  title: string
  description: string
  price: string
  tags: string[]
  image: string
  category: ProductCategory
  link:string
  
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
      link: "/mobile-app"
    },
    {
      title: "AI Assistance💰",
      description:
        "Keep tabs on travel costs like fuel, accommodations, and meals for a hassle-free budget.",
      price: "Free",
      tags: ["expense-tracking", "budget-management", "travel-costs"],
      image: "/expense-management.jpeg",
      category: "mobileApp",
      link: "/mobile-app"
    },
    {
      title: "Live Track Your Tripper🤝",
      description:
        "Share plans with friends and family, assign tasks, and get live updates on changes.",
      price: "Free",
      tags: ["collaboration", "itinerary-sharing", "live-updates"],
      image: "/collaborative-itineraries.jpeg",
      category: "mobileApp",
      link: "/mobile-app"
    },
    {
      title: "Home Event Planning 🏠",
      description: "Easily organize and plan home events with scheduling, task management, and vendor recommendations.",
      price: "Free",
      tags: ["event-planning", "home-organization", "task-management"],
      image: "/home-event-planning.jpeg",
      category: "mobileApp",
      link: "/mobile-app"
    },
    {
      title: "Itinerary Management 🗺️",
      description: "Plan, organize, and manage your travel itineraries with reminders, route optimization, and real-time updates.",
      price: "Free",
      tags: ["travel-planning", "trip-management", "itinerary-tracking"],
      image: "/itinerary-management.jpeg",
      category: "mobileApp",
      link: "/mobile-app"
    },
    {
      title: "Shared Image Repository ☁️",
      description: "Store, organize, and share your images securely with cloud storage and collaboration features.",
      price: "Free",
      tags: ["image-sharing", "cloud-storage", "photo-management"],
      image: "/shared-image-repository.jpeg",
      category: "mobileApp",
      link: "/mobile-app"
    }
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
      link: "/tour-management"
    },
    {
      title: "Booking Management 📖",
      description:
        "Handle confirmations, cancellations, and real-time updates seamlessly.",
      price: "Custom pricing",
      tags: ["booking-system", "real-time-updates", "cancellations"],
      image: "/booking-management.jpeg",
      category: "tourManagement",
      link: "/tour-management"
    },
    {
      title: "Revenue Insights 📈",
      description:
        "Track your top-performing tours and identify areas for growth with financial analytics.",
      price: "Custom pricing",
      tags: ["revenue-tracking", "financial-analytics", "growth-strategy"],
      image: "/revenue-insights.jpeg",
      category: "tourManagement",
      link: "/tour-management"
    },
    {
      title: "Role-Based Access 🔑",
      description:
        "Admins, guides, and accountants see only what they need—nothing more.",
      price: "Custom pricing",
      tags: ["role-based-access", "team-management", "permission-control"],
      image: "/role-based-access.jpeg",
      category: "tourManagement",
      link: "/tour-management"
    },
    {
      title: "Staff Task Management 👥" ,
      description:
        "Efficiently manage and track staff tasks in real-time, ensuring smooth operations with role-based access and permissions.",
      price: "Custom pricing",
      tags: ["role-based-access", "team-management", "permission-control"],
      image: "/role-based-access.jpeg",
      category: "tourManagement",
      link: "/tour-management"
    },
    {
      title: "Billing Management 💼",
      description:
        "Streamline billing with a system for invoicing, payment tracking, and financial reporting.",
      price: "Custom pricing",
      tags: ["role-based-access", "team-management", "permission-control"],
      image: "/role-based-access.jpeg",
      category: "tourManagement",
      link: "/tour-management"
    },
  ],

  marketplace: [
    {
      title: "Explore Tours and Events 🧳",
      description: "Discover a variety of tours and events tailored to your interests.",
      price: "Subscription-based",
      tags: ["tour-exploration", "event-discovery", "experiences"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
      link: "/marketplace"
    },
    {
      title: "Tour Booking 🌍",
      description: "Book your dream tours directly from our platform with ease.",
      price: "Subscription-based",
      tags: ["tour-booking", "online-booking", "easy-booking"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
      link: "/marketplace"
    },
    {
      title: "Review System ⭐",
      description: "Read reviews and share your experiences with other travelers.",
      price: "Subscription-based",
      tags: ["reviews", "user-feedback", "community"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
      link: "/marketplace"
    },
    {
      title: "24/7 Support 💬",
      description: "Get around-the-clock customer support for any travel-related inquiries.",
      price: "Subscription-based",
      tags: ["24/7-service", "help-desk", "travel-assistance"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
      link: "/marketplace"
    },
    {
      title: "Event & Ticket Booking 🎟️",
      description: "Book events and tickets easily with real-time availability and instant confirmations.",
      price: "Subscription-based",
      tags: ["event-booking", "ticket-reservation", "travel-services"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
      link: "/marketplace"
    },
    {
      title: "Customer Dashboard 📊",
      description: "A simple dashboard to manage travel bookings and support inquiries effortlessly.",
      price: "Subscription-based",
      tags: ["customer-management", "travel-bookings", "support-dashboard"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
      link: "/marketplace"
    }
  ],

  eventManagement: [
    {
      title: "Coming Soon",
      description:
        "WE'RE WORKING HARD TO BRING YOU SOMETHING AMAZING",
      price: "Subscription-based",
      tags: ["coming-soon", "event-scheduling", "organization"],
      image: "/itinerary-planning.jpeg",
      category: "eventManagement",
      link: "/event-management"
    },
  ]
};

