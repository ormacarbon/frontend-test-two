import React, { type FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Head from 'next/head'
import LoadingProvider from '../context/loading-context'
import 'antd/dist/reset.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>To do</title>
      </Head>
      <LoadingProvider>
        <Component {...pageProps} />
      </LoadingProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
