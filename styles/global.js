import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body{
    font-size: ${props => props.theme.fonts.size.medium};
    background: ${props => props.theme.colors.background};
    color: ${ props => props.theme.colors.text};
    transition: background 0.3s, color 0.3s, border 0.3s; 
    font-weight: 500;
    
    @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: ${props => props.theme.fonts.size.small};
    }
  }

  * {
    font-family: ${props => props.theme.fonts.family};
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
  }

  a {
    text-decoration: none;
  }
`