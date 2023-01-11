import styled from "styled-components";


export const ProductContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 4rem;
  max-width: 1100;
  margin: 0 auto;
`

export const ImageContainer = styled.div`
width: 100%;
height: 656;
max-width: 576;
border-radius: 8;
padding: 0.25rem;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(180deg, #1EA483 0, #7465D4 100%);

 img{
  -f: center;
 }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font-size: ${({theme}) => theme.fontSize["2xl"]};
    color: ${({theme}) => theme.colors.gray300};
  };

  span{
    margin-top: 1rem;
    display: block;
    font-size: ${({theme}) => theme.fontSize["2xl"]};
    color: ${({theme}) => theme.colors.green300};
  };

  p{
    margin-top: 2.5rem;
    font-size: ${({theme}) => theme.fontSize.md};
    line-height: 1.6;
    color: ${({theme}) => theme.colors.gray300};
  };

  button {
    margin-top: auto;
    background-color: ${({theme}) => theme.colors.green500};
    border: 0;
    color: ${({theme}) => theme.colors.white};
    border-radius: 8;
    padding: 1.25rem;
    cursor: pointer;
    font-weight: bold;
    font-size: ${({theme}) => theme.fontSize.md};

    &:not(:disabled):hover{
      background-color: ${({theme}) => theme.colors.green300};
    };

    &:disabled{
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`