import styled from "styled-components";
import { bitter } from "../../public/fonts/fonts";

export const Menu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-flow: column wrap;
  text-align: center;

  @media (min-width: 744px) {
    flex-flow: row wrap;
    justify-content: center;
    width: 80%;
  }
`;

export const SearchBar = styled.div`
  width: 80%;
  height: 65px;
  border: 2px solid #b99047;
  margin-bottom: 30px;
  position: relative;
`;

export const MenuItem = styled.li`
  height: 65px;
  width: 60%;
  margin: 15px 30px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #b99047;
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 19px;
  cursor: pointer;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -animation-delay: 0ms;
  -animation-duration: 1000ms;
  pointer-events: all;

  &:hover {
    border: 2px solid #d3ac5c;
  }

  @media (min-width: 744px) {
    width: 40%;
    flex-flow: row wrap;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  margin: 50px 0px;
  gap: 10px;
`;

export const MenuButton = styled.button`
  height: 65px;
  width: 80%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid #b99047;
  background: transparent;
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 700;
  font-size: 1em;
  line-height: 19px;
  cursor: pointer;

  &:hover {
    border: 2px solid #d3ac5c;
  }
`;
