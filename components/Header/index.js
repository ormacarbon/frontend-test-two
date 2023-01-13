import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import ThemeButton from "../ThemeButton/index";
import { HeaderContainer, NavList, NavItem } from "./styles";
import LogoGetNews from "../../assets/logo-getnews";
import Global from "../../assets/global";
import Moon from "../../assets/moon";

const Header = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <LogoGetNews />
      <nav>
        <NavList>
          <NavItem>
            <Link href="/" className={router.pathname == "/" ? "active" : ""}>
              <Global />
            </Link>
          </NavItem>
          <NavItem>
            <Link
              href="/about"
              className={router.pathname == "/about" ? "active" : ""}
            >
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link
              href="/pricing"
              className={router.pathname == "/pricing" ? "active" : ""}
            >
              Pricing
            </Link>
          </NavItem>
        </NavList>
      </nav>
      <ThemeButton />
    </HeaderContainer>
  );
};

export default Header;
