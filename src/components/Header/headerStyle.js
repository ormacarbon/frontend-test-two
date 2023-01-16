import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #97ce4c;
  width: 100vw;
  padding: 2.8vh;
`;

export const DivButtonsNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

export const ButtonHeader = styled.button`
  height: 4vh;
  width: 6vw;
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
    width: 20vw;
  }

  @media (max-width: 500px) {
    width: 20vw;
  }
`;
