import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroCTA() {
  const handleScroll = (event, targetId) => {
    event.preventDefault();

    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-4 sm:flex-row"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          size="lg"
          className="group min-w-[200px]"
          asChild
          onClick={(e) => handleScroll(e, "products")}
        >
          <Link href="#products">
            Explore Products
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          size="lg"
          variant="outline"
          className="min-w-[200px] cursor-pointer"
          asChild
          onClick={(e) => handleScroll(e, "testimonials")}
        >
          <span>Read Success Stories</span>
        </Button>
      </motion.div>
    </motion.div>
  );
}
