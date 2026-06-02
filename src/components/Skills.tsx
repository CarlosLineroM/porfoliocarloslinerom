import { Code2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

export function Skills() {
  const { t } = useI18n();

  const groups = [
    { title: t("skills.languages"), items: ["JavaScript", "Python", "PHP"] },
    {
      title: t("skills.frameworks"),
      items: ["React", "FastAPI", "Django", "Laravel", "Tailwind CSS"],
    },
    { title: t("skills.databases"), items: ["PostgreSQL", "MySQL", "Supabase"] },
    {
      title: t("skills.tools"),
      items: ["Claude Code", "Railway", "Power BI", "Pentaho", "Make", "Notion", "NotebookLM"],
    },
  ];

  return (
    <section id="habilidades" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading icon={Code2} title={t("skills.title")} />

      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {g.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-full bg-mint-soft px-3 py-1 text-sm font-medium text-accent-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
