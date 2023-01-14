import { ThemeContext } from "styled-components";
import { GlobalStyles } from "@/styles/global-styles";
import { QueryProvider } from "@/contexts/QueryContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <QueryProvider pageProps={pageProps}>
      <ThemeProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </QueryProvider>
  );
}

export default MyApp;
