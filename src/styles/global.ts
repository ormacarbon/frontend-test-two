import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
     html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

    body {
      background: ${(props) => props.theme.body};
      -webkit-font-smoothing: antialiased;
      color: ${(props) => props.theme.text}
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    } 

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }
`
