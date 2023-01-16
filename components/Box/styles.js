import styled from 'styled-components'

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.text+10};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.spacing.xl};
  border: 1px solid ${ props => props.theme.colors.border};
  transition: background 0.3s, color 0.3s, border 0.3s; 

  .title {
    font-size: ${props => props.theme.fonts.size.lg};
    font-weight: 600;
    margin-bottom: ${props => props.theme.spacing.lg};
    color: ${props => props.theme.colors.text};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) { 
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
  }
`