import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: #CDD3D5;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
`;