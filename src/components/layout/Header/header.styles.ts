import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 4rem;

  grid-area: header;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background1};

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.background3};
`;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem 0 1rem;

  @media screen and (min-width: 800px) {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1rem 0 1rem;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
