import { CardDescription } from "@/components/ui/card";
import { Shield, Globe, Lock } from "lucide-react";

const securityFeatures = [
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: "AES-256 Encryption",
    description:
      "Industry-standard security for your personal and professional data.",
  },
  {
    icon: <Globe className="w-12 h-12 text-green-500" />,
    title: "GDPR & ISO 27001",
    description: "Ensuring your privacy is always protected.",
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-500" />,
    title: "Role-Based Access Controls",
    description: "Manage who can view or edit your plans securely.",
  },
];

export default function DataSecurity() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-16 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Your Data Is Safe with TripSyncer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className=" text-xl font-semibold text-center mb-4">
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
