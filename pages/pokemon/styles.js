import styled from "styled-components";

export const Pokemons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  gap: 1rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;

  button {
    display: flex;
    justify-content: center;
  }
`;
