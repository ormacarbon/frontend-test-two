import styled from "styled-components";

export const Title = styled.h1`
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${props => props.theme.colors.textHeaderColor};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.offColor}
    }
  }

`

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const About = styled.strong`
  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${props => props.theme.colors.textHeaderColor};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.offColor}
    }
   }

`;

export const CharactersSession = styled.strong`
   a {
    font-size: 1.5rem;
    text-decoration: none;
    color: ${props => props.theme.colors.textHeaderColor};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.colors.offColor}
    }
   }
`