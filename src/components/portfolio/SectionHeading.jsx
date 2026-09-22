import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3 py-1 font-mono text-xs tracking-widest text-brand uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}
