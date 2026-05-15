import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/home/Hero'
import { ScheduleSection } from '../components/home/ScheduleSection'

export function HomePage() {
  const { i18n } = useTranslation()

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('en') ? 'en' : 'ro'
  }, [i18n.language])

  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  )
}
