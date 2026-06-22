import NextImage from 'next/image';

import { FC, ReactNode, useState } from 'react';

import styled, { keyframes } from 'styled-components';

interface Properties {
  alt: string;
  blurDataURL?: string; 
  src: string;
  height?: string; 
  width?: string;
}

const Container = styled.div<{ $aspectRatio?: number }>`
  aspect-ratio: ${props => props.$aspectRatio || '16 / 9'};
  overflow: hidden; 
  position: relative;
  width: 100%;
`;

const Animation = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`;

const Zoom = styled.div`
  animation: ${Animation} 0.3s ease-out;
  height: 100%;
  width: 100%;
`;

export const Image: FC<Properties> = ({ alt, blurDataURL, height, src, width }): ReactNode => {
  const [_, setLoaded] = useState(false);

  const numWidth: number = Number(width);

  const numHeight: number = Number(height);

  const aspectRatio: number|undefined = numWidth && numHeight ? numWidth / numHeight : undefined;

  return (
    <Container $aspectRatio={aspectRatio}>
      <Zoom>
        <NextImage
          alt={alt}
          blurDataURL={blurDataURL}
          loading="lazy"
          onLoadingComplete={() => setLoaded(true)}
          placeholder={blurDataURL ? 'blur' : undefined}
          src={src}
          fill 
          sizes="100vw"
          style={{
            objectFit: 'cover', 
          }}
        />
      </Zoom> 
    </Container>
  );
};
