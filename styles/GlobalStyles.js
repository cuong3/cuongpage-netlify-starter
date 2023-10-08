import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    font-size: 20px;
    background: #f4f4f4;
    color: #333;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;