import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";
import HeaderDiv from "./style.js";
import Brewery from "../../assets/brewery.svg";

const Header = () => {
  return (
    <HeaderDiv>
      <div className="">
        <Link href="/" aria-label="Brewery - Home">
          <Image src={Brewery} alt="Brewery - Logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/">Breweries</Link>
            </li>
            <li>
              <Link href="/">Breweries</Link>
            </li>
            <li>
              <Link href="/">Breweries</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderDiv>
  );
};

export default Header;
