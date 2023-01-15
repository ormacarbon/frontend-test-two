import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;

  main {
    flex: 1;
    overflow-y: scroll;
    padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing['2xl']};

    @media (max-width: ${props => props.theme.breakpoints.lg}) { 
      padding: 8rem ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing['2xl']};
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) { 
      padding: 8rem ${props => props.theme.spacing.lg} ${props => props.theme.spacing.lg};
    }

    @media (max-width: ${props => props.theme.breakpoints.xs}) { 
      padding: 8rem 0 ${props => props.theme.spacing.xl};
    }
  }
`