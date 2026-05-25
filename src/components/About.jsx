"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "@/asset/profile.png";
import Container from "@/components/ui/Container";
import ResumeDownloadLink from "@/components/ui/ResumeDownloadLink";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { site } from "@/data/portfolio";
import { slideInLeft, slideInRight } from "@/lib/motion";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          label="About"
          title="Crafting experiences that feel effortless"
          description="A developer who cares about performance, accessibility, and every pixel in between."
        />

        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14">
          <ScrollReveal variant={slideInLeft}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative mx-auto w-full max-w-sm md:max-w-md lg:mx-0 lg:max-w-none"
            >
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-sky-400/20 to-violet-500/20 blur-2xl sm:-inset-3 sm:rounded-3xl" />
              <div className="glass-strong relative overflow-hidden rounded-2xl p-1.5 sm:rounded-3xl sm:p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl sm:rounded-2xl">
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
            <div className="glass-strong rounded-2xl p-5 sm:rounded-3xl sm:p-8 md:p-10">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                I&apos;m{" "}
                <span className="font-semibold text-foreground">{site.name}</span>, a
                passionate full-stack developer based in {site.location}. I specialize
                in building premium web applications — from polished interfaces to
                scalable backend systems.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
                When I&apos;m not coding, I contribute to open source, mentor developers,
                and stay current with web performance and accessibility standards.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
                {site.stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className="rounded-xl glass p-3 text-center card-glow transition-shadow sm:rounded-2xl sm:p-4"
                  >
                    <p className="text-lg font-bold text-gradient sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted sm:mt-1 sm:text-xs">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full sm:mt-8 sm:inline-block sm:w-auto"
              >
                <ResumeDownloadLink
                  showIcon
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400/20 to-violet-500/20 px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-white/10 transition-all hover:ring-accent/40 sm:w-auto"
                >
                  Download Resume
                </ResumeDownloadLink>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
