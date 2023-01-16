import Image from "next/image";
import React from "react";
import { FooterStyle } from "./styles";
import linkedInIcon from "../../public/images/linkedInIcon.svg";
import gitHubIcon from "../../public/images/gitHubIcon.png"

const Footer = () => {
  return (
    <FooterStyle>
      <h3>Project developed by: Bruno Maschietto</h3>
      <div>
        <p>Contact me</p>
        <div>
          <a href="https://www.linkedin.com/in/bruno-maschietto/" target="_blank" rel="noreferrer"><Image src={linkedInIcon} alt="LinkedIn Icon"/></a>
          <a href="https://github.com/brunomaschietto" target="_blank" rel="noreferrer"><Image src={gitHubIcon} alt="GitHub Icon"/></a>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
