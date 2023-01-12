import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DetailStyled = styled.div`
  padding: 16px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin: 50px;
  align-items: center;
  color: #ffffff;
  animation: ${fadeIn} 1.5s ease-in-out;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
    margin: 0 0 5px 0;
    text-transform: capitalize;
    letter-spacing: 0.03rem;
  }
  h2 {
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: left;
    margin: 5px 0;
    letter-spacing: 0.05rem;
  }
  p {
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
    margin: 0;
    letter-spacing: 0.05rem;
    color: black;
  }

  .container-details {
    width: 500px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: grey;
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
  }

  .container-base-stats {
    display: flex;
    flex-direction: column;
    padding: 16px;
    width: 500px;
    height: 405px;
    background: grey;
    border-radius: 8px;
    .title-base-stats {
      margin-bottom: 20px;
      margin-left: 15px;
    }
  }
  .container-stats {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    
  }
  .stat {
    display: flex;
    align-items: center;
    border-top: 1px solid lightgrey;
    .stat-name {
      display: flex;
      justify-content: end;
      font-weight: 900;
      padding: 5px 0;
      flex-grow: 2;
      text-transform: capitalize;
      p{
        color: #ffffff;
      }
      .number-stat {
        flex-grow: 0;
        padding: 0 20px;
        font-weight: 500;
      }
    }
    .container-bar {
      display: flex;
      justify-content: start;
      width: 200px;
    }
  }
  hr {
    border: 1px solid lightgrey;
    width: 100%;
  }
  .stat-total {
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 155px;
    
    p {
      margin-left: 10px;
      font-weight: 700;
      color: #ffffff;
      font-size: 1.05rem;
    }
  }

  .container-moves {
      display: flex;
      flex-direction: column;
      min-width: 292px;
      height: 440px;
      background: grey;
      border-radius: 8px;
      h2 {
        padding: 15px;
        margin-left: 15px;
        align-self: flex-start;
        font-style: normal;
        line-height: 30px;
      }
    }
    .container-move-types {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding-left: 30px;
      p {
        width: auto;
        color: #5d5d5d;
        background: #ececec;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        border-radius: 8px;
        padding: 15px;
      }
    }
`;

export const CardColor = styled.div`
  background-color: ${(props) => props.color};
  padding: 16px;
  width: 500px;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  .img-pokemon {
    width: 270px;
    height: 270px;
    align-self: center;
    justify-self: center;
    animation: ${fadeIn} 1.5s ease-in-out;
    z-index: 2;
  }
  .img-pokedex {
    z-index: 0;
    width: 345px;
    position: absolute;
    bottom: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ContainerBar = styled.div`
  background-color: ${(props) => props.color};
  height: 10px;
  border-radius: 8px;
  ${(props) => `
    width: ${props.size}%;
  `}
`;
