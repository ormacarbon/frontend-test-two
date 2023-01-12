import styled from 'styled-components'

export const Container = styled.section`
  flex: 1;
  background: #252733;
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.spacing.lg};
  box-shadow: 0 0 4rem rgba(0, 0, 0, 0.3);

  h3 {
    font-size: ${props => props.theme.fonts.size.lg};
    font-weight: 500;
  }
`