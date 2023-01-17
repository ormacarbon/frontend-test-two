import { GlobalProvider } from "../context/globalProvider";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from 'styled-components';
import light from "../styles/theme/light";
import dark from "../styles/theme/dark";
import { SwitchTheme } from "../components/SwitchTheme/switchTheme";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    localStorage.setItem('theme', theme.title === 'light' ? 'dark' : 'light');
  }

  return (
      <GlobalProvider>
        <ThemeProvider theme={ theme }>
          <Head>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            <title>Weather App</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;700&family=Poppins:wght@100;400;500;600;700&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"></link>
          </Head>
          <GlobalStyle />
          <SwitchTheme toggleTheme={ toggleTheme }/>
          <Component {...pageProps} />
        </ThemeProvider>
    </GlobalProvider>
  )
}

export default MyApp
