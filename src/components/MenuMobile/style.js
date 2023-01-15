import styled from "styled-components";
import { devices } from "../../styles/Responsive";

export const ContainerMenuMobile = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  @media ${devices.laptop} {
    display: flex;
  }
`;
export const Burger = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 10px;
  background: white;
  box-shadow: rgb(136 165 191 / 48%) 6px 2px 16px 0px,
    rgb(255 255 255 / 80%) -6px -2px 16px 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  transition: all 0.5s ease;
  margin: 1em;

  &:hover {
    background: rgb(56 56 56);
  }
  &:hover .strip div {
    background: white;
  }
  .strip div {
    height: 3px;
    border-radius: 2px;
    background: rgb(56 56 56);
    margin: 10px;
    transition: all 0.55s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: 40px;
  }

  .burger-strip div {
    transition: all 0.65s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover .burger-strip div:first-child {
    transform: translateY(13px) rotate(0deg);
  }
  &:hover .burger-strip div:nth-child(2) {
    opacity: 0;
  }
  &:hover .burger-strip div:last-child {
    transform: translateY(-13px) rotate(90deg);
  }
  &:hover .burger-strip {
    transform: scale(0.7) rotate(45deg);
    transition: all 0.25s ease 0.05s;
  }
`;
