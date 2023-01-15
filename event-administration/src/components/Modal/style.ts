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

  border-radius: 5px 5px 0 0;

  background-color: var(--grey-200);

  display: flex;
  align-items: center;
  justify-content: space-between;

  > form {
    display: flex;
    flex-direction: column;
    > label {
    }
  }
`;
