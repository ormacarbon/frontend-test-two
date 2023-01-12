import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#DAB9A4",
	text: "#2E294E",
	primary: "#CB4A5B",
};

export const darkTheme = {
	body: "#2E294E",
	text: "#DAB9A4",
	borderColor: "#B2917C",
	primary: "#CB4A5B",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: monospace;
	font-size: large;
  }
`;
