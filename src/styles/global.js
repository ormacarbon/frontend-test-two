import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    button, a {
      cursor: pointer;
    }
  }

  body {
    background: #222;
    color: #FFF;
  }

`;
