import { createGlobalStyle } from 'styled-components';

const RusticCharm = {
  CHARCOAL_BROWN: '#403d39',
  CARBON_BLACK: '#252422',
  FLORAL_WHITE: '#fffcf2',
  SILVER: '#ccc5b9',
  SPICY_PAPRIKA: '#eb5e28',
};

export const Theme = {
  breakpoints: {
    sm: '40rem',
    md: '48rem',
    lg: '64rem',
  },
  colors: {
    accent: RusticCharm.SILVER,
    background: RusticCharm.CARBON_BLACK,
    font: RusticCharm.FLORAL_WHITE,
  },
  fonts: {
    primary: 'Geist',
  },
  palette: {
    rusticCharm: RusticCharm,
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
    background-color: red;
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
