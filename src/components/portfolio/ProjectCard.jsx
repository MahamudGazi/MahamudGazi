import { ExternalLink, Github, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, index }) {
  const flip = index % 2 === 1;
  const accent = project.accent || "from-brand to-cyan";

  return (
    <article className="glass-card glass-card-hover overflow-hidden">
      <div className={cn("grid gap-0 lg:grid-cols-2")}>
        <div className={cn("relative overflow-hidden bg-surface-2", flip && "lg:order-2")}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              width={1280}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-56 w-full object-cover object-left-top transition-transform duration-700 hover:scale-[1.04] sm:h-72 lg:h-full lg:min-h-[22rem]"
            />
          ) : (
            <div
              className={cn(
                "flex h-56 w-full flex-col items-center justify-center gap-3 bg-gradient-to-br sm:h-72 lg:h-full lg:min-h-[22rem]",
                accent,
              )}
              role="img"
              aria-label={project.imageAlt}
            >
              <LayoutDashboard className="size-12 text-white/90" />
              <p className="px-6 text-center text-lg font-semibold text-white/95">{project.name}</p>
              <p className="px-6 text-center text-sm text-white/75">{project.subtitle}</p>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent lg:bg-gradient-to-r" />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            {project.categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 font-mono text-[11px] tracking-wide text-brand uppercase"
              >
                {c}
              </span>
            ))}
          </div>

          <h3 className="mt-4 text-2xl font-semibold text-balance">{project.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {project.roles ? (
            <p className="mt-4 text-sm">
              <span className="font-mono text-xs tracking-widest text-brand uppercase">
                Roles:
              </span>{" "}
              <span className="text-muted-foreground">{project.roles.join(" · ")}</span>
            </p>
          ) : null}

          <h4 className="mt-6 font-mono text-xs tracking-widest text-brand uppercase">
            Key features
          </h4>
          <ul className="mt-3 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                <span className="min-w-0">{f}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-mono text-xs tracking-widest text-brand uppercase">Tech</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </ul>

          {project.github || project.demo ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-brand/50"
                >
                  <Github className="size-4" /> GitHub
                </a>
              ) : null}
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-cyan px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="size-4" /> Live Demo
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
