import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: ${props => props.theme.spacing.lg};
  gap: ${props => props.theme.spacing['3xl']};

  .team-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  @media (max-width: ${props => props.theme.breakpoints.xl}) { 
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing['2xl']};

    .team-container {
      display: grid;
      column-gap: ${props => props.theme.spacing.sm};
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) { 
    .team-container {
      grid-template-columns: 1fr;
    }
  }
`