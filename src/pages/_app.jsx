import { ThemeProvider } from "../context/themeContext";
import { MenuProvider } from "../context/menuContext";
import { ConfigProvider } from "../context/apiConfigContext";
import { HighlightMovieProvider } from "../context/highlightMovieContext";

import { GlobalStyle, Theme } from "../styles/theme";

import { Header } from "../components/header/header";
import { MenuSidebar } from "../components/menuSidebar/menuSidebar";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MenuProvider>
        <ConfigProvider>
          <HighlightMovieProvider>
            <Theme>
              <GlobalStyle />
              <Header />
              <div id="main">
                <MenuSidebar />
                <Component {...pageProps} />
              </div>
            </Theme>
          </HighlightMovieProvider>
        </ConfigProvider>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default MyApp;
