import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import themeExternal from "../styles/theme";

export const ThemeContext = createContext();

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState({ ...themeExternal });

  const toggleTheme = () => {
    setTheme({
      ...themeExternal,
      mode: theme.mode === "light" ? "dark" : "light",
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function getInitialProps(appContext) {
  const appProps = App.getInitialProps(appContext);
  return { ...appProps };
}

export default MyApp;
