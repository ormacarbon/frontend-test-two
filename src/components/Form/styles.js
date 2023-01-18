import styled from "styled-components";

export const BoxInput = styled.div`
  position: relative;
  height: 2.5rem;

  display: flex;
  justify-content: center;

  input {
    width: 18rem;
    height: 100%;
    border: 0;
    border-bottom: 2px solid silver;
    background-color: transparent;

    &:focus ~ label,
    &:valid ~ label {
      transform: translateY(-24px);

      font-size: 0.75rem;
      color: #4158d0;
    }

    &:focus ~ div {
      transform: scaleX(1);
    }
  }
`;

export const Label = styled.label`
  position: absolute;
  bottom: 10px;
  left: 0;

  font-size: 14px;
  color: grey;

  transition: 0.3s;
`;

export const Line = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 2px;

  background-color: #4158d0;
  transform: scaleX(0);
`;

export const InputContainer = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 2.875rem;
  border: 0;
  border-radius: 8px;

  transition: 0.3s;

  &:hover {
    background: #f7f7f7;
  }
`;
