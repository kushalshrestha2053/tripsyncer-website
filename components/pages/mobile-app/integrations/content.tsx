import { CardDescription } from "@/components/ui/card";
import {
  Map,
  MessageCircle,
  CreditCard,
  Camera,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const integrationCategories = [
  {
    icon: <Map className="w-8 h-8 text-blue-500" />,
    title: "Navigation",
    items: [
      { name: "Google Maps", link: "https://www.google.com/maps" },
      { name: "Waze", link: "https://www.waze.com" },
      { name: "Apple Maps", link: "https://www.apple.com/maps" },
    ],
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
    title: "Communication",
    items: [
      { name: "WhatsApp", link: "https://wa.me/" },
      { name: "Slack", link: "https://slack.com" },
      { name: "Email", link: "https://www.gmail.com" },
      { name: "SMS", link: "https://www.twilio.com" },
    ],
  },
  {
    icon: <CreditCard className="w-8 h-8 text-green-500" />,
    title: "Expense Tracking",
    items: [
      { name: "Venmo", link: "https://www.venmo.com" },
      { name: "PayPal", link: "https://www.paypal.com" },
      { name: "Splitwise", link: "https://www.splitwise.com" },
    ],
  },
  {
    icon: <Camera className="w-8 h-8 text-pink-500" />,
    title: "Photo Sharing",
    items: [
      { name: "Google Photos", link: "https://photos.google.com" },
      { name: "Dropbox", link: "https://www.dropbox.com" },
      { name: "Instagram", link: "https://www.instagram.com" },
    ],
  },
];

export default function Integrations() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Works with Tools You Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {integrationCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="ml-4 text-xl font-semibold">{category.title}</h3>
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
