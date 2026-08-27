import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const PHONE = '+40 745 047 160'
const ADDRESS = 'Strada Rușețu nr. 4, Sector 6, București'
const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=Strada%20Ru%C8%99e%C8%9Bu%20nr.%204%2C%20Sector%206%2C%20Bucure%C8%99ti&output=embed'
const INSTAGRAM_URL = 'https://www.instagram.com/urbanfightacademy.ro'
const WHATSAPP_URL = 'https://wa.me/40745047160'
const TIKTOK_URL = 'https://www.tiktok.com/@urbanfightacademy.ro'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.19 8.19 0 0 0 4.76 1.52V6.79a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function CopyableText({
  value,
  className,
}: {
  value: string
  className?: string
}) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      const el = document.createElement('textarea')
      el.value = value
      el.setAttribute('readonly', '')
      el.style.position = 'fixed'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    }
  }

  return (
    <button
      type="button"
      onClick={() => void handleCopy()}
      title={t('footer.copyHint')}
      aria-label={`${value}. ${t('footer.copyHint')}`}
      className={`group relative max-w-full cursor-pointer rounded-md text-left transition-colors hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${className ?? ''}`}
    >
      <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-sky-400">
        {value}
      </span>
      {copied && (
        <span className="ml-2 inline-block align-middle text-sm font-medium text-sky-600 no-underline">
          {t('footer.copied')}
        </span>
      )}
    </button>
  )
}

const socialLinks = [
  { href: INSTAGRAM_URL, label: 'Instagram', Icon: InstagramIcon },
  { href: WHATSAPP_URL, label: 'WhatsApp', Icon: WhatsAppIcon },
  { href: TIKTOK_URL, label: 'TikTok', Icon: TikTokIcon },
] as const

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900">
            {t('footer.contacts')}
          </h2>
          <CopyableText
            value={ADDRESS}
            className="mt-3 block text-base font-medium leading-snug text-slate-900 sm:text-lg"
          />

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-700">
            {t('footer.phones')}
          </h3>
          <CopyableText
            value={PHONE}
            className="mt-2 block text-base font-semibold tracking-wide text-slate-900 sm:text-lg"
          />

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-700">
            {t('footer.social')}
          </h3>
          <ul className="mt-3 flex flex-col gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-800 transition-colors hover:text-sky-700"
                  aria-label={label}
                >
                  <Icon className="h-[22px] w-[22px] shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="sr-only">{t('footer.mapTitle')}</h2>
          <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
            <iframe
              title={t('footer.mapTitle')}
              src={MAP_EMBED_SRC}
              className="aspect-[4/3] w-full min-h-[240px] border-0 sm:aspect-video"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">{t('footer.address')}</p>
        </div>
      </div>
    </footer>
  )
}
