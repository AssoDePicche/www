import { formatDate } from 'date-fns';

import { ptBR } from 'date-fns/locale';

import { bundleMDX } from 'mdx-bundler';

import { getMDXComponent } from 'mdx-bundler/client';

import { BundleMDXOptions } from 'mdx-bundler/dist/types'

import type { CompileOptions as ProcessorOptions } from '@mdx-js/mdx';

import NextLink from 'next/link';

import { FC, ReactNode } from 'react';
import { MdOutlineArrowOutward as ArrowIcon } from "react-icons/md";

import rehypeCodeTitles from 'rehype-code-titles'
import rehypeImagePlaceholder from 'rehype-image-placeholder'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import remarkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import remarkSmartypants from '@silvenon/remark-smartypants'
import remarkTableofContents from 'remark-toc'
import remarkUnwrapImages from 'remark-unwrap-images'

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Card: FC<Props> = ({ post }): ReactNode => {
  const { abstract, title, isPublished, lastModifiedDate, path } = post;

  return (
    <NextLink href={'/blog/' + path}>
      <Container>
        <div>
      <PostTitle>{title}<ArrowIcon /></PostTitle>
      <PostDate>{formatDate(lastModifiedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</PostDate>
      <PostAbstract>{abstract}</PostAbstract>
      </div>
      { !isPublished && (<Draft>Rascunho</Draft>) }
      </Container>
    </NextLink>
  );
};

interface MdxContentProps {
  code: string;
}

export const fetchMd = async (path: string) => {
  const options = {
    mdxOptions(options: ProcessorOptions) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        remarkHeadings,
        remarkSlug,
        remarkSmartypants,
        [remarkTableofContents, { tight: true }],
        remarkUnwrapImages,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeTitles,
        rehypePrism,
        [rehypeImagePlaceholder, { dir: 'public' }],
      ]
      return options
    },
  };

  return  await bundleMDX({ file: path, ...options });
};

export const MdxContent: FC<MdxContentProps> = ({ code }): ReactNode => {
  const Component = getMDXComponent(code);

  return <Component />
}
