import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 10;
  top: -0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(18, 18, 20, 0.5);
`;

export const ChoiceEvent = styled.div`
  width: 280px;
  height: 200px;
  border-radius: 10px;
  background-color: var(--grey-200);
  font-family: var(--roboto);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > form {
    display: flex;
    flex-direction: column;
    select {
      margin: 50px 0;
    }
  }
`;
