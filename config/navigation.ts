export const mainNavigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    items: [
      {
        name: "Mobile App",
        href: "/mobile-app",
        description: "Plan and book trips on the go with our user-friendly app.",
        tag: "Beta",
      },
      {
        name: "Tour Management System",
        href: "/tour-management",
        description: "Manage your tour listings and connect with travelers effortlessly.",
        tag: "Alpha",
      },
      {
        name: "Marketplace",
        href: "/marketplace",
        description: "Discover and book unique tours and travel experiences worldwide.",
        tag: "Under Development",
      },
      {
        name: "Event Management System",
        href: "/event-management",
        description: "Organize, promote, and manage events with ease using our comprehensive solution.",
        tag: "Coming Soon",
      },
    ],
  },
  { name: "Blog", href: "https://blog.tripsyncer.com" },
] as const;

export const footerNavigation = {
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  products: [
    { name: "Courses", href: "/products/courses" },
    { name: "Templates", href: "/products/templates" },
    { name: "Tools", href: "/products/tools" },
  ],
} as const;
