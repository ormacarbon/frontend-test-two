//? Styled
import styled from "styled-components";

// NAVBAR
export const TopNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1em;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.12);
`;

// LOGO DIV
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  color: ${(props) => props.theme.colors.textColor};
  border-left: 2px solid #121212;
  border-bottom: 2px solid #121212;
  border-radius: 4px;
`;

// LIST UL
export const List = styled.ul`
  display: flex;
  list-style-type: none;
`;

// LIST ITEM LI
export const ListItem = styled.li`
  padding: 10px;

  > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor};
    font-weight: bold;
    position: relative;

    &::before {
      content: " ";
      position: absolute;
      bottom: -4px;
      left: 0px;
      width: 0px;
      height: 3px;
      background-color: #ff0000;
      transition: all 1s ease;
    }

    &:hover::before {
      background-color: #00ff00;
      width: 100%;
    }
  }
`;
