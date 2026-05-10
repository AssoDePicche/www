import NextImage from 'next/image';

import { FC, ReactNode, useState } from 'react';

import { styled } from 'styled-components';

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

interface Properties {
  alt: string;
  src: string;
}

export const Image: FC<Properties> = ({ alt, src }): ReactNode => {
  const [loaded, setLoaded] = useState(false);

  const nextImageStyle = {
    objectFit: 'cover',
    objectPosition: 'center',
  };

  return (
    <Container>
      { !loaded && <div>Carregando...</div> }
      <NextImage
        alt={alt}
        fill={true}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        quality={100}
        src={src}
        style={nextImageStyle}
      />
    </Container>
  );
};
