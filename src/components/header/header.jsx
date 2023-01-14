import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { themeContext } from "../../context/themeContext";

import { DarkMode } from "./darkMode/darkMode";
import { Search } from "./search/search";

import { HeaderComponent, MenuSidebarComponent } from "./HeaderStyle";
import { useFetch } from "../../hooks/useFetch";

export function Header() {
  const [menu, setMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useContext(themeContext);

  const { data, loading, error } = useFetch("genre/movie/list", null);

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

      <MenuSidebarComponent className={menu ? "active" : ""} dark={darkTheme}>
        <Search darkTheme={darkTheme} />

        <div className="sidebar-link">
          <Link href="">Trending</Link>
        </div>
        <div className="sidebar-link">
          <Link href="">Discover</Link>
        </div>
        <div className="sidebar-link">
          <h2>Genres</h2>
          {data?.genres.map((genre) => {
            return (
              <Link key={genre.id} href="">
                {genre.name}
              </Link>
            );
          })}
        </div>
      </MenuSidebarComponent>
    </>
  );
}
