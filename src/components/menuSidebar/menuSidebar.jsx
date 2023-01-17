import { useContext } from "react";
import Link from "next/link";

import { themeContext } from "../../context/themeContext";
import { menuContext } from "../../context/menuContext";
import { useFetch } from "../../hooks/useFetch";

import { Search } from "../search/search";

import { MenuSidebarComponent } from "./menuSidebarStyle";

export function MenuSidebar() {
  const [darkTheme, setDarkTheme] = useContext(themeContext);
  const [menu, setMenu] = useContext(menuContext);

  const { data, loading, error } = useFetch("genre/movie/list", null);

  return (
    <MenuSidebarComponent className={menu ? "active" : ""} dark={darkTheme}>
      <Search darkTheme={darkTheme} />

      <div className="sidebar-link">
        <Link href="/trending">Trending</Link>
      </div>
      <div className="sidebar-link">
        <Link href="/discover">Discover</Link>
      </div>
      <div className="sidebar-link">
        <h2>Genres</h2>
        {data?.genres.map((genre) => {
          return (
            <Link
              key={genre.id}
              href={
                "/genre/" +
                genre.id +
                "-" +
                genre.name.toLowerCase().replaceAll(" ", "-")
              }
            >
              {genre.name}
            </Link>
          );
        })}
      </div>
    </MenuSidebarComponent>
  );
}

