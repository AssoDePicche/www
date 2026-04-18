import { ThemeProvider } from 'next-themes';

import { NextIntlClientProvider } from 'next-intl';

import { getMessages } from 'next-intl/server';

import { FC, ReactNode } from 'react';

interface Properties {
  children: ReactNode;
}

export const Providers: FC<Properties> = async ({ children }) => {
  const messages = await getMessages();

  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <NextIntlClientProvider messages={messages}>
          { children }
        </NextIntlClientProvider>
      </ThemeProvider>
    </>
  );
};
