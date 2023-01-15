import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Layout from '../components/Layout'
import { PokemonContextProvider } from "../context/pokemonContext"
import { RouteContextProvider } from '../context/routeContext'

function MyApp({ Component, pageProps }) {
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

export default MyApp
