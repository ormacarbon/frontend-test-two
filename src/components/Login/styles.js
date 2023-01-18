import styled from "styled-components";

export const FormPageContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const FormContainer = styled.form`
  min-height: 60vh;
  width: 22rem;
  padding: 2rem;
  border-radius: 0.3rem;
  border: 2px solid #aaa;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 0.625rem;
`;

export const InputField = styled.input`
  outline: none;
  border: none;
  background: transparent;
`;

export const InputError = styled.button``;

export const Button = styled.button`
  width: 10rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  color: #fff;

  margin: 0.25rem;
  background-color: #f4511e;
  border-radius: 4px;
  border: none;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
`;

export const FormFooter = styled.div`
  width: 100%;
  height: 1.875rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
