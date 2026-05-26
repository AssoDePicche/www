import { ThemeProvider } from 'next-themes';

import { FC, PropsWithChildren, ReactNode } from 'react';

import StyledComponentsRegistry from '@lib/registry';

export const Providers: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
        enableSystem
      >
        <StyledComponentsRegistry>{ children }</StyledComponentsRegistry>
      </ThemeProvider>
    </>
  );
};
