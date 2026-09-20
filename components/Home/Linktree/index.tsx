import styled from 'styled-components';

import { MdOutlineArrowOutward as ArrowIcon } from "react-icons/md";

import Button from '@components/common/Button';

import { Link, Paragraph, Title } from '@components/Typography';

import items from '../../../app/linktree.json';

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
