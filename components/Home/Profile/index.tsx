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
  const years = differenceInYears(new Date(), new Date(2004, 7, 27));

  return (
    <Container>
      <ProfileContainer>
        <Avatar src="https://avatars.githubusercontent.com/u/86676526?v=4" alt="Samuel do Prado Rodrigues"/>
          
        <Name>Samuel, {years}</Name>

        <Headline>P&D @ Nanocomm S.A.</Headline> 
      </ProfileContainer>

      <div>
        <Title>Sobre.</Title>
        <Paragraph>Membro do Laboratório de Computação Aplicada (LABCOM3), atua no desenvolvimento de ferramentas de simulação computacional para o estudo de Redes Ópticas Elásticas.</Paragraph>
      </div>
    </Container>
  );
};
