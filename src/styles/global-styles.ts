import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
  }


  html, body, #__next {
    height: 100%;
  }

  *::-webkit-scrollbar {
    width: 0.20rem;
    height: 0.25rem;

    @media screen and (min-width: 800px) {
      width: 0.5rem;
      height: 0.5rem;
    }
  }
  *::-webkit-scrollbar-track{
    background-color: ${({ theme }) => theme.colors.background3};
    border-radius:  ${({ theme }) => theme.radii.md},
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius:  ${({ theme }) => theme.radii.md};
    border: none;
    outline: none;
  }


  body {
    background-color: ${({ theme }) => theme.colors.background1};
    color: ${({ theme }) => theme.colors.text1};
  }
`;
