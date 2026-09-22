import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden py-16 md:py-24">
      <div className="glow-orb top-10 -right-40 size-[24rem] bg-brand/20" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          description="Full-stack applications and REST APIs built with Django, Django REST Framework, and React."
        />

        <div
          role="tablist"
          aria-label="Project categories"
          className="mt-8 flex flex-wrap gap-2"
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              type="button"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-xl border px-4 py-2 text-sm font-medium transition-all",
                filter === cat
                  ? "border-transparent bg-gradient-to-r from-brand to-cyan text-brand-foreground"
                  : "border-border text-muted-foreground hover:border-brand/50 hover:text-foreground",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-8">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
