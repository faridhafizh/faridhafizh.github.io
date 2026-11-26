import { Rocket, Sparkles, Users } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Card, CardContent } from "@/components/ui/card"
import { useContent } from "@/lib/i18n"

const orgIcons = [Users, Rocket, Sparkles]

export function Organizations() {
  const { organizations } = useContent()

  return (
    <section aria-labelledby="organizations-title" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {organizations.label}
              </p>
            </div>
            <div className="lg:col-span-9">
              <h2
                id="organizations-title"
                className="display-title text-3xl leading-tight sm:text-4xl"
              >
                {organizations.title}
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {organizations.items.map((item, index) => {
            const Icon = orgIcons[index] ?? Users
            return (
              <Reveal key={item.org} delay={index * 60}>
                <Card className="h-full gap-3 py-5 shadow-none transition-colors hover:border-primary/30">
                  <CardContent className="px-5">
                    <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <p className="mt-4 font-mono text-[0.65rem] text-muted-foreground">
                      {item.period}
                    </p>
                    <h3 className="mt-1 text-[0.88rem] leading-snug font-semibold">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-[0.72rem] text-primary">{item.org}</p>
                    <p className="mt-2 text-[0.75rem] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
