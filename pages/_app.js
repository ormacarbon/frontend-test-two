import '../styles/globalCss.css'
import { Fragment } from "react";
import { GlobalStyle } from "../styles/global";
import { ThemeProvider } from "styled-components";
import lightTheme from "../styles/light";


function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<ThemeProvider theme={lightTheme}>
				<GlobalStyle />
				<Component {...pageProps} />
			</ThemeProvider>
		</Fragment>
	);
}

export default MyApp;
