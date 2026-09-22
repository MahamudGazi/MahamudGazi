import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, Moon, Sun, X, FileDown } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="section-shell flex h-16 items-center justify-between gap-3 md:h-[4.25rem]">
        <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span className="size-10 overflow-hidden rounded-full border-2 border-brand/50 shadow-lg">
            <img
              src="/images/profile.png"
              alt="Mahamud Gazi"
              className="h-full w-full object-cover object-top"
            />
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active === link.href
                    ? "bg-brand/10 text-brand"
                    : "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <IconLink href={profile.github} label="GitHub">
            <Github className="size-4" />
          </IconLink>
          <IconLink href={profile.linkedin} label="LinkedIn">
            <Linkedin className="size-4" />
          </IconLink>

          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>

          <ResumeButton className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="ml-1 grid size-9 place-items-center rounded-lg border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="section-shell flex flex-col py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-surface-2 hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <ResumeButton className="w-full justify-center" />
          </li>
        </ul>
      </div>
    </header>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="hidden size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground sm:grid"
    >
      {children}
    </a>
  );
}

export function ResumeButton({ className }) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-all";

  if (!profile.resumeAvailable) {
    return (
      <span
        title="Resume PDF coming soon"
        aria-disabled="true"
        className={cn(
          base,
          "cursor-not-allowed border border-border text-muted-foreground opacity-70",
          className,
        )}
      >
        <FileDown className="size-4" />
        Resume
      </span>
    );
  }

  return (
    <a
      href={profile.resumeUrl}
      download
      className={cn(
        base,
        "bg-gradient-to-r from-brand to-cyan text-brand-foreground hover:opacity-90",
        className,
      )}
    >
      <FileDown className="size-4" />
      Resume
    </a>
  );
}
