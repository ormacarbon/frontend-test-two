import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body{
    background:  ${(props) => props.theme.colors.primary100};
    color: ${(props) => props.theme.colors.secondary100};
    overflow-x: hidden;
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