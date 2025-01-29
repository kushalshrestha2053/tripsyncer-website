import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  UserPlus,
  Building,
  Package,
  HeadphonesIcon,
  Rocket,
} from "lucide-react";
import type React from "react";

export default function TourHeroSteps() {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-blue-500" />,
      title: "Sign Up",
      description: "Create your account in minutes and get started.",
    },
    {
      icon: <Building className="h-10 w-10 text-green-500" />,
      title: "Set up your company information",
      description: "Add your business details and branding.",
    },
    {
      icon: <Package className="h-10 w-10 text-purple-500" />,
      title: "Add your Tours and Packages",
      description: "Create and customize your tour offerings.",
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-orange-500" />,
      title: "Ask for Support if needed",
      description: "Our team is here to help you succeed.",
    },
  ];

  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-white">
          From Zero to Tour Hero: Your 4-Step Path to Easy Tour Management
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} number={index + 1} />
          ))}
        </div>

        <Card className="mt-8 bg-gradient-to-r from-red-50 to-purple-100 text-white">
          <CardContent className="flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <Rocket className="h-10 w-10 text-red-400" />
              <div>
                <CardTitle className="text-xl text-black font-bold">
                  Enjoy!
                </CardTitle>
                <CardDescription className="text-black">
                  Start managing your tours with ease and efficiency.
                </CardDescription>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function StepCard({
  icon,
  title,
  description,
  number,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}) {
  return (
    <Card
      className={cn(
        "flex flex-col relative overflow-hidden transition-transform hover:scale-[1.02]"
      )}
    >
      <div className="absolute top-0 left-0 w-16 h-16 bg-gray-100 rounded-br-full flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-400">{number}</span>
      </div>
      <CardHeader className="pt-16">
        <div className="flex items-center space-x-4">
          {icon}
          <h3 className=" text-xl font-semibold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
