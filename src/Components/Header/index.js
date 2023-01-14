import Link from "next/link";
import React, { useContext, useState } from "react";
import {
  Container,
  Header,
  MenuMobileIcon,
  MobileContainer,
  Navigation,
  SwitchButton,
} from "./styles";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import {AiOutlineClose} from 'react-icons/ai'
import { ThemeContext } from "../../Context/index";
import MobileMenuComponent from "../MobileMenu";

export const HeaderComponent = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const[menuMobile, setMenuMobile] = useState(false)
  return (
    <>
      <Header>
        <Container>
          <h3>Crypto.me</h3>
          <Navigation>
            <ul>
              <li>
                <Link href="/">Coins</Link>
              </li>
              <li>
                <Link href="/exchanges">Exchanges</Link>
              </li>
              <li>
                <Link href="/companies">Companies</Link>
              </li>
            </ul>
          </Navigation>

          <MobileContainer>
            <SwitchButton>
              {theme === "dark" ? (
                <FiMoon size={32} onClick={() => switchTheme("light")} />
              ) : (
                <FiSun size={32} onClick={() => switchTheme("dark")} />
              )}
            </SwitchButton>
            <MenuMobileIcon onClick={()=>setMenuMobile(!menuMobile)}>
              {menuMobile ? <AiOutlineClose className="icon"/> : <FiMenu className="icon"/>}
            </MenuMobileIcon>
          </MobileContainer>

        </Container>
      </Header>
     { menuMobile && <MobileMenuComponent />}
    </>
  );
};
