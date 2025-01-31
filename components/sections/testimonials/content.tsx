import { MapPin, Calendar, Compass } from "lucide-react";

const testimonials = [
  {
    category: "Road Trips",
    quote:
      "Planning our cross-country trip was so simple—TripSyncer handled it all!",
    author: "Emily R.",
    icon: <MapPin className="w-8 h-8 text-blue-500" />,
  },
  {
    category: "Events",
    quote:
      "The shared photo gallery was a hit at our family reunion. Everyone loved it!",
    author: "Tom S.",
    icon: <Calendar className="w-8 h-8 text-green-500" />,
  },
  {
    category: "Tours",
    quote:
      "TripSyncer scaled our tour business by automating everything. A lifesaver!",
    author: "Global Expeditions",
    icon: <Compass className="w-8 h-8 text-purple-500" />,
  },
];

export default function Testimonials() {
  return (
    <section className="border-t bg-muted/40 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Loved by Travelers, Hosts, and Tour Operators
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90 flex flex-col"
            >
              <div className="flex items-center mb-4">
                {testimonial.icon}
                <h3 className="ml-4 text-xl font-semibold">
                  {testimonial.category}
                </h3>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-400 italic mb-4 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-right font-semibold text-gray-900 dark:text-gray-100">
                – {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
