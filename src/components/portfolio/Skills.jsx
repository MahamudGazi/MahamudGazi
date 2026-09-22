import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden py-16 md:py-24">
      <div className="glow-orb top-1/3 -left-40 size-[22rem] bg-violet/20" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Stack"
          title="Technical Skills"
          description="The languages, frameworks, and concepts I use to build and ship full-stack applications."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <article className="glass-card glass-card-hover h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/12 text-brand">
                    <Icon name={group.icon} className="size-5" />
                  </span>
                  <h3 className="min-w-0 truncate text-base font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
