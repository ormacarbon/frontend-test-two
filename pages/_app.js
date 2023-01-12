import Layout from "../components/layout";
import { Context } from "../utils/AppContext";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig";
import { useState } from "react";
import hooks from "../utils/hooks";

function MyApp({ Component, pageProps }) {
	const {
		searchUniversitiesByCountry,
		searchUniversitiesByDomain,
		searchUniversitiesByName,
	} = hooks();

	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		theme == "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Context.Provider
				value={{
					searchUniversitiesByCountry,
					searchUniversitiesByDomain,
					searchUniversitiesByName,
					toggleTheme,
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Context.Provider>
		</ThemeProvider>
	);
}

export default MyApp;
