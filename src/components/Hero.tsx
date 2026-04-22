import { Mail, Copy, Linkedin, Github, Check, FileDown } from "lucide-react";
import { useState } from "react";
import avatar from "@/assets/avatar.png";
import { useI18n } from "@/lib/i18n";
import { Controls } from "./Controls";

const EMAIL = "lineromartincarlos@gmail.com";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative mx-auto flex max-w-5xl flex-col items-start px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mb-6 sm:hidden">
        <Controls />
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <span className="font-mono text-mint text-2xl sm:text-4xl">&lt;</span>
        <h1 className="font-sans text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Carlos Linero Martín
        </h1>
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint-soft ring-4 ring-background sm:h-20 sm:w-20">
          <img
            src={avatar}
            alt="Avatar de Carlos Linero Martín"
            width={512}
            height={512}
            className="h-full w-full rounded-full object-cover"
          />
        </span>
        <span className="font-mono text-mint text-2xl sm:text-4xl">/&gt;</span>
      </div>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
        <span className="font-semibold text-mint">{t("hero.role")}</span> {t("hero.tagline")}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-mint hover:bg-mint-soft"
        >
          <Mail className="h-4 w-4" /> {t("hero.contact")}
        </a>
        <button
          onClick={copyEmail}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-mint hover:bg-mint-soft"
        >
          {copied ? <Check className="h-4 w-4 text-mint" /> : <Copy className="h-4 w-4" />}
          {copied ? t("hero.copied") : t("hero.copy")}
        </button>
        <a
          href="/CV_Carlos_Linero_Martin.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
        >
          <FileDown className="h-4 w-4" /> {t("hero.cv")}
        </a>
        <a
          href="https://www.linkedin.com/in/lineromartincarlos1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-mint hover:bg-mint-soft"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href="https://github.com/CarlosLineroM"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-sm transition-all hover:border-mint hover:bg-mint-soft"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
      </div>
    </section>
  );
}
