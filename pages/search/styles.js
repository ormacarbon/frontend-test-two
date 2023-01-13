import styled from "styled-components";

export const SearchPokemons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 2rem auto;

  h1 {
    margin-bottom: 1rem;
  }

  .search {
    display: flex;
    gap: 0.6rem;
    width: 100%;
    justify-content: center;

    input {
      padding: 0.7rem;
      border-radius: 8px;
      width: 50%;
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
  }

  .undefined {
    display: none;
    a {
      display: none;
    }
  }
`;
