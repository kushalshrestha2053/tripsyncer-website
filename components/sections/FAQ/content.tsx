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
    question: "How do I book a tour?",
    answer:
      "Booking a tour is easy! Simply browse our available tours, select the one you're interested in, choose your preferred date, and follow the booking process. You'll need to provide some basic information and make a payment to confirm your reservation.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that plans can change. Our standard cancellation policy allows for a full refund if cancelled at least 7 days before the tour date. Cancellations made 3-6 days prior to the tour date are eligible for a 50% refund. Unfortunately, we cannot offer refunds for cancellations made less than 3 days before the tour date.",
  },
  {
    question: "Are your tours suitable for children?",
    answer:
      "Many of our tours are family-friendly and suitable for children. Each tour description includes information about age suitability. If you have specific concerns, please contact our customer service team, and we'll be happy to help you find the perfect tour for your family.",
  },
  {
    question: "What should I bring on the tour?",
    answer:
      "The items you should bring depend on the specific tour. Generally, we recommend comfortable walking shoes, weather-appropriate clothing, sunscreen, and a water bottle. For each tour, we provide a detailed list of recommended items in the tour information and in your booking confirmation email.",
  },
  {
    question: "Do you offer private tours?",
    answer:
      "Yes, we offer private tours for many of our destinations. Private tours allow for a more personalized experience and can be customized to your group's interests and needs. Please contact our customer service team for more information and to book a private tour.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Our customer support team is available 24/7. You can reach us by email at support@yourtourcompany.com, by phone at +1 (555) 123-4567, or through the chat feature on our website. We aim to respond to all inquiries within 24 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-background border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className=" shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  className="w-full justify-between p-6 text-left transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
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
                        className="px-6 pb-6 text-gray-400 mt-3"
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
        {/* <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Can't find the answer you're looking for?
          </p>
          <Button className="font-semibold">Contact Our Support Team</Button>
        </div> */}
      </div>
    </section>
  );
}
