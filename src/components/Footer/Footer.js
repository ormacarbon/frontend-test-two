import React from "react";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import { DivImg, FooterStyled } from "./footerStyle";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <FooterStyled>
      <DivImg>
        <Link href="https://instagram.com/heydearmaria/">
          <Image src={instagram} width="30" alt="instagram logo" />
        </Link>
        <Link href="https://linkedin.com/in/mariaconstance/">
          <Image src={linkedin} width="30" alt="linkedin logo" />
        </Link>
        <Link href="https://github.com/constance03/">
          <Image src={github} width="30" alt="github logo" />
        </Link>
      </DivImg>
      <p>Design by: Maria Constance</p>
    </FooterStyled>
  );
};
