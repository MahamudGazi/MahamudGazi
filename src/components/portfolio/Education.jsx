import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Academics"
          title="Education"
          description="Formal education and technical training background."
        />

        <ol className="relative mt-10 space-y-6 border-l border-border pl-6 md:pl-8">
          {education.map((item, i) => (
            <Reveal key={item.degree + item.period} delay={i * 70} as="li" className="relative">
              <span className="absolute -left-[1.9rem] top-1 grid size-8 place-items-center rounded-full border border-border bg-surface text-brand md:-left-[2.15rem]">
                <GraduationCap className="size-4" />
              </span>
              <div className="glass-card p-5 md:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-balance">{item.degree}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                  </div>
                  <div className="flex flex-col items-start gap-1 sm:items-end">
                    <time className="font-mono text-xs text-muted-foreground">{item.period}</time>
                    {item.result ? (
                      <span className="rounded-md border border-brand/30 bg-brand/10 px-2 py-0.5 font-mono text-xs text-brand">
                        {item.result}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
