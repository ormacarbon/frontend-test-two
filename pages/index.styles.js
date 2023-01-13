import styled from "styled-components";

export const StyledIndex = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundBase};
  min-height: 100vh;

  .container-pokemons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 33px;
    margin-top: 30px;
  }

  .container-buttons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    padding-bottom: 20px;

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
    background-color: ${({ theme }) => theme.backgroundLevel2};
    color: white;
    cursor: not-allowed;
  }
`;
