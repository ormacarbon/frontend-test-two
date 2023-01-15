import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 90vh;
  position: relative;
`;

export const Container = styled.div`
  width: 90%;
  position: absolute;
  bottom: 0;
  a {
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid;
    padding: 15px;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.primaryColor};
      transform: scale(1.1);
      img {
        width: 280px;
      }
    }

    :active {
      transform: rotate(1deg);
    }

    img {
      width: 300px;
      margin-right: 16px;
    }

  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec.rec-arrow {
    color: orange;
    background-color: ${({ theme }) => theme.tertiaryColor};
    border-radius: 10px;
    color: ${({ theme }) => theme.secondaryColor};
  }

  .rec.rec-arrow:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
    color: #fff;
  }
  .rec {
    cursor: grabbing;
  }

  .rec-carousel-item {
    border-radius: 50%;
  }

`;
