import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  width: 40vw;
  height: 20vw;
  gap: 1vw;
  border-radius: 0.8rem;
  align-items: center;
  justify-content: center;
  background-color: #4cb5c3;
  padding-right: 1vw;

  @media (max-width: 1150px) {
    height: 38vh;
    width: 46vw;
  }

  @media (max-width: 500px) {
    height: 50vw;
    width: 80vw;
  }
`;

export const ImgCh = styled.img`
  width: 18vw;
  border-radius: 50%;

  @media (max-width: 500px) {
    width: 24vw;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameCh = styled.p`
  color: #000;
  width: 20vw;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 1150px) {
    width: 20vw;
    font-size: 24px;
  }

  @media (max-width: 500px) {
    width: 50vw;
    font-size: 20px;
  }
`;

export const ButtonDetails = styled.div`
  background: none;
  cursor: pointer;
  text-decoration: underline;
`;
