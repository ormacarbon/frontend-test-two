import {
	Container,
	ToggleButton,
	ContentContainer,
	MenuItems,
	Item,
	Brand,
	BrandContainer,
	ThemeToggleButton
} from "./style";
import { Fragment } from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Link from "next/link";
import LightDarkContext from "../../store/contexts/lightDarkThemeContext";
import { useContext } from "react";
import lightTheme from "../../styles/light";
import darkTheme from '../../styles/dark'
const Navbar = (props) => {

	const [themeName, setThemeName] = useState('Dark')

	const theme = useContext(LightDarkContext);

	const handleChangeTheme = () => {
		const newTheme = theme.theme === lightTheme? darkTheme:lightTheme
		const newThemeName = theme.theme === lightTheme? 'Light':'Dark'
		theme.setTheme(newTheme)
		setThemeName(newThemeName)
	}

	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};

	return (
		<Fragment>
			<Container>
				<ToggleButton onClick={handleToggle}>
					<Hamburger />
				</ToggleButton>
				<ContentContainer toggle={toggle}>
					<BrandContainer>
						<Brand>ORMAPOKEPRICE</Brand>
					</BrandContainer>
					<MenuItems>
						<Link href="/">
							<Item>HOME</Item>
						</Link>
						<Link href="/search">
							<Item>SEARCH</Item>
						</Link>
						<Item>
							<ThemeToggleButton onClick={handleChangeTheme}>Theme: {themeName}</ThemeToggleButton>
						</Item>
					</MenuItems>
				</ContentContainer>
			</Container>
		</Fragment>
	);
};

export default Navbar;
