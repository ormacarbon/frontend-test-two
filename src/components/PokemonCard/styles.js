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
  width: 280px;
  height: 380px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-in-out;
  p {
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: left;
    margin: 5px 0;
    letter-spacing: 0.05rem;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin: 0 0 5px 0;
    text-transform: capitalize;
    letter-spacing: 0.03rem;
  }
  a{
    text-decoration: none;
  }

  .container-details {
    width: 280px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.backgroundLevel3};
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    .container-tipo {
      width: 150px;
      display: flex;
      img {
        max-width: 100px;
        height: 24px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px dashed #ffffff;
        margin-right: 8px;
        animation: ${fadeIn} 2s ease-in-out;
      }
    }
    hr {
      width: 100%;
    }
    .container-buttons-pokemon {
      display: flex;
      justify-content: space-between;
      width: 100%;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 38px;
        background-color: #f9f9f9;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        color: #2f2f2f;
        font-weight: 700;
        transition: box-shadow 0.2s ease;
      }
      .button-details{
        text-decoration: none;
      }
      button:hover {
        background-color: #caffcc;
      }
      button:active {
        background-color: #00b306;
      }
      .button-remove:hover {
        background-color: #ff6f6f;
      }
      .button-remove:active {
        background-color: #ff0000;
      }
    }
  }
`;

export const CardColor = styled.div`
  background-color: ${(props) => props.color};
  padding: 16px;
  width: 280px;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  position: relative;
  .img-pokemon {
    width: 193px;
    height: 193px;
    align-self: center;
    justify-self: center;
    animation: ${fadeIn} 1.5s ease-in-out;
    z-index: 2;
  }
  .img-pokedex {
    z-index: 0;
    width: 270px;
    position: absolute;
    bottom: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`
