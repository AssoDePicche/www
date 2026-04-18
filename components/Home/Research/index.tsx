import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

import { Link, Paragraph, Title } from '@components/Typography';

import { FC, ReactNode } from 'react';

import items from '../../../app/bibliography.json';

export interface Item {
  authors: string[];
  href: string;
  page?: number;
  publisher: string;
  title: string;
  year: number;
}

const Publication = ({ item }: { item: Item}) => {
  const { authors, href, page, publisher, title, year } = item;

  const pageSuffix: string = page ? ', ' + page : '';

  return (
    <span>
      {`${authors.join('; ').slice(0, -4)}. (${year}). ${title}. ${publisher} ${pageSuffix}. Disponível em: `}
      <Link href={href}>Link</Link>
    </span>
  );
};

const PublicationWrapper = styled.li`
  color: ${Theme.colors.font};
  font-size: 1.4rem;
  margin-bottom: 4px;
  font-weight: 500;
  line-height: 1.5;
  text-align: justify;
`;

const ListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
`;


export const Research = () => {
  return (
    <div>
      <Title>Pesquisa.</Title>

      <Paragraph>Minha pesquisa se concentra em métodos computacionais para otimização de recursos em redes ópticas elásticas. eu completei duas iniciações científicas como bolsista CNPq e no momento desenvolvo meu terceiro projeto como bolsista PIBIFSP. Minhas linhas de pesquisa incluem aprendizado de máquina, telecomunicações e modelos de simulação.</Paragraph>

      <ListWrapper>
      { items.map((item: Item, index: number) => (
        <PublicationWrapper key={index}>
          <Publication item={item} />
        </PublicationWrapper>
      ))}
      </ListWrapper>
    </div>
  );
};
