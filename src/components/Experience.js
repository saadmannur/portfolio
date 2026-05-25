"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Where I've built & grown"
          description="A timeline of roles shaping my craft in product engineering."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="relative mx-auto max-w-3xl"
        >
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent sm:left-1/2 sm:-translate-x-px" />

          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              variants={fadeInUp}
              className={`relative mb-12 flex last:mb-0 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full glass-strong ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2">
                <Briefcase className="h-4 w-4 text-accent" />
              </div>

              <div
                className={`ml-14 w-full sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                  index % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:pl-12 sm:ml-auto"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl glass-strong p-6 card-glow sm:p-7"
                >
                  <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium text-accent">
                    {item.period}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent-secondary">
                    {item.company}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <div
                    className={`mt-4 flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "sm:justify-end" : ""
                    }`}
                  >
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg glass px-2.5 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
