import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 12vw;
  border-radius: 0.8rem;
  justify-content: center;
  background-color: #4cb5c3;
  box-shadow: 10px 5px 5px #999999;
  margin: 0.6vw;

  @media (max-width: 1150px) {
    width: 46vw;
    height: 30vh;
  }

  @media (max-width: 500px) {
    width: 70vw;
  }
`;

export const TextEpisode = styled.p`
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  font-style: italic;
`;

export const NameEp = styled.p`
  font-size: 24px;
  padding-right: 0.8vw;
  padding-left: 0.8vw;
  font-weight: 900;
  text-align: center;
`;
