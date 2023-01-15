import * as C from "./style";
import Link from "next/link";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from "react";

const linksMenu = [
  { name: "Home", page: "/" },
  { name: "Collaborators", page: "/collaborators" },
  { name: "Air Pollution", page: "/airpollution" },
  { name: "Forecast", page: "/forecast" },
];

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <C.ContainerHeader>
      <C.HeaderNavigation>
        <Link href="/" className="logo">
          OrmaCarbon
        </Link>
        <C.ListItems>
          {linksMenu.map((linkItems) => (
            <Link href={linkItems.page}>{linkItems.name}</Link>
          ))}
        </C.ListItems>
      </C.HeaderNavigation>
      <C.ChangeTheme>
        {theme.background === "black" ? (
          <BsFillSunFill onClick={() => setTheme("light")} />
        ) : (
          <BsFillMoonFill onClick={() => setTheme("dark")} />
        )}
      </C.ChangeTheme>
    </C.ContainerHeader>
  );
};

export default Header;
