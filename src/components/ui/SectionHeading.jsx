"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewport } from "@/lib/motion";

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeInUp}
      className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-16"
    >
      <span className="inline-block rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent sm:px-4 sm:py-1.5 sm:text-xs">
        {label}
      </span>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl px-2 text-sm leading-relaxed text-muted sm:mt-4 sm:px-0 sm:text-base md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
