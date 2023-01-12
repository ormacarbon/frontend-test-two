import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Layout from '../components/Layout'
import { PokemonContextProvider } from "../context/pokemonContext"

function MyApp({ Component, pageProps }) {
  return (
    <PokemonContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </PokemonContextProvider>
  )
}

export default MyApp
