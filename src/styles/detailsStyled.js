import styled from "styled-components";

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8vh;
`;

export const ContainerCardDetails = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #97ce4c;
  border-radius: 2rem;
  height: 40vw;
  width: 70vw;

  @media (max-width: 1150px) {
    width: 90vw;
    height: 80vh;
  }

  @media (max-width: 500px) {
    width: 100vw;
    height: 50vh;
  }
`;

export const ImgDetails = styled.img`
  width: 30vw;
  height: 30vw;
`;

export const NameCh = styled.p`
  font-size: 30px;
  font-weight: 900;
  text-align: center;
`;
