"use client";

import { motion } from "framer-motion";
import { floatAnimation } from "@/lib/motion";

const pulseTransition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.35, 0.65, 0.35],
          scale: [1, 1.05, 1],
        }}
        transition={pulseTransition}
        className="absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-sky-400/20 blur-[80px] sm:-top-32 sm:h-[420px] sm:w-[420px] sm:blur-[100px]"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.55, 0.3],
          scale: [1, 1.08, 1],
        }}
        transition={{ ...pulseTransition, delay: 1.5 }}
        className="absolute top-1/3 -right-12 h-40 w-40 rounded-full bg-violet-500/20 blur-[70px] sm:-right-24 sm:h-[360px] sm:w-[360px] sm:blur-[90px]"
      />
      <motion.div
        animate={floatAnimation}
        className="absolute bottom-16 left-4 h-32 w-32 rounded-full bg-cyan-400/10 blur-[50px] sm:bottom-20 sm:left-10 sm:h-[200px] sm:w-[200px] sm:blur-[70px]"
      />
    </div>
  );
}
