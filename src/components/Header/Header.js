import Image from "next/image";
import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import light from "../../assets/light.png";
import { useRouter } from "next/router";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ButtonHeader, DivButtonsNavigation, Nav } from "./headerStyle";

const Header = () => {
  const context = useContext(GlobalContext);
  const router = useRouter();
  const { toggleTheme } = context;

  return (
    <>
      <Nav>
        <Image src={light} onClick={toggleTheme} />
        <DivButtonsNavigation>
          <ButtonHeader onClick={() => router.push("/")}>Home</ButtonHeader>
          <ButtonHeader onClick={() => router.push("/worlds")}>
            Locations
          </ButtonHeader>
          <ButtonHeader onClick={() => router.push("/episodes")}>
            Episodes
          </ButtonHeader>
        </DivButtonsNavigation>
      </Nav>
      <div>
        <Image src={logo} width="400" alt="Rick and Morty logo" />
      </div>
    </>
  );
};

export default Header;
