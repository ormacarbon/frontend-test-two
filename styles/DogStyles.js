import styled from "styled-components";
import px2vw from "../services/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const ContainerCenter = styled.div`
  width: 100%;
  height: 90vw;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (min-width: 930px) {
    height: 70vw;
  }
  @media (min-width: 1050px) {
    height: 55vw;
  }
  @media (min-width: 1330px) {
    height: 45vw;
  }
  @media (min-width: 1744px) {
    height: 40vw;
  }
  @media (min-width: 2000px) {
    height: 35vw;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background: ${({ theme }) => theme.body};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 320)};
    min-height: ${px2vw(200)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(320, 320)};
    min-height: ${px2vw(200)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  text-align: center;
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;