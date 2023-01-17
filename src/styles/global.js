import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --black: #111111;
    --white: #FFFFFF;
    --gray-100: #EFEFEF;
    --gray-200: #E0E0E0;
    --gray-400: #9D9D9D;
    --gray-500: #A8A8A8;
    --gray-600: #484848;
    --gray-800: #222222;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    button, a {
      cursor: pointer;
    }

    button:disabled, a:disabled {
      cursor: not-allowed;
    }
  }

  body {
    background: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.fontColor};
  }

  button, a {
    background: ${({ theme }) => theme.bodyColor};
    color: ${({ theme }) => theme.fontColor};
  }
`;
