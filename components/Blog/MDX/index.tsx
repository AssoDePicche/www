import type { MDXComponents } from 'mdx/types';

import { CodeBlock } from './CodeBlock';

import { Image } from './Image';

import { ListItem, Paragraph, Subtitle, Title } from '../../Typography';

export const useMDXComponents = (): MDXComponents => {
  return {
    h1: Title,
    h2: Subtitle,
    h3: Subtitle,
    img: Image,
    li: ListItem,
    p: Paragraph,
    pre: CodeBlock,
  };
};
