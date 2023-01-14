import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";

import { HeaderContainer, NavList, NavItem, ThemeButton } from "./styles";
import LogoGetNews from "../../assets/logo-getnews";
import Global from "../../assets/global";
import Moon from "../../assets/moon";
import Sun from "../../assets/sun";

const Header = ({ toggleTheme }) => {
  const { pathname } = useRouter();
  const { title } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <LogoGetNews />
      <nav>
        <NavList>
          <NavItem>
            <Link href="/" className={pathname == "/" ? "active" : ""}>
              <Global />
            </Link>
          </NavItem>
          <NavItem>
            <Link
              href="/about"
              className={pathname == "/about" ? "active" : ""}
            >
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link
              href="/pricing"
              className={pathname == "/pricing" ? "active" : ""}
            >
              Pricing
            </Link>
          </NavItem>
        </NavList>
      </nav>
      <ThemeButton>
        {title === "dark" ? <Sun /> : <Moon />}
        <input
          type="checkbox"
          id="theme"
          name="theme"
          checked={title === "dark "}
          onChange={toggleTheme}
        />
      </ThemeButton>
    </HeaderContainer>
  );
};

export default Header;
