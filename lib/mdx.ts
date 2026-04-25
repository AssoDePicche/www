import { bundleMDX } from 'mdx-bundler';
import type { CompileOptions as ProcessorOptions } from '@mdx-js/mdx';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeImagePlaceholder from 'rehype-image-placeholder';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import remarkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
import remarkSmartypants from '@silvenon/remark-smartypants';
import remarkTableofContents from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';

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
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeCodeTitles,
        rehypePrism,
        [rehypeImagePlaceholder, { dir: 'public' }],
      ];
      return options;
    },
  };

  return await bundleMDX({ file: path, ...options });
};
