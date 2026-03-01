export type LocaleProps = (typeof locales)[number]

export const locales = ['en-US', 'pt-BR'] as const;

export const defaultLocale: LocaleProps = 'en-US';
