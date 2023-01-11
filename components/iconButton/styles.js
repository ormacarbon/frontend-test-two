import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fonts.size.sm};

  background: ${props => props.active && props.theme.colors.primary};
  color: ${props => props.active ? props.theme.colors.light : props.theme.colors.gray[200]};
  
  border-radius: ${props => props.theme.spacing.sm};
  transition: background 0.3s;

  :hover {
    background: ${props => !props.active && props.theme.colors.gray[400]};
  }

  :disabled {
    pointer-events: none;
    color: ${props => !props.active && props.theme.colors.gray[300]};
  }
`