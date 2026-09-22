import { currentFocus, journey, softSkills } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-24 py-16 md:py-24">
      <div className="section-shell space-y-16">
        <div>
          <SectionHeading
            eyebrow="Beyond Code"
            title="Professional Skills"
            description="Soft skills that complement technical ability."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill, i) => (
              <Reveal key={skill.label} delay={i * 50}>
                <div className="glass-card glass-card-hover flex items-center gap-3 p-4">
                  <span className="grid size-10 place-items-center rounded-xl border border-brand/25 bg-brand/10 text-brand">
                    <Icon name={skill.icon} className="size-5" />
                  </span>
                  <span className="font-medium">{skill.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Path"
            title="My Development Journey"
            description="From engineering foundations to full-stack software development."
          />
          <ol className="mt-8 flex flex-wrap gap-3">
            {journey.map((step, i) => (
              <Reveal key={step} delay={i * 40}>
                <li className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/50 px-4 py-2 text-sm">
                  <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading
            eyebrow="Right Now"
            title="Currently Focused On"
            description="What I am actively building and improving."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {currentFocus.map((item, i) => (
              <Reveal key={item} delay={i * 40}>
                <li className="glass-card flex items-start gap-3 p-4 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
