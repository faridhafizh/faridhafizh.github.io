import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  label: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ label, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-12 lg:gap-10", className)}>
      <div className="lg:col-span-3">
        <p className="eyebrow flex items-center gap-3 lg:sticky lg:top-28">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          {label}
        </p>
      </div>
      <div className="lg:col-span-9">
        <h2 className="display-title max-w-3xl text-4xl leading-[1.05] text-balance sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
