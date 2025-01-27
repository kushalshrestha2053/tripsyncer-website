import { Shield, Lock, CreditCard, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const securityFeatures = [
  {
    icon: Shield,
    title: "Data Protection",
    description:
      "Your personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent.",
  },
  {
    icon: Lock,
    title: "Secure Booking",
    description:
      "Our booking system uses industry-standard SSL encryption to ensure your booking details and payment information are transmitted securely.",
  },
  {
    icon: CreditCard,
    title: "Safe Payments",
    description:
      "We partner with trusted payment providers to process your transactions securely. Your financial information is never stored on our servers.",
  },
  {
    icon: UserCheck,
    title: "Privacy Controls",
    description:
      "You have full control over your privacy settings. Easily manage your preferences and opt out of marketing communications at any time.",
  },
];

export default function SecurityPrivacySection() {
  return (
    <section className="border-t bg-muted/40 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl gradient-text">
            Your Security & Privacy Matter
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            At Tripsyncer, we prioritize your security and privacy, ensuring
            your personal information and transactions are always protected.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-lg border  transition-all p-10",
                "bg-card/50 dark:bg-card/30",
                "hover:shadow-lg dark:hover:bg-muted/5"
              )}
            >
              <div className="flex items-center justify-center">
                <feature.icon className="w-12 h-12 text-primary dark:text-[#0057D9] mb-4" />
              </div>
              <h3 className="font-semibold text-lg text-center text-foreground dark:text-[#E4E4E7] mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground dark:text-gray-300 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
