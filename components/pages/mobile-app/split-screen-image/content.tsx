import Image from "next/image";
import { MapPin, Calendar, Link, Clock } from "lucide-react";

export default function SplitScreenFeatures() {
  return (
    <section className="py-16 bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-white">
          Plan Your Adventures with Ease
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Road Trip Planning
              </h3>
              <div className="relative h-72 mb-4">
                <Image
                  src="/tripsyncer-mobile-app-road-trip.jpeg"
                  alt="Tripsyncer: trip planning mobile app"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-900 dark:text-gray-100">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Interactive route mapping</span>
                </li>
                <li className="flex items-center text-gray-900 dark:text-gray-100">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span>Estimated travel times</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Event Management */}
          <div className="p-6 rounded-lg shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Home Events Planning
              </h3>
              <div className="relative h-72 mb-4">
                <Image
                  src="/tripsyncer-mobile-app-events.jpg"
                  alt="Tripsyncer: event planning mobile app"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </div>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-900 dark:text-gray-100">
                  <Calendar className="h-5 w-5 text-green-500 mr-2" />
                  <span>Detailed home event itineraries</span>
                </li>
                <li className="flex items-center text-gray-900 dark:text-gray-100">
                  <Link className="h-5 w-5 text-green-500 mr-2" />
                  <span>Easy-to-share invite links</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
