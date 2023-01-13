import React from "react";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import ThemeContextProvider from "../hooks/useTheme";

import "../styles/globals.css";
import Header from "../components/Header";

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
