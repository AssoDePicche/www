import { MdDownload as DownloadIcon } from 'react-icons/md';

import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

const Button = styled.a`
  align-items: center;
  border: 0.4rem solid ${Theme.colors.accent};
  color: ${Theme.colors.font};
  display: flex;
  font-size: 1.4rem;
  font-weight: bold;
  height: 4.8rem;
  justify-content: center;
  text-decoration: none;
  transition: all 200ms ease-in-out;
  width: 20rem;

  &:hover {
    background-color: rgba(255, 255, 255, .04);
    border-color: rgba(255, 255, 255, .145);
    cursor: pointer;
  }

  @media(max-width: ${Theme.breakpoints.sm}) {
    font-size: 1.8rem;
    height: 6.4rem;
    width: 32rem;
  }
`;

const CV = () => {
    const prefix: string = process.env.NODE_ENV.toLowerCase() === 'production' ? '/www' : '';

    const proxy: string = prefix + '/docs/CV.pdf';

    return (
        <Button
            download="Samuel do Prado Rodrigues (CV)"
            href={proxy}
            rel="noreferrer"
            target="_blank"
        >
            <span>Currículo</span>
            <DownloadIcon />
        </Button>
    );
};

export default CV;
