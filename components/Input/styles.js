import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
  border: 1px solid ${(props) => props.theme.colors.gray400};
  border-radius: ${(props) => props.theme.spacing['3xl']};
  padding: ${(props) => props.theme.spacing.sm};

  input {
    background: transparent;
    font-weight: 500;
    min-width: 15rem;
    font-size: ${(props) => props.theme.fonts.size.md};
    color: ${(props) => props.theme.colors.light};
    outline: none;
  }
`