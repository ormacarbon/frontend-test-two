import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: #333;
    font-size: 14px;
    overflow-x: hidden;
  }

  .react-switch {
    position: absolute !important;
    height: 2rem;
    width: 4rem;
    top: 2.4rem;
    right: 1%;
    z-index: 10;

    @media (max-width: 1000px) {
      top: 1.4rem;
    }
  }
`;