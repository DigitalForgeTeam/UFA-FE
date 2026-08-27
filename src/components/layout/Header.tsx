import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { scrollToSection } from '../../lib/scrollTo'

const LOGO_SRC = `${import.meta.env.BASE_URL}images/logo.png`

type NavItem = {
  id: string
  labelKey: string
}

const navItems: NavItem[] = [
  { id: 'about', labelKey: 'nav.about' },
  { id: 'schedule', labelKey: 'nav.schedule' },
  { id: 'coaches', labelKey: 'nav.coaches' },
]

export function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center gap-4 overflow-visible px-4 sm:px-6 lg:px-8">
        {/* Width reserved in flow; brand is absolute so header stays h-16 */}
        <div className="w-[140px] shrink-0 sm:w-[160px]" aria-hidden />
        <a
          href="#hero"
          className="absolute top-1/2 left-4 z-10 flex -translate-y-1/2 items-center gap-2.5 sm:left-6 sm:gap-3 lg:left-8"
          onClick={(e) => {
            e.preventDefault()
            handleNav('hero')
          }}
        >
          <img
            src={LOGO_SRC}
            alt=""
            width={70}
            height={70}
            className="h-[70px] w-[70px] shrink-0 object-contain drop-shadow-sm"
            loading="eager"
            decoding="async"
          />
          <span className="flex flex-col text-[13px] font-bold leading-[1.1] tracking-[0.14em] text-slate-900 uppercase sm:text-sm">
            <span>Urban</span>
            <span>Fight</span>
            <span>Academy</span>
          </span>
          <span className="sr-only">Urban Fight Academy</span>
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-1 md:flex"
          aria-label="Main"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNav(item.id)}
              className="rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-800 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              {t(item.labelKey)}
            </button>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 md:block">
          <LanguageSwitcher />
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-slate-200 bg-white px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className="w-full rounded-md px-3 py-3 text-left text-sm font-semibold uppercase tracking-wide text-slate-800 hover:bg-sky-50"
                >
                  {t(item.labelKey)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
