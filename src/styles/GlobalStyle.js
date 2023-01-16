import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  img {
    width: 100%;
    display: block;
  }
`;
