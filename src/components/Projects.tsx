import { Box, ExternalLink, Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import proptracker from "@/assets/proptracker.png";
import { useI18n } from "@/lib/i18n";

export function Projects() {
  const { t } = useI18n();

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

          <ul className="mt-4 space-y-2">
            {challenges.map((c, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="https://proptracker.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" /> {t("projects.visit")}
            </a>
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
    </section>
  );
}
