import styled from 'styled-components'

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.gray['600']};;
  padding: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.spacing.xl};
  box-shadow: 0 0 4rem rgba(0, 0, 0, 0.3);
  border: 1px solid ${ props => props.theme.colors.gray[400]};

  h3 {
    font-size: ${props => props.theme.fonts.size.lg};
    font-weight: 500;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`