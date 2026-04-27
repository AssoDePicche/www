'use client';

import { getMDXComponent } from 'mdx-bundler/client';
import { FC, useMemo } from 'react';

import { components } from './MDX';

interface MdxContentProps {
  code: string;
}

export const MdxContent: FC<MdxContentProps> = ({ code }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component components={components} />;
};
