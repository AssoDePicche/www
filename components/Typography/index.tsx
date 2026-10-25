import { PropsWithChildren } from 'react';

import { styled } from 'styled-components';

export const ListItem = styled.li`
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  list-style: circle;
  margin-left: 2rem;
  text-decoration: none;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1.4rem;
  text-align: justify;
`;

export const Subtitle = styled.h2`
    font-size: 2.8rem;
    line-height: 1.5;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -0.025rem;
  line-height: 2.5;
`;

const Wrapper = styled.a`
    color: inherit;
    font-weight: bold;
    text-decorat: none;
`;

export function Link({ children, href }: PropsWithChildren<{ href: string }>) {
    const prefix = process.env.NODE_ENV === 'production' ? '/www' : '';

    const URL = prefix + href;

    if (href.startsWith('http')) {
        return <Wrapper href={URL} rel="noopener noreferrer" target="_blank">{children}</Wrapper>;
    }

    return <Wrapper href={URL}>{children}</Wrapper>;
}
