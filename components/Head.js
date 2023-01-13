import Navbar from "../components/Navbar";
import Toggle from "./Toggle";
import { Context } from "../utils/AppContext";
import { useContext } from "react";

import {
	SpaceBetween,
	Inline,
	Container,
	Title,
} from "../styles/componentStyles";

export default function navbar() {
	const { toggleTheme, theme } = useContext(Context);
	const toggleDarkMode = () => {
		toggleTheme();
	};

	const goToIndex = (event) => {
		event.preventDefault();
		window.location.href = "/";
	};

	return (
		<Container>
			<Title onClick={(e) => goToIndex(e)}>University searcher</Title>
			<SpaceBetween>
				<Inline>
					<Navbar />
				</Inline>
				<Toggle
					toggleFunction={toggleDarkMode}
					toggleText="Dark Mode"
					isChecked={theme === "dark"}
				/>
			</SpaceBetween>
		</Container>
	);
}
