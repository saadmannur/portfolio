"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";
import { fadeInUp, staggerContainer, viewport } from "@/lib/motion";

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-2xl glass card-glow transition-all duration-300"
    >
      <div
        className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass-strong"
        >
          <Code2 className="h-8 w-8 text-accent/80" strokeWidth={1.5} />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg glass px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 border-t border-white/5 pt-5">
          <motion.a
            href={project.liveUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.repoUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
