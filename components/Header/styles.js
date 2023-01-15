import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: ${props => props.theme.spacing.lg};

  .left-content {
    flex: 1;
    display: flex;
    gap: ${props => props.theme.spacing.lg};
    align-items: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) { 
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: ${props => props.theme.spacing['3xl']};
  }
`

export const Title = styled.header`
  text-transform: capitalize;
  flex: 1;

  h1 {
    font-size: ${props => props.theme.fonts.size['3xl']};
    white-space: nowrap;
  }

  h2 {
    font-size: ${props => props.theme.fonts.size.lg};
    font-weight: 500;
  } 

  span {
    color: ${props => props.theme.colors.gray400};
  }
`