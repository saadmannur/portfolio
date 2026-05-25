"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profileImage from "@/asset/profile.png";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { site } from "@/data/portfolio";
import { scaleIn, slideInLeft, slideInRight } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="Crafting experiences that feel effortless"
          description="A developer who cares about performance, accessibility, and every pixel in between."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal variant={slideInLeft}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative mx-auto max-w-md lg:mx-0"
            >
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-sky-400/20 to-violet-500/20 blur-2xl" />
              <div className="glass-strong relative overflow-hidden rounded-3xl p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={profileImage}
                    alt={site.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal variant={slideInRight} delay={0.1}>
            <motion.div
              variants={scaleIn}
              className="glass-strong rounded-3xl p-8 sm:p-10"
            >
              <p className="text-lg leading-relaxed text-muted">
                I&apos;m <span className="font-semibold text-foreground">{site.name}</span>
                , a passionate full-stack developer based in {site.location}. I
                specialize in building premium web applications — from polished
                interfaces to scalable backend systems.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                When I&apos;m not coding, I contribute to open source, mentor
                developers, and stay current with web performance and
                accessibility standards.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {site.stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl glass p-4 text-center card-glow transition-shadow"
                  >
                    <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                    <p className="mt-1 text-xs text-muted">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href={site.resumeUrl}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400/20 to-violet-500/20 px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-white/10 transition-all hover:ring-accent/40"
              >
                <Download className="h-4 w-4 text-accent" />
                Download Resume
              </motion.a>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
