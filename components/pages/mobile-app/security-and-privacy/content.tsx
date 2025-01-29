import { CardDescription } from "@/components/ui/card";
import { Shield, Globe, Lock } from "lucide-react";

const securityFeatures = [
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: "Secure Data",
    description:
      "All your trip and event information is encrypted with AES-256 standards.",
  },
  {
    icon: <Globe className="w-12 h-12 text-green-500" />,
    title: "Privacy Compliance",
    description: "Fully GDPR and CCPA compliant.",
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-500" />,
    title: "Permission Controls",
    description: "Manage who can view or edit trip and event details.",
  },
];

export default function SecurityAndPrivacy() {
  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Your Plans, Protected with TripSyncer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {feature.title}
              </h3>

              <CardDescription className="text-center">
                {feature.description}
              </CardDescription>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
