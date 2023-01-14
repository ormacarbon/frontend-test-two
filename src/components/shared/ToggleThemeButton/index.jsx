import { useContext } from "react";
import { Container } from "./styles";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../../../contexts/theme";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container onClick={toggleTheme}>
      {theme.name === "light" ? <FiMoon /> : <FiSun />}
    </Container>
  );
}
