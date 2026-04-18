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
  @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  html, body {
    min-height: 100%;
    min-width: 100%;
  }

  html {
    background-color: ${Theme.colors.background};
    color: ${Theme.colors.font};
    font-size: 62.5%;
  }

  body {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: ${Theme.fonts.primary};
    font-optical-sizing: auto;
    justify-content: center;
  }
`;
