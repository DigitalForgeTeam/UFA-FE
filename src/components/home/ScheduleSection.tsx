import { useTranslation } from 'react-i18next'

export function ScheduleSection() {
  const { t } = useTranslation()

  return (
    <section
      id="schedule"
      className="scroll-mt-16 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900 sm:text-3xl">
          {t('schedule.title')}
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">{t('schedule.placeholder')}</p>
      </div>
    </section>
  )
}
