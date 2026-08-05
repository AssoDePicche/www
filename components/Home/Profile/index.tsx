import { differenceInYears } from 'date-fns';

import { styled } from 'styled-components';

import { Paragraph, Title } from '@components/Typography';

import { Theme } from '@components/Layout/Theme';

const Name = styled.h1`
  font-family: sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
`;

const Headline = styled.h3`
  color: ${Theme.colors.accent};
  font-size: 1.4rem;
  font-weight: 600;
`;

const Avatar = styled.img`
  aspect-ratio: 1;
  border: none;
  border-radius: 5%;
  min-width: 120px;
  max-width: 192px;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media(min-width: ${Theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: start;
  }
`;

const ProfileContainer = styled.div`
  @media(max-width: ${Theme.breakpoints.sm}) {
    align-items: start;
    flex-direction: row;
    text-align: center;
  }
`;

export const Profile = () => {
  const years = differenceInYears(new Date(), new Date(2004, 6, 27));

  return (
    <Container>
      <ProfileContainer>
        <Avatar src="https://avatars.githubusercontent.com/u/86676526?v=4" alt="Samuel do Prado Rodrigues"/>
          
        <Name>Samuel, {years}</Name>

        <Headline>P&D @ Nanocomm S.A.</Headline> 
      </ProfileContainer>

      <div>
        <Title>Sobre.</Title>

        <Paragraph>Atuo como membro do Laboratório de Computação Aplicada (LABCOM3) do Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (campus Guarulhos) onde me concentro no estudo de aplicações de modelos de inteligência artificial e teoria dos jogos para otimização de algoritmos RMCSA em redes ópticas elásticas.</Paragraph>
      </div>
    </Container>
  );
};
