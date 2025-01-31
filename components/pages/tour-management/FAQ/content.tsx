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
    question: "Can I manage both scuba tours AND cooking classes here?",
    answer:
      "Absolutely! Tag tours by type – let customers filter by ‘water’, ‘foodie’, or ‘extreme’.",
  },
  {
    question: "What if I need to cancel 100 tours due to a volcano?",
    answer:
      "Our ‘Disaster Mode’ lets you mass-cancel with pre-written refund emails. Includes empathy tips.",
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
          No Question Too Weird – We’ve Heard ‘Em All
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
