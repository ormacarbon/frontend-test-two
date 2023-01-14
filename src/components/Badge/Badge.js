import { Container } from "./Badge.styles";

export function Badge({ color, children }) {
  return <Container color={color}>{children}</Container>;
}
