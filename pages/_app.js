import "../styles/globalCss.css";
import { Fragment } from "react";
import { GlobalStyle } from "../styles/global";
import { ThemeProvider } from "styled-components";
import lightTheme from "../styles/light";
import darkTheme from "../styles/dark";
import LightDarkProvider from "../store/providers/LightDarkThemeProvider";
import LightDarkContext from "../store/contexts/lightDarkThemeContext";
import { useContext, useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
	const themeValues = useContext(LightDarkContext);

	return (
		<Fragment>
			<LightDarkProvider>
				<GlobalStyle />
				<Component {...pageProps} />
			</LightDarkProvider>
		</Fragment>
	);
}

export default MyApp;
