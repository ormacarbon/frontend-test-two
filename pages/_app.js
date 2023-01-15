import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import { PokemonProvider } from '../context/context'
import useStateFromLocalStorage from '../hooks/useStateFromLocalStorage'
import Global from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useStateFromLocalStorage('theme', light);

  // if (!theme) return <h1>oie...</h1>
  
  function handleChangeTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme || light}>
      <PokemonProvider>
        <Global />
        <Header handleTheme={handleChangeTheme} titleName={'Pokedex'} />
        <Component {...pageProps} />
      </PokemonProvider>
    </ThemeProvider>
  )
}

export default MyApp
