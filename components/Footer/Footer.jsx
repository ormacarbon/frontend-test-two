import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";
import { FooterBg, FooterContact, FooterDiv } from "./style.js";
import Brewery from "../../assets/brewery.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <FooterBg>
      <FooterDiv className="container">
        <Link href="./" aria-label="Brewery - Home">
          <Image src={Brewery} alt="Brewery - Logo" />
        </Link>
        <FooterContact>
          <h3 className="font-2-l-b color-0">Contact</h3>
          <ul className="font-2-m color-5">
            <li>
              <a href="tel:+(1)305 876-call-177">(1)305 876-call-177</a>
            </li>
            <li>
              <a href="mailto:contact@brewery.com">contact@brewery.com</a>
            </li>
            <li>5th Street Far, 3699</li>
            <li>Tampa, FL - US</li>
          </ul>
          <div className="networks">
            <a href="./">
              <Image src={Instagram} alt="Instagram" />
            </a>
            <a href="./">
              <Image src={Facebook} alt="Facebook" />
            </a>
            <a href="./">
              <Image src={Youtube} alt="Youtube" />
            </a>
          </div>
        </FooterContact>
        <div className="info">
          <h3 className="font-2-l-b color-0">Information</h3>
          <nav>
            <ul className="font-1-m color-5">
              <li>
                <Link href="/">Breweries</Link>
              </li>
              <li>
                <Link href="/">Plans</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/terms">Terms and Conditions</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="copy font-2-m color-6">
          Brewery Co. © Some rights reserved.
        </p>
      </FooterDiv>
    </FooterBg>
  );
};

export default Footer;
