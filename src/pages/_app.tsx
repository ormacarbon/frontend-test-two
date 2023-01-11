import { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../componentes/Header';
import { CartContextProvider } from '../context/CartContext';
import { GlobalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';
import { darkTheme } from '../styles/themes/darkTheme';
import { lightTheme } from '../styles/themes/lightTheme';

type Theme = 'light' | 'dark'

interface ThemeContextType {
  currentTheme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType)

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark')

  function toggleTheme() {
    currentTheme === 'dark' ? setCurrentTheme('light') : setCurrentTheme('dark')
  }
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <GlobalStyles />
        <CartContextProvider>
          <Container>
            <Header />
            <Component {...pageProps} />
          </Container>
        </CartContextProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
