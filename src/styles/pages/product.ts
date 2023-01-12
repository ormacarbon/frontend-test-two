import styled from "styled-components";


export const ProductContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 992px){
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`

export const ImageContainer = styled.div`
width: 100%;
height: 656px;
max-width: 576px;
border-radius: 8px;
padding: 0.25rem;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(180deg, #1EA483 0, #7465D4 100%);

 img{
  object-fit: center;
 }

 @media (max-width: 992px){
    max-width: 100%;
    height: fit-content;
    img{
      width: fit-content;
      height: 300px;
    }
 }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font-size: ${({theme}) => theme.fontSize["2xl"]};
    color: ${({theme}) => theme.colors['secondary-100']};
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
    color: ${({theme}) => theme.colors['secondary-100']};
  };

  button {
    margin-top: auto;
    background-color: ${({theme}) => theme.colors.green500};
    border: 0;
    color: ${({theme}) => theme.colors.white};
    border-radius: 8px;
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

    @media (max-width: 992px){
      margin-top: 1rem;
    }
  }
`