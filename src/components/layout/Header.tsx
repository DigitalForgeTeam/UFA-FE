import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { scrollToSection } from '../../lib/scrollTo'

const LOGO_SRC = '/images/logo-placeholder-160x48.png'

type NavItem = {
  id: string
  labelKey: string
}

const navItems: NavItem[] = [{ id: 'schedule', labelKey: 'nav.schedule' }]

export function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (sectionId: string) => {
    scrollToSection(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="shrink-0"
          onClick={(e) => {
            e.preventDefault()
            handleNav('hero')
          }}
        >
          <img
            src={LOGO_SRC}
            alt="UFA"
            width={160}
            height={48}
            className="h-10 w-auto sm:h-12"
            loading="eager"
            decoding="async"
          />
        </a>

        <nav
          className="hidden items-center justify-center gap-1 md:flex"
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

        <div className="hidden justify-end md:flex">
          <LanguageSwitcher />
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center justify-self-end rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
          <div className="mt-4 flex justify-center">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  )
}
