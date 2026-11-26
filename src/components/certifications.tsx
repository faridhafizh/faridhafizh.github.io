import { Award, Info, ShieldCheck } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useContent } from "@/lib/i18n"

type Filter = "all" | "bnsp" | "dicoding"

const filters: Filter[] = ["all", "bnsp", "dicoding"]

export function Certifications() {
  const { certifications } = useContent()

  const counts: Record<Filter, number> = {
    all: certifications.items.length,
    bnsp: certifications.items.filter((item) => item.category === "bnsp").length,
    dicoding: certifications.items.filter((item) => item.category === "dicoding").length,
  }

  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            label={certifications.label}
            title={certifications.title}
            description={certifications.description}
          />
        </Reveal>

        <Tabs defaultValue="all" className="mt-10 gap-0">
          <Reveal delay={80}>
            <TabsList className="h-10 rounded-full p-1">
              {filters.map((key) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="gap-1.5 rounded-full px-4 text-[0.75rem]"
                >
                  {certifications.filters[key]}
                  <span className="text-[0.65rem] tabular-nums text-muted-foreground">
                    {counts[key]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>

          {filters.map((key) => (
            <TabsContent key={key} value={key} className="mt-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.items
                  .filter((item) => key === "all" || item.category === key)
                  .map((certificate) => (
                    <Card
                      key={certificate.name}
                      className="h-full gap-3 py-5 shadow-none transition-colors hover:border-primary/30"
                    >
                      <CardContent className="flex h-full flex-col px-5">
                        <div className="flex items-start justify-between gap-3">
                          <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                            {certificate.category === "bnsp" ? (
                              <ShieldCheck className="size-4" />
                            ) : (
                              <Award className="size-4" />
                            )}
                          </span>
                          <span className="font-mono text-[0.68rem] tabular-nums text-muted-foreground">
                            {certificate.year}
                          </span>
                        </div>

                        <h3 className="mt-3 text-[0.88rem] leading-snug font-semibold">
                          {certificate.name}
                        </h3>
                        <p className="mt-1 text-[0.74rem] leading-relaxed text-muted-foreground">
                          {certificate.issuer}
                        </p>

                        <div className="mt-auto pt-3">
                          <Badge
                            variant={certificate.category === "bnsp" ? "default" : "secondary"}
                            className="rounded-full px-2 py-0 text-[0.65rem] uppercase tracking-wider"
                          >
                            {certifications.filters[certificate.category]}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Reveal delay={120}>
          <p className="mt-6 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 size-3.5 shrink-0" />
            {certifications.note}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
