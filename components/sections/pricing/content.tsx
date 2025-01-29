import { Check, Zap, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import Link from "next/link";

const plans = [
  {
    name: "Free Plan",
    description: "Free in Beta",
    icon: <Check className="w-6 h-6 text-green-500" />,
    features: ["Basic features", "Limited usage", "Community support"],
    cta: "Get Started",
    ctaLink: "/signup",
    href: "/mobile-app",
  },
  {
    name: "Pro Plan",
    description: "Free in Beta. Check individual product page.",
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    features: [
      "All Free features",
      "Unlimited usage",
      "Priority support",
      "Advanced analytics",
    ],
    cta: "View Products",
    ctaLink: "/products",
    href: "#products",
  },
  {
    name: "Enterprise Plan",
    description: "Custom Pricing",
    icon: <Building className="w-6 h-6 text-purple-500" />,
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    ctaLink: "/contact",
    href: "/contact",
  },
];

export default function PricingSection() {
  return (
    <section className="border-t bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Flexible Plans to Fit Your Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90 flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b dark:border-gray-700">
                <div>
                  <h3 className=" text-xl font-semibold">{plan.name}</h3>

                  <CardDescription>{plan.description}</CardDescription>
                </div>
                {plan.icon}
              </div>
              <ul className="p-6 space-y-4 flex-grow text-gray-600 dark:text-gray-400">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <CardDescription>{feature}</CardDescription>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link href={plan.href}>
                  <Button className="w-full" variant="default">
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
