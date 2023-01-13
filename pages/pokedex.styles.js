import styled from "styled-components";

export const StyledPokedex = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.backgroundBase};
  color: ${({ theme }) => theme.textColorBase};
  .container-pokemons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 33px;
    padding-top: 30px;
  }
`;
