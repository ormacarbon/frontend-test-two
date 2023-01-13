import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing['2xl']}  ${props => props.theme.spacing['3xl']};
  
  h1 {
    font-size: ${props => props.theme.fonts.size['3xl']};
  }

  h2 {
    font-size: ${props => props.theme.fonts.size.lg};
    font-weight: 500;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: ${props => props.theme.spacing.lg};
  gap: ${props => props.theme.spacing['3xl']};
`