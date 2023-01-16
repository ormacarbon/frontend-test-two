import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import { PokemonContextProvider } from "../context/pokemonContext"
import { RouteContextProvider } from '../context/routeContext'
import ThemeContextProvider, { ThemeContext } from '../context/themeContext'
import { useContext } from "react";

function ThemeWrapper({ children }) {
  return (
    <ThemeContextProvider dark={true}>
      {children}
    </ThemeContextProvider>
  );
}

export function MyApp({ Component, pageProps }) {
  const { theme } = useContext(ThemeContext);

  return (
    <RouteContextProvider>
      <PokemonContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PokemonContextProvider>
    </RouteContextProvider>
  )
}

export default function App(props) {
  return (
    <ThemeWrapper>
      <MyApp {...props} />
    </ThemeWrapper>
  );
}
