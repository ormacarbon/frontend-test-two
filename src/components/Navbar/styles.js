import styled from "styled-components";

export const StyledNavbar = styled.header`
  background-color: #ffffff;
  height: 10rem;
  display: flex;
  position: relative;
  align-items: center;
  a,
  button {
    cursor: pointer;
  }
  button {
    transition: box-shadow 0.2s ease;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .button-pokedex {
    background-color: #33a4f5;
    border-radius: 8px;
    border: none;
    width: 17.938rem;
    height: 4.625rem;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.5rem;
    position: absolute;
    top: 50%;
    left: 87%;
    transform: translate(-50%, -50%);
  }
  .button-pokedex:hover {
    background-color: #5bb5f6;
  }
  .button-pokedex:active {
    background-color: #028df0;
  }
  .button-homepage {
    background-color: transparent;
    border: none;
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: underline;
    margin-left: 60px;
  }
  
`