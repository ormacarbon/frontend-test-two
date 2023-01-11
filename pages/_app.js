import { HeaderComponent } from "../Components/Header";
import { ThemeStore } from "../Context/ThemeStore";
import { GlobalStyle } from "../styles/GlobalStyle";
import Theme from "../styles/themes/Theme";


function MyApp({ Component, pageProps }) {
  return (
    <>  
        <ThemeStore>
          <Theme>
            <HeaderComponent/>
            <GlobalStyle />
            <Component {...pageProps} />
          </Theme>
        </ThemeStore>
    </>
  );
}

export default MyApp;
