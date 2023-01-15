import type { AppProps } from 'next/app'

import { MoviesContextProvider } from 'contexts/MoviesContext'
import { useDarkMode } from 'hooks/useDarkMode'

import { Header } from 'components/Header'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import { darkTheme, lightTheme } from 'styles/themes/default'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme, mountedComponent, themeToggler } = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!mountedComponent) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header theme={theme} themeToggler={themeToggler} />
      <MoviesContextProvider>
        <Component {...pageProps} />
      </MoviesContextProvider>
    </ThemeProvider>
  )
}
