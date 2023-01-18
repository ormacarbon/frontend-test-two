import Switch from "react-switch";

import NavLink from "./NavLink";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
      </ul>
      <Switch
        onChange={() => {}}
        checked={true}
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
