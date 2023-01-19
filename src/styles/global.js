import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  } 

  body {
    background: ${(props) => props.theme.colors.background};
  }
`;

export const Flex = styled.div`
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  height: ${(props) => (props.fullHeight ? "100%" : "")};

  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "16px"};
`;
