import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Header } from '../componentes/Header';
import { CartContextProvider } from '../context/CartContext';
import { GlobalStyles } from '../styles/global';
import { Container } from '../styles/pages/app';
import { defaultTheme } from '../styles/themes/default';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CartContextProvider>
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </CartContextProvider>
    </ThemeProvider>
  )
}
