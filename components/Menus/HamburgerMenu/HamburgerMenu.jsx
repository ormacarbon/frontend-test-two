import { useState, useEffect, useContext } from "react";
import { MenuButton, Menu, MenuItem, ThemeToggle } from "./styles";
import { menuCategories } from "../../../storage/storage";
import { GlobalContext } from "../../../storage/global";
import Image from "next/image";
import Link from "next/link";

const HamburgerMenu = () => {
  const globalContext = useContext(GlobalContext);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, []);

  const showMenuToggle = () => {
    setShowMenu((previousValue) => !previousValue);
  };

  const lightThemeToggle = () => {
    if (typeof window !== "undefined") {
      globalContext.setLightTheme((previousValue) => !previousValue);
      localStorage.setItem(
        "lightTheme",
        JSON.stringify(!globalContext.lightTheme)
      );
      showMenuToggle();
    }
  };

  return (
    <>
      {!showMenu ? (
        <MenuButton onClick={showMenuToggle} className="animated">
          <Image
            src={
              globalContext.lightTheme
                ? "/icons/light-theme/light-theme-hamburger-menu.svg"
                : "/icons/dark-theme/dark-theme-hamburger-menu.svg"
            }
            alt="hamburger menu icon"
            width={30}
            height={30}
          />
        </MenuButton>
      ) : (
        <>
          <MenuButton onClick={showMenuToggle} className="animated">
            <Image
              src={
                globalContext.lightTheme
                  ? "/icons/light-theme/light-theme-close-icon.svg"
                  : "/icons/dark-theme/dark-theme-close-icon.svg"
              }
              alt="hamburger menu icon"
              width={30}
              height={30}
            />
          </MenuButton>

          <Menu className="animated">
            <ul>
              <MenuItem>
                <Link href="/" className="menuLink" onClick={showMenuToggle}>
                  Home
                </Link>
              </MenuItem>
              {menuCategories.map((category) => {
                return (
                  <MenuItem key={category.id}>
                    <Link
                      href={category.url}
                      className="menuLink"
                      onClick={showMenuToggle}
                    >
                      {category.title}
                    </Link>
                  </MenuItem>
                );
              })}
              <MenuItem>
                <ThemeToggle onClick={lightThemeToggle}>
                  <Image
                    src={
                      globalContext.lightTheme
                        ? "/icons/dark-theme/dark-theme-icon.svg"
                        : "/icons/light-theme/light-theme-icon.svg"
                    }
                    alt="sun"
                    width={40}
                    height={40}
                  />
                </ThemeToggle>
                {globalContext.lightTheme ? (
                  <p style={{ alignSelf: "center" }}>Dark</p>
                ) : (
                  <p style={{ alignSelf: "center" }}>Light</p>
                )}
              </MenuItem>
            </ul>
          </Menu>
        </>
      )}
    </>
  );
};

export default HamburgerMenu;
