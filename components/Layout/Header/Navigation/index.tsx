'use client';

import Link from 'next/link';

import { FC, ReactNode } from 'react';

import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

export interface Route {
  link: string;
  name: string;
}

interface Properties {
  routes: Route[];
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

export const Navigation: FC<Properties> = ({ routes }): ReactNode => {
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
