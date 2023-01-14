import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 4rem;
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
export const LeftSide = styled.span`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const LogoBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text1};
`;

export const NavbarContainer = styled.nav`
  display: none;
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;
export const NavItem = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ThemeSwitchContainer = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    display: block;
  }
`;
