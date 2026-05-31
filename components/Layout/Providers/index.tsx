import { ThemeProvider } from 'next-themes';

import { FC, PropsWithChildren, ReactNode } from 'react';

import StyledComponentsRegistry from '@lib/registry';

const compose = (providers: FC<PropsWitChildren>[]): ReactNode => providers.reduce((Previous, Current) => ({ children }: PropsWithChildren) => {
  if (!Previous) return <Current>{children}</Current>;

  return (
    <Previous>
      <Current>{children}</Current>
    </Previous>
  );
});

const Theme: FC<PropsWithChildren> = ({ children }): ReactNode => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableSystem
    >
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
};

export const Providers: ReactNode = compose([
  Theme,
]);
