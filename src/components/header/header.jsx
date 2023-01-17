import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import { themeContext } from "../../context/themeContext";
import { menuContext } from "../../context/menuContext";

import { DarkMode } from "./darkMode/darkMode";
import { Search } from "../search/search";

import { HeaderComponent } from "./headerStyle";

export function Header() {
  const [darkTheme, setDarkTheme] = useContext(themeContext);
  const [menu, setMenu] = useContext(menuContext);

  return (
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
  );
}
