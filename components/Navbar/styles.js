import styled from "styled-components";

export const NavbarMenu = styled.div`
  background-color: ${(props) => props.theme.primary};
  border-bottom: 0.4rem solid ${(props) => props.theme.secondary};
  margin-bottom: 3rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.3rem;
  padding: 2rem;
  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    font-weight: 700;
    font-size: 1.6rem;
  }
`;
