import styled, { keyframes } from "styled-components";


const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(-200px + 100%) 0;
  }
`

export const MovieSkeletonContainer = styled.div`
  width: 300px;
  height: 656px;
  display: grid;
  grid-template-columns: 1fr 32px;
  gap: 24px;
  div {
    display: grid;
    grid-template-columns: 330px 100px;
    justify-content: space-between;
  }
`

export const SkeletonItem = styled.div`
  background-color: ${({theme}) => theme.colors.gray800};
  background-image: linear-gradient(90deg, ${({theme}) => theme.colors.gray800}, ${({theme}) => theme.colors.gray700}, ${({theme}) => theme.colors.gray800});
  background-size: 200px 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  animation: ${skeletonAnimation} 1300ms ease-in-out infinite;
`