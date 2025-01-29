import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle, Edit3, Users, Archive } from "lucide-react";

export default function AITourManagementPreview() {
  const features = [
    {
      title: "Slay the Setup Dragon",
      description:
        "Import existing tours via CSV or start fresh with our 'Bali Yoga Retreat' template.",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      items: [
        "SEO-friendly titles",
        "Booking FAQs",
        "Liability waiver templates",
      ],
      time: "10 Minutes",
    },
    {
      title: "Edit Like You're Conducting an Orchestra",
      description: "Batch-update 50 tours at once:",
      icon: <Edit3 className="h-6 w-6 text-blue-500" />,
      items: [
        "Raise prices by 10% for peak season",
        "Replace 'hike' with 'jungle adventure' across all tours",
        "Add COVID safety badges in one click",
      ],
    },
    {
      title: "Collaborate Without Chaos",
      description:
        "Tag team members: '@Maria – need Portuguese translation here!' Get notified when tasks are done. Zero confusion, total efficiency.",
      icon: <Users className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Archive the Duds, Keep the Gems",
      description:
        "Remove failed tours but keep data for analysis. Our 'Post-Mortem Reports' show you exactly why customers said no.",
      icon: <Archive className="h-6 w-6 text-orange-500" />,
    },
  ];

  return (
    <section className="border-t bg-muted/40 py-16 md:py-24 border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-white">
          Coming Soon: AI Powered Tour Management
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              className={cn(
                "flex flex-col overflow-hidden transition-transform hover:scale-[1.02]"
              )}
              key={index}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <h3 className=" text-xl font-semibold">
                      {feature.title}
                      {feature.time && (
                        <CardDescription>{feature.time}</CardDescription>
                      )}
                    </h3>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-2">
                  {feature.description}
                </CardDescription>
                {feature.items && (
                  <div className="mt-2">
                    <ul className="list-disc pl-5 mt-4 space-y-1 text-sm text-muted-foreground">
                      {feature.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
