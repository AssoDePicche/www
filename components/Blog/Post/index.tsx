import NextLink from 'next/link';

import { MdOutlineArrowOutward as ArrowIcon } from 'react-icons/md';

import { styled } from 'styled-components';

import { type Post } from '@lib/blog';

import { formatLocalDate } from '@lib/formatters';

import { Theme } from '@components/Layout/Theme';

import Image from '../Image';

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

const TagsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tag = styled.span`
  color: ${Theme.colors.accent};
  font-size: 1.2rem;
  font-style: italic;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media(max-width: ${Theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const Card = ({ post }: { post: Post }) => {
  const { abstract, background, title, isPublished, lastModifiedDate, path, tags } = post;

  const URL: string = '/blog/' + path;

  return (
      <CardContainer>
      <NextLink href={URL}>
      <Image alt={title} src={background} />
      </NextLink>
      <Container>
        <div>
        <NextLink href={URL}>
      <PostTitle>{title}<ArrowIcon /></PostTitle>
      </NextLink>
      <PostDate>{formatLocalDate(lastModifiedDate)}</PostDate>
      <PostAbstract>{abstract}</PostAbstract>
      <TagsContainer>
        { tags.map((tag: string, index: number) => ( <Tag key={index}>#{tag}</Tag> ))}
      </TagsContainer>
      </div>
      { !isPublished && (<Draft>Rascunho</Draft>) }
      </Container>
      </CardContainer>
  );
}
