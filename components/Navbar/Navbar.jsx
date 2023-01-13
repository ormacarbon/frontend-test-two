import { Container, ToggleButton, ContentContainer,MenuItems,Item,Brand,BrandContainer } from "./style";
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
          <BrandContainer>
            <Brand>
              OrmaPokePrice
            </Brand>
          </BrandContainer>
          <MenuItems>
            <Item>HOME</Item>
            <Item>CARDS</Item>
            <Item>CONTACT</Item>
          </MenuItems>
        </ContentContainer>
			</Container>
		</Fragment>
	);
};

export default Navbar;
