import { ArrowUpRight, Briefcase, MapPin } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { useContent } from "@/lib/i18n"

export function Experience() {
  const { experience } = useContent()

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            label={experience.label}
            title={experience.title}
            description={experience.description}
          />
        </Reveal>

        <ol className="mt-12 space-y-0 border-l border-border/80 pl-6 sm:pl-8">
          {experience.items.map((job, index) => (
            <li key={`${job.company}-${job.role}`} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[1.83rem] size-3 rounded-full border-2 border-background bg-primary ring-1 ring-border sm:-left-[2.33rem]"
              />

              <Reveal delay={index * 50}>
                <div className="grid gap-2 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold tracking-tight">{job.role}</h3>
                      <Badge
                        variant="secondary"
                        className="rounded-full px-2 py-0 text-[0.65rem] font-medium"
                      >
                        {job.type}
                      </Badge>
                    </div>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-primary">
                      <Briefcase className="size-3.5" />
                      {job.company}
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-muted-foreground lg:items-end">
                    <span className="font-mono tabular-nums">{job.period}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3" />
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="mt-3 max-w-3xl text-[0.85rem] leading-relaxed text-muted-foreground">
                  {job.summary}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-[0.82rem] leading-relaxed text-muted-foreground"
                    >
                      <ArrowUpRight className="mt-0.5 size-3.5 shrink-0 text-primary/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border/70 bg-muted/40 px-1.5 py-0.5 font-mono text-[0.66rem] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
