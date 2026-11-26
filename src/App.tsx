import { Toaster } from "sonner"

import { About } from "@/components/about"
import { BackToTop } from "@/components/back-to-top"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Organizations } from "@/components/organizations"
import { Projects } from "@/components/projects"
import { SiteHeader } from "@/components/site-header"
import { Skills } from "@/components/skills"
import { Stats } from "@/components/stats"
import { LanguageProvider, useLanguage } from "@/lib/i18n"
import { ThemeProvider, useTheme } from "@/lib/theme"

function AppToaster() {
  const { resolvedTheme } = useTheme()
  return (
    <Toaster
      theme={resolvedTheme}
      position="bottom-right"
      richColors
      closeButton
      toastOptions={{ className: "text-sm" }}
    />
  )
}

function Shell() {
  const { t } = useLanguage()

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        {t.nav.skipToContent}
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Organizations />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <AppToaster />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Shell />
      </LanguageProvider>
    </ThemeProvider>
  )
}
