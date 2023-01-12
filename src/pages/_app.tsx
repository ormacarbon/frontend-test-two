import { MoviesContextProvider } from 'contexts/MoviesContext'
import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'styles/global'
import { defaultTheme } from 'styles/themes/default'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MoviesContextProvider>
        <Component {...pageProps} />
      </MoviesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
