import { ArrowUpRight, Check, Github, Globe, Radio, Server, Terminal } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { site } from "@/config"
import { useContent } from "@/lib/i18n"

const projectIcons = {
  IoT: Radio,
  Web: Globe,
  Automation: Terminal,
  Infrastructure: Server,
} as const

export function Projects() {
  const { projects } = useContent()

  return (
    <section id="projects" className="border-y border-border/60 bg-muted/20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            label={projects.label}
            title={projects.title}
            description={projects.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.items.map((project, index) => {
            const Icon =
              projectIcons[project.type as keyof typeof projectIcons] ?? Terminal

            return (
              <Reveal key={project.name} delay={(index % 2) * 80}>
                <Card className="group h-full gap-4 py-6 shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md hover:shadow-primary/5">
                  <CardContent className="flex h-full flex-col px-6">
                    <div className="flex items-center justify-between">
                      <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-4" />
                      </span>
                      <Badge
                        variant="outline"
                        className="rounded-full px-2 py-0 text-[0.66rem] uppercase tracking-wider"
                      >
                        {project.type}
                      </Badge>
                    </div>

                    <h3 className="mt-4 text-[1.05rem] leading-snug font-semibold tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-0.5 font-mono text-[0.7rem] text-muted-foreground">
                      {project.subtitle}
                    </p>

                    <p className="mt-3 text-[0.82rem] leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2 text-[0.78rem] leading-relaxed text-muted-foreground"
                        >
                          <Check className="mt-0.5 size-3.5 shrink-0 text-primary/80" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-md px-2 py-0.5 font-mono text-[0.66rem] font-normal"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <a
                        href={site.github}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-1 text-[0.75rem] font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        GitHub
                        <ArrowUpRight className="size-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-8">
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <a href={site.github} target="_blank" rel="noreferrer">
                <Github className="size-4" />
                {projects.viewAll}
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
