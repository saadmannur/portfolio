"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewport, ease } from "@/lib/motion";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = fadeInUp,
}) {
  const duration = variant.visible?.transition?.duration ?? 0.65;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variant}
      transition={{ delay, duration, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
