import '../styles/style.css'
import React, { useEffect, useState } from 'react';
import PageHeader from '../components/page-header';
import { applicationContext } from '../context/context';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark-theme');
  const apiKey = '43090d0ed080a422f191b4b3db131431'

  const toggleTheme = () => {
    setTheme(theme == "white-theme" ? "dark-theme" : "white-theme");
  }
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme')
    // document.body.classList.add('white-theme')
  }, [theme]);


  return (
    <applicationContext.Provider value={{ apiKey, theme }}>
      <PageHeader theme={theme} toggleTheme={() => toggleTheme()} />
      <Component {...pageProps} />
    </applicationContext.Provider>
  )
}

export default MyApp
