import { Container, ToggleButton, ContentContainer,MenuItems,Item } from "./style";
import { Fragment } from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle((prev) => !prev)
	};

	return (
		<Fragment>
			<Container>
				<ToggleButton onClick={handleToggle}>
					<Hamburger />
				</ToggleButton>
				<ContentContainer toggle={toggle}>
          <MenuItems>
            <Item>HOME</Item>
            <Item>POKEDEX</Item>
            <Item>ITEMS</Item>
            <Item>ABILITIES</Item>
          </MenuItems>
        </ContentContainer>
			</Container>
		</Fragment>
	);
};

export default Navbar;
