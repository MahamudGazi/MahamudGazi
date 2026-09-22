import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ResumeButton } from "./Navbar";

export function Contact() {
  const mailto = `mailto:${profile.email}?subject=Opportunity%20for%20${encodeURIComponent(profile.name)}`;

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-16 md:py-24">
      <div className="glow-orb -bottom-20 left-1/2 size-[28rem] -translate-x-1/2 bg-brand/20" />
      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          description="I'm currently open to Junior Full-Stack Developer, Django Developer, and Software Engineering Internship opportunities."
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
          <Reveal>
            <a
              href={mailto}
              className="glass-card glass-card-hover flex flex-col items-center gap-3 p-6 text-center"
            >
              <span className="grid size-12 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
                <Mail className="size-5" />
              </span>
              <span className="font-mono text-xs tracking-widest text-brand uppercase">Email</span>
              <span className="text-sm break-all text-muted-foreground">{profile.email}</span>
            </a>
          </Reveal>

          <Reveal delay={80}>
            <a
              href={profile.phoneHref}
              className="glass-card glass-card-hover flex flex-col items-center gap-3 p-6 text-center"
            >
              <span className="grid size-12 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
                <Phone className="size-5" />
              </span>
              <span className="font-mono text-xs tracking-widest text-brand uppercase">Phone</span>
              <span className="text-sm text-muted-foreground">{profile.phone}</span>
            </a>
          </Reveal>

          <Reveal delay={160}>
            <div className="glass-card flex flex-col items-center gap-3 p-6 text-center">
              <span className="grid size-12 place-items-center rounded-2xl border border-brand/30 bg-brand/10 text-brand">
                <MapPin className="size-5" />
              </span>
              <span className="font-mono text-xs tracking-widest text-brand uppercase">
                Location
              </span>
              <span className="text-sm text-muted-foreground">{profile.location}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={mailto}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand to-cyan px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-4" />
            Send Message
          </a>
          <ResumeButton className="rounded-xl border border-border px-6 py-3" />
        </Reveal>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Opens your email app — no message is stored on this site.
        </p>
      </div>
    </section>
  );
}
