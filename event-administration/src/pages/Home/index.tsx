import { Container } from "./style";

import { useNavigate } from "react-router-dom";

import { ButtonComponent } from "../../components/Button";

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

        <ButtonComponent onClick={() => navigate("/availablebeers")}>
          ENTRAR
        </ButtonComponent>
      </Container>
    </>
  );
};
