import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body{
    background: ${({theme}) => theme.colors['primary-100']};
    color: ${({theme}) => theme.colors['secondary-100']};
    -webkit-font-smoothing: antialised;
  };

  body, input textarea, button{
    font-family: Roboto;
    font-weight: 400;
  };

  button {
    cursor: pointer;
  }
`