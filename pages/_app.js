import '../styles/style.css'
import React, { useEffect, useState } from 'react';
import PageHeader from '../components/page-header';
import { applicationContext } from '../context/context';

function MyApp({ Component, pageProps }) {
  const [innerWidth, setInnerWidth] = useState()
  const [width, setWidth] = useState(0); // default width, detect on server.
  const apiKey = '43090d0ed080a422f191b4b3db131431'

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
    <applicationContext.Provider value={{ apiKey, innerWidth }}>
      <PageHeader />
      <Component {...pageProps} />
    </applicationContext.Provider>
  )
}

export default MyApp
