import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { GlobalStyle, Main } from "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
