import styled from "styled-components";

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6vw;
  width: 72vw;
  padding-bottom: 4vh;
`;

export const ContainerPageNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonChangePages = styled.button`
  height: 4vh;
  width: 6vw;
  cursor: pointer;
  opacity: 0.7;
  background-color: #ececec;
  border-radius: 0.4rem;
  border: none;
  &:hover {
    background-color: #5ba4fc;
    opacity: 0.8;
  }
  &:active {
    background-color: #5897ee;
  }

  @media (max-width: 1150px) {
    width: 14vw;
  }

  @media (max-width: 500px) {
    width: 18vw;
  }
`;

export const ButtonPages = styled.button`
  margin: 0.2vw;
  background-color: white;
  border: 1px solid #363537;
  border-radius: 0.2rem;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    background-color: #5ba4fc;
    opacity: 0.8;
  }
  &:active {
    background-color: #5897ee;
  }
`;
