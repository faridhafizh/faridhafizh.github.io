import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { useTheme } from "@/lib/theme"

export function ThemeToggle() {
  const { toggleTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={t.nav.theme}
      title={t.nav.theme}
      className="size-9 rounded-full border border-border/70 text-muted-foreground hover:text-foreground"
    >
      <Sun className="size-4 transition-transform duration-300 dark:hidden" />
      <Moon className="hidden size-4 transition-transform duration-300 dark:block" />
    </Button>
  )
}
