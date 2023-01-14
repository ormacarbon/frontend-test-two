import { useTheme } from "../../shared/hooks";
import { Container } from "./ToggleTheme.styles";

export function ToggleTheme() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Container>
      <button onClick={toggleTheme}>Trocar tema</button>
    </Container>
  );
}
