import styled from "styled-components";
import { bitter } from "../../public/fonts/fonts";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: 80%;
  border: 2px solid #b99047;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  overflow-y: auto;
  justify-content: center;
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const ItemName = styled.h1`
  font-family: "Bitter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 29px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const ItemCategory = styled.div`
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 900;
  font-size: 0.75em;
  text-transform: uppercase;
  line-height: 14px;
  text-align: center;
  color: #b99047;
`;

export const ItemInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.75em;
  line-height: 14px;
  text-align: center;
  margin: 10px 0px;
`;

export const ItemDescription = styled.p`
  width: 80%;
  max-height: 250px;
  overflow: auto;
  font-family: ${bitter.style.fontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  line-height: 19px;
  text-align: center;
  box-sizing: border-box;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const ModalButton = styled.button`
  background: none;
  width: 40px;
  height: 40px;
  border: none;
  pointer-events: auto;
  cursor: pointer;
  align-self: flex-end;
  position: fixed;
  top: 30px;
  right: 30px;
`;
