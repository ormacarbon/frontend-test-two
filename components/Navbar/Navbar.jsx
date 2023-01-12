// //? Styled Components
import { ThemeContext } from "styled-components";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./style";
// //? React dependences + Switch
import Switch from "react-switch";
import { useContext } from "react";
import React, { useState } from "react";


export default function TopNavbar({ onChangeTheme }) {
  const { name, colors } = useContext(ThemeContext);
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink href="/">Home</NavbarLink>
            <NavbarLink href="/about">About</NavbarLink>
            <NavbarLink href="/characters">Characters</NavbarLink>
            <NavbarLink href="#0">
              <Switch
                onChange={onChangeTheme}
                checked={name === "light"}
                height={20}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                offColor={colors.secondary}
                onColor={colors.secondary}
              />
            </NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>

          <Logo src="/images/portalgun.png" alt="Portal Gun"></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended href="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended href="/about">About</NavbarLinkExtended>
          <NavbarLinkExtended href="/characters">Characters</NavbarLinkExtended>
          <NavbarLinkExtended href="#0"> <Switch
                onChange={onChangeTheme}
                checked={name === "light"}
                height={20}
                width={40}
                checkedIcon={false}
                uncheckedIcon={false}
                handleDiameter={20}
                offColor={colors.secondary}
                onColor={colors.secondary}
              /></NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
