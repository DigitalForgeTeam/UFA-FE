import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { scheduleDays, type ScheduleDay } from '../../data/schedule'

const MOBILE_VISIBLE = 2
const maxRows = Math.max(...scheduleDays.map((day) => day.sessions.length))

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DayColumn({
  day,
  t,
}: {
  day: ScheduleDay
  t: (key: string) => string
}) {
  return (
    <div className="flex h-full min-w-0 flex-1 flex-col border border-slate-300 bg-white">
      <div className="border-b border-slate-300 bg-slate-900 px-2 py-3 text-center">
        <h3 className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
          {t(`schedule.days.${day.dayKey}`)}
        </h3>
      </div>
      <ul className="flex flex-1 flex-col">
        {Array.from({ length: maxRows }, (_, rowIndex) => {
          const session = day.sessions[rowIndex]
          return (
            <li
              key={`${day.dayKey}-${rowIndex}`}
              className="flex min-h-[4.5rem] flex-1 flex-col items-center justify-center border-t border-slate-200 px-2 py-3 first:border-t-0"
            >
              {session ? (
                <>
                  <p className="text-base font-bold tabular-nums tracking-tight text-slate-900 sm:text-lg">
                    {session.time}
                  </p>
                  <p className="mt-1.5 text-center text-xs font-semibold uppercase leading-snug tracking-wide text-red-700 sm:text-sm">
                    {t(`schedule.classes.${session.classKey}`)}
                  </p>
                </>
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function ScheduleTable() {
  const { t } = useTranslation()

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] table-fixed border-collapse">
        <thead>
          <tr>
            {scheduleDays.map((day) => (
              <th
                key={day.dayKey}
                scope="col"
                className="border border-slate-300 bg-slate-900 px-2 py-3 text-center text-sm font-bold uppercase tracking-wide text-white sm:px-3 sm:text-base"
              >
                {t(`schedule.days.${day.dayKey}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxRows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {scheduleDays.map((day) => {
                const session = day.sessions[rowIndex]
                return (
                  <td
                    key={`${day.dayKey}-${rowIndex}`}
                    className="border border-slate-300 bg-white px-2 py-3 align-top sm:px-3 sm:py-4"
                  >
                    {session ? (
                      <div className="text-center">
                        <p className="text-base font-bold tabular-nums tracking-tight text-slate-900 sm:text-lg">
                          {session.time}
                        </p>
                        <p className="mt-1.5 text-xs font-semibold uppercase leading-snug tracking-wide text-red-700 sm:text-sm">
                          {t(`schedule.classes.${session.classKey}`)}
                        </p>
                      </div>
                    ) : (
                      <span className="block min-h-[3rem]" aria-hidden />
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ScheduleMobileCarousel() {
  const { t } = useTranslation()
  const maxIndex = Math.max(0, scheduleDays.length - MOBILE_VISIBLE)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  const goPrev = () =>
    setIndex((current) => (current <= 0 ? maxIndex : current - 1))
  const goNext = () =>
    setIndex((current) => (current >= maxIndex ? 0 : current + 1))

  const visibleDays = scheduleDays.slice(index, index + MOBILE_VISIBLE)

  return (
    <div className="flex items-stretch gap-1.5 sm:gap-2">
      <button
        type="button"
        onClick={goPrev}
        className="my-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 active:scale-95"
        aria-label={t('schedule.prev')}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <div className="flex min-w-0 flex-1 gap-2 sm:gap-3">
        {visibleDays.map((day) => (
          <DayColumn key={day.dayKey} day={day} t={t} />
        ))}
      </div>

      <button
        type="button"
        onClick={goNext}
        className="my-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 active:scale-95"
        aria-label={t('schedule.next')}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  )
}

export function ScheduleSection() {
  const { t } = useTranslation()

  return (
    <section id="schedule" className="scroll-mt-16 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
            {t('schedule.eyebrow')}
          </p>
          <h2 className="mt-3 text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-4xl">
            {t('schedule.title')}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t('schedule.subtitle')}
          </p>
        </div>

        <div className="mt-10 lg:hidden">
          <ScheduleMobileCarousel />
        </div>

        <div className="mt-12 hidden lg:block">
          <ScheduleTable />
        </div>

        <p className="mt-8 text-sm text-slate-500">{t('schedule.note')}</p>
      </div>
    </section>
  )
}
