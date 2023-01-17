import HamburgerMenu from "../Menus/HamburgerMenu/HamburgerMenu";
import Logo from "../Logo/Logo";
import { HeaderContainer } from "./styles";
import { GlobalContext } from "../../storage/global";
import { useContext, useEffect } from "react";
import DesktopMenu from "../Menus/DesktopMenu/DesktopMenu";

const Header = () => {
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    globalContext.getDevice();
    globalContext.fetchThemeInfo();
  }, [globalContext]);

  return (
    <HeaderContainer
      className={globalContext.lightTheme ? "lightThemeBg" : "darkThemeBg"}
    >
      <Logo />
      {globalContext.showMobileNav ? <HamburgerMenu /> : <DesktopMenu />}
    </HeaderContainer>
  );
};

export default Header;
