import React from "react";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import ThemeContextProvider from "../hooks/useTheme";
import Header from "../components/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />;
      </QueryClientProvider>
    </ThemeContextProvider>
  );
}
