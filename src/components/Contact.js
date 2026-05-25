"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { MapPin, Mail, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { site, socialLinks } from "@/data/portfolio";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/motion";

function SocialIcon({ name }) {
  const Icon = LucideIcons[name] || LucideIcons.Link;
  return <Icon className="h-5 w-5" strokeWidth={1.75} />;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Let's build something great"
          description="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <ScrollReveal variant={slideInLeft} className="lg:col-span-2">
            <div className="space-y-5">
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl glass-strong p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/20">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl glass-strong p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
                    <MapPin className="h-5 w-5 text-accent-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-medium text-foreground">{site.location}</p>
                  </div>
                </div>
              </motion.div>

              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl glass text-muted transition-colors hover:text-accent card-glow"
                  >
                    <SocialIcon name={link.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant={slideInRight} delay={0.1} className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeInUp}
              className="rounded-3xl glass-strong p-6 sm:p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl glass-input px-4 py-3.5 text-foreground placeholder:text-slate-500 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl glass-input px-4 py-3.5 text-foreground placeholder:text-slate-500 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl glass-input px-4 py-3.5 text-foreground placeholder:text-slate-500 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 sm:w-auto sm:px-10"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
