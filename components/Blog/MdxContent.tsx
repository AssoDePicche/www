'use client';

import { getMDXComponent } from 'mdx-bundler/client';
import { FC, useMemo } from 'react';

interface MdxContentProps {
  code: string;
}

export const MdxContent: FC<MdxContentProps> = ({ code }) => {
  // useMemo prevents re-parsing the code on every re-render
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component />;
};
