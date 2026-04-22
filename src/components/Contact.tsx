import { Send, Mail, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/lib/i18n";

const EMAIL = "lineromartincarlos@gmail.com";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contacto" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16 pb-32">
      <SectionHeading icon={Send} title={t("contact.title")} />

      <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
        <h3 className="text-2xl font-bold tracking-tight sm:text-4xl">{t("contact.heading")}</h3>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("contact.sub")}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" /> {EMAIL}
          </a>
          <a
            href="https://www.linkedin.com/in/lineromartincarlos1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/CarlosLineroM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>

      <footer className="mt-16 text-center font-mono text-xs text-muted-foreground">
        <span className="text-mint">&lt;</span> {t("footer.built")}{" "}
        <span className="text-mint">/&gt;</span> · © {new Date().getFullYear()} Carlos Linero Martín
      </footer>
    </section>
  );
}
