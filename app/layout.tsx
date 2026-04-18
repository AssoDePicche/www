import type { Metadata } from 'next';

import { FC, ReactElement, ReactNode } from 'react';

import { RootLayout } from '@components/Layout';

export const metadata: Metadata = {
  title: 'AssoDePicche',
  description: '',
};

interface Properties {
  children: ReactNode;
}

const Layout: FC<Properties> = ({ children }): ReactElement => {
  return <RootLayout>{children}</RootLayout>
};

export default Layout;
