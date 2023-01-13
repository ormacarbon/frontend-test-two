import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
  border: 1px solid ${(props) => props.theme.colors.gray400};
  border-radius: ${(props) => props.theme.spacing['2xl']};
  padding: ${(props) => props.theme.spacing.md};

  input {
    background: transparent;
    font-size: ${(props) => props.theme.fonts.size.md};
    color: ${(props) => props.theme.colors.light};
    outline: none;
  }
`