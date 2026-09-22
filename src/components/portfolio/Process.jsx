import { processSteps } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Process"
          title="How I Build Applications"
          description="A consistent workflow from requirements to a tested, integrated application."
        />

        <ol className="relative mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 60} as="li">
              <div className="glass-card glass-card-hover relative h-full p-6">
                <span className="font-mono text-3xl font-bold text-brand/25">{s.step}</span>
                <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-brand/50 to-transparent" />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
