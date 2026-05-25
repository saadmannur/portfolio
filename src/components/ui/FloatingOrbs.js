"use client";

import { motion } from "framer-motion";
import { floatAnimation, glowPulse } from "@/lib/motion";

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={glowPulse}
        className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-sky-400/20 blur-[100px]"
      />
      <motion.div
        animate={{
          ...glowPulse,
          transition: { ...glowPulse.transition, delay: 1.5 },
        }}
        className="absolute top-1/3 -right-24 h-[360px] w-[360px] rounded-full bg-violet-500/20 blur-[90px]"
      />
      <motion.div
        animate={floatAnimation}
        className="absolute bottom-20 left-10 h-[200px] w-[200px] rounded-full bg-cyan-400/10 blur-[70px]"
      />
      <motion.div
        animate={{
          y: [0, 16, 0],
          transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-1/3 right-1/4 h-[160px] w-[160px] rounded-full bg-violet-400/15 blur-[60px]"
      />
    </div>
  );
}
