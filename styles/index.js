import styled from "styled-components";

export const Pokemons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 50%;
  margin: 0 auto;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
