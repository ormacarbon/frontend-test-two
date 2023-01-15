import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import { PokemonProvider } from '../context/context'
import Global from '../styles/global'
import { main } from '../styles/main'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={main}>
      <PokemonProvider>
        <Global />
        <Header title={'Pokedex'} />
        <Component {...pageProps} />
      </PokemonProvider>
    </ThemeProvider>
  )
}

export default MyApp
