import styled from "styled-components";


export const HomeContainer = styled.main`
  display: flex;
  width: 100%;
  max-width: calc(100vw - ((100vw - 1180px) / 2));
  margin-left: auto;
  min-height: 656;
`

export const SliderContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0 auto;
  embla__slide {
    min-width: 43.5rem;
  }
`

export const Product = styled.div`
  background: linear-gradient(180deg, #1EA483 0%, #7465D4 100%);
  border-radius: 8;
  cursor:   pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 656;
  &:hover {
  footer {
    transform: translateY(0%);
    opacity: 1;
    }
  };

  img {
    object-fit: cover;
  };

  footer {
    position: absolute;
    bottom: 0.25rem;
    left: 0.25rem;
    right: 0.25rem;
    padding: 2rem;
    border-radius: 6;
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
      gap: 4;
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
  };
`
