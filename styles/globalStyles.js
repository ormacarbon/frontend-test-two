import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    font-family:Helvetica;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
main{
    min-height: 70vh;
}

`
export default GlobalStyles;