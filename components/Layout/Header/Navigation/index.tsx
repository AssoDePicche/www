'use client';

import Link from 'next/link';

import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

export interface Route {
  link: string;
  name: string;
}

const List = styled.ul`
  display: flex;
  gap: 1.4rem;
`;

const Item = styled.li`
  font-size: 1.4rem;
  list-style: none;
  text-transform: capitalize;
`;

const LinkWrapper = styled(Link)`
  color: ${Theme.colors.accent};
`;

export const Navigation = ({ routes }: { routes: Route[]}) => {
  return (
    <List>
      { routes.map((route: Route, index: number) => (
        <Item key={index}>
          <LinkWrapper href={route.link}>{route.name}</LinkWrapper>
        </Item>
      ))}
    </List>
  );
};
