import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import light from "../themes/light";
import dark from "../themes/dark";
import { useState } from "react";
import usePersistedTheme from "../utils/usePersistedTheme";


function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
