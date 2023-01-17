import styled from 'styled-components';

type ButtonProps = {
  isCurrent?: boolean;
};

export const Button = styled.button<ButtonProps>`
  color: white;
  font-weight: 400;

  border: none;
  border-radius: 2px;
  padding: 0.15rem 0.75rem;

  background: ${({ theme, isCurrent }) =>
    isCurrent ? theme.colors.pink[250] : theme.colors.pink[300]};

  :hover {
    transition: 250ms all ease-in-out;
    background: ${({ theme }) => theme.colors.pink[250]};
  }
`;
