import { createGlobalStyle } from 'styled-components';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
    font-family: ${inter.style.fontFamily};
  }
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0
  }

  body {
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    -webkit-font-smoothing: antialiased
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;
