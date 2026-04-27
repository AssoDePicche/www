import { FC, ReactElement, ReactNode } from 'react';

import { styled } from 'styled-components';

import { Toaster } from '@shadcn/components/ui/sonner';

import { Footer } from './Footer';
import { Header } from './Header';

import { Providers } from './Providers';

import { GlobalStyles, Theme } from './Theme';

const Container = styled.main`
  min-height: 90vh;
  padding: 4rem 0;
  height: 100%;
  width: 100%;

  @media(max-width: ${Theme.breakpoints.sm}) {
    padding: 4rem 2rem;
  }

  @media(min-width: ${Theme.breakpoints.md}) {
    max-width: 86rem;
  }
`;

interface Properties {
  children: ReactNode;
}

export const RootLayout: FC<Properties> = ({ children }): ReactElement => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <GlobalStyles />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </head>
      <body>
        <Providers>
          <Header />
          <Container>{children}</Container>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
};
