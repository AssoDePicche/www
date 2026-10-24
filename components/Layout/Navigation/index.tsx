'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { useState } from 'react';

import { IoMdMenu as Open } from 'react-icons/io';

import { MdClose as Close } from 'react-icons/md';

import styled from 'styled-components';

import { Theme } from '@components/Layout/Theme';

function useSidebar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const pathname = usePathname();

    return {
        isOpen,
        pathname,
        toggle: () => setIsOpen(!isOpen),
    };
}

function Item({ href, isActive, name }: { href: string, isActive: boolean, name: string }) {
    return (
        <StyledItem $isActive={isActive}>
            <StyledLink href={href}>{name}</StyledLink>
        </StyledItem>
    );
}

export default function Sidebar() {
    const { isOpen, pathname, toggle } = useSidebar();

    const items: [string, string][] = [
        ['/', 'Home'],
        ['/blog', 'Blog'],
    ];

    return (
        <Container>
            <Trigger $isOpen={isOpen} onClick={toggle}>
                {isOpen ? <Close /> : <Open />}
            </Trigger>

            <Logo href="/">www.</Logo>

            <List $isOpen={isOpen}>
                {items.map(([href, name]: [string, string], key: number) => (
                    <Item key={key} href={href} isActive={pathname === href} name={name} />
                ))}
            </List>
        </Container>
    );
}

const Container = styled.div`
    align-items: center;
    display: flex;
    height: 4rem;
    justify-content: space-between;
    max-width: 86rem;
    position: relative;
    width: 100%;

    @media(max-width: ${Theme.breakpoints.sm}) {
        padding: 1rem 2rem;
    }
`;

const Logo = styled(Link)`
    color: ${Theme.colors.accent};
    font-size: ${Theme.typography.size.small};
    font-weight: bold;
    text-transform: uppercase;
`;

const Trigger = styled.div<{ $isOpen: boolean }>`
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-size: 28px;
    width: fit-content;
    position: relative;
    color: ${(props) => (props.$isOpen ? 'white' : 'inherit')};
    z-index: 10000;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: ${Theme.breakpoints.sm}) {
        display: none;
    }
`;

const List = styled.ul<{ $isOpen: boolean }>`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 767px) {
        display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
        align-items: center;
        background-color: ${Theme.colors.background}; 
        flex-direction: column;
        gap: 16px;
        height: 100vh;
        justify-content: center;
        left: 0;
        overflow: hidden;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 9999;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 24px;
        align-items: center;
    }
`;

const StyledItem = styled.li<{ $isActive: boolean }>`
    font-size: 20px;
    font-weight: ${(props) => props.$isActive ? 'bold' : 'normal'};
    line-height: 1.5;
    text-transform: uppercase;
    width: fit-content;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`;

const StyledLink = styled.a`
    color: white;
    text-decoration: none;

    @media (min-width: 768px) {
        color: inherit; 
    }
`;
