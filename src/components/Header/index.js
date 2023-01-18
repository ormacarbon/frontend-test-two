import Switch from "react-switch";

import { useTheme } from "../../hooks/useTheme";

import NavLink from "./NavLink";

import { Container } from "./styles";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
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
