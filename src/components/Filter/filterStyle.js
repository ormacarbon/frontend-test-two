import styled from "styled-components";

export const ContainerFilter = styled.div`
  display: flex;
  width: 100vw;
  background-color: #97ce4c;
  justify-content: flex-start;
  gap: 0.8vw;
  padding: 2vh;
  margin-left: 2vw;
  margin-bottom: 4vh;
`;

export const InputSearch = styled.input`
  height: 3vh;
  width: 10vw;
  border-radius: 0.4rem;
  border: none;
  margin-right: 0.4vh;

  @media (max-width: 1150px) {
    width: 26vw;
  }

  @media (max-width: 500px) {
    width: 34vw;
  }
`;

export const ButtonSearch = styled.button`
  height: 3vh;
  width: 4vw;
  cursor: pointer;
  background-color: white;
  border-radius: 0.4rem;
  border: none;
  &:hover {
    background-color: #eaf5db;
  }
  &:active {
    background-color: #78a43c;
  }

  @media (max-width: 1150px) {
    width: 14vw;
  }

  @media (max-width: 500px) {
    width: 14vw;
  }
`;
