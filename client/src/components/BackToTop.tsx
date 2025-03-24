import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const scrollPosition = useScrollPosition();
  const showButton = scrollPosition > 300;
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <div className="relative">
      <AnimatePresence>
        {showButton && (
          <motion.button
            className="fixed bottom-6 right-6 bg-[#26a69a] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-opacity-80"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
