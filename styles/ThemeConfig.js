import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	body: "#DAB9A4",
	text: "#2E294E",
	text2: "#DAB9A4",
	borderColor: "#2E294E",
	primary: "#CB4A5B",
};

export const darkTheme = {
	body: "#2E294E",
	text: "#DAB9A4",
	text2: "#2E294E",
	borderColor: "#DAB9A4",
	primary: "#CB4A5B",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: monospace;
	font-size: large;
	scrollbar-color: ${({ theme }) => theme.borderColor};
	padding: 10px;
  }

  ::-webkit-scrollbar {
   width: 10px;
  }

  ::-webkit-scrollbar-thumb {
   background: ${({ theme }) => theme.borderColor};
   border-radius: 15px;
  }

`;
