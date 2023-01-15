import React from 'react';
import { useDarkMode } from '../components/useDarkMode';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from '../styles/GlobalStyles';
import { lightTheme, darkTheme } from "../components/Theme"
import Toggle from '../components/Toggler';

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Component {...pageProps}/>
      </>
    </ThemeProvider>
  );
}

export default MyApp
