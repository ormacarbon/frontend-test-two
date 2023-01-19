import React from 'react';
import { useDarkMode } from '../components/useDarkMode';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from '../styles/GlobalStyles';
import { lightTheme, darkTheme } from "../components/Theme"
import { Items } from '../styles/NavBarStyles'
import Toggle from '../components/Toggler';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <Items>
          <NavBar />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </Items>
        <Component {...pageProps}/>
      </>
    </ThemeProvider>
  );
}

export default MyApp
