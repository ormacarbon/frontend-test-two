import { Container } from "./style";

import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <h1>administração de bebidas para eventos</h1>

        <h3>
          Administre de forma rápida e fácil suas bebidas para os eventos:
          Casamento, Confraternização e Formatura
        </h3>

        <button onClick={() => navigate("/availablebeers")}>entrar</button>
      </Container>
    </>
  );
};
