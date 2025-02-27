import { CardDescription } from "@/components/ui/card";
import { CreditCard, Globe, Zap, ChevronRight, Wrench } from "lucide-react";
import Link from "next/link";

const integrationCategories = [
  {
    icon: <CreditCard className="w-8 h-8 text-green-500" />,
    title: "Integrations",
    items: [
      { name: "Stripe", link: "https://stripe.com" },
      { name: "PayPal", link: "https://www.paypal.com" },
    ],
  },
  {
    icon: <Wrench className="w-8 h-8 text-yellow-500" />,
    title: "Services",
    items: [
      { name: " Your Domain", link: "https://www.namecheap.com" },
      { name: " Your SMTP", link: "https://www.smtp.com" },
      { name: "Aaksh SMS", link: "https://aakashsms.com/" },
      { name: "Twilio", link: "https://www.twilio.com" },
    ],
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    title: "Travel Tech",
    comingSoon: true,
    items: [
      { name: "Amadeus", link: "https://www.amadeus.com" },
      { name: "Booking.com API", link: "https://www.booking.com" },
      { name: "Viator", link: "https://www.viator.com/Rome/d511-ttd" },
      { name: "Get your Guide", link: "https://www.getyourguide.com" },
    ],
  },
  {
    icon: <Zap className="w-8 h-8 text-orange-500" />,
    title: "Automation",
    comingSoon: true,
    items: [
      {
        name: "Zapier",
        link: "https://www.zapier.com",
      },
      {
        name: "Pabbly Connect",
        link: "https://www.pabbly.com/connect/",
      },
    ],
  },
];

export default function Integrations() {
  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Plays Nice with Your Favorite Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-16">
          {integrationCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-4 text-xl font-semibold">
                  {category.title}
                  {category.comingSoon && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full">
                      Coming Soon
                    </span>
                  )}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" />
                      <CardDescription className="hover:text-accent">
                        {item.name}
                      </CardDescription>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
