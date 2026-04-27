import { styled } from 'styled-components';

import { Theme } from '@components/Layout/Theme';

import { Navigation, type Route } from './Navigation';

const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: center;
  width: 100%;
`;

const HeaderContents = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  max-width: 86rem;
  width: 100%;

  @media(max-width: ${Theme.breakpoints.sm}) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.span`
  color: ${Theme.colors.accent};
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Header = () => {
  const routes: Route[] = [
    { link: '/', name: '~/' },
    { link: '/blog', name: 'blog' },
  ];

  return (
    <HeaderContainer>
      <HeaderContents>
        <Logo>www.</Logo>
        <Navigation routes={routes} />
      </HeaderContents>
    </HeaderContainer>
  );
};
