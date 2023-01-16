import styled from "styled-components";

const ContainerStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  background-color: #cad2d2;
  border-radius: 0.8rem;
  height: 3vw;
  padding: 0 1vw 0 1vw;
  color: black;

  @media (max-width: 850px) {
    padding: 1.4vw 2vw 1.4vw 2vw;
  }

  @media (max-width: 400px) {
    padding: 1.2vw 2vw 1.2vw 2vw;
  }
`;

const IconStatusAlive = styled.div`
  background-color: #7bb662;
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;

const IconStatusDead = styled.div`
  background-color: #e03c32;
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;

const IconStatusUnknown = styled.div`
  background-color: #ffd301;
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;

export function status(status) {
  switch (status) {
    case "Alive":
      return (
        <ContainerStatus>
          <p>Alive</p>
          <IconStatusAlive> </IconStatusAlive>
        </ContainerStatus>
      );
    case "Dead":
      return (
        <ContainerStatus>
          <p>Dead</p>
          <IconStatusDead> </IconStatusDead>
        </ContainerStatus>
      );
    default:
      return (
        <ContainerStatus>
          <p>Unknown</p>
          <IconStatusUnknown> </IconStatusUnknown>
        </ContainerStatus>
      );
  }
}
