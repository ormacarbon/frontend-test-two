import { useRouter } from "next/router";
import { Container } from "./Location.styles.js";

export function Location({ id, name }) {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/locations/${id}`)}>
      <h3>{name}</h3>
    </Container>
  );
}
