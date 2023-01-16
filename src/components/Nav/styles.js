import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media (max-width: 700px) {
    width: 500px;
    margin-left: 100px;
  }
  @media (max-width: 500px) {
    width: 500px;
    margin-left: 100px;
  }
  @media (max-width: 425px) {
    width: 425px;
    margin-left: 130px;
  }
`;

export const ToggleLight = styled.div`
  position: absolute;
  left: 30px;
  top: 150px;
`;

export const ButtonLight = styled.button`
  cursor: pointer;
  border-radius: 50%;
  background-color: gray;
`;

export const DivNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DivCount = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  box-shadow: 5px 5px 5px gray;
`;
export const ButtonPrevPage = styled.div`
  height: 30px;
  width: 90px;
  border: 1px solid black;
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: gray;
  color: #fafafa;
  box-shadow: 5px 5px 5px gray;
`;
export const ButtonNextPage = styled.div`
  height: 30px;
  width: 90px;
  border: 1px solid black;
  border-radius: 0 5px 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: gray;
  color: #fafafa;
  box-shadow: 5px 5px 5px gray;
`;

export const InputModified = styled.input`
  width: 250px;
  height: 25px;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 5px 5px 5px gray;
`;

export const HOneModified = styled.h1`
  font-family: "Poppins", sans-serif;
  text-align: center;
  word-break: normal;
  @media (max-width: 1100px) {
    width: 300px;
    font-size: medium;
  }
  @media (max-width: 700px) {
    width: 300px;
    font-size: small;
    /* margin-left: 150px; */
  }
  @media (max-width: 425px) {
    width: 200px;
    font-size: small;
  }
`;
