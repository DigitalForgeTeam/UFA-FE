import { useTranslation } from 'react-i18next'
import { scrollToSection } from '../../lib/scrollTo'

const HERO_IMAGE = '/images/hero-placeholder-1200x500.svg'

export function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative flex min-h-[min(70vh,520px)] items-center overflow-hidden sm:min-h-[min(75vh,600px)]"
    >
      <img
        src={HERO_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        width={1200}
        height={500}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-slate-900/55" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold uppercase tracking-wide text-sky-300 sm:text-3xl lg:text-4xl">
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            {t('hero.description')}
          </p>
          <button
            type="button"
            onClick={() => scrollToSection('schedule')}
            className="mt-8 rounded border-2 border-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-slate-900"
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}
