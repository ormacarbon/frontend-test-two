import { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global-styles";
import MainContainer from "../components/MainContainer";
import { useEffect, useState } from "react";
import {combineTheme, light, dark} from '../styles/theme/index';
import {MyThemeContext} from '../context/MyThemeContext';


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));

  function handleTheme(){
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
    const currentTheme = theme.title === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  }

  useEffect(() => {
    const typeTheme = localStorage.getItem('theme');
    typeTheme === 'light' ? setTheme(combineTheme(light)) : setTheme(combineTheme(dark)) ;
  }, [])


  return (
    <MyThemeContext.Provider value={{setTheme: handleTheme}}>
      <ThemeProvider theme={theme}>
        <MainContainer><Component {...pageProps} /></MainContainer>
        <GlobalStyles/>
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
}

export default MyApp;
