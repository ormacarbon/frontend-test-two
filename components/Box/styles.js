import styled from 'styled-components'

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.gray600};;
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.spacing.xl};
  box-shadow: 0 0 4rem rgba(0, 0, 0, 0.2);
  border: 1px solid ${ props => props.theme.colors.gray400};

  h3 {
    font-size: ${props => props.theme.fonts.size.lg};
    font-weight: 600;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`