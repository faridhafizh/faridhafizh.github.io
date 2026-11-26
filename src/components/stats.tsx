import { Reveal } from "@/components/reveal"
import { useContent } from "@/lib/i18n"

export function Stats() {
  const { stats, statsLabel } = useContent()

  return (
    <section aria-label={statsLabel} className="border-y border-border/70 bg-muted/25">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-x divide-y divide-border/70 md:grid-cols-4 md:divide-y-0">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 60}>
            <div className="px-5 py-6 md:px-7 md:py-8">
              <p className="display-title text-3xl leading-none md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[0.78rem] font-medium">{stat.label}</p>
              <p className="mt-0.5 text-[0.68rem] text-muted-foreground">{stat.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
