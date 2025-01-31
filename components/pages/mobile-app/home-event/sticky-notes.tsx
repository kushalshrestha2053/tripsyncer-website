import { motion } from "framer-motion";

interface StickyNoteProps {
  content: string;
  color: string;
}

export function StickyNote({ content, color }: StickyNoteProps) {
  const randomPosition = () => ({
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    rotate: Math.random() * 40 - 20,
  });

  return (
    <motion.div
      className={`absolute w-32 h-32 p-3 ${color} shadow-md text-black`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      initial={randomPosition()}
      animate={randomPosition()}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 5 + Math.random() * 10,
      }}
      drag
      dragElastic={0.3}
    >
      <p className="text-xs font-medium">{content}</p>
    </motion.div>
  );
}
