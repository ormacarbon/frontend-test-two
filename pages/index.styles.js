import styled from "styled-components";

export const StyledIndex = styled.main`
  width: 100vw;
  .container-pokemons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .container-buttons {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    .button-pages {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
      height: 40px;
      max-width: 80px;
      min-width: 30px;
      background-color: #ffffff;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: box-shadow 0.2s ease;
      margin: 0 15px;
    }
  }
`;
