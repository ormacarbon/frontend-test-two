import { ThemeProvider } from "../context/themeContext";
import { MenuProvider } from "../context/menuContext";
import { SearchProvider } from "../context/searchContext";
import { ConfigProvider } from "../context/apiConfigContext";
import { HighlightMovieProvider } from "../context/highlightMovieContext";

import { GlobalStyle, Theme } from "../styles/theme";

import { Header } from "../components/header/header";
import { MenuSidebar } from "../components/menuSidebar/menuSidebar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SearchProvider>
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
      </SearchProvider>
    </ThemeProvider>
  );
}

export default MyApp;
