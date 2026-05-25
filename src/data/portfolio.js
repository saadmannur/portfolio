export const site = {
  name: "Nur Uddin",
  initials: "NUR",
  role: "Full-Stack Developer",
  tagline:
    "I craft premium digital experiences — from polished interfaces to scalable backends — with React, Next.js, and modern web standards.",
  email: "saadmannur99@gmail.com",
  location: "Chattogram, Bangladesh",
  resumeUrl: "/resume.pdf",
  resumeDownloadUrl: "/api/resume",
  resumeFileName: "Nur-Uddin-Resume.pdf",
  stats: [
    { label: "Projects", value: "40+" },
    { label: "Clients", value: "25+" },
    { label: "Years", value: "4+" },
  ],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  {
    name: "JavaScript / TypeScript",
    icon: "FileCode2",
    description: "Type-safe apps & modern ES features",
  },
  {
    name: "React & Next.js",
    icon: "Layers",
    description: "SSR, App Router & performance",
  },
  {
    name: "Node.js",
    icon: "Server",
    description: "APIs, microservices & backends",
  },
  {
    name: "Tailwind CSS",
    icon: "Palette",
    description: "Design systems & responsive UI",
  },
  {
    name: "PostgreSQL / MongoDB",
    icon: "Database",
    description: "Relational data & optimization",
  },
  {
    name: "Git & DevOps",
    icon: "GitBranch",
    description: "CI/CD, Docker & cloud deploys",
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack storefront with cart, Stripe payments, and admin dashboard. Optimized for Core Web Vitals.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-sky-500/30 via-cyan-500/20 to-violet-600/30",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative workspace with drag-and-drop boards, presence, and team notifications.",
    tags: ["React", "Socket.io", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-violet-500/30 via-purple-500/20 to-fuchsia-600/30",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization suite with custom charts, advanced filters, and exportable PDF reports.",
    tags: ["TypeScript", "D3.js", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-600/30",
  },
  {
    title: "Developer Blog",
    description:
      "MDX-powered blog with syntax highlighting, RSS, OG images, and seamless dark mode.",
    tags: ["Next.js", "MDX", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#",
    gradient: "from-amber-500/30 via-orange-500/20 to-rose-600/30",
  },
];

export const experience = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechFlow Inc.",
    period: "2025 — Present",
    description:
      "Lead development of customer-facing SaaS products. Architected micro-frontends, improved Lighthouse scores by 40%, and mentored a team of 4 engineers.",
    highlights: ["Next.js", "AWS", "Team Lead"],
  },
  {
    role: "Full-Stack Developer",
    company: "Digital Studio",
    period: "2023 — 2025",
    description:
      "Built e-commerce and marketing platforms for enterprise clients. Integrated payment systems and CMS workflows with tight design-dev collaboration.",
    highlights: ["React", "Node.js", "Stripe"],
  },
  {
    role: "Frontend Developer",
    company: "StartUp Labs",
    period: "2022 — 2023",
    description:
      "Developed responsive web apps and design systems. Introduced component libraries and accessibility standards across product teams.",
    highlights: ["TypeScript", "Tailwind", "Figma"],
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/saadmannur", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/saadman-noor", icon: "linkedin" },
  { label: "Twitter", href: "https://x.com/saadmannur99", icon: "twitter" },
  {
    label: "Email",
    href: "mailto:saadmannur99@gmail.com",
    icon: "mail",
    external: false,
  },
];
