export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            About Me
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Turning ideas into digital reality
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                <span className="font-mono text-7xl font-bold text-gradient sm:text-8xl">
                  AM
                </span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 rounded-xl border border-border bg-surface px-4 py-3 shadow-xl">
              <p className="text-2xl font-bold text-accent">5+</p>
              <p className="text-sm text-muted">Years Experience</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m a passionate full-stack developer based in San Francisco,
              specializing in building exceptional digital experiences. From
              pixel-perfect interfaces to scalable backend systems, I love
              solving complex problems with clean, maintainable code.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              When I&apos;m not coding, you&apos;ll find me contributing to open
              source, mentoring junior developers, or exploring the latest in
              web performance and accessibility standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
              {[
                { label: "Projects", value: "40+" },
                { label: "Clients", value: "25+" },
                { label: "Coffee", value: "∞" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface/50 p-4 text-center transition-colors hover:border-accent/30"
                >
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
