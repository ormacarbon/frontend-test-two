import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/global-styles";
import { darkTheme } from "@/styles/themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
