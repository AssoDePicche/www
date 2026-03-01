import {
  useLocale as useNextIntlLocale,
  useTranslations as useNextIntlTranslations
} from 'next-intl'
import { getRequestConfig, setRequestLocale } from 'next-intl/server'

import { getUserLocale } from './locale'

export default getRequestConfig(async () => {
  const locale = await getUserLocale()

  return {
    locale,
    messages: (await import(`./locales/${locale}.ts`)).default
  }
})

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
