import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: ${props => props.theme.spacing.lg};
  text-transform: capitalize;

  h1 {
  font-size: ${props => props.theme.fonts.size['3xl']};
  }

  h2 {
    font-size: ${props => props.theme.fonts.size.lg};
    font-weight: 500;
  }   
`