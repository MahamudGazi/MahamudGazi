import { experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Background"
          title="Experience"
          description="Professional and technical experience that shaped my problem-solving approach."
        />

        <div className="mt-10 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.org + job.period} delay={i * 80}>
              <article className="glass-card p-6 md:p-8">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="mt-1 text-brand">{job.org}</p>
                    <p className="mt-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">
                      {job.category}
                    </p>
                  </div>
                  <time className="shrink-0 rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 font-mono text-xs text-muted-foreground">
                    {job.period}
                  </time>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {job.note ? (
                  <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                    {job.note}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
