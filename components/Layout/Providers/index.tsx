import { ThemeProvider } from 'next-themes';

import { FC, ReactNode } from 'react';

interface Properties {
  children: ReactNode;
}

export const Providers: FC<Properties> = async ({ children }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        { children }
      </ThemeProvider>
    </>
  );
};
