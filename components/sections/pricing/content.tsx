import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic Explorer",
    price: 29,
    duration: "per person / day",
    features: [
      "Access to standard tours",
      "24/7 customer support",
      "Mobile app access",
      "Basic travel insurance",
    ],
    cta: "Book Basic Tour",
  },
  {
    name: "Adventure Seeker",
    price: 59,
    duration: "per person / day",
    features: [
      "Access to premium tours",
      "Priority customer support",
      "Mobile app access",
      "Comprehensive travel insurance",
      "Exclusive discounts on activities",
    ],
    cta: "Book Adventure Tour",
    highlighted: true,
  },
  {
    name: "Luxury Voyager",
    price: 99,
    duration: "per person / day",
    features: [
      "Access to all tours including luxury options",
      "VIP customer support",
      "Mobile app access with premium features",
      "Comprehensive travel insurance with extra coverage",
      "Exclusive discounts on activities and accommodations",
      "Personal travel concierge",
    ],
    cta: "Book Luxury Experience",
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-5xl">
            Choose Your Adventure
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Select the perfect package for your travel needs. Whether you're a
            casual explorer or a luxury seeker, we have the right option for
            you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3 md:gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-6 bg-card shadow-lg rounded-lg border border-muted-foreground justify-between ${
                plan.highlighted ? "ring-2 ring-primary" : ""
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold text-center text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    /{plan.duration}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="text-primary mr-2 h-5 w-5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 px-4 py-2 w-full rounded-lg font-semibold ${
                  plan.highlighted
                    ? "bg-primary text-background hover:bg-primary/90"
                    : "bg-muted hover:bg-muted/90 text-foreground"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
