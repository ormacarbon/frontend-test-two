import styled from "styled-components";

export const Container = styled.div`
  width: max-content;
  min-width: 10rem;
  text-align: center;
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing["2xl"]};
  font-size: ${(props) => props.theme.fonts.size.md};

  background: ${(props) => props.color === "dark" ? props.theme.colors.dark : props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};

  border-radius: ${(props) => props.theme.spacing.md};
  transition: background 0.3s, color 0.3s;

  :hover {
    background: ${(props) => props.color === "dark" ? props.theme.colors.primary : props.theme.colors.dark};
  }
`;
