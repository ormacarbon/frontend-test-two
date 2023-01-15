import GlobalStyles from "../globalStyles";
import GlobalProvider from "../contexts/state";
import { ThemeProvider } from "styled-components";
import { useContext, useState } from "react";
import ColorModeProvider, { ColorModeContext } from "../contexts/ColorMode";
useState;

const theme = {
  light: {
    backgroundBase: "#f9f9f9",
    backgroundLevel1: "#ffffff",
    backgroundLevel2: "#f0f0f0",
    backgroundLevel3: "#909090",
    borderBase: "#e5e5e5",
    textColorBase: "#222222",
  },
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    backgroundLevel3: "#373737",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
}

function ProvideWrapper({ children }) {
  return (
    <ColorModeProvider inicialMode={"light"}>
      {children}
    </ColorModeProvider>
  );
}

export function MyApp({ Component, pageProps }) {
  const context = useContext(ColorModeContext);

  return (
    <GlobalProvider>
      <ThemeProvider theme={theme[context.mode]}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default function _App(props) {
  return (
    <ProvideWrapper>
      <MyApp {...props} />
    </ProvideWrapper>
  );
}

export async function getServerSideProps(context) {
  const cookies = parseCookies(context)
  console.log('[cookies]', cookies, cookies.USER_THEME)
  return{
    props: {
      USER_THEME: cookies.USER_THEME
    }
  }
}
