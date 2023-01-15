import { ThemeProvider } from 'next-themes';
import React from 'react';
import Footer from '../components/footer';
import PageHeader from '../components/page-header';
import { applicationContext } from '../context/context';
import '../styles/style.css';


function MyApp({ Component, pageProps }) {
  const apiKey = '43090d0ed080a422f191b4b3db131431'

  return (
    <ThemeProvider>
      <applicationContext.Provider value={{ apiKey }}>
        <PageHeader toggleTheme={() => toggleTheme()} />
        <Component {...pageProps} />
        <Footer />
      </applicationContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp
