import { Poppins } from "@next/font/google";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/global";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
