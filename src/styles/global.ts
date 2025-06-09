import { createGlobalStyle } from 'styled-components';
import { robotoMono, robotoSans } from './fonts';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ${robotoSans.variable}, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #f7f7f7;
  }

  :root {
    ${robotoSans.variable}: ${robotoSans.style.fontFamily};
    ${robotoMono.variable}: ${robotoMono.style.fontFamily};
  }
`;
