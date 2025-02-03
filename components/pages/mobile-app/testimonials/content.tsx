import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Compass, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jessica",

    quote:
      "TripSyncer's bulk invite feature made organizing our 50-person family reunion a breeze. Everyone had the details they needed, and I didn't have to spend hours on individual invitations.",
  },
  {
    name: "Chris",

    quote:
      "Planning a 1,000-mile road trip used to be stressful, but TripSyncer's route planner turned it into a relaxed adventure. I could focus on enjoying the journey, not worrying about the logistics.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          What Our Users Are Saying
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {/* <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  /> */}
                  <div>
                    <h3 className="ml-4 text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                  </div>
                </div>
                <blockquote className="relative">
                  <Quote className="absolute top-0 left-0 text-primary opacity-20 w-8 h-8 -translate-x-2 -translate-y-2" />
                  <p className="italic text-muted-foreground pl-6">
                    {testimonial.quote}
                  </p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
