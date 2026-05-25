import { navLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="font-mono text-lg font-semibold tracking-tight"
            >
              <span className="text-accent">&lt;</span>
              AM
              <span className="text-accent">/&gt;</span>
            </a>
            <p className="mt-2 text-sm text-muted">
              Building the web, one commit at a time.
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
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {year} Alex Morgan. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Built with{" "}
            <span className="text-accent">Next.js</span> &{" "}
            <span className="text-accent-secondary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
