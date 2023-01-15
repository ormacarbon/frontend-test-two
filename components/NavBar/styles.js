import styled from 'styled-components'

export const Container = styled.aside`
  width: 17.5rem;
  height: 100vh;
  padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.dark};
  transition: transform 0.5s ease-in-out, width 0.5s ease-in-out;
  border-right: 1px solid ${props => props.theme.colors.gray400};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    position: fixed;
    left: 0;
    z-index: 50;
    box-shadow: 0 0 4rem rgba(0, 0, 0, 0.5);
    transform: ${props => props.isOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100vw;
    border-right: 0;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};

  .minor-text {
    display: block;
    font-size: 0.5em;
    font-weight: 600;
  }
`

export const List = styled.ul`
  margin-top: ${props => props.theme.spacing['2xl']};

  li {
    list-style-type: none;
  }
`