import { useState, type FormEvent } from "react"
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react"
import { toast } from "sonner"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/config"
import { useContent } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>
type Status = "idle" | "sending" | "success" | "error"

const emptyValues: FormValues = { name: "", email: "", subject: "", message: "" }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const { contact } = useContent()
  const form = contact.form

  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>("idle")

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => ({ ...previous, [field]: undefined }))
    if (status === "error") setStatus("idle")
  }

  const validate = () => {
    const nextErrors: FormErrors = {}
    if (!values.name.trim()) nextErrors.name = form.required
    if (!values.email.trim()) nextErrors.email = form.required
    else if (!emailPattern.test(values.email.trim())) nextErrors.email = form.invalidEmail
    if (!values.message.trim()) nextErrors.message = form.required
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    if (!site.web3formsKey) {
      const subject = values.subject.trim() || `Portfolio — ${values.name.trim()}`
      const body = `${values.name.trim()} <${values.email.trim()}>\n\n${values.message.trim()}`
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      toast.info(form.mailtoNotice)
      return
    }

    setStatus("sending")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject: values.subject.trim() || `Portfolio — ${values.name.trim()}`,
          from_name: values.name.trim(),
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          botcheck: "",
        }),
      })

      const data = (await response.json()) as { success?: boolean }

      if (!response.ok || !data.success) throw new Error("Request failed")

      setStatus("success")
      setValues(emptyValues)
      setErrors({})
    } catch {
      setStatus("error")
      toast.error(form.errorTitle, { description: form.errorBody })
    }
  }

  const contactRows = [
    { icon: Mail, label: contact.labels.email, value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: contact.labels.phone, value: site.phone, href: `tel:${site.phoneHref}` },
    { icon: MapPin, label: contact.labels.location, value: "Pelaihari, Tanah Laut", href: undefined },
    { icon: Github, label: contact.labels.github, value: "faridhafizh", href: site.github },
    { icon: Linkedin, label: contact.labels.linkedin, value: "m-farid-hafizh", href: site.linkedin },
  ]

  return (
    <section id="contact" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            label={contact.label}
            title={contact.title}
            description={contact.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="space-y-2">
              {contactRows.map((row) => {
                const Icon = row.icon
                const content = (
                  <>
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                        {row.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[0.85rem] font-medium">
                        {row.value}
                      </span>
                    </span>
                    {row.href ? (
                      <ArrowUpRight className="ml-auto size-3.5 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                    ) : null}
                  </>
                )

                return row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-border/70 hover:bg-muted/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={row.label} className="flex items-center gap-3 p-2">
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] px-3 py-1.5 text-[0.7rem] font-medium text-emerald-700 dark:text-emerald-400">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              {contact.availability}
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <Card className="gap-0 py-0 shadow-none">
              <CardContent className="p-6 sm:p-8">
                {status === "success" ? (
                  <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                    <span className="grid size-12 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="size-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{form.successTitle}</h3>
                    <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                      {form.successBody}
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      className="mt-6 rounded-full"
                      onClick={() => setStatus("idle")}
                    >
                      {form.sendAnother}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight">{form.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{form.description}</p>
                      </div>
                      <span className="hidden size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary sm:grid">
                        <Send className="size-4" />
                      </span>
                    </div>

                    {status === "error" ? (
                      <div
                        role="alert"
                        className="mt-5 flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-xs text-destructive"
                      >
                        <AlertCircle className="mt-0.5 size-4 shrink-0" />
                        <div>
                          <p className="font-medium">{form.errorTitle}</p>
                          <p className="mt-0.5 text-destructive/80">{form.errorBody}</p>
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-name">{form.name}</Label>
                        <Input
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          value={values.name}
                          onChange={(event) => updateField("name", event.target.value)}
                          placeholder={form.namePlaceholder}
                          aria-invalid={Boolean(errors.name)}
                          aria-describedby={errors.name ? "contact-name-error" : undefined}
                          className="h-10 bg-background"
                        />
                        {errors.name ? (
                          <p id="contact-name-error" className="text-[0.7rem] text-destructive">
                            {errors.name}
                          </p>
                        ) : null}
                      </div>

                      <div className="space-y-1.5">
                        <Label htmlFor="contact-email">{form.email}</Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={values.email}
                          onChange={(event) => updateField("email", event.target.value)}
                          placeholder={form.emailPlaceholder}
                          aria-invalid={Boolean(errors.email)}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          className="h-10 bg-background"
                        />
                        {errors.email ? (
                          <p id="contact-email-error" className="text-[0.7rem] text-destructive">
                            {errors.email}
                          </p>
                        ) : null}
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <Label htmlFor="contact-subject">{form.subject}</Label>
                        <Input
                          id="contact-subject"
                          name="subject"
                          value={values.subject}
                          onChange={(event) => updateField("subject", event.target.value)}
                          placeholder={form.subjectPlaceholder}
                          className="h-10 bg-background"
                        />
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <Label htmlFor="contact-message">{form.message}</Label>
                        <Textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          value={values.message}
                          onChange={(event) => updateField("message", event.target.value)}
                          placeholder={form.messagePlaceholder}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? "contact-message-error" : undefined}
                          className="min-h-32 resize-y bg-background"
                        />
                        {errors.message ? (
                          <p id="contact-message-error" className="text-[0.7rem] text-destructive">
                            {errors.message}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                    />

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="flex items-center gap-1.5 text-[0.68rem] text-muted-foreground">
                        <Lock className="size-3" />
                        {form.privacy}
                      </p>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={status === "sending"}
                        className={cn("gap-2 rounded-full", status === "sending" && "opacity-80")}
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            {form.sending}
                          </>
                        ) : (
                          <>
                            <Send className="size-4" />
                            {form.submit}
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
