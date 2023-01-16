import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  
};

export const darkTheme = {
  body: "linear-gradient(311deg, rgba(2,0,36,1) 0%, rgba(5,5,23,1) 99%, rgba(14,14,14,1) 100%)",
  fontColor: "#fff",
  
};

export const GlobalStyles = createGlobalStyle`
	html {
		background: ${(props) => props.theme.body}; 
    color: ${(props) => props.theme.fontColor}   
	}

  




  * {
    box-sizing: border-box;
    font-family: "Opens-Sans", sans-serif;
    padding: 0;
    margin: 0;

  }



`;
