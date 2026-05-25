"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewport } from "@/lib/motion";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  variant = fadeInUp,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
