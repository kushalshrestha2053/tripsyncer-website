import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Globe, Edit3 } from "lucide-react";
import { cn } from "@/lib/utils";

const caseStudies = [
  {
    title: "How 'Alpine Expeditions' Scaled to 200+ Tours/Year",
    company: "Alpine Expeditions",
    description:
      "Using our Bulk Edit Tools, Alpine Expeditions streamlined their operations and dramatically increased their tour offerings.",
    icon: <Edit3 className="h-6 w-6" />,
    stats: [
      { label: "Tours per Year", value: "200+" },
      { label: "Time Saved", value: "30hrs/week" },
      { label: "Revenue Increase", value: "185%" },
    ],
    color: "bg-yellow-50 text-yellow-800",
  },
  {
    title: "Tokyo Bike Tours Booked 57% More International Guests",
    company: "Tokyo Bike Tours",
    description:
      "Leveraging our Translation Tools, Tokyo Bike Tours significantly expanded their international customer base.",
    icon: <Globe className="h-6 w-6" />,
    stats: [
      { label: "Booking Increase", value: "57%" },
      { label: "Languages Added", value: "8" },
      { label: "Customer Satisfaction", value: "98%" },
    ],
    color: "bg-green-50 text-green-800",
  },
];

export default function CustomerLoveSection() {
  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Raving Fans (Not Just Boring Testimonials)
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. See how real tour operators are
          transforming their businesses with our AI-powered tools.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                className={cn(
                  "flex flex-col overflow-hidden transition-transform hover:scale-[1.02]"
                )}
              >
                <CardHeader className={`${study.color}`}>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="default" className="text-sm font-medium">
                      Case Study
                    </Badge>
                    {study.icon}
                  </div>
                  <h3 className=" text-xl font-semibold">{study.title}</h3>
                  <p className="text-sm font-medium">{study.company}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="  mb-6">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {study.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <p className="text-2xl font-bold ">{stat.value}</p>
                        <p className="text-sm ">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
