import { Poppins } from "@next/font/google";
import React from "react";

import { SceneContextProvider } from "../contexts/SceneContext";
import { ThemeContextProvider } from "../contexts/ThemeContext";

import { GlobalStyle } from "../styles/global";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <SceneContextProvider>
        <ThemeContextProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeContextProvider>
      </SceneContextProvider>
    </div>
  );
}
