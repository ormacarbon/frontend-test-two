import React, { useEffect, useState } from 'react'

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { NavbarContextProvider } from '../context/NavbarContext'

import GlobalStyle from '../styles/global'
import { darkMode, lightMode } from '../styles/theme'
import Head from 'next/head'
import LoadingProvider from '../context/loading-context'
import Navbar from '../components/navbar'
import 'antd/dist/reset.css'
import { Switch } from 'antd'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(null)

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    setIsDarkTheme(isDark)
  }, [])

  return (
    <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
      <Head>
        <title>To do</title>
      </Head>
        <NavbarContextProvider>
          <LoadingProvider>
            <Navbar>
              <Switch checked={isDarkTheme} onChange={() => {
                setIsDarkTheme(!isDarkTheme)
                localStorage.setItem('theme', !isDarkTheme ? 'dark' : 'light')
              }}/>
            </Navbar>
            <Component {...pageProps} />
          </LoadingProvider>
        </NavbarContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
