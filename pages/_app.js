import GlobalStyles from "../globalStyles";
import GlobalProvider, { GlobalContext } from "../contexts/state";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { useContext, useState } from "react";
import ColorModeProvider, { ColorModeContext } from "../contexts/ColorMode";
useState;

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
