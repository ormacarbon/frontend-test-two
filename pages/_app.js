import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import light from "../themes/light";
import dark from "../themes/dark";
import MainComponent from "../components/MainComponent";
import { UtilsContext } from "../context/utilsContext";
import usePersistedTheme from "../utils/usePersistedTheme";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersistedTheme('theme', light);

  function toggleTheme() {
      setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <UtilsContext.Provider value={{toggleTheme}}>
          <MainComponent>
            <Component {...pageProps}  />
          </MainComponent>
        </UtilsContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
