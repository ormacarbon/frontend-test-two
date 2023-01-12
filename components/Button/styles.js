import styled from 'styled-components'

export const Container = styled.div`
  width: max-content;
  text-align: center;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  font-size: ${props => props.theme.fonts.size.md};

  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  
  border-radius: ${props => props.theme.spacing.sm};
  transition: background 0.3s, color 0.3s;

  :hover {
    background: ${props => !props.active && props.theme.colors.primary};
  }
`