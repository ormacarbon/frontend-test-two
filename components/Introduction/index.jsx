import { MovieLight } from "../../animations/MovieLight";
import { MovieDark } from "../../animations/MovieDark";
import { Container, Title } from "./style";
import { useContext } from "react";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";

export const Introduction = () => {
  const { theme } = useContext(GlobalStateContext);

  return (
    <Container>
      <div>
        <Title>Find out which movies are showing at the cinema.</Title>
      </div>
      <div>{theme === "light" ? <MovieLight /> : <MovieDark />}</div>
    </Container>
  );
};
