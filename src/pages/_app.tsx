import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/global-styles";
import { darkTheme } from "@/styles/themes";
import { QueryProvider } from "@/contexts/QueryContext";

function MyApp({ Component, pageProps }) {
  return (
    <QueryProvider pageProps={pageProps}>
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </QueryProvider>
  );
}

export default MyApp;
