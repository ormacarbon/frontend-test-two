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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.primaryColor};
    border: 1px solid ${({ theme }) => theme.tertiaryColor};
    min-width: 250px;
    min-height: 230px;

    &:hover{
      background-color: ${({ theme }) => theme.secondaryColor};
      -webkit-box-shadow: 0px 0px 41px 8px rgba(145,145,145,1);
      -moz-box-shadow: 0px 0px 41px 8px rgba(145,145,145,1);
      box-shadow: 0px 0px 41px 8px rgba(145,145,145,1);
    }

    img {
      width: 150px;
    }

    p{
      margin-top: 16px;
    }
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
    cursor: grabbing;
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

  @media (max-width: 1000px) {
    bottom: -180px;
  }

  @media (max-width: 768px) {
    bottom: -150px;

    a {
      min-height: 150px;
      min-width: 130px;

      img {
        width: 100px;
      }

      p {
        font-size: 10px;
      }
    }

    .rec-carousel-item {
      margin-right: 48px;
    }

    .rec.rec-pagination {
      max-width: 50%;
    }

  }

  @media (max-width: 350px) {
    bottom: -150px;

    a {
      min-height: 135px;
      min-width: 110px;
    }

  }
`;
