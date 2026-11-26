import { CalendarDays, GraduationCap, MapPin, Sparkles } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useContent } from "@/lib/i18n"

export function Education() {
  const { education } = useContent()

  return (
    <section id="education" className="border-y border-border/60 bg-muted/20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading label={education.label} title={education.title} />
        </Reveal>

        <Reveal delay={80}>
          <Card className="mt-10 gap-0 overflow-hidden py-0 shadow-none">
            <CardContent className="grid gap-0 px-0 lg:grid-cols-[1.4fr_1fr]">
              <div className="p-6 sm:p-8">
                <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-5" />
                </span>
                <h3 className="mt-5 text-lg leading-snug font-semibold tracking-tight">
                  {education.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{education.school}</p>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5" />
                    {education.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5" />
                    {education.location}
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {education.focusLabel}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {education.focus.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="rounded-md bg-background/70 px-2 py-0.5 text-[0.68rem] font-normal text-muted-foreground"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2 border-t border-border/70 bg-primary/[0.04] p-6 sm:p-8 lg:border-t-0 lg:border-l">
                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {education.gpaLabel}
                </p>
                <p className="display-title text-5xl leading-none">{education.gpa}</p>
                <span className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-medium text-primary">
                  <Sparkles className="size-3.5" />
                  {education.honors}
                </span>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
