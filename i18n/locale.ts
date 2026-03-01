'use server'

import { cookies } from 'next/headers'

import { defaultLocale, LocaleProps } from './config'

const COOKIE_NAME = `${process.env.NEXT_PUBLIC_PROJECT_NAME}-i18n`

export async function getUserLocale() {
  return defaultLocale;
}

export async function setUserLocale(locale: LocaleProps) {
  (await cookies()).set(COOKIE_NAME, locale)
}
