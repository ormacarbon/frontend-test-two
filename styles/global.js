import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body{
    font-family: ${props => props.theme.fonts.family};
    font-size: ${props => props.theme.fonts.size.medium};
    background: ${props => props.theme.colors.dark};
    color: ${ props => props.theme.colors.light};
    
    @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: ${props => props.theme.fonts.size.small};
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    text-decoration: none;
    outline: none;
    border: none;
  }

  button {
    background: none;
    font-family: ${props => props.theme.fonts.family};
  }

  a {
    text-decoration: none;
  }
`