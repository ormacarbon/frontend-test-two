import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  .react-switch {
    position: absolute !important;
    height: 2rem;
    width: 4rem;
    top: 2rem;
    right: 10%;
  }
`;