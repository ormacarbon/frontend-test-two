import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 17.5rem;
  height: 100vh;
  padding: ${props => props.theme.spacing['2xl']} ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.background};
  border-right: 1px solid ${props => props.theme.colors.border};
  transition: transform 0.5s ease-in-out, width 0.5s ease-in-out, background 0.3s, border 0.3s;

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

  h1, h2 {
    color: ${props => props.theme.colors.text};
    transition: color 0.3s, background 0.3s;
    transition-delay: 0s;
  }
`

export const List = styled.ul`
  margin-top: ${props => props.theme.spacing['2xl']};

  li {
    list-style-type: none;
  }
`

export const DarkMode = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  border-top: 1px solid ${props => props.theme.colors.border};
  transition: border 0.3s; 
`