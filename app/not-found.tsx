import { styled } from 'styled-components';

import { Link, Paragraph, Title } from '@components/Typography';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LinkWrapper = styled.span`
  font-size: 1.4rem;
`;

export default function Page() {
  return (
    <Container>
      <Title>404</Title>
      <Paragraph>Ops! Página não encontrada</Paragraph>
      <Link href="/">
        <LinkWrapper>Voltar</LinkWrapper>
      </Link>
    </Container>
  );
}
