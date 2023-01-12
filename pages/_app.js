import Layout from "../components/layout";
import { Context } from "../utils/AppContext";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig";
import { useEffect, useState } from "react";
import hooks from "../utils/hooks";

function MyApp({ Component, pageProps }) {
	const {
		searchUniversitiesByCountry,
		searchUniversitiesByDomain,
		searchUniversitiesByName,
	} = hooks();

	const [theme, setTheme] = useState("light");
	const [themeHelper, setThemeHelper] = useState("light");

	const [isStorageTheme, setIsStorageTheme] = useState(true);

	useEffect(() => {
		setStoredTheme();
	}, []);

	useEffect(() => {
		if (!isStorageTheme)
			localStorage.setItem("@theme", JSON.stringify(theme));
		else setIsStorageTheme(false);
	}, [theme]);

	useEffect(() => {
		setTheme(themeHelper);
	}, [themeHelper]);

	const setStoredTheme = () => {
		const storageTheme = getThemeFromStorage();
		if (storageTheme) setThemeHelper(storageTheme);
		else setThemeHelper("light");
	};

	const getThemeFromStorage = () => {
		return treatStorageItem(localStorage.getItem("@theme"));
	};

	const treatStorageItem = (storageItem) => {
		return String(storageItem).replace('"', "").replace('"', "");
	};

	const toggleTheme = () => {
		theme == "light" ? setThemeHelper("dark") : setThemeHelper("light");
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
					theme,
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
