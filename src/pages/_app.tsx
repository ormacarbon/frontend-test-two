import { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../components/DarkTheme';
import { Header } from '../components/Header';
import { LikeContextProvider } from '../context/FavoritesContext';
import { GlobalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';
import { darkTheme } from '../styles/themes/dark';
import { lightTheme } from '../styles/themes/light';

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
        <LikeContextProvider>
            <Container>
                <DarkTheme />
                <Header />
                <Component {...pageProps} />
            </Container>
        </LikeContextProvider>
        </ThemeContext.Provider>
    </ThemeProvider>
  )
}
