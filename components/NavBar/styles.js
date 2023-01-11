import styled from 'styled-components'

export const Container = styled.aside`
  width: 17.5rem;
  height: 100vh;
  padding: ${props => props.theme.spacing.lg};

  border-right: 1px solid ${props => props.theme.colors.gray[400]};
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};

  .minor-text {
    display: block;
    font-size: 0.5em;
    font-weight: 600;
  }
`

export const List = styled.ul`
  margin-top: ${props => props.theme.spacing.xl};

  li {
    list-style-type: none
  }
`