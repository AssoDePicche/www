import { styled } from 'styled-components';

import NextLink from 'next/link';

import { FC, ReactNode } from 'react';

import { Theme } from '@components/Layout/Theme';

export const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 1.4rem;
  text-align: justify;
`;

export const Title = styled.h1`
  font-size: 3.0rem;
  font-weight: bold;
  letter-spacing: -0.025rem;
  line-height: 2.5;
`;

interface Properties {
  children: ReactNode;
  href: string;
}

const Wrapper = styled.span`
  color: ${Theme.colors.font};
  font-weight: bold;
`;

export const Link: FC<Properties> = ({ children, href }): ReactNode => {
  if (href.startsWith('http')) {
    return (
      <NextLink href={href} rel="noopener noreferrer" target="_blank">
        <Wrapper>{ children }</Wrapper>
      </NextLink>
    );
  }

  return (
    <NextLink href={href}>
      <Wrapper>{ children }</Wrapper>
    </NextLink>
  );
}
