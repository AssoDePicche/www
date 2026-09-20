import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

const Button = styled.button`
    align-items: center;
    background: none;
    border-radius: 9999px;
    border: 0.4rem solid ${Theme.colors.accent};
    color: ${Theme.colors.font};
    display: flex;
    font-family: Geist;
    font-size: 1.4rem;
    height: 4.8rem;
    justify-content: center;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    min-width: 20rem;

    &:hover {
        background-color: rgba(255, 255, 255, .04);
        border-color: rgba(255, 255, 255, .145);
        cursor: pointer;
    }

    @media(max-width: ${Theme.breakpoints.sm}) {
        font-size: 1.8rem;
        height: 6.4rem;
        min-width: 32rem;
        width: 100%;
    }
`;

export default Button;
