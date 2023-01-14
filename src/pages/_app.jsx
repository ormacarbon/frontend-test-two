import { ThemeProvider } from "../context/themeContext";
import { Header } from "../components/header/header";

import { GlobalStyle, Theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Theme>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}

export default MyApp;
