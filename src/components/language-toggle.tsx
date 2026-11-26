import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import type { Lang } from "@/data/content"

const options: { value: Lang; label: string }[] = [
  { value: "id", label: "ID" },
  { value: "en", label: "EN" },
]

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={cn(
        "inline-flex h-9 items-center rounded-full border border-border/70 bg-muted/40 p-0.5",
        className,
      )}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          className={cn(
            "h-8 rounded-full px-2.5 text-[0.7rem] font-semibold tracking-wide transition-colors",
            lang === option.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
