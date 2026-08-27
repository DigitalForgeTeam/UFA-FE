import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const AUTO_MS = 10_000
const base = import.meta.env.BASE_URL

type SlideAlign = 'left' | 'right'

type Slide = {
  image: string
  align: SlideAlign
  titleKey: string
  descriptionKey: string
}

const slides: Slide[] = [
  {
    image: `${base}images/hero-1.jpg`,
    align: 'left',
    titleKey: 'hero.slides.0.title',
    descriptionKey: 'hero.slides.0.description',
  },
  {
    image: `${base}images/hero-2.jpg`,
    align: 'right',
    titleKey: 'hero.slides.1.title',
    descriptionKey: 'hero.slides.1.description',
  },
  {
    image: `${base}images/hero-3.jpg`,
    align: 'left',
    titleKey: 'hero.slides.2.title',
    descriptionKey: 'hero.slides.2.description',
  },
]

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Hero() {
  const { t } = useTranslation()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length)
  }

  const goPrev = () => goTo(index - 1)
  const goNext = () => goTo(index + 1)

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, index])

  const slide = slides[index]

  return (
    <section
      id="hero"
      className="relative flex min-h-[min(70vh,520px)] items-center overflow-hidden sm:min-h-[min(75vh,600px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={t('hero.carouselLabel')}
    >
      {slides.map((item, i) => (
        <img
          key={item.image}
          src={item.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          width={1200}
          height={500}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding="async"
          aria-hidden={i !== index}
        />
      ))}
      <div className="absolute inset-0 bg-slate-900/55" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-4 py-16 pt-16 sm:px-6 lg:px-8">
        <div
          className={`max-w-xl transition-all duration-500 ${
            slide.align === 'right' ? 'ml-auto text-right' : 'mr-auto text-left'
          }`}
        >
          <h1 className="text-2xl font-bold uppercase tracking-wide text-sky-300 sm:text-3xl lg:text-4xl">
            {t(slide.titleKey)}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            {t(slide.descriptionKey)}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-3 sm:bottom-6">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45"
          aria-label={t('hero.prev')}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label={t('hero.carouselLabel')}>
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={t('hero.dot', { n: i + 1 })}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-6 bg-white' : 'w-2 bg-white/45 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/45"
          aria-label={t('hero.next')}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
