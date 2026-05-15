import { useTranslation } from 'react-i18next'

const languages = ['ro', 'en'] as const

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  return (
    <div
      className="flex items-center gap-0.5 rounded-md border border-slate-200 bg-slate-50 p-0.5"
      role="group"
      aria-label="Language"
    >
      {languages.map((lng) => {
        const active = i18n.language.startsWith(lng)
        return (
          <button
            key={lng}
            type="button"
            onClick={() => void i18n.changeLanguage(lng)}
            className={`min-w-9 rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
              active
                ? 'bg-sky-600 text-white'
                : 'text-slate-600 hover:bg-white hover:text-slate-900'
            }`}
            aria-pressed={active}
          >
            {t(`lang.${lng}`)}
          </button>
        )
      })}
    </div>
  )
}
