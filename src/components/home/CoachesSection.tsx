import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { coachImageSrc, coaches } from '../../data/coaches'

const AUTO_MS = 2_000

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

function useVisibleCount() {
  const [count, setCount] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setCount(3)
      else if (window.matchMedia('(min-width: 640px)').matches) setCount(2)
      else setCount(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return count
}

export function CoachesSection() {
  const { t } = useTranslation()
  const visible = useVisibleCount()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const maxIndex = Math.max(0, coaches.length - visible)

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    if (paused || maxIndex === 0) return
    const id = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1))
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, maxIndex, index])

  const goPrev = () =>
    setIndex((current) => (current <= 0 ? maxIndex : current - 1))
  const goNext = () =>
    setIndex((current) => (current >= maxIndex ? 0 : current + 1))

  return (
    <section id="coaches" className="scroll-mt-16 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-4xl">
          {t('coaches.title')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          {t('coaches.subtitle')}
        </p>

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${(index * 100) / visible}%)`,
              }}
            >
              {coaches.map((coach) => (
                <article
                  key={coach.id}
                  className="box-border shrink-0 px-2 sm:px-3"
                  style={{ flex: `0 0 ${100 / visible}%`, width: `${100 / visible}%`, maxWidth: `${100 / visible}%` }}
                >
                  <div className="flex h-full flex-col overflow-hidden bg-white">
                    <div className="aspect-[4/5] w-full shrink-0 overflow-hidden bg-slate-200">
                      <img
                        src={coachImageSrc(coach.image)}
                        alt={t(coach.nameKey)}
                        className="h-full w-full object-cover"
                        width={600}
                        height={750}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex min-h-[5.75rem] flex-1 flex-col justify-center bg-slate-100 px-3 py-4 text-center sm:min-h-[6.25rem] sm:px-4">
                      <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                        {t(coach.nameKey)}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm font-semibold uppercase tracking-wide text-red-700">
                        {t(coach.roleKey)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {maxIndex > 0 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-slate-400"
                aria-label={t('coaches.prev')}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={t('coaches.dot', { n: i + 1 })}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-6 bg-red-700' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 transition hover:border-slate-400"
                aria-label={t('coaches.next')}
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
