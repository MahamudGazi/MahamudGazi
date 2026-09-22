import { overview } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Overview() {
  return (
    <section aria-label="Quick overview" className="section-shell pb-16 md:pb-24">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overview.map((item, i) => (
          <Reveal key={item.label} delay={i * 70}>
            <div className="glass-card glass-card-hover h-full p-5">
              <p className="font-mono text-xs tracking-widest text-brand uppercase">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-balance">{item.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
