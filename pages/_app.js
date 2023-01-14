import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import light from "../themes/light";
import dark from "../themes/dark";
import { useState } from "react";
import MainComponent from "../components/MainComponent";


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <MainComponent toggleTheme={toggleTheme}>
          <Component {...pageProps}  />
        </MainComponent>
      </ThemeProvider>
    </>
  )
}

export default MyApp
