import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5.5rem;

  grid-area: header;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background1};

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.background3};
`;

export const MenuBox = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  border-right: 1px solid;
  border-color: ${({ theme }) => theme.colors.background3};
`;

export const HeaderBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem 0 2rem;
`;
