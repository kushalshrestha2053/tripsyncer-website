import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment:
      "Absolutely amazing experience! The tour was well-organized, and our guide was knowledgeable and friendly. I'll definitely book again!",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    comment:
      "Great value for money. The itinerary was perfect, and we got to see all the major attractions. Highly recommended!",
  },
  {
    id: 3,
    name: "Emma Watson",
    location: "London, UK",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    comment:
      "The booking process was smooth, and the customer service was excellent. Our tour exceeded all expectations!",
  },
  {
    id: 4,
    name: "Juan Hernandez",
    location: "Barcelona, Spain",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    comment:
      "A fantastic way to explore the city. The local insights from our guide made the experience truly special.",
  },
];

export default function CustomerTestimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 bg-background border-t cursor-pointer"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="h-full border-t  bg-card/50 dark:bg-card/30 hover:shadow-lg dark:hover:bg-muted/5"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-muted-foreground flex-grow">
                  {testimonial.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
