import { createGlobalStyle } from 'styled-components';

const RusticCharm = {
    CHARCOAL_BROWN: '#403d39',
    CARBON_BLACK: '#252422',
    FLORAL_WHITE: '#fffcf2',
    SILVER: '#ccc5b9',
    SPICY_PAPRIKA: '#eb5e28',
};

const pallete = {
    dark: {
        base: RusticCharm.CARBON_BLACK,
        surface: RusticCharm.CHARCOAL_BROWN,
        elevated: RusticCharm.SILVER,
    },
    white: RusticCharm.FLORAL_WHITE,
};

export const Theme = {
    borderRadius: {
        small: 6,
        medium: 12,
        pill: 9999,
    },
    breakpoints: {
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
    },
    colors: {
        accent: pallete.dark.elevated,
        background: pallete.dark.base,
        font: pallete.white,
        outline: pallete.dark.surface,
        border: {
            focus: '',
            strong: '',
            subtle: '',
        },
        text: {
            primary: '',
            secondary: '',
        },
    },
    fonts: {
        primary: 'Geist',
    },
    fontSize: {
        small: '14px',
        base: '16px',
        large: '20px',
    },
    palette: {
        rusticCharm: RusticCharm,
    },
    spacing: {
        large: '2.4rem',
        medium: '1.75rem',
        small: '0.75rem',
    },
    typography: {
        family: {
            primary: 'Geist',
        },
        size: {
            base: '1.6rem',
            small: '1.4rem',
            large: '2rem',
        },
        weight: {
            regular: 400,
            medium: 500,
            bold: 700,
        },
    },
};

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
}

html {
    background-color: ${Theme.colors.background};
    font-size: 62.5%;
    height: 100%;
    width: 100%;
}

body {
    align-items: center;
    background-color: ${Theme.colors.background};
    color: ${Theme.colors.font};
    display: flex;
    flex-direction: column;
    font-family: ${Theme.fonts.primary};
    font-optical-sizing: auto;
    min-height: 100%;
    justify-content: center;
    width: 100%;
}
`;
