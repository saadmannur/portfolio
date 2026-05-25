"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

export default function Experience() {
  return (
    <Section id="experience">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />

      <Container className="relative">
        <SectionHeading
          label="Experience"
          title="Where I&apos;ve built & grown"
          description="A timeline of roles shaping my craft in product engineering."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="relative mx-auto max-w-3xl"
        >
          <div className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-accent via-accent-secondary to-transparent sm:left-[19px] lg:left-1/2 lg:-translate-x-px" />

          {experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              variants={fadeInUp}
              className={`relative mb-10 last:mb-0 sm:mb-12 lg:mb-14 ${
                index % 2 === 0 ? "lg:flex lg:flex-row" : "lg:flex lg:flex-row-reverse"
              }`}
            >
              <div className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full glass-strong ring-4 ring-background sm:h-10 sm:w-10 lg:left-1/2 lg:-translate-x-1/2">
                <Briefcase className="h-3.5 w-3.5 text-accent sm:h-4 sm:w-4" />
              </div>

              <div
                className={`ml-11 w-[calc(100%-2.75rem)] sm:ml-14 sm:w-[calc(100%-3.5rem)] lg:ml-0 lg:w-[calc(50%-2.5rem)] ${
                  index % 2 === 0
                    ? "lg:pr-10 lg:text-right xl:pr-12"
                    : "lg:pl-10 lg:ml-auto lg:text-left xl:pl-12"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl glass-strong p-5 card-glow sm:p-6 md:p-7"
                >
                  <span className="inline-block rounded-full glass px-2.5 py-0.5 text-[10px] font-medium text-accent sm:px-3 sm:py-1 sm:text-xs">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-foreground sm:mt-3 sm:text-lg">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-accent-secondary sm:mt-1 sm:text-sm">
                    {item.company}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted sm:mt-4 sm:text-sm">
                    {item.description}
                  </p>
                  <div
                    className={`mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2 ${
                      index % 2 === 0 ? "lg:justify-end" : ""
                    }`}
                  >
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg glass px-2 py-0.5 text-[10px] text-muted sm:px-2.5 sm:py-1 sm:text-xs"
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
      </Container>
    </Section>
  );
}
