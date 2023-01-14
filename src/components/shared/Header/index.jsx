import Link from "next/link";

import { useContext } from "react";
import { FiSun, FiMoon, FiArrowLeft } from "react-icons/fi";
import {
  AppName,
  ButtonsContainer,
  Container,
  Content,
  ToggleThemeButton,
} from "./styles";
import { ThemeContext } from "../../../contexts/theme";
import { useRouter } from "next/router";

import Button from "../Button";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const router = useRouter();

  const goToBack = () => router.back();
  const goToHome = () => router.push("/");
  const goToFavorites = () => router.push("/favorites");

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
            <Button primary type="rounded" onClick={goToFavorites}>
              Favoritos
            </Button>
          </ButtonsContainer>
        </Content>
      </Container>
    </>
  );
}
