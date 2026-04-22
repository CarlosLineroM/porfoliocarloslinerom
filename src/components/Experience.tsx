import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { t } = useI18n();

  const jobs = [
    {
      period: t("exp.j1.period"),
      role: t("exp.j1.role"),
      company: t("exp.j1.company"),
      bullets: [t("exp.j1.b1"), t("exp.j1.b2"), t("exp.j1.b3"), t("exp.j1.b4")],
    },
    {
      period: t("exp.j2.period"),
      role: t("exp.j2.role"),
      company: t("exp.j2.company"),
      bullets: [t("exp.j2.b1"), t("exp.j2.b2"), t("exp.j2.b3")],
    },
    {
      period: t("exp.j3.period"),
      role: t("exp.j3.role"),
      company: t("exp.j3.company"),
      bullets: [t("exp.j3.b1"), t("exp.j3.b2")],
    },
  ];

  return (
    <section id="experiencia" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading icon={Briefcase} title={t("exp.title")} />

      <ol className="relative space-y-10 border-l border-dashed border-border pl-8">
        {jobs.map((job, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[35px] flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {job.period}
            </p>
            <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
            <p className="text-mint font-medium">{job.company}</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mint" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
