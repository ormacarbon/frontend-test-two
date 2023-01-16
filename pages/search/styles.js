import styled from "styled-components";

export const SearchPokemons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 2rem auto;
  width: 80%;

  h1 {
    margin-bottom: 2rem;
  }

  .search {
    display: flex;
    gap: 0.6rem;
    width: 100%;
    justify-content: center;

    input {
      padding: 0.7rem;
      border-radius: 8px;
      width: 100%;
    }

    button {
      padding: 0.7rem;
      background: ${(props) => props.theme.secondary};
      border: none;
      color: ${(props) => props.theme.buttonColor};
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
    }

    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const PokemonFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  border: 1px solid gray;
  padding: 3rem;
  gap: 2rem;

  a {
    padding: 0.7rem;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.buttonColor};
    border: none;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
  }
`;
