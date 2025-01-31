import Image from "next/image";
import { MapPin, Calendar, Users, Share2, Camera } from "lucide-react";
import { CardDescription } from "@/components/ui/card";

const features = [
  {
    id: "#eventdetails",
    icon: <MapPin className="w-6 h-6 text-blue-600" />,
    title: "Event Details with Map",
    description:
      "Provide guests with clear directions, times, and location details—all in one easy-to-share link.",
    image: "/tripsyncer-mobileapp-event-details.png",
    alt: "Tripsyncer: event planning mobile app",
  },
  {
    id: "#customizabeitinerary",
    icon: <Calendar className="w-6 h-6 text-blue-600" />,
    title: "Customizable Itinerary Planning",
    description:
      "Outline meal times, entertainment, and special moments to keep the event flowing smoothly.",
    image: "/tripsyncer-mobile-app-customized-itinerary.png",
    alt: "Tripsyncer: event planning mobile app",
  },
  {
    id: "#invitevialink",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Bulk Invite via Link",
    description:
      "Send a single link for RSVPs. Guests can confirm attendance in seconds—no more manual invites.",
    image: "/tripsyncer-mobile-app-invite-feature.png",
    alt: "Tripsyncer: event planning mobile app",
  },
  {
    id: "#socialsharing",

    icon: <Share2 className="w-6 h-6 text-blue-600" />,
    title: "Social Sharing Made Easy",
    description:
      "Share highlights and updates with friends on social media to build excitement and engagement.",
    image: "/tripsyncer-mobile-app-social-sharing.jpeg",
    alt: "Tripsyncer: event planning mobile app",
  },
  {
    id: "#imagerepo",

    icon: <Camera className="w-6 h-6 text-blue-600" />,
    title: "Shared Image Repository",
    description:
      "Collect and download event photos in one place. Every attendee leaves with cherished memories.",
    image: "/tripsyncer-mobile-app-shared-image-repository.png",
    alt: "Tripsyncer: event planning mobile app",
  },
];

export default function HomeEventFeatures() {
  return (
    <section className="py-10 md:py-16 bg-muted/40 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground dark:text-white">
          Turn Your Gatherings into Flawless Experiences
        </h2>

        <p className="mx-auto text-center max-w-2xl mb-12 text-lg text-muted-foreground">
          Home Event Planning Core Features
        </p>

        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-card rounded-lg shadow-lg p-6 relative border transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/100 text-primary-foreground p-3 rounded-full shadow-lg">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 mt-4 text-card-foreground">
                    {feature.title}
                  </h4>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative mx-auto border-gray-300 dark:border-slate-600 bg-gray-300 border-[10px] rounded-[2.5rem] h-[450px] w-[225px]">
                  <div className="h-[24px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[54px] rounded-s-lg"></div>
                  <div className="h-[34px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[93px] rounded-s-lg"></div>
                  <div className="h-[34px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[134px] rounded-s-lg"></div>
                  <div className="h-[48px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -end-[12px] top-[106px] rounded-e-lg"></div>
                  <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-white dark:border-slate-600">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.alt}
                      width={400}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
