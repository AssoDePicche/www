import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

const Container = styled.div`
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    width: 280px;
`;

const CoversContainer = styled.a`
    display: block;
    height: 380px;
    width: 280px;
`;

const Cover = styled.img`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;
    width: 100%;
`;

const Description = styled.p`
    font-size: ${Theme.fontSize.base};
    text-align: center;
    text-transform: capitalize;
`;

const Title = styled.h3`
    font-size: ${Theme.fontSize.large};
    text-align: center;
    text-transform: capitalize;
`;

interface Properties {
    description: string;
    href?: string;
    cover: string;
    title: string;
}

const Card = ({ description, href, cover, title }: Properties) => {
    return (
        <Container>
            <CoversContainer href={href}>
                <Cover src={cover} width="280" />
            </CoversContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    );
};

export default Card;
