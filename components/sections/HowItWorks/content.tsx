import { CardDescription } from "@/components/ui/card";
import { PackageSearch, UserPlus, Cog, Smile } from "lucide-react";

const steps = [
  {
    icon: <PackageSearch className="w-8 h-8 text-blue-500" />,
    title: "Choose Our Product",
    description: "Select from Road Trip, Event, or Tour Management tools.",
  },
  {
    icon: <UserPlus className="w-8 h-8 text-green-500" />,
    title: "Sign Up/Register",
    description: "Create your account and get started instantly.",
  },
  {
    icon: <Cog className="w-8 h-8 text-purple-500" />,
    title: "Use as Per Your Need",
    description: "Plan, organize, and customize your experience effortlessly.",
  },
  {
    icon: <Smile className="w-8 h-8 text-yellow-500" />,
    title: "Enjoy",
    description: "Experience smooth planning with our easy-to-use tools.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-16 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          TripSyncer in 4 Easy Steps
        </h2>
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start mb-8 relative">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4">
                {step.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <CardDescription>{step.description}</CardDescription>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-6 w-0.5 h-16 bg-gray-200 dark:bg-gray-700 mt-12 ml-5" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
