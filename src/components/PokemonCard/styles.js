import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const PokemonCardStyled = styled.div`
  padding: 16px;
  width: 310px;
  height: 180px;
  background-color: grey;
  border-radius: 12px;
  display: flex;
  position: relative;
  margin: 33px;
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-in-out;
  .container-details{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 5px;
    
  }
  p {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    margin: 5px 0;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
  }
  .name {
    text-transform: capitalize;
  }
  .container.tipo {
    width: 100px;
    img {
      max-width: 100px;
      height: 32px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px dashed #ffffff;
      margin-right: 8px;
      animation: ${fadeIn} 2s ease-in-out;
    }
  }
  .details {
    color: #ffffff;
    cursor: pointer;
    text-decoration: underline;
  }
  .img-pokemon {
    width: 193px;
    height: 193px;
    position: absolute;
    top: 0px;
    right: -35px;
    z-index: 2;
    animation: ${fadeIn} 1.5s ease-in-out;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 146px;
    height: 38px;
    background-color: #ffffff;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    z-index: 2;
    color: #000000;
    transition: box-shadow 0.2s ease;
  }
  button:hover {
    background-color: #caffcc;
  }
  button:active {
    background-color: #00b306;
  }
  
`;