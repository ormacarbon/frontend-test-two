import { createGlobalStyle } from 'styled-components';

type GlobalStylesProps = {
  isDarkTheme: boolean
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  body {
    overflow-x: hidden;
    color: ${({ isDarkTheme, theme }) => (
      isDarkTheme ? theme.colors.white[100] : theme.colors.gray[700]
    )};
    background: ${({ isDarkTheme, theme }) => (
      isDarkTheme ? theme.colors.gray[700] : theme.colors.white[100]
    )};
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export { GlobalStyles };
