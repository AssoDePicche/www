import { FC, ReactNode } from 'react';

import { styled } from 'styled-components';

import { Theme } from '@components/Layout/Theme';

import { formatLocalDate } from '@lib/formatters';

interface Properties {
  background: string;
  lastModifiedDate: Date;
  title: string;
}

const Container = styled.header`
  align-items: center;
  display: flex;
  height: 128px;
  overflow: hidden;
  padding: 0 1rem;
  position: relative;
  width: 100%;

  &::before {
    background-image: linear-gradient(
      to right bottom,
      rgb(0.23, 0.23, 0.23, .65),
      rgb(0.23, 0.23, 0.23, .65)
    ),
    url(${(props) => (props.background)});
    background-size: cover;
    background-position: center;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: transform 0.6s ease;
    width: 100%;
  }

  &:hover::before {
    transform: scale(1.25);
  }
`;

const Title = styled.h3`
  color: ${Theme.colors.font};
  font-size: 2.4rem;
`;

const Date = styled.time`
  color: ${Theme.colors.font};
  font-size: 1.4rem;
`;

export const Header: FC<Properties> = ({ background, lastModifiedDate, title }): ReactNode => {
  return (
    <Container background={background}>
      <div style={{ position: 'absolute' }}>
        <Title>{title}</Title>
        <Date>Última atualização em {formatLocalDate(lastModifiedDate)}</Date>
      </div>
    </Container>
  );
};
