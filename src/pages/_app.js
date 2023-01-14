import Head from "next/head";
import { Header } from "../components";
import GlobalStyles from "../shared/styles";

import { ThemeProvider } from "../shared/contexts/ThemeContext";
import { ToggleTheme } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rick and Morty API Consumer</title>
      </Head>
      <ThemeProvider>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
        <ToggleTheme />
      </ThemeProvider>
    </main>
  );
}

export default MyApp;
