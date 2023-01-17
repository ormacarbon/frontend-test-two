import {
  BackgroundContainer,
  ContactItem,
  FooterContainer,
  FooterTitle,
  RightsContainer,
} from "./styles";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <BackgroundContainer>
      <FooterContainer>
        <Image
          src="/illustrations/dark-theme-logo.svg"
          alt="zeldapi logo"
          width={100}
          height={40}
          style={{ marginTop: "40px" }}
        />
        <FooterTitle>Liked my job? Contact me!</FooterTitle>
        <ul>
          <ContactItem>
            <Link href="mailto:lucasnobre37@outlook.com" className="footerLink">
              lucasnobre37@outlook.com
            </Link>
          </ContactItem>
          <ContactItem>
            <Link href="https://github.com/lnobrz" className="footerLink">
              https://github.com/lnobrz
            </Link>
          </ContactItem>
          <ContactItem>
            <Link
              href="https://www.linkedin.com/in/lucas-nobrz/"
              className="footerLink"
            >
              https://www.linkedin.com/in/lucas-nobrz/
            </Link>
          </ContactItem>
        </ul>
        <RightsContainer>
          Lucas Nobre, 2023. Some Rights Reserved.
        </RightsContainer>
      </FooterContainer>
    </BackgroundContainer>
  );
};

export default Footer;
