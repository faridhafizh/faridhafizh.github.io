import { useState } from "react"
import {
  ArrowUpRight,
  Award,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
} from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { site } from "@/config"
import { useContent } from "@/lib/i18n"

function Portrait() {
  const { hero } = useContent()
  const [failed, setFailed] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-[21rem] sm:max-w-[23rem]">
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/25"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-muted/30 shadow-xl shadow-primary/5">
        <div className="relative aspect-[4/5]">
          {!failed ? (
            <img
              src="/Foto-Profile.png"
              alt={hero.portraitAlt}
              loading="eager"
              className="size-full object-cover"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="relative flex size-full flex-col items-center justify-center overflow-hidden bg-accent/50">
              <div className="absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
              <span className="display-title relative text-[8rem] leading-none text-primary/70">
                MF
              </span>
              <span className="relative mt-2 h-px w-12 bg-primary/30" aria-hidden="true" />
              <span className="relative mt-3 text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                Portfolio 2026
              </span>
            </div>
          )}
          {!failed && (
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent"
            />
          )}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/90 px-3 py-1.5 text-[0.68rem] font-medium text-foreground backdrop-blur">
            <MapPin className="size-3 text-primary" />
            Pelaihari, ID
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 right-2 flex items-center gap-3 rounded-xl border border-border/80 bg-background/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:right-auto sm:-left-5">
        <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
          <Server className="size-4" />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="text-xs font-semibold">{hero.portraitBadgeTitle}</span>
          <span className="text-[0.65rem] text-muted-foreground">{hero.portraitBadgeText}</span>
        </span>
      </div>

      <div className="absolute -top-4 right-2 hidden items-center gap-2 rounded-full border border-border/80 bg-background/95 px-3 py-2 text-[0.68rem] font-medium shadow-md backdrop-blur sm:right-[-0.75rem] sm:flex">
        <Award className="size-3.5 text-primary" />
        {hero.certificationsBadge}
      </div>
    </div>
  )
}

export function Hero() {
  const { hero } = useContent()

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] size-[28rem] rounded-full bg-primary/10 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-background/70 py-1.5 pr-3.5 pl-2.5 text-[0.72rem] font-medium text-muted-foreground backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {hero.availability}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display-title mt-7 text-[2.85rem] leading-[0.98] tracking-[-0.02em] sm:text-6xl xl:text-[4.6rem]">
                <span className="block">{hero.firstName}</span>
                <span className="block italic text-primary">{hero.lastName}</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium">
                <span>{hero.rolePrimary}</span>
                <span className="size-1 rounded-full bg-border" aria-hidden="true" />
                <span className="text-muted-foreground">{hero.roleSecondary}</span>
              </p>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
                {hero.intro}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="gap-2 rounded-full">
                  <a href={site.cv} download>
                    <Download className="size-4" />
                    {hero.ctaPrimary}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 rounded-full">
                  <a href="#contact">
                    {hero.ctaSecondary}
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>

                <div className="ml-1 flex items-center gap-1">
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-foreground"
                  >
                    <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <Github className="size-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-foreground"
                  >
                    <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <Linkedin className="size-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-foreground"
                  >
                    <a href={`mailto:${site.email}`} aria-label="Email">
                      <Mail className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  {hero.location}
                </span>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                >
                  <Phone className="size-3.5" />
                  {hero.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:justify-self-end">
            <Portrait />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
