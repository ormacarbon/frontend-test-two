import styled from "styled-components";
import Navbar from "../components/Navbar";
import Toggle from "./Toggle";
import { Context } from "../utils/AppContext";
import { useContext } from "react";

export default function navbar() {
	const { toggleTheme } = useContext(Context);

	const toggleDarkMode = () => {
		toggleTheme();
	};

	return (
		<div>
			<h1>University searcher</h1>
			<Navbar />
			<Toggle toggleFunction={toggleDarkMode} toggleText="Dark Mode" />
		</div>
	);
}
