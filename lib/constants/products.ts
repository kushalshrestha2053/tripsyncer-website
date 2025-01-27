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
      title: "Trip Planning 🗺️",
      description:
        "Start your adventure effortlessly! Set up your itinerary, invite friends, and hit the road with just a few clicks.",
      price: "Free",
      tags: ["itinerary", "travel-planning", "trip-organization"],
      image: "/planning.jpeg",
      category: "mobileApp",
    },
    {
      title: "Live Location 📍",
      description:
        "Keep the squad in sync! Always know where your friends are with real-time location updates.",
      price: "Free",
      tags: ["location-sharing", "real-time", "tracking"],
      image: "/user-location.jpeg",
      category: "mobileApp",
    },
    {
      title: "Pin/Note 📌",
      description:
        "Capture every moment and idea on the go. Pin amazing spots and jot down your thoughts with our intuitive note-taking feature.",
      price: "Free",
      tags: ["note-taking", "travel", "bookmarking"],
      image: "/notes.jpeg",
      category: "mobileApp",
    },
    {
      title: "Activity Planning 🎢",
      description:
        "Dive into excitement with activities everyone loves. Easily browse and book recommended activities tailored to your group's preferences.",
      price: "Free",
      tags: ["activity-booking", "group-planning", "travel-activities"],
      image: "/activities.jpeg",
      category: "mobileApp",
    },
    {
      title: "Real Time 🔄",
      description:
        "Get real-time updates and never miss out on the fun. Stay informed about trip changes and upcoming plans.",
      price: "Free",
      tags: ["notifications", "updates", "trip-management"],
      image: "/user-location.jpeg",
      category: "mobileApp",
    },
    {
      title: "Stop Points 📍",
      description:
        "Organize your journey with precision. Set strategic meetup and stop points to manage your travel itinerary flawlessly.",
      price: "Free",
      tags: ["itinerary-management", "stop-points", "planning"],
      image: "/stop-points.jpeg",
      category: "mobileApp",
    },
    {
      title: "AI-Activities ✨",
      description:
        "Discover activities tailored to your destination and preferences. Our AI analyzes local attractions and suggests the best experiences for your group.",
      price: "Free",
      tags: ["AI-recommendations", "destination-guide"],
      image: "/ai.jpeg",
      category: "mobileApp",
    },
    {
      title: "Social Sharing 📸",
      description:
        "Easily share your favorite travel memories on social media. With just a few taps, post your photos, videos, and travel notes directly to your favorite platforms.",
      price: "Free",
      tags: [ "photo-sharing", "travel-memories", "content-creation"],
      image: "/social.jpeg",
      category: "mobileApp",
    },
  ],

  tourManagement: [
    {
      title: 'CRM',
      description: 'Manage customer relationships effectively with a complete CRM solution.',
      price: 'Custom pricing',
      tags: ["customer-management", "tour-operations", "business-tools"],
      image: 'https://via.placeholder.com/500x300',
      category: 'tourManagement',
    },
    {
      title: 'Tour Management',
      description: 'Comprehensive tools to manage your tour offerings, itinerary, and customers.',
      price: 'Custom pricing',
      tags: [ "itinerary-management", "tour-operations"],
      image: 'https://via.placeholder.com/500x300',
      category: 'tourManagement',
    },
    {
      title: 'Staff Management',
      description: 'Easily manage your tour staff, assign roles, and track performance.',
      price: 'Custom pricing',
      tags: ["employee-management"],
      image: 'https://via.placeholder.com/500x300',
      category: 'tourManagement',
    },
    {
      title: 'Booking System',
      description: 'A robust booking system that allows your customers to book tours with ease.',
      price: 'Custom pricing',
      tags: ["tour-booking", "online-booking"],
      image: 'https://via.placeholder.com/500x300',
      category: 'tourManagement',
    },
    {
      title: 'Invoice Management',
      description: 'Manage and track invoices seamlessly, ensuring smooth financial operations.',
      price: 'Custom pricing',
      tags: ["invoice-management", "billing", "financial-tools"],
      image: 'https://via.placeholder.com/500x300',
      category: 'tourManagement',
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
    {
      title: "Tour Availability",
      description: "Check real-time availability of tours and book instantly.",
      price: "Subscription-based",
      tags: ["real-time", "tour-availability", "instant-booking"],
      image: "https://via.placeholder.com/500x300",
      category: "marketplace",
    },
  ],

  eventManagement: [
    {
      title: 'Coming Soon',
      description: 'Our event management features are coming soon. Stay tuned for more updates!',
      price: 'Coming soon',
      tags: ["coming-soon", "future-release"],
      image: 'https://via.placeholder.com/500x300',
      category: 'eventManagement',
    },
  ],
};

