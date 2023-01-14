//? Styled
import styled, { keyframes } from "styled-components";


// ANIMATIONS
export const Entrance = keyframes`
    0% {
        -webkit-transform: scale(0);
                transform: scale(0);
        opacity: 1;
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
        opacity: 1;
    }
  

`;

export const Pulse = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
`;


// COMPONENTS
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${Entrance} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;


  a {
    font-weight: bold;
    margin-top: 2em;
    color: ${(props) => props.theme.colors.textColor};
    transition: all .2s ease-in;

    &:hover {
        color: #00ff00;
    }
  }
`;
export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;

  img {
    animation: ${Pulse} 4s ease 0s infinite normal forwards;
  }

  @media (max-width: 560px) {
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  max-width: 75%;
  line-height: 2em;

  p {
    text-align: center;
    font-size: 1.2em;

    span {
      font-weight: bold;
      color: #00ff00;
    }
  }

  @media (max-width: 1100px) {
    max-width: 100%;
  }

  @media (max-width: 300px) {
    font-size: 0.8em;
  }
`;
