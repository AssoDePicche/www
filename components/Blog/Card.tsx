import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    gap: 12px;
    background-color: red;
    width: 280px;
`;

const CoversContainer = styled.a`
    background-color: green;
    position: relative;
    display: block;
    height: 420px; 
    margin-bottom: 20px;
    width: 280px;
`;

const Cover = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;

    &:nth-child(1) {
        transform: translate(0px, 0px); z-index: 4;

        &:hover {
            transform: translate(0, -10px) scale(1.02);
        }
    }

    &:nth-child(2) { transform: translate(20px, 10px); z-index: 3; }
    &:nth-child(3) { transform: translate(40px, 20px); z-index: 2; }
    &:nth-child(4) { transform: translate(60px, 30px); z-index: 1; }
`;

const Description = styled.p``;

const Title = styled.h3`
`;

interface Properties {
    description: string;
    href?: string;
    cover: string;
    title: string;
}

export const Card = ({ description, href, cover, title }: Properties) => {
    return (
        <Container>
            <CoversContainer href={href}>
            {cover.split(',').map((i) => (
                <Cover key={i} src={i} width="280" />
            ))}
            </CoversContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Container>
    );
};
