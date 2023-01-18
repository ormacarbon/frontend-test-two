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
          <MenuUl className="font-1-m color-p4">
            <li>
              <Link href="/map">Map</Link>
            </li>
            <li>
              <Link href="/plans">Plans</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
          </MenuUl>
        </nav>
      </HeaderDiv>
    </HeaderBg>
  );
};

export default Header;
