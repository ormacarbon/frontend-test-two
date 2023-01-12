import styled from 'styled-components'

export const Container = styled.div`
  width: max-content;
  text-align: center;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing['2xl']};
  font-size: ${props => props.theme.fonts.size.md};

  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  
  border-radius: ${props => props.theme.spacing.md};
  transition: background 0.3s, color 0.3s;

  :hover {
    background: ${props => !props.active && props.theme.colors.primary};
  }
`