import { GlobalStyles } from "../styles/GlobalStyle";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import { useState, useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Head>
        <title>The Movies</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStateContext.Provider
        value={{
          theme,
          setTheme,
        }}
      >
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </GlobalStateContext.Provider>
    </>
  );
}
