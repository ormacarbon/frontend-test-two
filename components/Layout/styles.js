import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.body};;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 500px) {
  html {
    display: flex;
  }}

  html, * {
    box-sizing: border-box;
  }
`;

export const HeaderStyle = styled.div`
  background: #52796f;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LightTheme = {
  body: "#fefae0",
  background: "#52796f",
};

export const DarkTheme = {
  body: "#766153",
};

export const Hr = styled.hr`
  border: 1px solid;
  margin-top: 0;
  margin-bottom: 16px;
`;

export const LayoutButtoms = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  transition: color 0.2s ease-in;
  &:hover {
    color: #f2f2f2;
  }
  cursor: pointer;
`;

export const RightButtoms = styled.div`
  display: flex;
`;
