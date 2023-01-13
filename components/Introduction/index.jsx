import { MovieLight } from "../../animations/MovieLight";
import { Container, Title } from "./style";

export function Introduction() {
  return (
    <Container>
      <div>
        <Title>Find out which movies are showing at the cinema.</Title>
      </div>
      <div>
        <MovieLight />
      </div>
    </Container>
  );
}
