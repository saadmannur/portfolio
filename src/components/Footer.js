"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { navLinks, site, socialLinks } from "@/data/portfolio";
import { fadeInUp, viewport } from "@/lib/motion";

function SocialIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Link;
  return <Icon className="h-4 w-4" strokeWidth={1.75} />;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={fadeInUp}
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#home" className="font-mono text-lg font-semibold">
              <span className="text-accent">&lt;</span>
              {site.initials}
              <span className="text-accent-secondary">/&gt;</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Building premium web experiences — one commit at a time.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-6">
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

          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.15, y: -2 }}
                className="flex h-9 w-9 items-center justify-center rounded-lg glass text-muted hover:text-accent"
              >
                <SocialIcon name={link.icon} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-muted sm:flex-row">
          <p>&copy; {year} {site.name}. All rights reserved.</p>
          <p>
            Built with{" "}
            <span className="text-accent">Next.js</span>,{" "}
            <span className="text-accent-secondary">Tailwind</span> &amp;{" "}
            <span className="text-foreground">Framer Motion</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
