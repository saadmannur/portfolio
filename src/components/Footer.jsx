"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SocialIcon from "@/components/ui/SocialIcon";
import { navLinks, site, socialLinks } from "@/data/portfolio";
import { fadeInUp, viewport } from "@/lib/motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUp}
      >
        <Container className="py-10 sm:py-12 md:py-14">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left lg:items-center">
            <div className="max-w-xs">
              <a
                href="#home"
                className="inline-block font-mono text-lg font-semibold"
              >
                <span className="text-accent">&lt;</span>
                {site.initials}
                <span className="text-accent-secondary">/&gt;</span>
              </a>
              <p className="mt-2 text-sm text-muted">
                Building premium web experiences — one commit at a time.
              </p>
            </div>

            <ul className="flex max-w-full flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex shrink-0 gap-3">
              {socialLinks.map((link) => {
                const isExternal =
                  link.external !== false && !link.href.startsWith("mailto:");

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={link.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="flex h-9 w-9 items-center justify-center rounded-lg glass text-muted hover:text-accent sm:h-10 sm:w-10"
                  >
                    <SocialIcon name={link.icon} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-muted sm:mt-10 sm:flex-row sm:pt-8 sm:text-sm">
            <p>
              &copy; {year} {site.name}. All rights reserved.
            </p>
            <p>
              Built with <span className="text-accent">Next.js</span>,{" "}
              <span className="text-accent-secondary">Tailwind</span> &amp;{" "}
              <span className="text-foreground">Framer Motion</span>
            </p>
          </div>
        </Container>
      </motion.div>
    </footer>
  );
}
