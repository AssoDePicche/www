import type { MDXComponents } from 'mdx/types';

import { CodeBlock } from './CodeBlock';

import { Image } from './Image';

import { ListItem, Paragraph, Title } from '../../Typography';

export const useMDXComponents = (): MDXComponents => {
  return {
    h1: Title,
    img: Image,
    li: ListItem,
    p: Paragraph,
    pre: CodeBlock,
  };
};
