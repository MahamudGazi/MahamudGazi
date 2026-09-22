import { Check } from "lucide-react";
import { whatIDo } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";

const experienceWith = [
  "REST API Development",
  "JWT Authentication",
  "Role-Based Access Control",
  "CRUD Applications",
  "Database Design",
  "API Integration",
  "Responsive Web Development",
];

const stack = [
  "Python",
  "Django",
  "Django REST Framework",
  "React",
  "JavaScript",
  "Tailwind CSS",
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-hidden py-16 md:py-24"
    >
      <div className="section-shell">

        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="Full-Stack Developer with hands-on experience building scalable and responsive web applications."
        />

        {/* MAIN ABOUT GRID */}
        <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-[0.8fr_1.2fr]">

          {/* ================= LEFT SIDE ================= */}
          <Reveal className="glass-card flex h-full flex-col justify-center p-6 md:p-8">

            <div className="w-full">

              {/* PROFILE IMAGE */}
              <div className="overflow-hidden rounded-2xl border border-border">

                <img
                  src="/images/profile.png"
                  alt="Mahamud Gazi - Full-Stack Developer"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[3/1] xl:aspect-[4/5]"
                />

              </div>

              {/* PROFILE TITLE */}
              <p className="mt-4 text-center font-mono text-xs tracking-widest text-brand uppercase">
                Full-Stack Django Developer
              </p>

            </div>

          </Reveal>


          {/* ================= RIGHT SIDE ================= */}
          <div className="min-w-0 space-y-6">

            {/* ABOUT CONTENT */}
            <Reveal className="glass-card min-w-0 p-6 md:p-8">

              <div className="min-w-0">

                <p className="break-words leading-relaxed text-muted-foreground">
                  I build scalable web applications end to end — designing
                  relational data models, developing REST APIs with Django and
                  Django REST Framework, and connecting them to responsive React
                  frontends styled with Tailwind CSS.
                </p>

                <p className="mt-4 break-words leading-relaxed text-muted-foreground">
                  I enjoy solving real-world problems through technology and
                  building clean, scalable, and maintainable applications.
                  I'm currently seeking opportunities as a Junior Full-Stack
                  Developer, Django Developer, or Software Engineering Intern.
                </p>

                {/* PRIMARY STACK */}
                <h3 className="mt-8 font-mono text-xs tracking-widest text-brand uppercase">
                  Primary Stack
                </h3>

                <ul className="mt-3 flex flex-wrap gap-2">

                  {stack.map((s) => (
                    <li
                      key={s}
                      className="max-w-full rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 text-sm break-words"
                    >
                      {s}
                    </li>
                  ))}

                </ul>

              </div>

            </Reveal>


            {/* EXPERIENCE WITH */}
            <Reveal delay={100} className="glass-card min-w-0 p-6 md:p-8">

              <h3 className="font-mono text-xs tracking-widest text-brand uppercase">
                Experience With
              </h3>

              <ul className="mt-4 space-y-3">

                {experienceWith.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                  >

                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-brand/15 text-brand">
                      <Check className="size-3.5" />
                    </span>

                    <span className="min-w-0 break-words">
                      {item}
                    </span>

                  </li>
                ))}

              </ul>

            </Reveal>

          </div>

        </div>


        {/* ================= WHAT I DO ================= */}

        <h3 className="mt-16 font-display text-2xl font-semibold">
          What I Do
        </h3>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {whatIDo.map((card, i) => (
            <Reveal key={card.title} delay={i * 60}>

              <article className="glass-card glass-card-hover h-full p-6">

                <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-cyan/15 text-brand">
                  <Icon name={card.icon} className="size-5" />
                </span>

                <h4 className="mt-4 text-base font-semibold">
                  {card.title}
                </h4>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>

              </article>

            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}