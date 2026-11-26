import { BadgeCheck, Compass, GraduationCap, MapPin } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { useContent } from "@/lib/i18n"

const cardIcons = [MapPin, GraduationCap, BadgeCheck, Compass]

export function About() {
  const { about } = useContent()

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading label={about.label} title={about.title} />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              {about.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "text-foreground/90" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>

          </Reveal>

          <div className="lg:col-span-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {about.cards.map((card, index) => {
                const Icon = cardIcons[index] ?? Compass
                return (
                  <Reveal key={card.title} delay={index * 60}>
                    <Card className="h-full gap-3 py-5 shadow-none transition-colors hover:border-primary/30">
                      <CardContent className="px-5">
                        <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="size-4" />
                        </span>
                        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                          {card.title}
                        </p>
                        <p className="mt-1 text-[0.82rem] leading-snug font-medium">{card.value}</p>
                        <p className="mt-1 text-[0.68rem] text-muted-foreground">{card.note}</p>
                      </CardContent>
                    </Card>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={240}>
              <Card className="mt-3 gap-4 py-5 shadow-none">
                <CardContent className="px-5">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {about.languagesTitle}
                  </p>
                  <div className="mt-4 space-y-3.5">
                    {about.languages.map((language) => (
                      <div key={language.name}>
                        <div className="flex items-baseline justify-between gap-3 text-xs">
                          <span className="font-medium">{language.name}</span>
                          <span className="text-muted-foreground">{language.level}</span>
                        </div>
                        <div
                          className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted"
                          role="progressbar"
                          aria-valuenow={language.value}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${language.name}: ${language.level}`}
                        >
                          <div
                            className="h-full rounded-full bg-primary/70"
                            style={{ width: `${language.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
