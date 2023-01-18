import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  flex-direction: column;

  height: 90vh;
  padding: 0 1rem;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font_size.lg};
`;
export const Description = styled.span`
  font-size: ${(props) => props.theme.font_size.sm};
  color: ${(props) => props.theme.colors.caption_400};
`;

export const Button = styled.button`
  text-decoration: none;
  background-color: transparent;
  border: none;
  outline: none;

  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font_size.md};
  cursor: pointer;
`;
