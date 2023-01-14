import { Container } from "./PaginationItem.styles";

export function PaginationItem({ children, isActive = false, onClick }) {
  return (
    <Container isActive={isActive} onClick={onClick}>
      {children}
    </Container>
  );
}
