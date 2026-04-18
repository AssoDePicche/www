import styled from 'styled-components';

import { MdOutlineArrowOutward as ArrowIcon } from "react-icons/md";

import { Theme } from '@components/Layout/Theme';

import { Link, Paragraph, Title } from '@components/Typography';

import items from '../../../app/linktree.json';

const Button = styled.span`
  align-items: center;
  border-radius: 9999px;
  border: 0.4rem solid ${Theme.colors.accent};
  color: ${Theme.colors.font};
  display: flex;
  font-size: 1.4rem;
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

const Container = styled.div`
  display: flex;
  font-weight: 500;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

interface Item {
  href: string;
  name: string;
}

export const Linktree = () => {
  return (
    <div>
      <Title>Links.</Title>

      <Paragraph>Procurando por outras coisas? Para saber o que andei desenvolvendo confira meu perfil no <Link href="https://github.com/AssoDePicche">GitHub</Link>.</Paragraph>

      <Container>
        { items.map((item: Item, index: number) => (
          <Link href={item.href} key={index}>
            <Button>
              <span>{item.name}</span>
              <ArrowIcon />
            </Button>
          </Link>
        )) }
      </Container>
    </div>
  );
};
