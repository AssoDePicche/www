import { styled } from 'styled-components';

import { Theme } from '@components/Layout/Theme';

import { Link } from '@components/Typography';

interface Route {
  link: string;
  name: string;
}

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
  max-width: 86rem;
  width: 100%;

  @media(max-width: ${Theme.breakpoints.sm}) {
    padding: 1rem 2rem;
  }
`;

const RoutesContainer = styled.ul`
  display: flex;
  gap: 1.4rem;
`;

const RouteContainer = styled.li`
  font-size: 1.4rem;
  list-style: none;
  text-transform: capitalize;
`;

export const Header = () => {
  const routes: Route[] = [
    { link: '/', name: '~/' },
    { link: '/blog', name: 'blog' },
  ];

  return (
    <HeaderContainer>
      <HeaderContents>
        <RoutesContainer>
          { routes.map((route: Route, index: number) => (
            <RouteContainer key={index}>
              <Link href={route.link}>{route.name}</Link>
            </RouteContainer>
          ))}
        </RoutesContainer>
      </HeaderContents>
    </HeaderContainer>
  );
};
