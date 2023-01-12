//? Next
import Head from "next/head";
//? COMPONENTS
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
//? Styled ThemeProvider
import { ThemeProvider } from "styled-components";
import lightTheme from '../../themes/light'
import darkTheme from '../../themes/dark'
//? React Dependences
import { useState } from "react";

export default function Layout({ children }) {

  const [theme, setTheme] = useState(lightTheme)

  const onChangeTheme = () => {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme)
  }

  return (
    <>
      <Head>
        {/* ADD LINK FOR FAVICON */}
        <title>Rick and Morty NEXT</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Navbar onChangeTheme={onChangeTheme}/>
        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}
