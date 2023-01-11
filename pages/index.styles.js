import styled from "styled-components";

export const StyledIndex = styled.main`
  width: 100vw;
  .container-pokemons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 33px;
    margin-top: 30px;
  }

  .container-buttons {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 20px;
    .button-pages {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
      height: 40px;
      max-width: 80px;
      min-width: 30px;
      background-color: #f3f3f3;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: box-shadow 0.2s ease;
      margin: 0 15px;
      color: #404040;
    }
  }
  .button-pages.active {
  text-decoration: underline;
  font-weight: 800;
}
`;
