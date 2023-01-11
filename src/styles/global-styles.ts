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
    height: 100%
  }

  *::-webkit-scrollbar {
    width: 0.75rem;
    height: 0.75rem;
  }
  *::-webkit-scrollbar-track{
    background-color: ${({ theme }) => theme.colors.background3};
    border-radius:  ${({ theme }) => theme.radii.md},
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.background1};
    border-radius:  ${({ theme }) => theme.radii.md};
    border: none;
    outline: none;

    &:hover {
      filter: brightness(1.5);
    }
    &:active {
      background-color: ${({ theme }) => theme.colors.background1};
    }
  }


  body {
    background-color: ${({ theme }) => theme.colors.background1};
    color: ${({ theme }) => theme.colors.text1};
  }
`;
