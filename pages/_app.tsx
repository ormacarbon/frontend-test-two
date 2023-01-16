import { useState } from 'react'
import { AppProps} from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { Header } from '../src/components/Header'
import { GlobalStyle } from '../src/styles/global'

import light from "../src/styles/themes/light"
import dark from "../src/styles/themes/dark"

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark)

  function onChangeTheme(): void {    

    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <>
      <Head>
        <title>Teste Frontend - Orma Carbon</title>
      </Head>
        <ThemeProvider theme={theme}>
          <Header onChangeTheme={onChangeTheme} />
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>

    </>
  )
}

export default MyApp
