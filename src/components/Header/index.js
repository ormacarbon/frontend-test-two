import Switch from "react-switch";
import { parseCookies, setCookie, destroyCookie } from "nookies";

import { useTheme } from "../../hooks/useTheme";

import NavLink from "./NavLink";

import { Flex } from "../../styles/global";
import { Container } from "./styles";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const Loggout = () => destroyCookie(null, "token");

  return (
    <Container>
      <ul>
        <Flex direction="row" gap="1.8rem">
          <NavLink title="Home" path="/" />
          <NavLink title="New scene" path="/scene/new" />
          <NavLink title="Loggout" onClick={Loggout} path="/" />
        </Flex>
      </ul>
      <Switch
        onChange={toggleTheme}
        checked={theme.title === "light"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
      />
    </Container>
  );
}

export default Header;
