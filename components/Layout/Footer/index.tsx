import { FaGithub as GithubIcon } from 'react-icons/fa6';

import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

import { Link } from '@components/Typography';

const Line = styled.hr`
  border-top: 1px solid ${Theme.colors.accent};
`;

const FooterContainer = styled.span`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 86rem;
  margin: 0 auto;
  padding: 1rem 0;

  @media(max-width: ${Theme.breakpoints.sm}) {
    padding: 1rem 2rem;
  }
`;

const TimeContainer = styled.time`
  font-size: 1.4rem;
  font-weight: bold;
`;

const LinkContainer = styled.span`
  align-items: center;
  color: ${Theme.colors.font};
  display: inline-flex;
  font-size: 1.4rem;
  gap: 1.5px;
  line-height: 1.5;
  text-decoration: underline;
`;

const FooterWrapper = styled.footer`
  margin-top: 2rem;
  width: 100%; 
`;

export const Footer = () => {
  const year: string = new Date().getFullYear().toString();

  return (
    <FooterWrapper>
      <Line />
      <FooterContainer>
        <TimeContainer dateTime={year}>&copy; {year}</TimeContainer>
        <Link href="https://github.com/AssoDePicche">
          <LinkContainer>
            <GithubIcon />
            <span>AssoDePicche</span>
          </LinkContainer>
        </Link>
      </FooterContainer>
    </FooterWrapper>
  );
};
