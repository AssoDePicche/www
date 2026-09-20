'use client';

import { getMDXComponent } from 'mdx-bundler/client';

import type { MDXComponents } from 'mdx/types';

import { useMemo } from 'react';

import { useMDXComponents } from './MDX';

if (typeof window !== 'undefined' && !window.process) {
  (window as any).process = { env: { NODE_ENV: process.env.NODE_ENV } };
}

export const MdxContent = ({ code }: { code: string}) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  const components: MDXComponents = useMDXComponents();

  return <Component components={components} />;
};
