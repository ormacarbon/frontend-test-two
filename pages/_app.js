
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import {darkTheme, lightTheme, GlobalStyles} from '../ThemeConfig';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light") 
  
  return (
    <ThemeProvider  theme={theme == 'light' ? lightTheme : darkTheme}> 
   
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
