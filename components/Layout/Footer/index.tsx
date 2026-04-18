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
  max-width: 72rem;
  margin: 0 auto;
  padding: 1rem 0;
`;

const PronounsContainer = styled.span`
  align-items: center;
  display: flex;
  gap: 1px;
`;

const TimeContainer = styled.time`
  display: none;

  @media(min-width: ${Theme.breakpoints.sm}) {
    display: inline;
  }
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
        <PronounsContainer>
          <TimeContainer dateTime={year}>&copy; {year}</TimeContainer>
          <span>-Ele/Dele</span>
        </PronounsContainer>
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
