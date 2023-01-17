import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--blue);
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 730px) {
    padding: 0.5rem 1.25rem 0 1.25rem;
    display: grid;
  }
  & > label {
    grid-column: 2;
    grid-row: 1;
  }
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 730px) {
    padding-top: 0.5rem;
    grid-column: 1 / -1;
    justify-content: space-between;
  }
`;

export const NavItem = styled.li`
  & > a {
    display: block;
    padding: 2rem 2.5rem;
    height: 1.5rem;
    color: var(--white);
  }
  & > a:hover,
  & > a.active,
  & > a:focus {
    background-color: var(--blue-100);
  }
  @media screen and (max-width: 730px) {
    & > a {
      border-radius: 0.5rem;
      padding: 1rem 1.5rem;
    }
  }
`;

export const ThemeButton = styled.label`
  cursor: pointer;
  display: block;
  padding: 2rem 2.5rem;
  height: 1.5rem;
  &:hover,
  &:focus {
    background-color: var(--blue-100);
  }
  & > input {
    display: none;
  }
  @media screen and (max-width: 730px) {
    height: auto;
    padding: 0.8rem 1.2rem;
    border-radius: 0.5rem;
  }
`;
