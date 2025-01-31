import { CardDescription } from "@/components/ui/card";
import { MapPin, Home, Building2, Bot, Smartphone, Shield } from "lucide-react";

const benefits = [
  {
    icon: <MapPin className="w-8 h-8 text-blue-500" />,
    title: "For Road Trips",
    description:
      "Effortlessly plan routes, stops, and expenses. Stay organized, save time, and enjoy the ride.",
  },
  {
    icon: <Home className="w-8 h-8 text-green-500" />,
    title: "For Events",
    description:
      "Simplify planning with bulk invites, itineraries, and shared photo repositories for stress-free gatherings.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-purple-500" />,
    title: "For Travel Agencies",
    description:
      "Automate bookings, manage itineraries, and track profits—all in one place.",
  },
  {
    icon: <Bot className="w-8 h-8 text-red-500" />,
    title: "AI-Driven Tools",
    description:
      "Optimize routes, generate event plans, and create SEO-friendly tour descriptions with AI-powered features.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
    title: "Accessible Anywhere",
    description:
      "Manage your trips, events, or tours on the go with TripSyncer's mobile app for iOS and Android.",
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-500" />,
    title: "Data Privacy",
    description:
      "Your data, your control, and privacy. We prioritize security and ensure your information stays protected.",
  },
];

export default function KeyBenefits() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-white">
          Why TripSyncer Is the No.1 Choice for Travelers, Hosts, and Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90"
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="ml-4 text-xl font-semibold">{benefit.title}</h3>
              </div>
              <CardDescription>{benefit.description}</CardDescription>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
