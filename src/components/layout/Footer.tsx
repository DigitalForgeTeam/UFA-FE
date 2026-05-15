import { useTranslation } from 'react-i18next'

const PHONES = ['+373 00 000 000', '+373 00 000 001']
const ADDRESS = 'Str. Exemplu 1, Chișinău, Moldova'
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.8!2d28.8638!3d47.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAwJzM3LjgiTiAyOMKwNTEnNDkuNyJF!5e0!3m2!1sro!2smd!4v1'
const INSTAGRAM_URL = 'https://instagram.com/'
const WHATSAPP_URL = 'https://wa.me/37300000000'

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

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h2 className="text-lg font-bold uppercase tracking-wide text-slate-900">
              {t('footer.contacts')}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{ADDRESS}</p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-700">
              {t('footer.phones')}
            </h3>
            <ul className="mt-2 space-y-1">
              {PHONES.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-slate-800 hover:text-sky-700"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              {t('footer.social')}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-4">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-800 transition-colors hover:text-sky-700"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-[22px] w-[22px]" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-800 transition-colors hover:text-sky-700"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-[22px] w-[22px]" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
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
