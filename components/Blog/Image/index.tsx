'use client';

import NextImage from 'next/image';

import { useState } from 'react';

import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

const Container = styled.div`
  display: block;
  min-height: 128px;
  min-width: 280px;
  position: relative;

  @media(max-width: ${Theme.breakpoints.sm}) {
    min-width: 100%;
  }
`;

const Skeleton = styled.div`
  background-color: ${Theme.colors.accent};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

interface Properties {
  alt: string;
  src: string;
}

export default function Image({ alt, src }: Properties) {
  const [loaded, setLoaded] = useState(false);

  const prefix: string = process.env.NODE_ENV.toLowerCase() === 'production' ? '/www' : '';

  const proxy: string = prefix + (src ?? '');

  return (
    <Container>
      { !loaded && <Skeleton /> }
      <NextImage
        alt={alt}
        fill={true}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        quality={100}
        src={proxy}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 300ms ease-in-out',
        }}
      />
    </Container>
  );
}
