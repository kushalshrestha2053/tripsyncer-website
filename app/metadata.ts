import { Metadata } from 'next';

export const siteConfig = {
  name: 'TripSyncer',
  url: 'https://tripsyncer.com',
  description: 'Plan unforgettable road trips, host flawless events, and manage professional tours with TripSyncer. AI-powered tools for smarter planning and collaboration. Start free today!',
  keywords: [
    'road trip planner',
    'home event manager',
    'tour management system',
    'travel app',
    'event planning app',
    'AI-powered trip planner',
    'TripSyncer app'
  ]
};

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'TripSyncer: All-in-One App for Road Trips, Events & Tour Management',
    template: '%s | TripSyncer'
  },
  description: 'Plan unforgettable road trips, host flawless events, and manage professional tours with TripSyncer. AI-powered tools for smarter planning and collaboration. Start free today!',
  keywords: siteConfig.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'TripSyncer: Your Ultimate Travel Management Companion',
    description: 'From personal adventures to professional tour management, TripSyncer: Your Ultimate Travel Management Companion. Try it now and create memories effortlessly.',
    siteName: siteConfig.name,
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'TripSyncer Dashboard Overview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TripSyncer: All-in-One App for Road Trips, Events & Tour Management',
    description: 'Plan unforgettable road trips, host flawless events, and manage professional tours with TripSyncer. AI-powered tools for smarter planning and collaboration. Start free today!',
    images: ['https://yourdomain.com/images/tripsyncer-all-in-one-dashboard.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};
