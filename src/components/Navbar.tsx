import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { Controls } from "./Controls";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  const links = [
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2 px-4">
      <nav
        className={`flex items-center gap-1 rounded-full border border-border/60 bg-background/70 px-2 py-1.5 backdrop-blur-xl transition-all ${
          scrolled ? "shadow-lg shadow-foreground/5" : ""
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-4"
          >
            {link.label}
          </a>
        ))}
        <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
        <div className="hidden sm:block">
          <Controls compact />
        </div>
      </nav>
    </header>
  );
}
