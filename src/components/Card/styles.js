import styled from "styled-components";

export const PageCard = styled.div`
  height: 350px;
  width: 340px;
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: #fff;
  color: #363537;
  align-items: center;
  overflow: hidden;
  border: 1px solid black;
  box-shadow: 10px 5px 5px gray;
  cursor: pointer;
`;
export const Flipper = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
  position: relative;
  transition: transform 1s;
`;

export const ImgCard = styled.img`
  width: 340px;
  height: 350px;
  border-radius: 12px 12px;
`;
export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  text-align: center;
`;

export const H2Modified = styled.h2`
  color: black;
`;

export const ButtonDetails = styled.button`
  height: 30px;
  width: 90px;
  position: absolute;
  left: 70px;
  top: 200px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #363537;
  color: #fafafa;
  :hover {
    :active {
      background: lightgray;
      color: gray;
    }
  }
`;

export const PDescription = styled.p`
  font-size: 11px;
`