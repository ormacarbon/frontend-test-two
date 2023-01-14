import Link from "next/link";
import { Container, Title } from "./Avatar.styles";

export function Avatar({ id, name, image }) {
  return (
    <Container>
      <Link href={`/avatar/${id}`}>
        <img src={image} alt={name} className="avatar" />

        <Title>{name}</Title>
      </Link>
    </Container>
  );
}
