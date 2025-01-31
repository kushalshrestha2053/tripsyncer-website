import { CardDescription } from "@/components/ui/card";
import { MapPin, Calendar, Share2, CheckCircle, Download } from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-8 h-8 text-blue-500" />,
    title: "Event Details with Map",
    description:
      "Provide guests with all the essential event information at a glance. Include the event’s date, time, and location on an interactive map so attendees can easily find and navigate to the venue.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-green-500" />,
    title: "Event Itinerary Planning",
    description:
      "Create a detailed schedule for your event—from welcoming guests to planned activities or meal times. Keep everyone on the same page with a clear timeline, ensuring a smooth and enjoyable experience.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-yellow-500" />,
    title: "Bulk Invites via Shareable Link",
    description:
      "Send one link to quickly invite all your friends and family. No more juggling separate emails or text messages—simply share the link, and recipients can join the event and RSVP in one click.",
  },
  {
    icon: <Share2 className="w-8 h-8 text-red-500" />,
    title: "Social Sharing Made Easy",
    description:
      "Share highlights and updates with friends on social media to build excitement and engagement. Effortlessly keep everyone in the loop, creating a buzz about your event and encouraging attendance by spreading the word across platforms.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
    title: "Invite Sent Tracking",
    description:
      "Keep track of who has received your invitation in real time. Monitor sent invites, confirm RSVPs, and follow up easily to ensure no one misses out on your celebration.",
  },
  {
    icon: <Download className="w-8 h-8 text-pink-500" />,
    title: "Downloadable Shared Image Repository",
    description:
      "Collect all your event photos in one secure place. Guests can upload and download pictures, making it easy to share memories without the hassle of multiple messaging threads or social media platforms.",
  },
];

export default function EventPlanningFeatures() {
  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-white">
          Home Event Planning Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-4 text-xl font-semibold">{feature.title}</h3>
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
