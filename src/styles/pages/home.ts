import styled from 'styled-components';

export const Main = styled.main`
  padding: 1rem 0;

  max-width: 1280px;
  margin: 0 auto;

  > div:nth-child(1) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 540px) {
      justify-content: space-around;
      padding: 0 1rem;
    }
  }

  flex-direction: column;

  @media (max-width: 540px) {
    gap: 1rem;
  }
`
