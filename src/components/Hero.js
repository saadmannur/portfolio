"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import profileImage from "@/asset/profile.png";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import { site } from "@/data/portfolio";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  floatAnimation,
} from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20 mesh-gradient"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
      <FloatingOrbs />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </motion.div>

            <motion.p
              variants={slideInLeft}
              className="text-sm font-medium uppercase tracking-[0.25em] text-muted"
            >
              {site.role}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Building digital products with{" "}
              <span className="text-gradient-animated">precision</span> &amp;{" "}
              <span className="text-gradient">craft</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
            >
              Hi, I&apos;m <span className="font-semibold text-foreground">{site.name}</span>
              — {site.tagline}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex h-12 min-w-[200px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 px-8 text-sm font-semibold text-white shadow-xl shadow-sky-500/25"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-xl glass px-8 text-sm font-semibold transition-colors hover:border-accent/40"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <motion.div
              animate={floatAnimation}
              className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-sky-400 via-violet-500 to-sky-400 opacity-60 blur-md" />
              <div className="relative overflow-hidden rounded-3xl glow-ring">
                <div className="glass-strong aspect-square">
                  <Image
                    src={profileImage}
                    alt={site.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 340px, 420px"
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -left-4 rounded-2xl glass-strong px-5 py-3 shadow-xl sm:-left-6"
              >
                <p className="text-2xl font-bold text-accent">5+</p>
                <p className="text-xs text-muted">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75 }}
                className="absolute -top-2 -right-2 rounded-2xl glass-strong px-4 py-2 sm:-right-4"
              >
                <p className="text-sm font-semibold text-foreground">Full-Stack</p>
                <p className="text-xs text-muted">Developer</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent lg:mt-20"
          aria-label="Scroll to about"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
