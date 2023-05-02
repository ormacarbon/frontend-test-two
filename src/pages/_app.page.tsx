import React from 'react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { NavbarContextProvider } from '../context/NavbarContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import Head from 'next/head'
import LoadingProvider from '../context/loading-context'
import Navbar from '../components/navbar'
import 'antd/dist/reset.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>To do</title>
      </Head>
      <LoadingProvider>
        <NavbarContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </NavbarContextProvider>
      </LoadingProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
