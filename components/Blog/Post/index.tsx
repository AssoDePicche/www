import { formatDate } from 'date-fns';

import { ptBR } from 'date-fns/locale';

import NextLink from 'next/link';

import { FC, ReactNode } from 'react';
import { MdOutlineArrowOutward as ArrowIcon } from "react-icons/md";

import { styled } from 'styled-components';

import { type Post } from '@lib/blog';

import { Theme } from '@components/Layout/Theme';

interface Props {
  post: Post;
}

const PostTitle = styled.h3`
  align-items: center;
  color: ${Theme.colors.font};
  display: flex;
  font-size: 1.8rem;
  gap: 1rem;
`;

const PostAbstract = styled.p`
  color: ${Theme.colors.font};
  font-size: 1.6rem;
  line-height: 1.5;
  text-align: justify;
`;
const PostDate = styled.span`
  color: ${Theme.colors.accent};
  font-size: 1.4rem;
`;

const Draft = styled.div`
  background: none;
  border-color: ${Theme.colors.accent};
  border-radius: 9999px;
  border-style: solid;
  border-width: .25rem;
  color: ${Theme.colors.accent};
  font-size: 1.2rem;
  font-weight: bold;
  padding: .75rem;
  width: fit-content;
`;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Card: FC<Props> = ({ post }): ReactNode => {
  const { abstract, title, isPublished, lastModifiedDate, path } = post;

  return (
      <Container>
        <div>
        <NextLink href={'/blog/' + path}>
      <PostTitle>{title}<ArrowIcon /></PostTitle>
      </NextLink>
      <PostDate>{formatDate(lastModifiedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</PostDate>
      <PostAbstract>{abstract}</PostAbstract>
      </div>
      { !isPublished && (<Draft>Rascunho</Draft>) }
      </Container>
  );
};
