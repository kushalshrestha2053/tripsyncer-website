import { CardDescription } from "@/components/ui/card";
import { Clock, Globe, TrendingUp, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "Save 12+ Hours Weekly",
    description:
      "Batch editing & AI-powered templates streamline your workflow.",
  },
  {
    icon: <Globe className="w-8 h-8 text-green-500" />,
    title: "Go Global, Instantly",
    description:
      "Auto-translation for 25+ languages helps you reach a wider audience effortlessly.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
    title: "Boost Bookings up to 40%",
    description:
      "Built-in SEO tools & social media integrations drive more traffic and reservations.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-purple-500" />,
    title: "Sleep Better",
    description:
      "Every change auto-syncs across all platforms, ensuring accuracy and consistency.",
  },
];

export default function KeyBenefits() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-16 border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-white">
          Why Tour Management Software by TripSyncer Feels Like Hiring a
          Super-Assistant for Your Tours
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
