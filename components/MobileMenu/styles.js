import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  transform: translateY(-100%);
  background: ${props => props.theme.colors.dark};
  padding: ${props => props.theme.spacing.lg} ${props => props.theme.spacing.xl};
  box-shadow: 0 0 4rem rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid ${props => props.theme.colors.gray400};
  transition: transform 0.5s ease-in-out;
  z-index: 100;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    display: flex;
    transform: translateY(0%);
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fonts.size.lg};

  .minor-text {
    display: block;
    font-size: 0.5em;
    font-weight: 600;
  }
`