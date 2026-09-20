'use client';

import { ThemeProvider } from 'next-themes';

import { PropsWithChildren } from 'react';

import StyledComponentsRegistry from '@lib/registry';

import { ToastProvider } from '@components/Toast/Context';

const Theme = ({ children }: PropsWithChildren) => {
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

export const Providers = ({ children }: PropsWithChildren) => {
  const components = [
    Theme,
    ToastProvider,
  ];

  return components.reduceRight((previousChildren, Component) => {
    return <Component>{previousChildren}</Component>;
  }, children);
};
