"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SocialIcon from "@/components/ui/SocialIcon";
import { projects } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl glass card-glow transition-all duration-300"
    >
      <div
        className={`relative flex h-40 items-center justify-center bg-gradient-to-br sm:h-48 md:h-52 ${project.gradient}`}
      >
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl glass-strong sm:h-16 sm:w-16"
        >
          <Code2 className="h-7 w-7 text-accent/80 sm:h-8 sm:w-8" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
        <h3 className="text-lg font-semibold transition-colors group-hover:text-accent sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:mt-3">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg glass px-2 py-0.5 font-mono text-[10px] text-muted sm:px-2.5 sm:py-1 sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-white/5 pt-4 sm:mt-6 sm:pt-5">
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            <ExternalLink className="h-4 w-4 shrink-0" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.repoUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <SocialIcon name="github" className="h-4 w-4 shrink-0" />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          label="Projects"
          title="Featured work"
          description="Selected projects showcasing design, performance, and engineering excellence."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
