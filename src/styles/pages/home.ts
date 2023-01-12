import styled from "styled-components";


export const HomeContainer = styled.main`
  width: 85%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px){
    grid-template-columns: 1fr;
  }
`

export const Product = styled.div`
  background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
  border-radius: 8px;
  cursor:   pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &:hover {
  footer {
    transform: translateY(0%);
    opacity: 1;
    }
  };

  @media (max-width: 992px){
    
    img{
      width: 300px;
    }
  }

  img {
    object-fit: contain;
  };

  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    padding: 2rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content:  space-between;
    background-color: rgba(0, 0, 0, 0.6);
    transform: translateY(110%);
    opacity: 0;
    transition: all 0.2a ease-in-out;

    div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    };

    strong {
      font-size: ${({theme}) => theme.fontSize.lg};
      color: ${({theme}) => theme.colors.gray100};
    };

    span {
      font-size: ${({theme}) => theme.fontSize.xl};
      font-weight: bold;
      color: ${({theme}) => theme.colors.green300};
    };

    @media (max-width: 992px){
      min-height: 100px;
      padding: 1rem;
      strong{
        font-size: 1rem;
      }
    }
  };
`
