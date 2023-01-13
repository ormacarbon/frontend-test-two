import styled from "styled-components";

export const NavbarMenu = styled.div`
  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    font-weight: 700;
    font-size: 1.6rem;
  }
`;
