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
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      height: 40px;
      width: 40px;
      background-color: grey;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      transition: box-shadow 0.2s ease;
      margin: 0 15px;
      color: #ffffff;
      font-weight: 600;
      font-size: 1rem;
    }
  }
  .button-pages.active {
    text-decoration: underline;
    font-weight: 800;
  }
  .button-pages[disabled] {
    background-color: lightgray;
    color: white;
    cursor: not-allowed;
  }
`;
