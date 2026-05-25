import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Skills
          </h2>
          <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technologies I work with
          </p>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            A toolkit honed through years of building production applications
            across the full stack.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-border bg-surface/50 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-surface hover:shadow-lg hover:shadow-cyan-500/5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="font-mono text-sm text-accent">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-1000 ease-out group-hover:from-cyan-400 group-hover:to-indigo-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["React", "Next.js", "Node.js", "TypeScript", "Tailwind", "Docker", "AWS", "Figma"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
