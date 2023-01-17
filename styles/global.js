import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    list-style: none;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    background: ${(props) => props.theme.colors.background};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  :root {
    --gray: #889297;
    --blue: #3E64FF;
    --blue-100: #597AFF;
    --white: #FFFFFF;
  }
`;

export const Main = styled.div`
  margin: 2rem auto;
  max-width: 45rem;
  min-height: 100vh;
  padding: 1.5rem;
  @media screen and (max-width: 500px) {
    margin: 1rem auto;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: ${(props) => (props.align ? props.align : "left")};
  margin-bottom: ${(props) => (props.bottom ? props.bottom : "1rem")};
  color: ${(props) => props.theme.colors.title};
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.textSecundary};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  line-height: 1.5;
  & + p {
    margin-top: 1rem;
  }
`;
