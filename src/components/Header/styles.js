import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 4rem;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${(props) => props.theme.colors.primary};
`;

export const NavLinkContainer = styled.div`
  a {
    text-transform: uppercase;
    transition: 0.3s;

    color: ${(props) => props.theme.colors.text};

    &:hover {
      color: #000;
    }
  }
`;
