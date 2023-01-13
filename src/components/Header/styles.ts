import styled from "styled-components";

import Link from "next/link";

export const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.black};

  height: 5rem;
  padding: 0 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  span {
    color: ${(props) => props.theme.colors["indigo-800"]};
  }

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    width: 40%;
    padding: 0.25rem;

    border-radius: 10px;
    background: ${(props) => props.theme.colors["gray-700"]};

    input {
      padding: 0.4rem;
      width: 100%;

      background: none;
      border: none;

      font-size: 1rem;

      &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
`;
