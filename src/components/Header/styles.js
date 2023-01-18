import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 4rem;
  border-bottom: 1px solid red;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    gap: 2rem;
  }
`;

export const NavLinkContainer = styled.div`
  a {
    text-transform: uppercase;
    transition: 0.3s;

    color: blue;

    &:hover {
      color: #000;
    }
  }
`;
