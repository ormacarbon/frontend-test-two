import { useState } from 'react';
import GlobalStyles from '../../src/styles/global';
import { Lexend } from '@next/font/google';
import { LightTheme, DarkTheme } from '../styles/themes/themes';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../components/Context';

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '500']
});

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

	return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <main className={lexend.className}>
          <Component {...pageProps} />
          <GlobalStyles />
        </main>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default MyApp;
