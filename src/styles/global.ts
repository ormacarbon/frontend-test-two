import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px 'Inter', sans-serif;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    min-height: 100vh;
    padding: 30px 10px;
  }

  a {
    color: ${props => props.theme.colors.background};
    text-decoration: none;
  }
`
