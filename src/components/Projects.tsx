import { Box, Eye, ExternalLink, X, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import proptracker from "@/assets/proptracker.png";
import { useI18n } from "@/lib/i18n";

export function Projects() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const challenges = Array.from({ length: 5 }, (_, i) => t(`projects.ch.${i + 1}`));

  return (
    <section id="proyectos" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading icon={Box} title={t("projects.title")} />

      <article className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
          <img
            src={proptracker}
            alt="Captura de PropTracker"
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl font-bold tracking-tight">PropTracker</h3>
          <p className="mt-3 text-muted-foreground">{t("projects.desc")}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="https://proptracker.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" /> {t("projects.visit")}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Eye className="h-4 w-4 text-mint" /> {t("projects.challenges")}
            </button>
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {["React", "FastAPI", "Python", "PostgreSQL", "Supabase", "Selenium", "Railway"].map(
              (techName) => (
                <span
                  key={techName}
                  className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {techName}
                </span>
              ),
            )}
          </div>
        </div>
      </article>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-2xl sm:p-8"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label={t("ui.close")}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mb-6 flex items-center gap-3 pr-12">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-soft">
                <Box className="h-5 w-5 text-mint" />
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {t("projects.modal.title")}
                </h3>
                <p className="text-sm text-muted-foreground">{t("projects.modal.subtitle")}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {challenges.map((c, i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-border bg-background/50 p-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-soft">
                    <Check className="h-3 w-3 text-mint" />
                  </span>
                  <span className="text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
