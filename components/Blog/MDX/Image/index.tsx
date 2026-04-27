import NextImage from 'next/image';

import { FC, ReactNode, useState } from 'react';

import { keyframes, styled } from 'styled-components';

interface Properties {
  alt: string;
  blurDataURL: string;
  height: string;
  src: string;
  width: string;
}

const Container = styled.div`
  overflow: hidde;
`;

const Animation = keyframes`
  from {
    transform: scale(1.1);
  }
`;

const Zoom = styled.div`
  animation: ${Animation} 0.3s linear;
`;

export const Image: FC<Properties> = ({ alt, blurDataURL, height, src, width }): ReactNode => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container>
      <Zoom>
        <NextImage
          alt={alt}
          blurDataURL={blurDataURL}
          height={height}
          loading="lazy"
          onLoadingComplete={() => setLoaded(true)}
          placeholder={blurDataURL ? 'blur' : undefined}
          src={src}
          width={width}
        />
      </Zoom> 
    </Container>
  );
};
