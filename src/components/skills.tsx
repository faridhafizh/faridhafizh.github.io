import { Cloud, Code2, Info, Network, RadioTower, ServerCog, Workflow } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useContent } from "@/lib/i18n"

const groupIcons = [Network, ServerCog, Code2, Cloud, RadioTower, Workflow]

export function Skills() {
  const { skills } = useContent()

  return (
    <section id="skills" className="border-t border-border/60 bg-muted/20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            label={skills.label}
            title={skills.title}
            description={skills.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, index) => {
            const Icon = groupIcons[index] ?? Network
            return (
              <Reveal key={group.title} delay={(index % 3) * 60}>
                <Card className="group h-full gap-4 py-5 shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md hover:shadow-primary/5">
                  <CardContent className="px-5">
                    <div className="flex items-start justify-between">
                      <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-4" />
                      </span>
                      <span className="font-mono text-[0.65rem] text-muted-foreground/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-4 text-[0.95rem] font-semibold tracking-tight">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-[0.78rem] leading-relaxed text-muted-foreground">
                      {group.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <Badge
                          key={item}
                          variant="outline"
                          className="rounded-md bg-background/70 px-2 py-0.5 text-[0.7rem] font-normal text-muted-foreground"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 size-3.5 shrink-0" />
            {skills.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
