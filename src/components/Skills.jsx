"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillIcon from "@/components/ui/SkillIcon";
import { skills } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />

      <Container className="relative">
        <SectionHeading
          label="Skills"
          title="Technologies I master"
          description="A curated toolkit for building fast, scalable, and beautiful products."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl glass p-5 card-glow transition-all duration-300 sm:p-6"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-violet-500/20 ring-1 ring-white/10 transition-all group-hover:shadow-lg group-hover:shadow-sky-500/20 sm:mb-4 sm:h-12 sm:w-12">
                <SkillIcon name={skill.icon} />
              </div>
              <h3 className="text-sm font-semibold text-foreground sm:text-base">
                {skill.name}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted sm:mt-2 sm:text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
