import styled from "styled-components";

export const ContainerCards = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 20px;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  &:hover {
    background-color: rgba(59,130,246,.5);
  }
`