'use client';

import { FC, PropsWithChildren, ReactNode, useState } from 'react';

import { FaMinus as HideIcon, FaPlus as ShowIcon } from 'react-icons/fa6';

import styled from 'styled-components';

const Container = styled.summary``;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.summary`
  font-size: 2rem;
  font-weight: bold;
`;

interface Properties {
  title: string;
}

export const Accordion: FC<PropsWithChildren<Properties>> = ({ children, title }): ReactNode => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleState = () => setIsActive(!isActive);

  const iconSize: number = 20;

  return (
    <Container>
      <Header onClick={toggleState}>
        <Title>{isActive ?  'Ocultar' : 'Exibir'} {title}</Title>
        {isActive ? <HideIcon size={iconSize} /> : <ShowIcon size={iconSize} /> }
      </Header>
      { isActive && children }
    </Container>
  );
};
