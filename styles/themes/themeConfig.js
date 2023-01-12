import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  title: "dark",

  primary: "#333",
  secondary: "#b0aaaa",

  background: "#222",
  text: "#fff",
};

export const lightTheme = {
  title: "light",

  primary: "#ffcc01",
  secondary: "#385ba9",

  background: "#fff",
  text: "#222",
};

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;
