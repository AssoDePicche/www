import {
  useLocale as useNextIntlLocale,
  useTranslations as useNextIntlTranslations
} from 'next-intl'

import { setRequestLocale } from 'next-intl/server'

export function setLocale(locale: 'pt-BR' | 'en-US') {
  setRequestLocale(locale)
}

export function useLocale() {
  const locale = useNextIntlLocale();

  return locale;
}

export function useTranslations() {
  const t = useNextIntlTranslations()
  return t as (key: string) => string
}
