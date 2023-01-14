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

  // Theme state 
  const [theme, setTheme] = useState(lightTheme)


  // Function for change theme 
  const onChangeTheme = () => {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme)
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon-16x16.png" type="image/x-icon" />
        <title>Rick and Morty Universe</title>
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
