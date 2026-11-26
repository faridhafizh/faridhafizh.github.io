import { ArrowUp, Download, Github, Linkedin, Mail } from "lucide-react"

import { useContent } from "@/lib/i18n"
import { site } from "@/config"

export function Footer() {
  const { footer, nav, education } = useContent()
  const year = new Date().getFullYear()

  const links = [
    ...nav.items.filter((item) => item.id !== "contact"),
    { id: "education", label: education.label },
    { id: "contact", label: nav.items[nav.items.length - 1].label },
  ]

  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-primary text-[0.7rem] font-semibold tracking-tight text-primary-foreground">
                MF
              </span>
              <span className="text-sm font-semibold tracking-tight">{site.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted-foreground">
              {footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-1">
              {[
                { icon: Github, href: site.github, label: "GitHub" },
                { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={social.label}
                    className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              {footer.navigation}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {links.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
              {footer.connect}
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-3.5" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.cv}
                  download
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Download className="size-3.5" />
                  {nav.downloadCv}
                </a>
              </li>
              <li>
                <a
                  href="#home"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ArrowUp className="size-3.5" />
                  {footer.backToTop}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/70 pt-5 text-[0.68rem] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {footer.rights}
          </p>
          <p>{footer.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
