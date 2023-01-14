import { Links } from "./Links";
import { Container } from "./Navbar.styles";

export function Navbar() {
  return (
    <Container>
      <img src="/img/logo.png" alt="Logo" />
      <Links />
    </Container>
  );
}
