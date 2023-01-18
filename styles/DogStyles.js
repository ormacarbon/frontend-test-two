import styled from "styled-components";
import px2vw from "../services/px2vw";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  height: 100vw;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(30)};
  height: auto;
  margin-top: 2px;
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const ContainerCarousel = styled.div`
  width: 100%;
  height: 30vw;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 50px;
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200)};
  align-items: center;
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background: ${({ theme }) => theme.body};
  height: auto;

  @media (min-width: 768px) {
    width: ${px2vw(320, 320)};
    min-height: ${px2vw(200)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(320, 320)};
    min-height: ${px2vw(200)};
  }
`;

export const BoxTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  text-align: center;
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(10)};
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;