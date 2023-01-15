import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};  
`

export const Title = styled.header`
  text-transform: capitalize;
  flex: 1;

  h1 {
  font-size: ${props => props.theme.fonts.size['3xl']};
  }

  h2 {
    font-size: ${props => props.theme.fonts.size.lg};
    font-weight: 500;
  } 

  span {
    color: ${props => props.theme.colors.gray400};
  }
`