import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Free Forever",
    description: "Perfect for solopreneurs",
    price: "$0",
    features: [
      "Manage up to 5 active tours",
      "Basic analytics",
      "Standard support",
    ],
    notIncluded: [
      "AI Description Generator",
      "Multi-Language Support",
      "Priority Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Unlimited tours + premium perks",
    price: "$49",
    features: [
      "Unlimited active tours",
      "Advanced analytics",
      "AI Description Generator",
      "Multi-Language Support",
      "Priority Support",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large agencies",
    price: "Custom",
    features: [
      "All Pro features",
      "Dedicated servers",
      "Custom SLA",
      "Bulk discounts",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-900 dark:text-gray-100">
          Pricing Simpler Than a Sunset Hike
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your journey. No hidden fees, no surprises -
          just straightforward pricing for your tour management needs.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${plan.popular ? "border-blue-500 border-2" : ""} relative overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <h3 className=" text-xl font-semibold">{plan.name}</h3>

                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-lg font-normal">/mo</span>
                  )}
                </p>
                <ul className="list-disc mt-4 space-y-2 text-sm ">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded &&
                    plan.notIncluded.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-500"
                      >
                        <X className="h-5 w-5 text-red-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
