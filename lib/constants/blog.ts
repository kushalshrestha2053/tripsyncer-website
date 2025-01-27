export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  image: string;
  href: string; 
}

export type BlogCategory =
  | "Tripsyncer Mobile App"
  | "Tour Management System"
  | "Marketplace"
  | "Event Management System";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Tripsyncer Mobile App",
  "Tour Management System",
  "Marketplace",
  "Event Management System",
  
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Bangalore to Goa Road Trip: Explore Scenic Routes and Road Conditions",
    excerpt: "Discover the scenic beauty and vibrant culture on your road trip from Bangalore to Goa.",
    author: "TripSyncer ",
    date: "Mar 15, 2024",
    category: "Tripsyncer Mobile App",
    tags: ["Road Trips", "South India"],
    image: "https://blog.tripsyncer.com/wp-content/uploads/2024/10/bangalore-to-goa-road-trip.webp",
    href: "https://blog.tripsyncer.com/bangalore-to-goa-road-trip"
  },
  {
    title: "Road Trip from Chicago to the West Coast In 2024",
    excerpt: "Embark on an unforgettable road trip from Chicago to the West Coast, exploring top destinations and landmarks.",
    author: "TripSyncer ",
    date: "Mar 12, 2024",
    category: "Tripsyncer Mobile App",
    tags: ["Road Trips", "USA Travel"],
    image: "https://blog.tripsyncer.com/wp-content/uploads/2024/10/road-trip-from-chicago-to-the-west-coast.webp",
    href: "https://blog.tripsyncer.com/road-trip-from-chicago-to-west-coast"
  },
  {
    title: "Road Trip from Kathmandu to Sagarmatha National Park: Ultimate 2024 Travel Guide",
    excerpt: "A road trip through the heart of Nepal to Sagarmatha National Park offers stunning views of the Himalayas.",
    author: "TripSyncer ",
    date: "Mar 10, 2024",
    category: "Tripsyncer Mobile App",
    tags: ["Road Trips", "Nepal Travel"],
    image: "https://blog.tripsyncer.com/wp-content/uploads/2024/10/road-trip-from-kathmandu-to-sagarmatha-national-park-2024-scaled-e1729501308820.jpg",
    href: "https://blog.tripsyncer.com/kathmandu-to-sagarmatha-national-park"
  }
];
