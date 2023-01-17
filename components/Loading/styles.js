import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Loader = styled.span`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 0.20rem solid ${props => props.theme.isDark ? props.theme.lightBlack : props.theme.gray};
    border-top-color: ${props => props.theme.primary};
    animation: ${rotate} 0.8s infinite linear;
`


