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
      title: 'Travel Booking Mobile App',
      description: 'A mobile application allowing users to book and manage their tours on the go.',
      price: 'Free with in-app purchases',
      tags: ['Mobile App', 'Travel', 'Booking'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      category: 'mobileApp',
    },
  ],
  
  tourManagement: [
    {
      title: 'Vendor Management System',
      description: 'Tools for tour operators to manage listings, bookings, and customer interactions.',
      price: 'Custom pricing',
      tags: ['Vendor', 'Management', 'Tools'],
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=300&fit=crop',
      category: 'tourManagement',
    },
  ],
  marketplace: [
    {
      title: "Travel Experience Marketplace",
      description: "A platform connecting travelers with unique tours and activities worldwide.",
      price: "Subscription-based",
      tags: ['Travel', 'Experiences', 'Booking'],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      category: "marketplace"
    }
  ],
  eventManagement: [
    {
      title: 'Travel Booking Mobile App',
      description: 'A mobile application allowing users to book and manage their tours on the go.',
      price: 'Free with in-app purchases',
      tags: ['Mobile App', 'Travel', 'Booking'],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop',
      category: 'eventManagement',
    },
  ],
 
};