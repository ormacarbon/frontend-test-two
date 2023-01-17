import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  display: flex;
  background: ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.white[100]};
  margin-top: 1rem;

  img {
    max-width: 200px;
    margin-right: .5rem;

    @media (max-width: 540px) {
      max-width: 150px;
    }
  }

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 540px) {
    padding-right: .5rem;
  }
`

export const MovieInfo = styled.section`
  p {
    margin: 1rem 0;

    > span {
      font-weight: 600;
    }
  }
`