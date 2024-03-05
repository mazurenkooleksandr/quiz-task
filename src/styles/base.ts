import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  body,
  input,
  textarea,
  select,
  button {
    font-weight: 400;
  }

  a, button {
    outline: none;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 700;
  }

  ul, ol {
    list-style: none;
  }
`;
