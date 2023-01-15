import LightDarkContext from "../contexts/lightDarkThemeContext";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "../../styles/light";
import darkTheme from '../../styles/dark'

const LightDarkProvider = (props) => {
	const [theme, setTheme] = useState(lightTheme);

	const handleSetTheme = (theme) => {
		setTheme(theme);
	};

	return (
		<LightDarkContext.Provider
			value={{
				theme: theme,
				setTheme: handleSetTheme,
			}}
		>
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</LightDarkContext.Provider>
	);
};

export default LightDarkProvider;
