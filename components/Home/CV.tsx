import { MdOutlineArrowOutward as ArrowIcon } from "react-icons/md";

import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

import Button from '@components/common/Button';

const Container = styled.a`
    display: block;
    margin-top: ${Theme.spacing.small};
`;

export default function CV() {
    const proxy: string = 'https://docs.google.com/document/d/1CV8AYbsNaw6A7vdL_rtnj0StVZLF79TSq40HdsAdxO0/edit?usp=sharing';

    return (
        <Container href={proxy} rel="noreferrer" target="_blank">
            <Button>    
                <span>Currículo</span>
                <ArrowIcon />
            </Button>    
        </Container>
    );
}
