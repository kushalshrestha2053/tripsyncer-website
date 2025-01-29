import { CardDescription } from "@/components/ui/card";
import { Map, Home, Users, Camera } from "lucide-react";

const benefits = [
  {
    icon: <Map className="w-8 h-8 text-blue-500" />,
    title: "Simplify Road Trip Logistics",
    description:
      "Map routes, plan stops, and coordinate with companions—all from a single app.",
  },
  {
    icon: <Home className="w-8 h-8 text-green-500" />,
    title: "Stress-Free Home Events",
    description:
      "Easily manage schedules, invites, and photo sharing for gatherings of any size.",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    title: "Bring People Together",
    description:
      "Share itineraries and updates seamlessly, ensuring everyone's on the same page.",
  },
  {
    icon: <Camera className="w-8 h-8 text-purple-500" />,
    title: "Capture the Memories",
    description:
      "Create a shared photo repository so no moment goes unnoticed.",
  },
];

export default function KeyBenefits() {
  return (
    <section className="border-t bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-white">
          Why TripSyncer Is Your Ultimate Planning Companion
        </h2>
        {/* Adjusted grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
