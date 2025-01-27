import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, CalendarCheck, Star, Clock, MapPin, Check } from "lucide-react";

interface SubFeature {
  title: string;
  description: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  subFeatures: SubFeature[];
}

const features: Feature[] = [
  {
    icon: <Globe className="h-6 w-6 text-blue-500" />,
    title: "Explore Tours & Events",
    description:
      "Discover a variety of tours and events tailored to your preferences.",
    tag: "Travel Discovery",
    subFeatures: [
      {
        title: "Destination Search",
        description: "Find tours by destination or interest.",
      },
      {
        title: "Event Highlights",
        description: "Discover top-rated and trending events.",
      },
      {
        title: "Virtual Previews",
        description: "Explore tours virtually before booking.",
      },
    ],
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-yellow-500" />,
    title: "Tour Booking System",
    description: "Book your favorite tours with ease using our platform.",
    tag: "Booking Tools",
    subFeatures: [
      {
        title: "Instant Booking",
        description: "Reserve your spot instantly with a few clicks.",
      },
      {
        title: "Flexible Cancellation",
        description: "Cancel or modify bookings without hassle.",
      },
      {
        title: "Group Bookings",
        description: "Easily book for families or large groups.",
      },
    ],
  },
  {
    icon: <Star className="h-6 w-6 text-green-500" />,
    title: "Tour Reviews",
    description: "Read authentic reviews to make informed decisions.",
    tag: "Customer Insights",
    subFeatures: [
      {
        title: "Verified Reviews",
        description: "Get genuine reviews from verified travelers.",
      },
      {
        title: "Photo Reviews",
        description: "See real photos shared by past customers.",
      },
      {
        title: "Ratings & Rankings",
        description: "Compare tours based on user ratings.",
      },
    ],
  },
  {
    icon: <Clock className="h-6 w-6 text-purple-500" />,
    title: "24/7 Customer Support",
    description: "Enjoy round-the-clock assistance for your travel needs.",
    tag: "Reliable Support",
    subFeatures: [
      {
        title: "Live Chat",
        description: "Connect instantly with our support team.",
      },
      {
        title: "Multilingual Support",
        description: "Get help in multiple languages.",
      },
      {
        title: "Issue Resolution",
        description: "Quickly resolve any booking or tour issues.",
      },
    ],
  },
  {
    icon: <MapPin className="h-6 w-6 text-red-500" />,
    title: "Tour Availability Check",
    description: "Ensure your preferred tours are available before booking.",
    tag: "Real-Time Tools",
    subFeatures: [
      {
        title: "Real-Time Slots",
        description: "Check tour availability instantly.",
      },
      {
        title: "Seasonal Availability",
        description: "Explore tours based on seasonal offers.",
      },
      {
        title: "Waitlist Options",
        description: "Join waitlists for fully-booked tours.",
      },
    ],
  },
];

export function FeatureList() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {feature.subFeatures.map((subFeature, subIndex) => (
                    <li key={subIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{subFeature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {subFeature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
