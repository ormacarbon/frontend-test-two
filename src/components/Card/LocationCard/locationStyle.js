import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 26vw;
  height: 20vw;
  border-radius: 0.8rem;
  justify-content: center;
  background-color: #4cb5c3;
  box-shadow: 10px 5px 5px #999999;
  margin: 0.6vw;

  @media (max-width: 1150px) {
    width: 44vw;
    height: 30vw;
  }

  @media (max-width: 500px) {
    width: 70vw;
    height: 30vh;
  }
`;

export const TextLocation = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding-left: 2vw;
  font-weight: 900;
  font-style: italic;
`;

export const NameLo = styled.p`
  font-size: 30px;
  padding-right: 0.8vw;
  padding-left: 0.8vw;
  font-weight: 900;
  text-align: center;

  @media (max-width: 1150px) {
    width: 40vw;
    font-size: 20px;
  }

  @media (max-width: 500px) {
    width: 70vw;
  }
`;