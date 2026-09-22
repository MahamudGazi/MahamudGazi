import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ResumeButton } from "./Navbar";

const stack = ["Python", "Django", "DRF", "React", "JavaScript", "MySQL", "PostgreSQL"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      <div className="glow-orb -top-24 -left-24 size-[26rem] bg-brand/30" />
      <div className="glow-orb top-24 -right-32 size-[24rem] bg-cyan/25" />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/35 bg-brand/10 px-3.5 py-1.5 text-xs font-medium text-brand">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            Available for Opportunities
          </span>

          <p className="mt-6 font-mono text-sm text-muted-foreground">Hi, I&apos;m Mahamud Gazi</p>
          <h1 className="mt-2 text-4xl font-bold text-balance sm:text-5xl md:text-6xl xl:text-[4.25rem] xl:leading-[1.05]">
            <span className="text-gradient">Full-Stack Developer</span>
          </h1>
          <p className="mt-3 font-mono text-xs tracking-wide text-muted-foreground sm:text-sm">
            {profile.stackLine}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-cyan px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5"
            >
              View My Projects <ArrowRight className="size-4" />
            </a>
            <ResumeButton className="rounded-xl border border-border px-5 py-3" />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2/50 px-5 py-3 text-sm font-semibold transition-colors hover:border-brand/50"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Social href={profile.github} label="GitHub profile">
              <Github className="size-5" />
            </Social>
            <Social href={profile.linkedin} label="LinkedIn profile">
              <Linkedin className="size-5" />
            </Social>
            <Social href={`mailto:${profile.email}`} label="Email Mahamud Gazi">
              <Mail className="size-5" />
            </Social>
          </div>
        </div>

        <div className="relative">
          <div className="glass-card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-3">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-chart-4/70 [background:oklch(0.78_0.15_85)]" />
              <span className="size-3 rounded-full bg-cyan/70" />
              <span className="ml-2 truncate font-mono text-xs text-muted-foreground">
                api/views.py
              </span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-[11px] leading-relaxed sm:text-xs">
              <code>
                <span className="text-violet">from</span> rest_framework{" "}
                <span className="text-violet">import</span> viewsets{"\n"}
                <span className="text-violet">from</span> .models{" "}
                <span className="text-violet">import</span> Course{"\n\n"}
                <span className="text-cyan">class</span>{" "}
                <span className="text-brand">CourseViewSet</span>(viewsets.ModelViewSet):{"\n"}
                {"    "}queryset = Course.objects.all(){"\n"}
                {"    "}serializer_class = CourseSerializer{"\n"}
                {"    "}permission_classes = [IsAuthenticated, IsTeacher]{"\n"}
              </code>
            </pre>
            <div className="border-t border-border bg-surface-2/40 px-4 py-3 font-mono text-[11px] sm:text-xs">
              <span className="text-cyan">GET</span>{" "}
              <span className="text-muted-foreground">/api/courses/</span>{" "}
              <span className="rounded-md bg-brand/15 px-1.5 py-0.5 text-brand">200 OK</span>
            </div>
          </div>

          <div className="float-slow glass-card absolute -top-5 -right-2 hidden items-center gap-2 px-3 py-2 text-xs font-medium sm:flex">
            <Sparkles className="size-4 text-cyan" /> JWT Auth · RBAC
          </div>

          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Social({ href, label, children }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2/40 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
    >
      {children}
    </a>
  );
}
