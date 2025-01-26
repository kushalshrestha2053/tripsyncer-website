"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  Users,
  CreditCard,
  Search,
  Star,
  Calendar,
  Map,
  Smartphone,
  Headphones,
} from "lucide-react";

export default function Marketplace() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with tours and activities from around the world",
    },
    {
      icon: Search,
      title: "Smart Search",
      description:
        "Find the perfect tour with our AI-powered search and filter options",
    },
    {
      icon: Calendar,
      title: "Real-time Availability",
      description: "Check tour availability and book instantly",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Safe and easy payment processing for peace of mind",
    },
    {
      icon: Star,
      title: "User Reviews",
      description: "Make informed decisions with authentic traveler reviews",
    },
    {
      icon: Users,
      title: "Tour Guide Profiles",
      description: "Learn about your guides before booking",
    },
    {
      icon: Map,
      title: "Interactive Itineraries",
      description: "Visualize your trip with interactive maps and schedules",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description:
        "Access your bookings and tours on-the-go with our mobile app",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Get assistance anytime, anywhere with our dedicated support team",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold mb-4">Sync Your Travel Dreams</h2>
            <p className="text-xl text-gray-400 mb-8">
              Discover, book, and experience unforgettable tours with TripSyncer
              - your ultimate travel companion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src="https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/470178857_122156192894303687_6651561140444072494_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tQLlT4ZY7ScQ7kNvgFYY117&_nc_zt=23&_nc_ht=scontent.fktm1-1.fna&_nc_gid=Aq4zzSU_hRYaEk9fmM-kQg9&oh=00_AYAMrP__5F27Gon5q_oqHyyud5mh9yWg4TF_aiHfg0ZkPQ&oe=679586E3"
              alt="TripSyncer App Preview"
              width={1000}
              height={500}
              className="rounded-lg shadow-2xl mx-auto"
            />
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="bg-gray-800 border-black-700 hover:border-white transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <feature.icon className="w-6 h-6 mr-2" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah T.",
                role: "Adventure Seeker",
                quote:
                  "TripSyncer made planning my backpacking trip a breeze. The variety of tours and easy booking process are unmatched!",
              },
              {
                name: "Michael R.",
                role: "Tour Operator",
                quote:
                  "Since joining TripSyncer, we've seen a 40% increase in bookings. The platform's reach and tools are invaluable for our business.",
              },
              {
                name: "Emily L.",
                role: "Family Traveler",
                quote:
                  "Finding family-friendly tours has never been easier. TripSyncer's filters and reviews helped us plan the perfect vacation.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-white-700">
                <CardContent className="pt-6">
                  <p className="italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="text-center bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg p-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Ready to Sync Your Travels?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join TripSyncer today and start your next adventure!
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Sign Up as Traveler
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black hover:bg-gray-200"
            >
              List Your Tours
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-gray-500">
          <p>&copy; 2023 TripSyncer. All rights reserved.</p>
          <p className="mt-2">
            Syncing adventurers with unforgettable experiences worldwide.
          </p>
        </div>
      </footer>
    </div>
  );
}
