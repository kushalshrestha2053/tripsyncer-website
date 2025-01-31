import { CardDescription } from "@/components/ui/card";
import { Lock, Shield, Globe, CreditCard } from "lucide-react";

const securityFeatures = [
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: "AES-256 Encryption & Backups",
    description:
      "All your data is encrypted with AES-256 standards and backed up daily for extra protection.",
  },
  {
    icon: <Globe className="w-12 h-12 text-green-500" />,
    title: "GDPR/CCPA Compliance",
    description:
      "Auto-generate privacy policies to stay compliant with GDPR and CCPA.",
  },
  {
    icon: <Lock className="w-12 h-12 text-purple-500" />,
    title: "Role-based Permissions & 2FA",
    description:
      "Manage access with role-based permissions and two-factor authentication.",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-yellow-500" />,
    title: "PCI-DSS Certified Payments",
    description:
      "All payments are PCI-DSS certified for secure financial transactions.",
  },
];

export default function SecurityAndPrivacy() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Your Data is Fort Knox-Level Safe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
