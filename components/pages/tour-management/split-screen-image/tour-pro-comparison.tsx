"use client";

import { motion } from "framer-motion";
import { Dashboard } from "./content";
import { StickyNote } from "./sticky-notes";

export default function TourProComparison() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 ">
      <h2 className="text-3xl md:text-4xl mt-12 font-bold text-center mb-12 text-foreground dark:text-white">
        Tour Management Evolution
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <ComparisonPanel title="Before TourPro" content={<BeforeTourPro />} />
        <ComparisonPanel title="After TourPro" content={<Dashboard />} />
      </div>
    </div>
  );
}

function ComparisonPanel({ title, content }) {
  return (
    <div className="flex-1 mb-12">
      <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-[400px] bg-gray-100 text-black rounded-lg shadow-lg overflow-hidden"
      >
        {content}
      </motion.div>
    </div>
  );
}

function BeforeTourPro() {
  const notes = [
    { id: 1, content: "Call venue", color: "bg-yellow-200" },
    { id: 2, content: "Book flights", color: "bg-green-200" },
    { id: 3, content: "Confirm setlist", color: "bg-blue-200" },
    { id: 4, content: "Pack gear", color: "bg-pink-200" },
    { id: 5, content: "Arrange transport", color: "bg-purple-200" },
    { id: 6, content: "Update social media", color: "bg-red-200" },
    { id: 7, content: "Rehearsal schedule", color: "bg-indigo-200" },
    { id: 8, content: "Check equipment", color: "bg-orange-200" },
    { id: 9, content: "Organize team meeting", color: "bg-teal-200" },
    { id: 10, content: "Confirm accommodations", color: "bg-lime-200" },
    { id: 11, content: "Prepare merch", color: "bg-cyan-200" },
  ];

  return (
    <div className="w-full bg-gradient-to-r  from-purple-100 to-red-50 h-full relative p-4">
      {notes.map((note) => (
        <StickyNote key={note.id} content={note.content} color={note.color} />
      ))}
    </div>
  );
}
