"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import profileImage from "@/asset/profile.png";
import Container from "@/components/ui/Container";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import { site } from "@/data/portfolio";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  floatAnimation,
} from "@/lib/motion";

const yearsExperience =
  site.stats.find((s) => s.label === "Years")?.value ?? "4+";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-16 mesh-gradient sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
      <FloatingOrbs />

      <Container className="relative z-10 py-10 sm:py-14 md:py-16 lg:py-24">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted sm:mb-6 sm:px-4 sm:py-2 sm:text-sm lg:justify-start"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-accent sm:h-4 sm:w-4" />
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-left">Available for new opportunities</span>
            </motion.div>

            <motion.p
              variants={slideInLeft}
              className="text-xs font-medium uppercase tracking-[0.2em] text-muted sm:text-sm sm:tracking-[0.25em]"
            >
              {site.role}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="mt-3 text-[1.65rem] font-bold leading-[1.15] tracking-tight sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Building digital products with{" "}
              <span className="text-gradient-animated">precision</span> &amp;{" "}
              <span className="text-gradient">craft</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg lg:mx-0"
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold text-foreground">{site.name}</span> —{" "}
              {site.tagline}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 px-6 text-sm font-semibold text-white shadow-xl shadow-sky-500/25 sm:h-12 sm:w-auto sm:min-w-[200px] sm:px-8"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-11 w-full items-center justify-center rounded-xl glass px-6 text-sm font-semibold transition-colors hover:border-accent/40 sm:h-12 sm:w-auto sm:min-w-[200px] sm:px-8"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="order-1 mx-auto w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:order-2 lg:max-w-none"
          >
            <motion.div
              animate={floatAnimation}
              className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px]"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-sky-400 via-violet-500 to-sky-400 opacity-60 blur-md sm:rounded-3xl" />
              <div className="relative overflow-hidden rounded-2xl glow-ring sm:rounded-3xl">
                <div className="relative aspect-square glass-strong">
                  <Image
                    src={profileImage}
                    alt={site.name}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 420px"
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-3 -left-2 rounded-xl glass-strong px-3 py-2 shadow-xl sm:-bottom-4 sm:-left-4 sm:rounded-2xl sm:px-5 sm:py-3 md:-left-6"
              >
                <p className="text-lg font-bold text-accent sm:text-2xl">
                  {yearsExperience}
                </p>
                <p className="text-[10px] text-muted sm:text-xs">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75 }}
                className="absolute -top-2 -right-2 rounded-xl glass-strong px-3 py-1.5 sm:-right-4 sm:rounded-2xl sm:px-4 sm:py-2"
              >
                <p className="text-xs font-semibold text-foreground sm:text-sm">
                  Full-Stack
                </p>
                <p className="text-[10px] text-muted sm:text-xs">Developer</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent sm:mt-14 lg:mt-20"
          aria-label="Scroll to about"
        >
          <span className="text-[10px] uppercase tracking-widest sm:text-xs">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </Container>
    </section>
  );
}
