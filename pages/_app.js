import { Layout } from "../components/Layout";
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { useState, createContext } from 'react'

import darkTheme from '/components/themes/dark'
import lightTheme from '/components/themes/light'

const ThemeContext = createContext()
export {ThemeContext}

export default function App({ Component, pageProps }) {

  const [dark, setDark] = useState(true)

  return (
    <>
      <ThemeProvider theme={dark? darkTheme : lightTheme}>
        <GlobalStyle />
        <ThemeContext.Provider value={{dark, setDark}}>
          <Layout />
            <Component {...pageProps}/>
          </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
}

 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${props => props.theme.backgroundColor};
  }
  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.backgroundColor}
}
::-webkit-scrollbar {
    width: 10px;
    background-color: ${props => props.theme.backgroundColor}
}
::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.color}
}
`;
 

