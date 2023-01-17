import { default as a } from "next/link";

import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
`;

export const Box = styled.div`
  width: 100%;
  height: auto;
  max-width: 700px;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Card = styled.div`
  width: 250px;
  height: 350px;
  margin-top: 50px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  :hover {
    > div {
      display: flex;
      -webkit-backdrop-filter: blur(2px);
      backdrop-filter: blur(2px);
    }
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 100%;
  left: 0;
  background-color: white;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(216, 216, 216, 0.1);
`;

export const Link = styled(a)`
  width: 45px;
  height: 35px;
  border-radius: 5px;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: rgba(108, 108, 255, 1);
  color: white;
  :hover {
    background-color: gray;
  }
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  background-color: rgba(108, 108, 255, 1);
  color: white;
  :hover {
    background-color: gray;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  width: 150px;
  padding: 15px 0px;
  margin-inline: auto;
  align-items: center;
  justify-content: space-around;
`;
