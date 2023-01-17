import styled from "styled-components";

export const MenuButton = styled.button`
  background: none;
  width: 40px;
  height: 40px;
  margin-right: 30px;
  border: none;
  pointer-events: auto;
  cursor: pointer;
`;

export const Menu = styled.nav`
  position: absolute;
  top: 84px;
  width: 100%;
  height: auto;
  background: rgba(11, 20, 28, 0.89);
  z-index: 3;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 744px) {
    top: 125px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 19px;
  color: #f0f0f0;
  text-transform: uppercase;
  text-align: center;
  margin-top: 20px !important;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -animation-delay: 0ms;
  -animation-duration: 1000ms;
  pointer-events: all;

  &:first-child {
    margin-top: 40px !important;
  }
  &:last-child {
    margin-bottom: 40px;
  }

  @media (min-width: 1015px) {
    margin-top: 0px !important;
    &:first-child {
      margin-top: 0px !important;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  width: 50px;
  height: 50px;
  border: none;
  pointer-events: auto;
  cursor: pointer;
  margin-top: 30px !important;

  @media (min-width: 1015px) {
    margin: 0px !important;
  }

  @media (min-width: 744px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
    margin: 0px;
  }
`;
