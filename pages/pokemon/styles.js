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

export const Pokemon = styled.div`
  padding: 2rem 1rem;
  border: 2px solid ${(props) => props.theme.secondary};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    padding: 0.3rem 0.3rem;
    background: ${(props) => props.theme.secondary};
    border-radius: 8px;
    cursor: pointer;
    margin: 0 auto;
    color: ${(props) => props.theme.buttonColor};
    text-decoration: none;
  }

  @media (max-width: 700px) {
    padding: 3rem 3rem;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;

  button {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;
