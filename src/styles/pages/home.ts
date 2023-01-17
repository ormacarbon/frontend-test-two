import styled from 'styled-components';

export const Main = styled.main`
  padding: 1rem 0;

  max-width: 1280px;
  margin: 0 auto;

  > div:nth-child(1) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 1024px) {
      justify-content: space-between;
    }

    @media (max-width: 540px) {
      justify-content: space-around;
      padding: 0 1rem;
    }
  }

  flex-direction: column;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 540px) {
    gap: 1rem;
  }
`

export const Spiner = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid ${({theme}) => theme.colors.pink[400]};
  border-top: 3px solid ${({theme}) => theme.colors.white[100]};
  animation: spiner 2s linear infinite;
  margin: 0 auto;

  @keyframes spiner {
    from {
      transform: rotate(0deg);
    } to {
      transform: rotate(360deg);
    }
  }
`