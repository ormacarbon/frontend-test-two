import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5rem;
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background1};
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

export const LogoBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text1};
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
