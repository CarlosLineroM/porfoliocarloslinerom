import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";

export function Controls({ compact = false }: { compact?: boolean }) {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();

  const base = compact
    ? "h-8 w-8 text-xs"
    : "h-9 px-3 text-sm gap-1.5";

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => setLang(lang === "es" ? "en" : "es")}
        aria-label={t("ui.lang.toggle")}
        className={`inline-flex items-center justify-center rounded-full border border-border bg-card font-mono font-semibold uppercase transition-colors hover:bg-muted ${base}`}
      >
        {compact ? (
          lang === "es" ? "EN" : "ES"
        ) : (
          <>
            <Languages className="h-3.5 w-3.5" />
            {lang === "es" ? "EN" : "ES"}
          </>
        )}
      </button>
      <button
        onClick={toggle}
        aria-label={theme === "dark" ? t("ui.theme.light") : t("ui.theme.dark")}
        className={`inline-flex items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted ${
          compact ? "h-8 w-8" : "h-9 w-9"
        }`}
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4 text-mint" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
