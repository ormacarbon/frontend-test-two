import { useState } from "react";
import { ThemeProvider } from "styled-components";
import MainContainer from "../components/MainContainer";
import { GlobalStyle } from "../styles/global";
import { lightTheme, darkTheme } from "../styles/themes/themeConfig";
import { NameContext } from "../components/Context";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");
  const [name, setName] = useState("");
  const [user, setUser] = useState("");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <NameContext.Provider value={{ name, setName, user, setUser }}>
        <MainContainer>
          <button onClick={toggleTheme}>Change Mode</button>
          <Component {...pageProps} />
          <GlobalStyle />
        </MainContainer>
      </NameContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
