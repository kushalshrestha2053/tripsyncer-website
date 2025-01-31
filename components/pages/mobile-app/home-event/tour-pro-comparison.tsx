"use client";

import { motion } from "framer-motion";
import { Dashboard } from "./content";
import { StickyNote } from "./sticky-notes";

export default function EventPlanningComparison() {
  return (
    <section className="border-t border-b bg-muted/40 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl mt-12 font-bold text-center mb-12 text-foreground dark:text-white">
          Event Planning Evolution
        </h2>
        <div className="flex flex-col w-full md:flex-row gap-8 max-w-6xl mx-auto">
          <ComparisonPanel
            title="Before Event Planning App"
            content={<BeforeEventPlanning />}
          />
          <ComparisonPanel
            title="After Event Planning App"
            content={<Dashboard />}
          />
        </div>
      </div>
    </section>
  );
}

function ComparisonPanel({ title, content }) {
  return (
    <div className="flex-1 mb-12 ">
      {" "}
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

function BeforeEventPlanning() {
  const notes = [
    {
      id: 1,
      content: "Unclear Directions & Event Details",
      color: "bg-yellow-200",
    },
    {
      id: 2,
      content: "Confusing Schedules & Last-Minute Changes",
      color: "bg-green-200",
    },
    { id: 3, content: "Time-Consuming Guest Invites", color: "bg-blue-200" },
    {
      id: 4,
      content: "Uncertain RSVP & Attendance Tracking",
      color: "bg-pink-200",
    },
    {
      id: 5,
      content: "Scattered Photos & Missed Memories",
      color: "bg-purple-200",
    },
    { id: 6, content: "Plan Event Itinerary", color: "bg-red-200" },
    {
      id: 7,
      content: "Confirm Event Location & Venue",
      color: "bg-indigo-200",
    },
    {
      id: 8,
      content: "Create RSVP Link for Easy Tracking",
      color: "bg-orange-200",
    },
    {
      id: 9,
      content: "Coordinate Transportation for Guests",
      color: "bg-teal-200",
    },
    {
      id: 10,
      content: "Ensure All Event Details Are Clear",
      color: "bg-lime-200",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r  from-purple-100 to-red-50 h-full relative p-4">
      {notes.map((note) => (
        <StickyNote key={note.id} content={note.content} color={note.color} />
      ))}
    </div>
  );
}
