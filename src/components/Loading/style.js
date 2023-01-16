import styled, { keyframes } from "styled-components";

const rotateLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
`;
export const ContainerLoading = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  margin-top: 80px;
  color: #551a8b;
  .icon {
    font-size: 3rem;
    animation: ${rotateLoading} 2s infinite linear;
  }
`;
