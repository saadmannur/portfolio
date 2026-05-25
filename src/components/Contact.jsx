"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Send } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SocialIcon from "@/components/ui/SocialIcon";
import { site, socialLinks } from "@/data/portfolio";
import { slideInLeft, slideInRight } from "@/lib/motion";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <Container>
        <SectionHeading
          label="Contact"
          title="Let's build something great"
          description="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <ScrollReveal variant={slideInLeft} className="lg:col-span-2">
            <div className="space-y-4 sm:space-y-5">
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl glass-strong p-5 sm:p-6"
              >
                <div className="flex items-start gap-3 sm:items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/20">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-sm font-medium text-foreground transition-colors hover:text-accent sm:break-normal sm:text-base"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl glass-strong p-5 sm:p-6"
              >
                <div className="flex items-start gap-3 sm:items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/20">
                    <MapPin className="h-5 w-5 text-accent-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="text-sm font-medium text-foreground sm:text-base">
                      {site.location}
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-wrap gap-3">
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
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl glass text-muted transition-colors hover:text-accent card-glow sm:h-12 sm:w-12"
                    >
                      <SocialIcon name={link.icon} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant={slideInRight} delay={0.1} className="lg:col-span-3">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="rounded-2xl glass-strong p-5 sm:rounded-3xl sm:p-6 md:p-8"
            >
              <input type="hidden" name="access_key" value="09b294e8-21a7-4bb3-bcea-013cf9e2bece" />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-xl glass-input px-4 py-3 text-sm text-foreground placeholder:text-slate-500 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 sm:py-3.5 sm:text-base"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl glass-input px-4 py-3 text-sm text-foreground placeholder:text-slate-500 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 sm:py-3.5 sm:text-base"
                  />
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl glass-input px-4 py-3 text-sm text-foreground placeholder:text-slate-500 transition-all focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-base"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-violet-500 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 sm:mt-6 sm:w-auto sm:px-10 sm:py-3.5"
              >
                <Send className="h-4 w-4" />
                Send Message
              </motion.button>
            </form>
    
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
