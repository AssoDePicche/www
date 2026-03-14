import { getUserLocale } from './locale'

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  let locale = await getUserLocale()

  if (!locale) {
    locale = 'en-US';
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.ts`)).default
  }
})
