import { ThemeProvider } from 'next-themes';

import { FC, PropsWithChildren, ReactNode } from 'react';

import StyledComponentsRegistry from '@lib/registry';

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

export const Providers: FC<PropsWithChildren> = ({ children }): ReactNode => {
  const components = [
    Theme,
  ];

  return components.reduceRight((previousChildren, Component) => {
    return <Component>{previousChildren}</Component>;
  }, children);
};
