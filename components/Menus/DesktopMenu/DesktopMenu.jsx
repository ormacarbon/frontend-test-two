import { useContext } from "react";
import { MenuContainer } from "./styles";
import { MenuItem } from "../HamburgerMenu/styles";
import { menuCategories } from "../../../storage/storage.js";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../HamburgerMenu/styles";
import { GlobalContext } from "../../../storage/global";

const DesktopMenu = () => {
  const globalContext = useContext(GlobalContext);

  const lightThemeToggle = () => {
    if (typeof window !== "undefined") {
      globalContext.setLightTheme((previousValue) => !previousValue);
      localStorage.setItem(
        "lightTheme",
        JSON.stringify(!globalContext.lightTheme)
      );
    }
  };

  return (
    <nav>
      <MenuContainer>
        <MenuItem>
          <Link
            href="/"
            className={`menuLink ${
              globalContext.lightTheme
                ? "lightThemeFontColor"
                : "darkThemeFontColor"
            }`}
          >
            Home
          </Link>
        </MenuItem>
        {menuCategories.map((category) => {
          return (
            <MenuItem key={category.id}>
              <Link
                href={category.url}
                className={`menuLink ${
                  globalContext.lightTheme
                    ? "lightThemeFontColor"
                    : "darkThemeFontColor"
                }`}
              >
                {category.title}
              </Link>
            </MenuItem>
          );
        })}
        <ThemeToggle onClick={lightThemeToggle} className="animated">
          <Image
            src={
              globalContext.lightTheme
                ? "/icons/dark-theme/dark-theme-desktop-icon.svg"
                : "/icons/light-theme/light-theme-icon.svg"
            }
            alt={globalContext.lightTheme ? "sun" : "moon"}
            width={40}
            height={40}
          />
          {globalContext.lightTheme ? (
            <MenuItem
              className={
                globalContext.lightTheme
                  ? "lightThemeFontColor"
                  : "darkThemeFontColor"
              }
            >
              Dark
            </MenuItem>
          ) : (
            <MenuItem
              className={
                globalContext.lightTheme
                  ? "lightThemeFontColor"
                  : "darkThemeFontColor"
              }
            >
              Light
            </MenuItem>
          )}
        </ThemeToggle>
      </MenuContainer>
    </nav>
  );
};

export default DesktopMenu;
