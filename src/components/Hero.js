export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="animate-fade-in-up opacity-0-start mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-1.5 text-sm text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </p>

        <h1 className="animate-fade-in-up opacity-0-start animation-delay-100 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-gradient animate-gradient">Alex Morgan</span>
        </h1>

        <p className="animate-fade-in-up opacity-0-start animation-delay-200 mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Full-stack developer crafting fast, accessible, and beautiful web
          experiences with React, Next.js, and modern tooling.
        </p>

        <div className="animate-fade-in-up opacity-0-start animation-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-8 font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40"
          >
            View My Work
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-xl border border-border bg-surface px-8 font-medium transition-all hover:border-accent/50 hover:bg-surface/80"
          >
            Get In Touch
          </a>
        </div>

        <div className="animate-fade-in-up opacity-0-start animation-delay-500 mt-20 flex justify-center">
          <a
            href="#about"
            className="animate-float flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
