import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body{
    background-color: ${({theme}) => theme.colors.gray900};
    color: ${({theme}) => theme.colors.gray100};
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