import { useState } from "react";
import { ThemeProvider } from "styled-components";
import MainContainer from "../components/MainContainer";
import { GlobalStyle } from "../styles/global";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "../styles/themes/themeConfig";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <MainContainer>
        <button onClick={toggleTheme}>Change Mode</button>
        <Component {...pageProps} />
        <GlobalStyle />
      </MainContainer>
    </ThemeProvider>
  );
}

export default MyApp;
