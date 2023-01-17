import Head from "next/head";

import { ThemeProvider } from "../context/themeContext";
import { MenuProvider } from "../context/menuContext";
import { SearchProvider } from "../context/searchContext";
import { MovieIdProvider } from "../context/movieIdContext";
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
            <MovieIdProvider>
              <HighlightMovieProvider>
                <Theme>
                  <GlobalStyle />
                  <Header />
                  <div id="main">
                    <Head>
                      <link rel="icon" href="/assets/images/flaticon.svg" />
                      <title>CineFinder | Discover movies</title>
                    </Head>
                    <MenuSidebar />
                    <Component {...pageProps} />
                  </div>
                </Theme>
              </HighlightMovieProvider>
            </MovieIdProvider>
          </ConfigProvider>
        </MenuProvider>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default MyApp;
