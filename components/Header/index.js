import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { HeaderContainer, NavList, NavItem } from "./styles";
import LogoGetNews from "../../assets/logo-getnews";
import Global from "../../assets/global";

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
      <label>
        Theme
        <input type="checkbox" />
      </label>
    </HeaderContainer>
  );
};

export default Header;
