import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.div`
  font-size: 2rem;
  letter-spacing: 1px;
  cursor: pointer;

  @media (max-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 5rem;
  cursor: pointer;

  li {
    list-style-type: none;

    button {
      border: none;
      font-size: 1rem;
      color: ${props => props.theme.navlinksFontColor};
      transition: 0.2s ease-in;

      &:hover {
        color: ${props => props.theme.navlinksFontColorHover};
      }
    }
  }

  @media (max-width: 992px) {
    gap: 2rem;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const NavEndSection = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ThemeButton = styled.button`
  font-size: 1rem;
  color: ${props => props.theme.navlinksFontColor};
  padding: 1rem 2rem;
  border: 2px solid ${props => props.theme.navlinksFontColor};
  border-radius: 1rem;
  transition: 0.2s ease-in;

  &:hover {
    color: ${props => props.theme.navlinksFontColorHover};
    border: 2px solid ${props => props.theme.navlinksFontColorHover};
  }

  p {
    display: flex;
    gap: 5px;
  }

  @media (max-width: 992px) {
    padding: 0.5rem 0.8rem;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const MobileToggleButton = styled.button`
  display: none;


  @media (max-width: 576px) {
    border: none;
    display: flex;
    align-items: center;
    font-size: 2rem;
  }
`;
