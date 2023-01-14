import React from "react";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedStateFunction from "../utils/usePersistedState";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import GlobalStyle from "../styles/global";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedStateFunction("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Component {...pageProps} />;
      </QueryClientProvider>
    </ThemeProvider>
  );
}
