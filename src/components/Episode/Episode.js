import { useRouter } from "next/router";
import { Container } from "./Episode.styles.js";

export function Episode({ id, name, air_date }) {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/episodes/${id}`)}>
      <h3>{name}</h3>

      {air_date && (
        <>
          <hr />

          <p>
            <strong>Lançado em: </strong>
            {air_date}
          </p>
        </>
      )}
    </Container>
  );
}
