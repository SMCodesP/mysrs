import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, body > div {
    font-family: 'Rubik', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.foreground};
  }
`;
