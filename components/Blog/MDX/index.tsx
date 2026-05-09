import type { MDXComponents } from 'mdx/types';

import { CodeBlock } from './CodeBlock';

import { Image } from './Image';

import { ListItem, Paragraph, Title } from '../../Typography';

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...components,
    h1: Title,
    img: Image,
    li: ListItem,
    p: Paragraph,
    pre: CodeBlock,
  };
};
