import { AppProps } from 'next/app';
import { createContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from '../components/DarkTheme';
import { Header } from '../components/Header';
import { GlobalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';
import { darkTheme } from '../styles/themes/dark';
import { lightTheme } from '../styles/themes/light';
import { ContextAplicattionProvider } from '../context/ContextAplicattion';

type Theme = 'light' | 'dark'

interface ThemeContextType {
  currentTheme: Theme;
  toggleTheme: () => void;
}

const THEME_STORAGE_KEY = "Theme:currentTheme";

export const ThemeContext = createContext({} as ThemeContextType)

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (storedTheme) {
        return JSON.parse(storedTheme);
      }
    }
    return []
  });

  function toggleTheme() {
    currentTheme === 'dark' ? setCurrentTheme('light') : setCurrentTheme('dark')
  }

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(currentTheme));
  }, [currentTheme]);
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <GlobalStyles />
        <ContextAplicattionProvider>
            <Container>
                <DarkTheme />
                <Header />
                <Component {...pageProps} />
            </Container>
        </ContextAplicattionProvider>
        </ThemeContext.Provider>
    </ThemeProvider>
  )
}
