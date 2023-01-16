import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  width: 90%;
  position: absolute;
  bottom: -125px;

  a {
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.tertiaryColor};
    min-width: 250px;
    min-height: 230px;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.secondaryColor};
      color: #fff;
    }

    :active {
      transform: rotate(1deg);
    }

    img {
      width: 150px;
    }

    p{
      margin-top: 16px;
    }
  }

  .rec {
    cursor: grabbing;
  }

  .rec.rec-arrow {
    background-color: #fff;
    color: ${({ theme }) => theme.secondaryColor};
    border-radius: 10px;

    &:disabled {
      visibility: hidden;
    }

    &:hover{
      background-color: ${({ theme }) => theme.secondaryColor};
      color: #fff;
    }
  }

  .rec-carousel-item {
    margin-right: 32px;
  }

  @media screen and (min-width: 1300px) {
    a {
      img {
        width: 300px;
      }
    }

    .rec-carousel-item {
      margin-right: 0px;
  }
}

`;
