import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.xl}  ${props => props.theme.spacing['3xl']};
  
  h1 {
    font-size: ${props => props.theme.fonts.size['2xl']};
  }

  h2 {
    font-size: ${props => props.theme.fonts.size.lg};
    font-weight: 500;
  }
`

export const Content = styled.div`
  display: flex;
  margin-top: ${props => props.theme.spacing.md};
  gap: ${props => props.theme.spacing['2xl']};

  & :nth-child(2) {
    flex: 2;
  }
`