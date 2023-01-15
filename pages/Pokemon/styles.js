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
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.lg};

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Description = styled.div`
  height: 3.75rem;
  text-align: start;
  font-size: ${(props) => props.theme.fonts.size.md};
`