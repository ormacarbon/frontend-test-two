import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { themeContext } from "../../context/themeContext";

import { DarkMode } from "./darkMode/darkMode";
import { Search } from "./search/search";

import { HeaderComponent } from "./HeaderStyle";

export function Header() {
  const [darkTheme, setDarkTheme] = useContext(themeContext);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <HeaderComponent dark={darkTheme}>
        <div className="container">
          <h1>
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt=""
                width={95}
                height={50}
              />
              CineFinder
            </Link>
          </h1>

          <Search darkTheme={darkTheme} />

          <DarkMode darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

          <div
            className={menu ? "header__hamburger active" : "header__hamburger"}
            onClick={() => setMenu(!menu)}
          >
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
          </div>
        </div>
      </HeaderComponent>
    </>
  );
}
