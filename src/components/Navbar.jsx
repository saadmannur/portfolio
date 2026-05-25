"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ResumeDownloadLink from "@/components/ui/ResumeDownloadLink";
import Container from "@/components/ui/Container";
import { navLinks, site } from "@/data/portfolio";
import { fadeInDown, ease } from "@/lib/motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const resumeLinkClass =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl glass px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/30 md:w-auto";

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-14 items-center justify-between sm:h-16 md:h-[4.5rem]">
        <motion.a
          href="#home"
          whileHover={{ scale: 1.02 }}
          className="shrink-0 font-mono text-base font-semibold tracking-tight sm:text-lg"
        >
          <span className="text-accent">&lt;</span>
          {site.initials}
          <span className="text-accent-secondary">/&gt;</span>
        </motion.a>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground xl:px-3.5"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 h-px w-0 bg-gradient-to-r from-accent to-accent-secondary transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] xl:left-3.5" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex md:gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <ResumeDownloadLink showIcon className={resumeLinkClass}>
              Resume
            </ResumeDownloadLink>
          </motion.div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 sm:px-5"
          >
            Hire Me
          </motion.a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl glass md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease }}
            className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-white/10 glass md:hidden"
          >
            <ul className="flex flex-col gap-2 p-4 pb-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl glass-strong px-5 py-3.5 text-base font-medium"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="flex flex-col gap-2 pt-2 sm:flex-row">
                <ResumeDownloadLink
                  showIcon
                  className={`${resumeLinkClass} py-3`}
                  onDownloadStart={() => setIsOpen(false)}
                >
                  Resume
                </ResumeDownloadLink>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 py-3 text-sm font-semibold text-white sm:flex-1"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
