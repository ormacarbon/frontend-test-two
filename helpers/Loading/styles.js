import styled from "styled-components";

export const LoadingTemplate = styled.div`
  position: absolute;
  right: calc(50% - 60px);
  left: calc(50% - 60px);
  & > span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.title};
    margin: 4px;
    animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
  }
  & > span:nth-child(1) {
    animation-delay: 0.1s;
  }
  & > span:nth-child(2) {
    animation-delay: 0.2s;
  }
  & > span:nth-child(3) {
    animation-delay: 0.3s;
  }
  & > span:nth-child(4) {
    animation-delay: 0.4s;
  }
  @keyframes dots {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(0, 30px, 0);
    }
  }
`;
