import { User, GraduationCap, Languages } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

export function About() {
  const { t } = useI18n();

  const education = [
    { title: t("about.edu.1"), place: t("about.edu.1.place"), year: "2026" },
    { title: t("about.edu.2"), place: t("about.edu.2.place"), year: "2023 – 2025" },
    { title: t("about.edu.3"), place: t("about.edu.3.place"), year: "2022 – 2026" },
  ];

  return (
    <section id="sobre-mi" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
      <SectionHeading icon={User} title={t("about.title")} />

      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            {t("about.p1.a")}
            <span className="font-semibold text-foreground">{t("about.p1.b")}</span>
            {t("about.p1.c")}
            <span className="font-semibold text-foreground">{t("about.p1.d")}</span>
            {t("about.p1.e")}
          </p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-mint" />
              <h3 className="font-semibold">{t("about.education")}</h3>
            </div>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.title} className="text-sm">
                  <p className="font-medium text-foreground">{e.title}</p>
                  <p className="text-muted-foreground">
                    {e.place} · <span className="font-mono text-xs">{e.year}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Languages className="h-5 w-5 text-mint" />
              <h3 className="font-semibold">{t("about.languages")}</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>{t("about.lang.es")}</span>
                <span className="text-muted-foreground">{t("about.lang.es.lvl")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("about.lang.en")}</span>
                <span className="text-muted-foreground">{t("about.lang.en.lvl")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
