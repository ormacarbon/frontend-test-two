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
  letter-spacing: 1px;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 5rem;
  cursor: pointer;

  li {
    list-style-type: none;
    color: ${props => props.theme.navlinksFontColor};
    transition: 0.2s ease-in;

    &:hover {
      color: ${props => props.theme.navlinksFontColorHover};
    }
  }
`;

export const ThemeButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
`;
