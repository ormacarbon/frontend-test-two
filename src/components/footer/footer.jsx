import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { themeContext } from "../../context/themeContext";

import { FooterComponent } from "./footerStyle";

export function Footer() {
  const [darkTheme] = useContext(themeContext);

  return (
    <FooterComponent dark={darkTheme}>
      <p>
        Developed by{" "}
        <Link target="_blank" href="https://github.com/isabdch">
          Isabdch <i className="fa-brands fa-github"></i>
        </Link>
      </p>

      <Link target="_blank" href="https://www.themoviedb.org/">
        <Image
          src="/assets/images/tmdb.svg"
          alt="The Movie Database"
          width={100}
          height={50}
        />
      </Link>
    </FooterComponent>
  );
}
