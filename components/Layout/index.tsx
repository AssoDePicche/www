import { FC, ReactElement, ReactNode } from 'react';

import { styled } from 'styled-components';

import { Header } from './Header';

import { Providers } from './Providers';

import { GlobalStyles, Theme } from './Theme';

const Container = styled.main`
  padding: 4rem 0;

  @media(max-width: ${Theme.breakpoints.sm}) {
    padding: 4rem 2rem;
  }

  @media(min-width: ${Theme.breakpoints.lg}) {
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
      </head>
      <body>
        <Providers>
          <Header />
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
};
