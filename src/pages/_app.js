import { GlobalProvider } from "../context/globalProvider";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from 'styled-components';
import light from "../styles/theme/light";
import dark from "../styles/theme/dark";
import { SwitchTheme } from "../components/SwitchTheme/switchTheme";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    localStorage.setItem('theme', theme.title === 'light' ? 'dark' : 'light');
  }

  return (
      <GlobalProvider>
        <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <SwitchTheme toggleTheme={ toggleTheme }/>
          <Component {...pageProps} />
        </ThemeProvider>
    </GlobalProvider>
  )
}

export default MyApp
