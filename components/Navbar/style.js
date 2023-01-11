//? Styled
import styled from "styled-components";

// NAVBAR
export const TopNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
  padding: 1em;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.12);
`;

// LOGO DIV
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  color: #eee;
  border-left: 2px solid #99e763;
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
    color: #f6f6f6;
    font-weight: bold;
    position: relative;

    &::before {
      content: " ";
      position: absolute;
      bottom: -4px;
      left: 0px;
      width: 0px;
      height: 3px;
      background-color: #99e763;
      transition: all 1s ease;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;
