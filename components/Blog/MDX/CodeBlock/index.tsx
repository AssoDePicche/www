import { FC, ReactNode, useRef } from 'react';

import { IoCopyOutline as Icon } from 'react-icons/io5';

import { styled } from 'styled-components';

import { Theme } from '@components/Layout/Theme';

interface Properties {
  children: ReactNode;
}

const Container = styled.div`
  position: relative;
`;

const Pre = styled.pre`
  background-color: ${Theme.palette.rusticCharm.CHARCOAL_BROWN};
  color: ${Theme.colors.accent};
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 86rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 9999px;
  position: absolute;
  right: 1rem;
  top: 1rem;
  transition: transform 0.1 ease;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CodeBlock: FC = ({ children }): ReactNode => {
  const preRef = useRef<HTMLPreElement>(null);

  const copy = () => {
    const content = preRef?.current?.textContent ?? '';

    navigator.clipboard.writeText(content);
  };

  return (
    <Container>
      <Pre ref={preRef}>
        <code>{children}</code>
      </Pre>
      <Button onClick={copy}>
        <Icon color={Theme.colors.accent} size={20} />
      </Button>
    </Container>
  );
};
