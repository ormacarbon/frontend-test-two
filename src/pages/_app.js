import { HeaderComponent } from "../Components/Header";
import { ThemeProvider } from "../Context";
import { GlobalStyle } from "../styles/GlobalStyle";
import Theme from "../styles/themes/Theme";


function MyApp({ Component, pageProps }) {
  return (
        <ThemeProvider>
          <Theme>
            <HeaderComponent/>
            <GlobalStyle />
            <Component {...pageProps} />
          </Theme>
        </ThemeProvider>
  );
}

export default MyApp;
