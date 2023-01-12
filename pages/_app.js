import Layout from "../components/layout";
import { AppContext } from "../utils/AppContext";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		theme == "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Layout>
				<AppContext>
					<Component {...pageProps} />
				</AppContext>
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
