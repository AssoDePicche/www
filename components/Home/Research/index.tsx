import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

import { Link, Paragraph, Title } from '@components/Typography';

import { Accordion } from './Accordion';

import items from '../../../app/bibliography.json';

export interface Item {
  authors: string[];
  href: string;
  page?: number;
  publisher: string;
  title: string;
  year: number;
}

const Publication = ({ item }: { item: Item }) => {
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
  font-size: 2rem;
  margin-bottom: 4px;
  font-weight: 300;
  line-height: 1.5;
  text-align: justify;
`;

const ListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;


export const Research = () => {
  return (
    <div>
      <Title>Pesquisa.</Title>

      <Paragraph>Sob auxílio de programas de fomento à pesquisa (CNPq/IFSP) desenvolvo um conjunto de ferramentas open-source para simulação e análise de algoritmos RMCSA em redes ópticas elásticas (disponível no GitHub) a fim de encontrar meios eficientes de gerenciar recursos espectrais. Minhas linhas de pesquisa incluem aprendizado de máquina, telecomunicações e modelos de simulação.</Paragraph>

      <Paragraph>Clique em "Exibir Produção Científica" para visualizar algumas publicações selecionadas.</Paragraph>

      <Accordion title={'Produção Científica'}>
        <ListWrapper>
      { items.map((item: Item, index: number) => (
        <PublicationWrapper key={index}>
          <Publication item={item} />
        </PublicationWrapper>
      ))}
      </ListWrapper>

      </Accordion>
    </div>
  );
};
