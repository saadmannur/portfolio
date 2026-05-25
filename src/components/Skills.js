"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

function SkillIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Code2;
  return <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />;
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group rounded-2xl glass p-6 card-glow transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-violet-500/20 ring-1 ring-white/10 transition-all group-hover:shadow-lg group-hover:shadow-sky-500/20">
                <SkillIcon name={skill.icon} />
              </div>
              <h3 className="font-semibold text-foreground">{skill.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
