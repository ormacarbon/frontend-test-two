import '../styles/style.css'
import React, { useEffect, useState } from 'react';
import PageHeader from '../components/page-header';
import { applicationContext } from '../context/context';

function MyApp({ Component, pageProps }) {
  const [innerWidth, setInnerWidth] = useState()
  const [theme, setTheme] = useState('dark-theme');
  const [width, setWidth] = useState(0);
  const apiKey = '43090d0ed080a422f191b4b3db131431'

  const toggleTheme = () => {
    setTheme(theme == "white-theme" ? "dark-theme" : "white-theme");
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme')
    document.body.classList.add('white-theme')
  }, [theme]);

  useEffect(() => {
    setInnerWidth(window.innerWidth)
  }, [width])

  const useWidth = () => {
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
  };


  useWidth()

  return (
    <applicationContext.Provider value={{ apiKey, innerWidth, theme }}>
      <PageHeader theme={theme} toggleTheme={() => toggleTheme()} />
      <Component {...pageProps} />
    </applicationContext.Provider>
  )
}

export default MyApp
