import { GlobalStyles } from "../styles/GlobalStyle";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../themes/light";
import { darkTheme } from "../themes/dark";
import { GlobalStateContext } from "../contexts/GlobalStateContext";
import { useState, useEffect } from "react";
import { ThemeProvider as MuiTheme, createTheme } from "@mui/material/styles";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

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
          <MuiTheme theme={muiTheme}>
            <Component {...pageProps} />
            <GlobalStyles />
          </MuiTheme>
        </ThemeProvider>
      </GlobalStateContext.Provider>
    </>
  );
}
