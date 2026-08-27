import { useTranslation } from 'react-i18next'
import { scrollToSection } from '../../lib/scrollTo'

const DISCIPLINE_KEYS = ['box', 'mma', 'bjj', 'kickboxing', 'sparring'] as const
const ADULT_PRICE_KEYS = ['single', 'one', 'two', 'unlimited'] as const
const KIDS_DISCIPLINES = ['bjj', 'kickboxing', 'judo', 'karate'] as const

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="scroll-mt-16 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
              {t('about.motto')}
            </p>
            <h2 className="mt-3 text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl lg:text-4xl">
              {t('about.title')}
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>{t('about.lead')}</p>
              <p>{t('about.body')}</p>
            </div>
          </div>

          <div className="border-t border-slate-300 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              {t('about.disciplinesTitle')}
            </h3>
            <ul className="mt-6 divide-y divide-slate-200">
              {DISCIPLINE_KEYS.map((key) => (
                <li
                  key={key}
                  className="flex items-baseline justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="text-lg font-semibold uppercase tracking-wide text-slate-900">
                    {t(`about.disciplines.${key}.name`)}
                  </span>
                  <span className="text-right text-sm text-slate-500">
                    {t(`about.disciplines.${key}.note`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-300 pt-12 sm:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900 sm:text-2xl">
                {t('about.memberships.title')}
              </h3>
              <p className="mt-2 max-w-2xl text-slate-600">
                {t('about.memberships.subtitle')}
              </p>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
              {t('about.memberships.freeTrial')}
            </p>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                {t('about.memberships.adultsTitle')}
              </h4>
              <ul className="mt-4 divide-y divide-slate-200">
                {ADULT_PRICE_KEYS.map((key) => (
                  <li
                    key={key}
                    className="flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="text-slate-800">
                      {t(`about.memberships.adults.${key}.label`)}
                    </span>
                    <span className="shrink-0 font-semibold tabular-nums text-slate-900">
                      {t(`about.memberships.adults.${key}.price`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                {t('about.memberships.kidsTitle')}
              </h4>
              <p className="mt-4 text-sm text-slate-500">
                {t('about.memberships.kidsNote')}
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                {KIDS_DISCIPLINES.map((key) => (
                  <li
                    key={key}
                    className="text-base font-semibold uppercase tracking-wide text-slate-900"
                  >
                    {t(`about.memberships.kidsDisciplines.${key}`)}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-lg font-semibold tabular-nums text-slate-900">
                {t('about.memberships.kidsPrice')}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              <p className="text-slate-800">
                <span className="font-semibold text-red-700">15%</span>{' '}
                {t('about.memberships.discount6')}
              </p>
              <p className="text-slate-800">
                <span className="font-semibold text-red-700">20%</span>{' '}
                {t('about.memberships.discount12')}
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection('schedule')}
              className="text-left text-sm font-semibold uppercase tracking-wide text-slate-900 underline decoration-red-600 underline-offset-4 transition hover:text-red-700 sm:text-right"
            >
              {t('about.memberships.seeSchedule')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
