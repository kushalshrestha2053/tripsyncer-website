"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are all Tripsyncer products free right now?",
    answer:
      "Yes! Since we’re in Beta, all four products—the Tripsyncer Mobile App, Tour Management System, Event Management System, and Marketplace—are currently free to use. We appreciate your feedback as we refine our offerings, and Beta users receive special perks for helping shape the platform.",
  },
  {
    question:
      "Will there be separate subscriptions for each product in the future?",
    answer:
      "We’re still working out our final pricing models. We may offer bundled plans to unlock all four products or individual subscriptions if you only need one or two. Stay tuned for updates—your input will guide our decisions!",
  },
  {
    question: "What does the Tripsyncer Mobile App do?",
    answer:
      "It’s your personal group trip planner and home events planner on the go. Whether you’re a traveler needing real-time itinerary tracking, a tour guide wanting to coordinate groups, or simply someone who values staying organized, the Tripsyncer Mobile App keeps everything in one place.\n\nComing Soon in Future Updates:\n- Itinerary Sync: Seamless link to our Tour and Event Management Systems\n- Instant Alerts: Push notifications for schedule changes, travel notes, images, and event reminders\n- Group Chat: Built-in messaging to share updates and coordinate with your travel group",
  },
  {
    question:
      "How does the Tour Management System differ from the Event Management System?",
    answer:
      "Tour Management System: Designed for tour operators, travel agencies, and guides. Schedule trips, manage bookings, track itineraries, and automate communications.\n\nEvent Management System: Ideal for concerts, conferences, festivals, and other gatherings. Create event listings, sell tickets, manage attendees, and send real-time updates.",
  },
  {
    question: "What’s the Marketplace all about?",
    answer:
      "The Marketplace is your buy-and-sell hub for tours, travel packages, and event tickets. List your experiences for a global audience, or browse unique offerings from other creators. It’s a convenient, centralized space to discover new adventures or showcase your own.",
  },
  {
    question: "Do I need any technical expertise to use these tools?",
    answer:
      "Not at all! We’ve made each product beginner-friendly with clear navigation, in-app tutorials, and pop-up tips. If you ever hit a snag, our support team is just a message away.",
  },
  {
    question: "How secure is my data with Tripsyncer?",
    answer:
      "We take privacy and security seriously. All data is protected by industry-standard encryption and stored on secure servers. As we grow, we’ll continue implementing advanced security features to ensure your information remains safe.",
  },
  {
    question: "Can I integrate Tripsyncer with other tools I already use?",
    answer:
      "Absolutely. While in Beta, we’re actively developing integrations with popular platforms like Google Calendar, Slack, Stripe, and more. Our goal is to make Tripsyncer fit seamlessly into your existing workflow.",
  },
  {
    question: "Are there usage limits or caps during Beta?",
    answer:
      "There are no strict limits right now. However, if you’re planning something very large-scale—like hundreds of tours or a huge event—just let us know, so we can ensure optimal performance and address any potential hiccups.",
  },
  {
    question: "How can I give feedback or request new features?",
    answer:
      "We love hearing from our users! You can reach out via:\n- In-app chat (built into each product)\n- Email: support@tripsyncer.com\n- Community Forum: Share suggestions, report bugs, or upvote feature requests\n\nYour input is crucial to making Tripsyncer the best it can be.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-t bg-muted/40 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Got Questions? We’ve Got Answers.
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-4 md:p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-6 text-left transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-sm md:text-base break-words whitespace-normal max-w-full">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        id={`faq-answer-${index}`}
                        className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-gray-400 mt-3 md:mt-4 break-words whitespace-normal max-w-full"
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
