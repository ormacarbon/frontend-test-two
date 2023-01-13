import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.fonts.size.md};

  background: ${props => props.active && props.theme.colors.primary};
  color: ${props => props.active ? props.theme.colors.light : props.theme.colors.gray200};
  
  border-radius: ${props => props.theme.spacing.md};
  transition: background 0.3s, color 0.3s;

  :hover {
    background: ${props => !props.active && props.theme.colors.gray400};
  }

  :disabled {
    pointer-events: none;
    color: ${props => !props.active && props.theme.colors.gray300};
  }
`