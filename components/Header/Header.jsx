import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";
import { HeaderBg, HeaderDiv, MenuUl } from "./style.js";
import Brewery from "../../assets/brewery.svg";

const Header = () => {
  return (
    <HeaderBg>
      <HeaderDiv className="container">
        <Link href="./" aria-label="Brewery - Home">
          <Image src={Brewery} alt="Brewery - Logo" />
        </Link>

        <nav>
          <MenuUl>
            <li>
              <Link href="/">Breweries</Link>
            </li>
            <li>
              <Link href="/">Breweries</Link>
            </li>
            <li>
              <Link href="/">Breweries</Link>
            </li>
          </MenuUl>
        </nav>
      </HeaderDiv>
    </HeaderBg>
  );
};

export default Header;
