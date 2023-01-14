import { useContext } from "react";

import { FiSun, FiMoon } from "react-icons/fi";
import {
  AppName,
  Button,
  ButtonsContainer,
  Container,
  Content,
  ToggleThemeButton,
} from "./styles";
import { ThemeContext } from "../../../contexts/theme";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Container>
        <Content>
          <AppName>
            y<span>ssues</span>
          </AppName>
          <ButtonsContainer>
            <ToggleThemeButton onClick={toggleTheme}>
              {theme.name === "light" ? <FiMoon /> : <FiSun />}
            </ToggleThemeButton>
            <Button type="rounded">Favoritos</Button>
          </ButtonsContainer>
        </Content>
      </Container>
    </>
  );
}
