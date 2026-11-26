import { useEffect, useState } from "react"
import { Download, Mail, Menu } from "lucide-react"

import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SECTION_IDS } from "@/data/content"
import { site } from "@/config"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function useActiveSection() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const marker = window.scrollY + 160
      let current = "home"

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id)
        if (!element) continue
        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }

      setActive((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return active
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="group flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-lg bg-primary text-[0.68rem] font-semibold tracking-tight text-primary-foreground shadow-sm transition-transform duration-300 group-hover:-rotate-3">
        MF
      </span>
      {!compact ? (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-semibold tracking-tight">Farid Hafizh</span>
          <span className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
            Network &amp; IT
          </span>
        </span>
      ) : null}
    </a>
  )
}

export function SiteHeader() {
  const { t } = useLanguage()
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Brand />

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {t.nav.items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-[0.8rem] font-medium transition-colors",
                active === item.id
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <ThemeToggle />
          <Button asChild size="sm" className="hidden gap-1.5 rounded-full md:inline-flex">
            <a href={site.cv} download>
              <Download className="size-3.5" />
              {t.nav.downloadCv}
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-9 rounded-full border border-border/70 text-muted-foreground lg:hidden"
                aria-label={t.nav.menu}
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              closeLabel={t.nav.close}
              className="w-[86vw] gap-0 p-0 sm:max-w-sm"
            >
              <SheetHeader className="border-b border-border/70 px-6 py-5">
                <SheetTitle className="sr-only">{t.nav.menu}</SheetTitle>
                <SheetDescription className="sr-only">
                  {t.meta.description}
                </SheetDescription>
                <Brand />
              </SheetHeader>

              <nav aria-label="Mobile" className="flex flex-col px-3 py-4">
                {t.nav.items.map((item, index) => (
                  <SheetClose asChild key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-3 text-[0.95rem] font-medium transition-colors",
                        active === item.id
                          ? "bg-muted text-foreground"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                      )}
                    >
                      {item.label}
                      <span className="text-[0.65rem] tabular-nums text-muted-foreground/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto space-y-4 border-t border-border/70 p-5">
                <div className="flex items-center justify-between gap-3">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
                <Button asChild className="w-full gap-2 rounded-full">
                  <a href={site.cv} download>
                    <Download className="size-4" />
                    {t.nav.downloadCv}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full gap-2 rounded-full">
                  <a href={`mailto:${site.email}`}>
                    <Mail className="size-4" />
                    {site.email}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
