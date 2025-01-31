import { CardDescription } from "@/components/ui/card";
import {
  Map,
  CreditCard,
  MessageCircle,
  Globe,
  Cloud,
  ChevronRight,
  Cpu,
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
    icon: <CreditCard className="w-8 h-8 text-green-500" />,
    title: "Payment Platforms",
    items: [
      { name: "Stripe", link: "https://stripe.com" },
      { name: "PrabhuPay", link: "https://prabhupay.com/" },
    ],
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
    title: "Communication",
    items: [
      { name: "Email", link: "https://www.gmail.com" },
      { name: "Twilio", link: "https://www.twilio.com" },
    ],
  },
  {
    icon: <Globe className="w-8 h-8 text-red-500" />,
    title: "Travel Marketplaces",
    items: [
      { name: "Viator", link: "https://www.viator.com" },
      { name: "GetYourGuide", link: "https://www.getyourguide.com" },
      { name: "Booking.com (Coming Soon)", link: "https://www.booking.com" },
    ],
  },
  {
    icon: <Cloud className="w-8 h-8 text-yellow-500" />,
    title: "Cloud Storage",
    items: [
      { name: "Google Photos", link: "https://photos.google.com" },
      { name: "Dropbox", link: "https://www.dropbox.com" },
      { name: "OneDrive (Coming Soon)", link: "https://www.onedrive.com" },
    ],
  },
  {
    icon: <Cpu className="w-8 h-8 text-indigo-500" />,

    title: "AI Models",
    items: [
      { name: "OpenAI", link: "https://openai.com" },
      { name: "Anthropic AI", link: "https://www.anthropic.com" },
      { name: "DeepSeek R1", link: "https://deepseek.com" },
    ],
  },
];
export default function Integrations() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Works Seamlessly with Your Favorite Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
