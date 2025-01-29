import { CardDescription } from "@/components/ui/card";
import {
  MapPin,
  Users,
  DollarSign,
  Wrench,
  Sparkles,
  Mountain,
} from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-8 h-8 text-blue-500" />,
    title: "Dynamic Route Planning",
    description:
      "Plot the perfect journey with optimized stops, scenic routes, and gas station alerts. Never miss a must-see landmark again.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "Group Coordination",
    description:
      "Invite friends to your trip, assign responsibilities, and stay updated in real-time.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
    title: "Trip Budget Tracker",
    description:
      "Keep tabs on fuel, accommodation, and meal costs with an integrated expense tracker.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-purple-500" />,
    title: "Emergency Assistance Locator",
    description:
      "Access nearby towing, repair shops, and medical centers at the touch of a button.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-pink-500" />,
    title: "AI Travel Suggestions",
    description:
      "Let AI recommend activities and hidden gems based on your interests.",
  },
  {
    icon: <Mountain className="w-8 h-8 text-indigo-500" />,
    title: "Scenic Detour Alerts",
    description:
      "Discover breathtaking routes and natural wonders off the beaten path.",
  },
];

export default function RoadTripFeatures() {
  return (
    <section className="border-t border-b bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-white">
          Plan Road Trips with Ease
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-4 text-xl font-semibold">{feature.title}</h3>
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
