import { motion } from "framer-motion";

interface StickyNoteProps {
  content: string;
  color: string;
}

export function StickyNote({ content, color }: StickyNoteProps) {
  const randomPosition = () => ({
    x: Math.random() * 60 - 30,
    y: Math.random() * 60 - 30,
    rotate: Math.random() * 15 - 7.5,
  });

  return (
    <motion.div
      className={`absolute  w-32 h-32 p-3 ${color} shadow-md text-black`}
      style={{
        left: `${Math.random() * 60 + 20}%`,
        top: `${Math.random() * 60 + 20}%`,
      }}
      initial={randomPosition()}
      animate={randomPosition()}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 10 + Math.random() * 5,
      }}
    >
      <p className="text-xs font-medium">{content}</p>
    </motion.div>
  );
}
