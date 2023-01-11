import styled from "styled-components";


export const CartButtonContainer = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 6;
  border: none;
  background-color: ${({theme}) => theme.colors.gray800};
  color: ${({theme}) => theme.colors.gray100};
  

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  };
`
  
