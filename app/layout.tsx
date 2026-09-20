import type { Metadata } from 'next';

import { PropsWithChildren } from 'react';

import { RootLayout } from '@components/Layout';

export const metadata: Metadata = {
    title: 'AssoDePicche',
    description: '',
};

export default function Layout({ children }: PropsWithChildren) {
    return <RootLayout>{children}</RootLayout>
}
