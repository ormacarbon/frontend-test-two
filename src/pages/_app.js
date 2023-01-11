import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';

import { defaultTheme } from '../styles/theme/defaultTheme';
import { GlobalStyle } from '../styles/global';
import { DarkModeProvider } from '../contexts/DarkMode';
import { Header } from '../components/partials/Header';

function MyApp({ Component, pageProps }) {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <DarkModeProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header black={blackHeader} />
        <Component {...pageProps} />
      </ThemeProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
